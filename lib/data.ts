import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Tool } from './types';

const toolsDirectory = path.join(process.cwd(), 'content/tools');

export async function getAllTools(): Promise<Tool[]> {
  try {
    const fileNames = fs.readdirSync(toolsDirectory);
    
    const tools = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map((fileName) => {
        const fullPath = path.join(toolsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        const matterResult = matter(fileContents);
        
        return {
          id: matterResult.data.id,
          slug: matterResult.data.slug,
          name: matterResult.data.name,
          category: matterResult.data.category,
          desc: matterResult.data.desc,
          affiliateLink: matterResult.data.affiliateLink,
          features: matterResult.data.features || [],
          isEditorChoice: matterResult.data.isEditorChoice,
          content: matterResult.content,
          logoUrl: matterResult.data.logoUrl,
        } as Tool;
      });
      
    return tools;
  } catch (error) {
    console.error("Error reading markdown files:", error);
    return [];
  }
}

export async function getToolBySlug(slug: string): Promise<Tool | undefined> {
  const tools = await getAllTools();
  return tools.find((t) => t.slug === slug);
}

export async function getCategories(): Promise<string[]> {
  const tools = await getAllTools();
  return Array.from(new Set(tools.map((t) => t.category)));
}
