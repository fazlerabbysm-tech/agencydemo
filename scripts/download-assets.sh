#!/bin/bash
# Download all images and video locally to /public/ for reliable same-origin serving

IMG_DIR="/home/z/my-project/public/images"
VID_DIR="/home/z/my-project/public/videos"
mkdir -p "$IMG_DIR" "$VID_DIR"

echo "=== Downloading hero video ==="
# Hero showreel video
curl -sL -o "$VID_DIR/showreel.mp4" "https://assets.mixkit.co/videos/4791/4791-1080.mp4" --max-time 60
echo "  showreel.mp4: $(du -h "$VID_DIR/showreel.mp4" 2>/dev/null | cut -f1)"

echo ""
echo "=== Downloading homepage images ==="

# WhatWeDo studio image
curl -sL -o "$IMG_DIR/studio-work.jpg" "https://picsum.photos/seed/cuttingedger-studio-work/1200/1500" --max-time 20
echo "  studio-work.jpg: $(du -h "$IMG_DIR/studio-work.jpg" 2>/dev/null | cut -f1)"

# Services cards (4)
for slug in ecommerce color cgi whitelabel; do
  curl -sL -o "$IMG_DIR/svc-$slug.jpg" "https://picsum.photos/seed/cuttingedger-svc-$slug/900/1125" --max-time 20
  echo "  svc-$slug.jpg: $(du -h "$IMG_DIR/svc-$slug.jpg" 2>/dev/null | cut -f1)"
done

# Work showcase cards (4)
for slug in ecommerce color cgi whitelabel; do
  curl -sL -o "$IMG_DIR/work-$slug.jpg" "https://picsum.photos/seed/cuttingedger-work-$slug/1200/1440" --max-time 20
  echo "  work-$slug.jpg: $(du -h "$IMG_DIR/work-$slug.jpg" 2>/dev/null | cut -f1)"
done

echo ""
echo "=== Downloading service detail modal images (4 services) ==="

# For each service: problem, 4 subservices, process, deliverables, 3 work, case study = 11 images
declare -A SERVICES
SERVICES[ecommerce]="E-commerce"
SERVICES[color]="Color"
SERVICES[cgi]="CGI"
SERVICES[whitelabel]="WhiteLabel"

for slug in ecommerce color cgi whitelabel; do
  echo "  --- $slug ---"
  # Problem image
  curl -sL -o "$IMG_DIR/detail-$slug-problem.jpg" "https://picsum.photos/seed/svc-detail-$slug-problem/1344x768" --max-time 20
  # Process image
  curl -sL -o "$IMG_DIR/detail-$slug-process.jpg" "https://picsum.photos/seed/svc-$slug-process/1344x768" --max-time 20
  # Deliverables image
  curl -sL -o "$IMG_DIR/detail-$slug-deliverables.jpg" "https://picsum.photos/seed/svc-$slug-deliverables/1344x768" --max-time 20
  # Case study image
  curl -sL -o "$IMG_DIR/detail-$slug-casestudy.jpg" "https://picsum.photos/seed/svc-$slug-casestudy/1344x768" --max-time 20
  # 4 subservice images
  case $slug in
    ecommerce)
      subs=(photo copy arch pim) ;;
    color)
      subs=(audit system calibration guide) ;;
    cgi)
      subs=(virtual product mocap finish) ;;
    whitelabel)
      subs=(design dev motion am) ;;
  esac
  for sub in "${subs[@]}"; do
    curl -sL -o "$IMG_DIR/detail-$slug-sub-$sub.jpg" "https://picsum.photos/seed/svc-$slug-$sub/864x1152" --max-time 20
  done
  # 3 work images
  for i in 1 2 3; do
    curl -sL -o "$IMG_DIR/detail-$slug-work-$i.jpg" "https://picsum.photos/seed/work-$slug-$i/864x1152" --max-time 20
  done
  echo "    done (11 images)"
done

echo ""
echo "=== Summary ==="
echo "Images: $(ls "$IMG_DIR"/*.jpg 2>/dev/null | wc -l) files"
echo "Videos: $(ls "$VID_DIR"/*.mp4 2>/dev/null | wc -l) files"
echo "Total size: $(du -sh "$IMG_DIR" "$VID_DIR" 2>/dev/null | tail -2)"
