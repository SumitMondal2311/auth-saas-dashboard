-- CreateEnum
CREATE TYPE "OAuthProvider" AS ENUM ('GITHUB', 'GOOGLE');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT true,
    "username" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CliSession" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CliSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WebSession" (
    "id" UUID NOT NULL,
    "refreshTokenId" TEXT NOT NULL,
    "userAgent" TEXT NOT NULL DEFAULT 'unknown',
    "ipAddress" TEXT NOT NULL DEFAULT 'unknown',
    "userId" UUID NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WebSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" UUID NOT NULL,
    "ownerId" UUID NOT NULL,
    "publishableKey" TEXT NOT NULL,
    "secretKey" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AppUser" (
    "id" UUID NOT NULL,
    "applicationId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AppUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AppUserAccount" (
    "id" UUID NOT NULL,
    "applicationId" UUID NOT NULL,
    "username" TEXT,
    "lastName" TEXT,
    "imageUrl" TEXT,
    "firstName" TEXT,
    "userId" UUID NOT NULL,
    "passwordHash" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AppUserAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AppUserEmail" (
    "id" UUID NOT NULL,
    "accountId" UUID NOT NULL,
    "applicationId" UUID NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT true,
    "address" TEXT NOT NULL,
    "isPrimary" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AppUserEmail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AppUserSession" (
    "id" UUID NOT NULL,
    "accountId" UUID NOT NULL,
    "refreshTokenId" TEXT NOT NULL,
    "userAgent" TEXT NOT NULL DEFAULT 'unknown',
    "ipAddress" TEXT NOT NULL DEFAULT 'unknown',
    "applicationId" UUID NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AppUserSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AppUserOAuthAccount" (
    "id" UUID NOT NULL,
    "applicationId" UUID NOT NULL,
    "provider" "OAuthProvider" NOT NULL,
    "emailId" UUID NOT NULL,
    "providerUserId" TEXT NOT NULL,
    "accountId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AppUserOAuthAccount_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_emailAddress_key" ON "User"("emailAddress");

-- CreateIndex
CREATE UNIQUE INDEX "CliSession_tokenHash_key" ON "CliSession"("tokenHash");

-- CreateIndex
CREATE INDEX "CliSession_userId_idx" ON "CliSession"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "WebSession_refreshTokenId_key" ON "WebSession"("refreshTokenId");

-- CreateIndex
CREATE INDEX "WebSession_userId_idx" ON "WebSession"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Application_publishableKey_key" ON "Application"("publishableKey");

-- CreateIndex
CREATE UNIQUE INDEX "Application_secretKey_key" ON "Application"("secretKey");

-- CreateIndex
CREATE INDEX "Application_secretKey_idx" ON "Application"("secretKey");

-- CreateIndex
CREATE INDEX "Application_ownerId_idx" ON "Application"("ownerId");

-- CreateIndex
CREATE INDEX "Application_publishableKey_idx" ON "Application"("publishableKey");

-- CreateIndex
CREATE INDEX "AppUser_applicationId_idx" ON "AppUser"("applicationId");

-- CreateIndex
CREATE INDEX "AppUserAccount_applicationId_userId_idx" ON "AppUserAccount"("applicationId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "AppUserAccount_username_applicationId_key" ON "AppUserAccount"("username", "applicationId");

-- CreateIndex
CREATE INDEX "AppUserEmail_accountId_idx" ON "AppUserEmail"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "AppUserEmail_address_applicationId_key" ON "AppUserEmail"("address", "applicationId");

-- CreateIndex
CREATE UNIQUE INDEX "AppUserSession_refreshTokenId_key" ON "AppUserSession"("refreshTokenId");

-- CreateIndex
CREATE INDEX "AppUserSession_accountId_applicationId_idx" ON "AppUserSession"("accountId", "applicationId");

-- CreateIndex
CREATE INDEX "AppUserOAuthAccount_emailId_applicationId_idx" ON "AppUserOAuthAccount"("emailId", "applicationId");

-- CreateIndex
CREATE UNIQUE INDEX "AppUserOAuthAccount_providerUserId_provider_applicationId_key" ON "AppUserOAuthAccount"("providerUserId", "provider", "applicationId");

-- AddForeignKey
ALTER TABLE "CliSession" ADD CONSTRAINT "CliSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebSession" ADD CONSTRAINT "WebSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppUser" ADD CONSTRAINT "AppUser_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppUserAccount" ADD CONSTRAINT "AppUserAccount_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppUserAccount" ADD CONSTRAINT "AppUserAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "AppUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppUserEmail" ADD CONSTRAINT "AppUserEmail_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "AppUserAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppUserEmail" ADD CONSTRAINT "AppUserEmail_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppUserSession" ADD CONSTRAINT "AppUserSession_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "AppUserAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppUserSession" ADD CONSTRAINT "AppUserSession_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppUserOAuthAccount" ADD CONSTRAINT "AppUserOAuthAccount_emailId_fkey" FOREIGN KEY ("emailId") REFERENCES "AppUserEmail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppUserOAuthAccount" ADD CONSTRAINT "AppUserOAuthAccount_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppUserOAuthAccount" ADD CONSTRAINT "AppUserOAuthAccount_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "AppUserAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;
