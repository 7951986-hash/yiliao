import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const consultations = sqliteTable("consultations", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  country: text("country").notNull(),
  whatsapp: text("whatsapp"),
  medicalSpecialty: text("medical_specialty").notNull(),
  briefRequest: text("brief_request").notNull(),
  locale: text("locale").notNull(),
  consultationType: text("consultation_type").notNull(),
  landingPage: text("landing_page"),
  referrer: text("referrer"),
  utmSource: text("utm_source"),
  utmMedium: text("utm_medium"),
  utmCampaign: text("utm_campaign"),
  privacyConsentAt: integer("privacy_consent_at", { mode: "timestamp" }).notNull(),
  status: text("status").notNull().default("new"),
  notificationStatus: text("notification_status").notNull().default("pending"),
  ipHash: text("ip_hash"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});
