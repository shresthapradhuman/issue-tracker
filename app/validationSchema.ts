import { z } from "zod";

export const createIssueSchema = z.object({
  title: z.string().min(3, "Title is required field.").max(255),
  description: z.string().min(3, "Description is required field.").max(255),
});
