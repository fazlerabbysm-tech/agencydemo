"use client";

import { useEffect, useState } from "react";
import ContactModal from "@/components/site/contact-modal";

/**
 * GlobalContactModal — listens for a custom DOM event `open-contact-modal`
 * fired by any "Start a project" CTA (in Navbar, FinalCTA, or elsewhere),
 * and shows the contact modal. The modal is mounted once at the app root,
 * so every page gets it without having to wire state through props.
 *
 * Pages do NOT need to render this themselves — it's added once in the
 * root layout.
 */
export default function GlobalContactModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpen = (e: Event) => {
      e.preventDefault();
      setOpen(true);
    };
    window.addEventListener("open-contact-modal", onOpen as EventListener);
    return () =>
      window.removeEventListener("open-contact-modal", onOpen as EventListener);
  }, []);

  return <ContactModal open={open} onClose={() => setOpen(false)} />;
}
