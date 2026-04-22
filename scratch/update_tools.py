import os
import re

domains = {
    "adcreative-ai": "adcreative.ai",
    "beautiful-ai": "beautiful.ai",
    "brandmark": "brandmark.io",
    "canva-ai": "canva.com",
    "claude-ai": "anthropic.com",
    "copy-ai": "copy.ai",
    "descript": "descript.com",
    "eleven-labs": "elevenlabs.io",
    "fireflies-ai": "fireflies.ai",
    "gamma-app": "gamma.app",
    "grammarly": "grammarly.com",
    "heygen": "heygen.com",
    "invideo-ai": "invideo.io",
    "jasper-ai": "jasper.ai",
    "leonardo-ai": "leonardo.ai",
    "looka": "looka.com",
    "lumen5": "lumen5.com",
    "midjourney": "midjourney.com",
    "murf-ai": "murf.ai",
    "notion-ai": "notion.so",
    "otter-ai": "otter.ai",
    "perplexity": "perplexity.ai",
    "pictory": "pictory.ai",
    "quillbot": "quillbot.com",
    "research-rabbit": "researchrabbitapp.com",
    "runway": "runwayml.com",
    "speechify": "speechify.com",
    "surfer-seo": "surferseo.com",
    "synthesia": "synthesia.io",
    "writesonic": "writesonic.com"
}

path = r"d:\my-money-site\content\tools"
for filename in os.listdir(path):
    if filename.endswith(".md"):
        slug = filename.replace(".md", "")
        domain = domains.get(slug)
        if domain:
            logo_url = f"https://logo.clearbit.com/{domain}"
            filepath = os.path.join(path, filename)
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
            
            # Check if logoUrl already exists
            if "logoUrl:" not in content:
                # Insert logoUrl before the final ---
                new_content = re.sub(r"---", f"logoUrl: \"{logo_url}\"\n---", content, count=1, flags=re.MULTILINE)
                # Wait, the above regex might hit the first ---. Let's find the frontmatter.
                parts = content.split("---")
                if len(parts) >= 3:
                    parts[1] += f"logoUrl: \"{logo_url}\"\n"
                    new_content = "---" + parts[1] + "---" + "---".join(parts[2:])
                    with open(filepath, "w", encoding="utf-8") as f:
                        f.write(new_content)
        
        # Also merge categories while we are at it
        filepath = os.path.join(path, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        
        content = content.replace("category: \"Video AI\"", "category: \"Video\"")
        content = content.replace("category: Video AI", "category: Video")
        content = content.replace("category: \"Voice AI\"", "category: \"Audio\"")
        content = content.replace("category: Voice AI", "category: Audio")
        
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)

print("Done updating logos and categories.")
