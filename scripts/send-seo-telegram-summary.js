const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const SCORECARD_PATH = path.join(ROOT, "reports", "seo", "scorecard.md");
const SEO_REPORT_DIR = path.join(ROOT, "reports", "seo");

function readFileIfExists(filePath) {
  if (!fs.existsSync(filePath)) return "";
  return fs.readFileSync(filePath, "utf8");
}

function findLatestRoundReport() {
  if (!fs.existsSync(SEO_REPORT_DIR)) return null;

  const reports = fs
    .readdirSync(SEO_REPORT_DIR)
    .filter((name) => /^\d{4}-\d{2}-\d{2}-.+\.md$/.test(name))
    .sort();

  return reports.length ? path.join(SEO_REPORT_DIR, reports[reports.length - 1]) : null;
}

function extractSection(markdown, heading) {
  const pattern = new RegExp(`## ${heading}\\n+([\\s\\S]*?)(\\n## |$)`);
  const match = markdown.match(pattern);
  return match ? match[1].trim() : "";
}

function extractScore(scorecard) {
  const overall = scorecard.match(/Overall SEO growth score:\s*\*\*(.*?)\*\*/)?.[1] || "Unknown";
  const technical = scorecard.match(/\| Technical SEO \| (.*?) \|/)?.[1] || "Unknown";
  const indexation = scorecard.match(/\| Indexation \| (.*?) \|/)?.[1] || "Unknown";
  const content = scorecard.match(/\| Content Growth \| (.*?) \|/)?.[1] || "Unknown";
  const visibility = scorecard.match(/\| Keyword Visibility \| (.*?) \|/)?.[1] || "Unknown";
  const conversion = scorecard.match(/\| Conversion Signals \| (.*?) \|/)?.[1] || "Unknown";

  return { overall, technical, indexation, content, visibility, conversion };
}

function takeLines(text, maxLines) {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(0, maxLines)
    .join("\n");
}

async function sendTelegramMessage(text) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    throw new Error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID.");
  }

  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true,
    }),
  });

  if (!response.ok) {
    throw new Error(`Telegram API failed: ${response.status} ${await response.text()}`);
  }
}

async function main() {
  const explicitReport = process.argv[2] ? path.resolve(process.argv[2]) : null;
  const latestReport = explicitReport || findLatestRoundReport();
  const scorecard = readFileIfExists(SCORECARD_PATH);
  const report = latestReport ? readFileIfExists(latestReport) : "";
  const score = extractScore(scorecard);

  const summary = extractSection(report, "Summary");
  const actions = extractSection(report, "Actions Completed");
  const content = extractSection(report, "New Content");
  const nextPriorities = extractSection(report, "Next Priorities");

  const message = [
    "EliteMind Tutor SEO Update",
    "",
    `Overall score: ${score.overall}`,
    `Technical SEO: ${score.technical}`,
    `Indexation: ${score.indexation}`,
    `Content Growth: ${score.content}`,
    `Keyword Visibility: ${score.visibility}`,
    `Conversion Signals: ${score.conversion}`,
    "",
    "Summary",
    summary || "- No summary found.",
    "",
    "Completed",
    takeLines(actions, 8) || "- No completed actions found.",
    "",
    "Content",
    takeLines(content, 10) || "- No content section found.",
    "",
    "Next",
    takeLines(nextPriorities, 5) || "- No next priorities found.",
  ].join("\n");

  await sendTelegramMessage(message.slice(0, 3900));
  console.log("SEO Telegram summary sent.");
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
