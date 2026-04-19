import { z } from "zod";

export const ToolSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  category: z.string(),
  desc: z.string(),
  description: z.string(),
  longDesc: z.string(),
  affiliateLink: z.string().url({ message: "Must be a valid URL" }),
  features: z.array(z.string()),
  usageGuide: z.string().optional(),
  isEditorChoice: z.boolean().optional(),
});

export const ToolsArraySchema = z.array(ToolSchema);
