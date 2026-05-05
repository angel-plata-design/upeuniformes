import os
import shutil
import glob

workspace = r"c:\Users\angel\upe-unifomres-mx"
artifacts = r"C:\Users\angel\.gemini\antigravity\brain\4d95ac40-7cec-4e7c-b5fd-f1901eb46976"

# Mapping logic
img_map = {
    "chaleco": [217, 183],
    "chamarra": [244, 245],
    "filipina": [181, 242, 243, 236, 234],
    "pantalon": [240, 184, 182],
    "lentes": [215, 214, 213, 235]
}

dest_dir = os.path.join(workspace, "img", "catalogo")
os.makedirs(dest_dir, exist_ok=True)

for key, ids in img_map.items():
    # Find the latest generated image for this key
    files = glob.glob(os.path.join(artifacts, f"prod_{key}_*.png"))
    if not files:
        print(f"Missing image for {key}")
        continue
    source = max(files, key=os.path.getctime)
    
    # Copy to all corresponding IDs as JPG
    for i in ids:
        dest = os.path.join(dest_dir, f"prod_{i}.jpg")
        shutil.copy2(source, dest)
        print(f"Copied {key} -> {dest}")

print("Images populated successfully!")
