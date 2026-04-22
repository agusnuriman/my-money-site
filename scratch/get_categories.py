import os
import re

categories = set()
path = r"d:\my-money-site\content\tools"
for filename in os.listdir(path):
    if filename.endswith(".md"):
        with open(os.path.join(path, filename), "r", encoding="utf-8") as f:
            content = f.read()
            match = re.search(r"category:\s*\"(.*?)\"", content)
            if not match:
                match = re.search(r"category:\s*(.*)", content)
            if match:
                categories.add(match.group(1).strip().replace('"', ''))

print(sorted(list(categories)))
