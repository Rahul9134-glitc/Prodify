import { z } from "zod";

export const taskSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(50, "Title cannot exceed 50 characters"),

  description: z
    .string()
    .max(200, "Description cannot exceed 200 characters")
    .optional(),

  priority: z.enum(["Low", "Medium", "High"], {
    message: "Please select a priority",
  }),

  category: z.enum(["Work", "Study", "Personal"], {
    message: "Please select a category",
  }),

  dueDate: z
    .string()
    .min(1, "Please select a due date"),

  status: z.enum(["Pending", "In Progress", "Completed"], {
    message: "Please select a status",
  }),
});