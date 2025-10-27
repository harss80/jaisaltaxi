import { z } from "zod";

export const insertContactInquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z
    .string()
    .min(6, "Phone number seems too short")
    .max(20, "Phone number seems too long"),
  message: z.string().min(1, "Message is required"),
});

export type InsertContactInquiry = z.infer<typeof insertContactInquirySchema>;
