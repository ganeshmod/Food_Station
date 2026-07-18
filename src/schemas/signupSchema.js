import { z } from "zod";

export const signUpSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters"),

  email: z
    .email("Please enter a valid email"),

  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit phone number"),

  adharNumber: z
    .string()
    .regex(/^\d{12}$/, "Aadhaar number must contain exactly 12 digits"),

  dateOfBirth: z.date({
    required_error: "Date of Birth is required",
  }),

  Role: z
    .string()
    .min(1, "Please select a role"),

  image: z.any(),
});