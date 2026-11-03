"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Maria Chen",
    role: "Creative Director",
    image: "/images/team-1.jpg",
    specialty: "E-commerce",
  },
  {
    name: "James Voss",
    role: "Color Director",
    image: "/images/team-2.jpg",
    specialty: "Color Protocol",
  },
  {
    name: "Daniel Park",
    role: "CGI Director",
    image: "/images/team-3.jpg",
    specialty: "Virtual Production",
  },
  {
    name: "Sarah Lindgren",
    role: "Producer",
    image: "/images/team-4.jpg",
    specialty: "White-Label",
  },
  {
    name: "David Park",
    role: "Lead Photographer",
    image: "/images/team-5.jpg",
    specialty: "Studio",
  },
  {
    name: "Lena Voss",
    role: "Retoucher",
    image: "/images/team-6.jpg",
    specialty: "Post-Production",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="relative bg-black text-white py-16 sm:py-20 md:py-28 border-t border-white/10 overflow-hidden"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-10 md:mb-14">
          <span className="font-mono text-[10px] sm:text-[11px] md:text-xs tracking-[0.25em] uppercase text-white/50">
            ( 06 ) — The Team
          </span>
          <span className="font-mono text-[10px] sm:text-[11px] md:text-xs tracking-[0.25em] uppercase text-white/50 hidden sm:block">
            6 specialists · 1 studio
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold tracking-[-0.02em] leading-[0.92] text-[11vw] sm:text-[9vw] lg:text-[4.5vw] break-words mb-12 md:mb-16"
        >
          The hands
          <br />
          <span className="font-light italic">behind the work.</span>
        </motion.h2>

        {/* Team grid — creative staggered layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-5">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative"
            >
              {/* Image — different aspect ratios for creative staggered feel */}
              <div
                className={`relative overflow-hidden bg-neutral-100 mb-3 ${
                  i % 3 === 0
                    ? "aspect-[4/5]"
                    : i % 3 === 1
                    ? "aspect-[4/5] md:mt-8"
                    : "aspect-[4/5] md:mt-4"
                }`}
              >
                <img
                  src={member.image}
                  alt={`${member.name} — ${member.role}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-110"
                />
                {/* Bottom gradient for text legibility */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Specialty tag — top right */}
                <span className="absolute top-3 right-3 font-mono text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-white/80 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
                  {member.specialty}
                </span>

                {/* Name + role — appears on hover, slides up from bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white">
                  <h3 className="font-display font-bold text-sm sm:text-base md:text-lg tracking-tight leading-none translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {member.name}
                  </h3>
                  <p className="mt-1 font-mono text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-white/70 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {member.role}
                  </p>
                </div>

                {/* Number badge — top left */}
                <span className="absolute top-3 left-3 font-mono text-[9px] tracking-[0.2em] text-white/60">
                  0{i + 1}
                </span>
              </div>

              {/* Below image — name + role (always visible) */}
              <h3 className="font-display font-bold text-sm sm:text-base tracking-tight leading-none md:hidden">
                {member.name}
              </h3>
              <p className="mt-1 font-mono text-[9px] tracking-[0.15em] uppercase text-white/50 md:hidden">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 md:mt-16 text-sm sm:text-base text-white/60 max-w-md"
        >
          Six specialists. No account layer. You work directly with the people
          doing the work — from first call to final delivery.
        </motion.p>
      </div>
    </section>
  );
}
