import { notFound, permanentRedirect } from "next/navigation";
import { getRouteBySlug } from "@/lib/service-routes";

export default async function LegacyServiceRedirectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const canonical = getRouteBySlug(slug);
  if (!canonical) {
    notFound();
  }
  permanentRedirect(canonical.path);
}
