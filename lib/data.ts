import toolsDataRaw from "@/app/tools.json";
import { Tool } from "./types";

const tools: Tool[] = toolsDataRaw as Tool[];

export async function getAllTools(): Promise<Tool[]> {
  // Simulated async for future-proofing (e.g., switching to a DB/API)
  return tools;
}

export async function getToolBySlug(slug: string): Promise<Tool | undefined> {
  return tools.find((t) => t.slug === slug);
}

export async function getCategories(): Promise<string[]> {
  return Array.from(new Set(tools.map((t) => t.category)));
}
