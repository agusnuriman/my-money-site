export interface Tool {
  id: string;
  slug: string;
  name: string;
  category: string;
  desc: string;
  affiliateLink: string;
  features: string[];
  isEditorChoice?: boolean;
  content: string;
  logoUrl?: string;
}


