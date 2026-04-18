import { getToolBySlug } from "@/lib/data";
import { redirect } from "next/navigation";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const tool = await getToolBySlug(slug);

  if (!tool || !tool.affiliateLink) {
    redirect("/");
  }

  // Security: rel="nofollow noopener noreferrer" logic is handled by the browser 
  // during this 302/307 redirect.
  // This helps prevent leaking the referrer and keeps SEO clean.
  redirect(tool.affiliateLink);
}
