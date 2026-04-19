import toolsDataRaw from "@/app/tools.json";
import { Tool } from "./types";
import { ToolsArraySchema } from "./schemas";

const result = ToolsArraySchema.safeParse(toolsDataRaw);

if (!result.success) {
  console.error("CRITICAL: tools.json validation failed", result.error.issues);
  // Fail fast in development, but be careful in production
  if (process.env.NODE_ENV === "development") {
    throw new Error("Invalid tools.json data structure detected.");
  }
}

const tools: Tool[] = result.success ? result.data : [];

export async function getAllTools(): Promise<Tool[]> {
  return tools;
}

export async function getToolBySlug(slug: string): Promise<Tool | undefined> {
  return tools.find((t) => t.slug === slug);
}

export async function getCategories(): Promise<string[]> {
  return Array.from(new Set(tools.map((t) => t.category)));
}
