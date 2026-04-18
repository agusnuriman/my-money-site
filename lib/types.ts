export interface Tool {
  id: string;
  slug: string;
  name: string;
  category: string;
  desc: string;        // Short description for cards
  description: string; // Alternative description (sometimes redundant in current JSON)
  longDesc: string;    // Full review content
  affiliateLink: string;
  features: string[];
  usageGuide?: string; // Complete guide for maximal usage
  isEditorChoice?: boolean; // Featured badge for high-converting tools
}

export type Category = string; // Can be expanded to a union type if categories are fixed
