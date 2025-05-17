-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Tutor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "bio" TEXT,
    "qualifications" TEXT NOT NULL,
    "subjects" TEXT NOT NULL,
    "experience" INTEGER NOT NULL DEFAULT 0,
    "hourlyRate" REAL NOT NULL,
    "availability" TEXT,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Tutor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "grade" TEXT NOT NULL,
    "curriculum" TEXT NOT NULL,
    "subjects" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Student_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tutorId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "startTime" DATETIME NOT NULL,
    "endTime" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Session_tutorId_fkey" FOREIGN KEY ("tutorId") REFERENCES "Tutor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Session_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TutorRequest" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "requesterName" TEXT NOT NULL DEFAULT '',
    "requesterEmail" TEXT NOT NULL DEFAULT '',
    "requesterPhone" TEXT NOT NULL DEFAULT '',
    "requesterRole" TEXT NOT NULL DEFAULT '',
    "studentName" TEXT NOT NULL DEFAULT '',
    "studentGender" TEXT NOT NULL DEFAULT '',
    "studentSchool" TEXT,
    "studentGrade" TEXT NOT NULL DEFAULT '',
    "subjects" TEXT NOT NULL DEFAULT '[]',
    "curriculum" TEXT NOT NULL,
    "preferredFrequency" TEXT NOT NULL DEFAULT '',
    "preferredDuration" TEXT NOT NULL DEFAULT '',
    "preferredTutorType" TEXT NOT NULL DEFAULT '',
    "address" TEXT NOT NULL DEFAULT '',
    "additionalNotes" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "studentId" TEXT NOT NULL,
    CONSTRAINT "TutorRequest_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Tutor_userId_key" ON "Tutor"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_userId_key" ON "Student"("userId");
