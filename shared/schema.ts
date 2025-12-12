import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Lead submissions table for storing form data
export const leads = pgTable("leads", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name"),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  state: text("state"),
  leaseOrFinance: text("lease_or_finance"),
  misledOrPressured: text("misled_or_pressured"),
  wantsToExit: text("wants_to_exit"),
  systemAge: text("system_age"),
  monthlyPayment: text("monthly_payment"),
  callbackTime: text("callback_time"),
  formType: text("form_type").notNull(), // 'hero' or 'quiz'
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Make optional fields nullable in the insert schema
export const insertLeadSchema = createInsertSchema(leads).omit({
  id: true,
  createdAt: true,
}).extend({
  lastName: z.string().nullable().optional(),
  state: z.string().nullable().optional(),
  wantsToExit: z.string().nullable().optional(),
  systemAge: z.string().nullable().optional(),
  monthlyPayment: z.string().nullable().optional(),
  callbackTime: z.string().nullable().optional(),
});

export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leads.$inferSelect;

// Keep existing user schema for future use
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
