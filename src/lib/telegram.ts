type TelegramConfig = {
  botToken?: string | undefined;
  chatId?: string | undefined;
};

type TutorRequestTelegramData = {
  id?: string | number;
  requesterName?: string;
  requesterEmail?: string;
  requesterPhone?: string;
  requesterRole?: string;
  studentName?: string;
  studentGender?: string;
  studentSchool?: string;
  studentGrade?: string;
  subjects?: string[];
  curriculum?: string;
  preferredFrequency?: string;
  preferredDuration?: string;
  preferredTutorType?: string;
  address?: string;
  additionalNotes?: string;
};

function getTelegramConfig(): TelegramConfig {
  return {
    botToken: process.env.TELEGRAM_BOT_TOKEN,
    chatId: process.env.TELEGRAM_CHAT_ID,
  };
}

function valueOrDash(value?: string | number | null) {
  if (value === undefined || value === null || value === '') {
    return '-';
  }
  return String(value);
}

export function formatTutorRequestTelegramMessage(data: TutorRequestTelegramData) {
  const subjects = data.subjects?.length ? data.subjects.join(', ') : '-';

  return [
    'New tutor request',
    '',
    `Request ID: ${valueOrDash(data.id)}`,
    `Requester: ${valueOrDash(data.requesterName)} (${valueOrDash(data.requesterRole)})`,
    `Email: ${valueOrDash(data.requesterEmail)}`,
    `Phone: ${valueOrDash(data.requesterPhone)}`,
    '',
    `Student: ${valueOrDash(data.studentName)} (${valueOrDash(data.studentGender)})`,
    `School: ${valueOrDash(data.studentSchool)}`,
    `Grade: ${valueOrDash(data.studentGrade)}`,
    `Curriculum: ${valueOrDash(data.curriculum)}`,
    `Subjects: ${subjects}`,
    '',
    `Frequency: ${valueOrDash(data.preferredFrequency)}`,
    `Duration: ${valueOrDash(data.preferredDuration)}`,
    `Tutor type: ${valueOrDash(data.preferredTutorType)}`,
    `Address: ${valueOrDash(data.address)}`,
    '',
    `Notes: ${valueOrDash(data.additionalNotes)}`,
  ].join('\n');
}

export async function sendTelegramMessage(text: string, config = getTelegramConfig()) {
  if (!config.botToken || !config.chatId) {
    console.warn('Telegram notification skipped: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is missing.');
    return { ok: false, skipped: true };
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${config.botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: config.chatId,
        text,
        disable_web_page_preview: true,
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error('Telegram notification failed:', response.status, body);
      return { ok: false, skipped: false };
    }

    return { ok: true, skipped: false };
  } catch (error) {
    console.error('Telegram notification error:', error);
    return { ok: false, skipped: false };
  }
}

export async function notifyTutorRequestSubmitted(data: TutorRequestTelegramData) {
  return sendTelegramMessage(formatTutorRequestTelegramMessage(data));
}
