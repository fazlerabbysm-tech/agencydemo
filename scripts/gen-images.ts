import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUT_DIR = '/home/z/my-project/public/images';
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

interface ImgJob {
  name: string;
  size: string;
  prompt: string;
}

// Use validated sizes: 1344x768 (landscape), 864x1152 (portrait), 1024x1024 (square)
const jobs: ImgJob[] = [
  // ===== HERO SLIDES (4) — landscape 1344x768 =====
  {
    name: 'hero-ecommerce',
    size: '1344x768',
    prompt:
      'E-commerce catalog optimization, premium product photography studio scene with multiple products arranged on clean white pedestals, professional studio lighting, softbox reflections, shopping bags and retail products, modern commercial photography aesthetic, high detail, photorealistic, vibrant but controlled color palette, depth of field',
  },
  {
    name: 'hero-color',
    size: '1344x768',
    prompt:
      'Color standardization protocol, Pantone color swatches and color calibration tools arranged on a dark surface, ICC color profiles visualization, color checker chart, paint chips in organized rows, color management studio, dramatic studio lighting, photorealistic, professional product photography, high detail',
  },
  {
    name: 'hero-cgi',
    size: '1344x768',
    prompt:
      'Virtual production and CGI studio, large LED volume wall showing a photorealistic 3D rendered environment, camera on a robotic arm, green screen setup, motion capture markers, futuristic film production stage, cinematic atmosphere, volumetric lighting, high detail, photorealistic',
  },
  {
    name: 'hero-whitelabel',
    size: '1344x768',
    prompt:
      'White-label agency extension concept, a team of creative professionals working at minimalist workstations in a modern studio, designers and developers collaborating, neutral white and gray tones, natural light from large windows, professional documentary photography, depth of field, high detail',
  },

  // ===== SERVICE CARDS (4) — portrait 864x1152 =====
  {
    name: 'svc-ecommerce',
    size: '864x1152',
    prompt:
      'E-commerce catalog optimization service, overhead flat-lay of retail products being photographed on a white surface, professional camera capturing product shots, organized product grid, studio lighting from above, commercial photography aesthetic, photorealistic, vibrant controlled colors, high detail',
  },
  {
    name: 'svc-color',
    size: '864x1152',
    prompt:
      'Color standardization protocol service, close-up of Pantone color swatch book being held, hand flipping through color chips, color calibration device on a desk, soft studio lighting, professional photography, shallow depth of field, photorealistic, high detail',
  },
  {
    name: 'svc-cgi',
    size: '864x1152',
    prompt:
      'Virtual production and CGI studio service, 3D wireframe model of a product on a computer screen next to the final photorealistic render, CGI workflow visualization, dark studio environment with screen glow, professional tech photography, high detail, photorealistic',
  },
  {
    name: 'svc-whitelabel',
    size: '864x1152',
    prompt:
      'White-label agency extension service, creative team working behind the scenes, designers at dual monitors with brand mockups, neutral minimal studio, professional working environment, natural light, documentary photography style, photorealistic, high detail',
  },

  // ===== WORK SHOWCASE CARDS (4) — portrait 864x1152, photo editing themed =====
  {
    name: 'work-ecommerce',
    size: '864x1152',
    prompt:
      'Photo editing and retouching workflow, professional photo editor working on a dual monitor setup retouching a product photograph, Photoshop interface visible on screen, color grading, digital imaging studio, dark room with screen glow, photorealistic, high detail',
  },
  {
    name: 'work-color',
    size: '864x1152',
    prompt:
      'Color grading and color correction workflow, professional colorist working at a calibrated monitor showing before and after color grade comparison, DaVinci Resolve style interface, dark grading suite, professional cinema post-production, photorealistic, high detail',
  },
  {
    name: 'work-cgi',
    size: '864x1152',
    prompt:
      'CGI and 3D rendering workflow, Unreal Engine style virtual production scene being assembled, 3D environment with realistic lighting and textures, real-time rendering on a large display, dark studio with screen illumination, photorealistic, high detail',
  },
  {
    name: 'work-whitelabel',
    size: '864x1152',
    prompt:
      'Photo editing batch processing, multiple monitors showing product photo retouching pipeline, automated workflow visualization, design system assets arranged on screen, professional digital imaging studio, dark environment, photorealistic, high detail',
  },

  // ===== STUDIO PORTRAIT (1) for What we do section — portrait 864x1152 =====
  {
    name: 'studio-work',
    size: '864x1152',
    prompt:
      'Creative studio interior, modern minimalist design studio with large windows, professional camera equipment, product photography setup, color swatches on the wall, clean white surfaces, natural light, professional architectural photography, photorealistic, high detail',
  },
];

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function generateWithRetry(job: ImgJob, zai: any, maxRetries = 4) {
  const outPath = path.join(OUT_DIR, `${job.name}.png`);
  if (fs.existsSync(outPath)) {
    console.log(`SKIP (exists): ${job.name}.png`);
    return { name: job.name, success: true, cached: true };
  }
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`  Attempt ${attempt}: ${job.name} (${job.size})...`);
      const response = await zai.images.generations.create({
        prompt: job.prompt,
        size: job.size,
      });
      const b64 = response.data[0].base64;
      const buf = Buffer.from(b64, 'base64');
      fs.writeFileSync(outPath, buf);
      console.log(`  ✓ Saved ${job.name}.png (${(buf.length / 1024).toFixed(0)} KB)`);
      return { name: job.name, success: true };
    } catch (err: any) {
      const msg = err.message || '';
      const is429 = msg.includes('429') || msg.includes('Too many requests');
      if (is429 && attempt < maxRetries) {
        const wait = 15000 * attempt; // 15s, 30s, 45s, 60s
        console.log(`  ⏳ Rate limited, waiting ${wait / 1000}s before retry...`);
        await sleep(wait);
        continue;
      }
      throw err;
    }
  }
  throw new Error('Max retries exceeded');
}

async function generateAll() {
  console.log(`Generating ${jobs.length} AI images (with rate-limit handling)...\n`);
  const zai = await ZAI.create();
  const results: { name: string; success: boolean; error?: string }[] = [];

  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    try {
      await generateWithRetry(job, zai);
      results.push({ name: job.name, success: true });
    } catch (err: any) {
      console.error(`  ✗ FAILED ${job.name}: ${err.message}`);
      results.push({ name: job.name, success: false, error: err.message });
    }
    // Delay between different images (skip after last)
    if (i < jobs.length - 1) {
      console.log(`  → pausing 8s before next image...`);
      await sleep(8000);
    }
  }

  console.log('\n=== SUMMARY ===');
  const ok = results.filter((r) => r.success).length;
  console.log(`Success: ${ok}/${results.length}`);
  const failed = results.filter((r) => !r.success);
  if (failed.length) {
    console.log('Failed:');
    failed.forEach((f) => console.log(`  - ${f.name}: ${f.error}`));
  }
}

generateAll().catch((e) => {
  console.error('Fatal:', e);
  process.exit(1);
});
