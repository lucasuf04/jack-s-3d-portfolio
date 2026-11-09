import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type MouseEvent } from "react";

import jackHead from "@/assets/jack-head.png";
import iconMoon from "@/assets/icon-moon.png";
import iconCube from "@/assets/icon-cube.png";
import iconSmiley from "@/assets/icon-smiley.png";
import iconCursor from "@/assets/icon-cursor.png";
import showcaseTravel from "@/assets/showcase-travel.jpg";
import showcaseCode from "@/assets/showcase-code.jpg";
import showcaseBrand from "@/assets/showcase-brand.jpg";
import showcaseFintech from "@/assets/showcase-fintech.jpg";
import projectGarden from "@/assets/project-garden.jpg";
import projectForest from "@/assets/project-forest.jpg";
import projectLavender from "@/assets/project-lavender.jpg";
import projectViolet from "@/assets/project-violet.jpg";
import projectGolden from "@/assets/project-golden.jpg";
import projectDunes from "@/assets/project-dunes.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hi, I'm Jack — 3D Creator Portfolio" },
      {
        name: "description",
        content:
          "Jack is a 3D creator offering 3D modeling, rendering, motion design, branding and web design.",
      },
      { property: "og:title", content: "Hi, I'm Jack — 3D Creator Portfolio" },
      {
        property: "og:description",
        content:
          "3D modeling, rendering, motion design, branding and web design by Jack.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "About", href: "#about" },
  { label: "Price", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SHOWCASE = [showcaseTravel, showcaseCode, showcaseBrand, showcaseFintech];

const ABOUT_TEXT =
  "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!";

const SERVICES = [
  {
    title: "3D Modeling",
    text: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.",
  },
  {
    title: "Rendering",
    text: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.",
  },
  {
    title: "Motion Design",
    text: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.",
  },
  {
    title: "Branding",
    text: "Crafting cohesive visual identities — from logos to full brand systems — that communicate a clear and memorable presence.",
  },
  {
    title: "Web Design",
    text: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.",
  },
];

const PROJECTS = [
  { kind: "Client", name: "Nextlevel Studio", images: [projectGarden, projectForest] },
  { kind: "Personal", name: "Aura Brand Identity", images: [projectLavender, projectViolet] },
  { kind: "Client", name: "Solaris Digital", images: [projectGolden, projectDunes] },
];

function ContactButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="#contact"
      className={`btn-cta inline-flex items-center justify-center rounded-full px-8 py-3 text-xs font-semibold uppercase tracking-[0.15em] transition-transform hover:scale-105 sm:text-sm ${className}`}
    >
      Contact me
    </a>
  );
}

function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setTilt({
      x: (e.clientX - r.left) / r.width - 0.5,
      y: (e.clientY - r.top) / r.height - 0.5,
    });
  };

  return (
    <section
      className="relative flex flex-col overflow-hidden px-4 pt-6 sm:min-h-svh sm:px-10"
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <nav className="relative z-20 flex items-center justify-between text-xs font-semibold uppercase tracking-wider sm:text-base md:px-12">
        {NAV.map((n) => (
          <a key={n.label} href={n.href} className="transition-opacity hover:opacity-70">
            {n.label}
          </a>
        ))}
      </nav>

      <h1 className="font-display-black text-chrome relative z-0 mt-6 text-center text-[18.5vw] whitespace-nowrap sm:mt-4">
        Hi, I'm Jack
      </h1>

      <div className="pointer-events-none relative z-10 -mt-[7vw] flex justify-center sm:absolute sm:inset-x-0 sm:top-[8vw] sm:mt-0">
        <img
          src={jackHead}
          alt="3D portrait of Jack"
          width={1024}
          height={1024}
          className="animate-rise-in w-[88vw] max-w-[640px] drop-shadow-[0_30px_40px_oklch(0_0_0/0.6)] sm:w-[48vw]"
          style={{
            transform: `perspective(900px) rotateY(${tilt.x * 14}deg) rotateX(${-tilt.y * 10}deg) translate(${tilt.x * 18}px, ${tilt.y * 12}px)`,
            transition: "transform 0.4s ease-out",
          }}
        />
      </div>

      <div className="relative z-20 mt-6 flex flex-col items-start justify-between gap-6 pb-8 sm:mt-auto sm:flex-row sm:items-end">
        <p className="max-w-[18rem] text-sm uppercase leading-snug sm:text-base">
          A 3D creator driven by crafting striking and unforgettable projects
        </p>
        <ContactButton />
      </div>
    </section>
  );
}

function Showcase() {
  const row = [...SHOWCASE, ...SHOWCASE];
  return (
    <section aria-label="Selected work" className="space-y-4 overflow-hidden py-10">
      {["animate-marquee-left", "animate-marquee-right"].map((anim, r) => (
        <div key={anim} className={`flex w-max gap-4 ${anim}`}>
          {(r ? [...row].reverse() : row).map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              loading="lazy"
              width={765}
              height={471}
              className="h-40 w-auto rounded-xl object-cover sm:h-56"
            />
          ))}
        </div>
      ))}
    </section>
  );
}

function About() {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setProgress(1);
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh * 0.85 - r.top) / (vh * 0.5 + r.height);
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const chars = ABOUT_TEXT.split("");
  const lit = Math.round(progress * chars.length);

  return (
    <section id="about" className="relative overflow-hidden px-6 py-24 sm:py-36">
      <img src={iconMoon} alt="" loading="lazy" width={816} height={816} className="animate-float absolute left-[4%] top-12 w-24 sm:w-44" />
      <img src={iconCube} alt="" loading="lazy" width={816} height={816} className="animate-float absolute right-[4%] top-12 w-24 [animation-delay:-2s] sm:w-48" />
      <img src={iconSmiley} alt="" loading="lazy" width={816} height={816} className="animate-float absolute bottom-10 left-[8%] w-20 [--r:-12deg] [animation-delay:-3s] sm:w-40" />
      <img src={iconCursor} alt="" loading="lazy" width={816} height={816} className="animate-float absolute bottom-10 right-[8%] w-20 [animation-delay:-1s] sm:w-36" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="font-display-black text-chrome text-[17vw] sm:text-[9rem]">About me</h2>
        <p ref={ref} className="mt-12 max-w-2xl text-lg font-semibold leading-relaxed sm:text-2xl" aria-label={ABOUT_TEXT}>
          {chars.map((c, i) => (
            <span
              key={i}
              aria-hidden="true"
              className={`transition-colors duration-300 ${i < lit ? "text-foreground" : "text-muted"}`}
            >
              {c}
            </span>
          ))}
        </p>
        <ContactButton className="mt-14" />
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative z-10 rounded-[2.5rem] bg-surface px-6 py-20 text-surface-foreground sm:rounded-[3.5rem] sm:py-28">
      <h2 className="font-display-black text-center text-[18vw] sm:text-[9rem]">Services</h2>
      <ol className="mx-auto mt-16 max-w-5xl">
        {SERVICES.map((s, i) => (
          <li
            key={s.title}
            className="flex items-start gap-6 border-b border-surface-border py-10 last:border-b-0 sm:gap-12"
          >
            <span className="font-display-black w-20 shrink-0 text-6xl sm:w-36 sm:text-8xl">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="pt-1">
              <h3 className="text-xl font-semibold uppercase sm:text-2xl">{s.title}</h3>
              <p className="mt-3 max-w-xl text-base text-surface-muted sm:text-lg">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="-mt-16 bg-background px-4 pb-24 pt-36 sm:px-10">
      <h2 className="font-display-black text-chrome text-center text-[18vw] sm:text-[9rem]">Project</h2>
      <div className="mx-auto mt-16 max-w-6xl space-y-10">
        {PROJECTS.map((p, i) => (
          <article
            key={p.name}
            className="sticky rounded-[2.5rem] border border-outline bg-background p-5 sm:p-10"
            style={{ top: `${5 + i * 1.5}rem` }}
          >
            <header className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4 sm:gap-8">
                <span className="font-display-black text-6xl sm:text-8xl">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-lg font-semibold uppercase sm:text-2xl">{p.kind}</h3>
                  <p className="mt-2 text-base sm:mt-4 sm:text-2xl">{p.name}</p>
                </div>
              </div>
              <a
                href="#contact"
                className="shrink-0 rounded-full border-2 border-outline px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] transition-colors hover:bg-foreground hover:text-background sm:px-10 sm:py-4 sm:text-sm"
              >
                Live project
              </a>
            </header>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-[2fr_3fr] sm:gap-6">
              <img src={p.images[0]} alt={`${p.name} preview`} loading="lazy" width={1024} height={640} className="h-44 w-full rounded-[2rem] object-cover sm:h-72" />
              <img src={p.images[1]} alt={`${p.name} detail`} loading="lazy" width={1536} height={640} className="h-44 w-full rounded-[2rem] object-cover sm:h-72" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="flex flex-col items-center px-6 pb-16 pt-10 text-center">
      <h2 className="font-display-black text-chrome text-[16vw] sm:text-[8rem]">Let's talk</h2>
      <p className="mt-8 max-w-md text-lg text-muted-foreground">
        Have a project in mind? Drop me a line and let's make it unforgettable.
      </p>
      <a href="mailto:hello@jack.studio" className="btn-cta mt-10 rounded-full px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] transition-transform hover:scale-105">
        hello@jack.studio
      </a>
      <p className="mt-16 text-xs uppercase tracking-widest text-muted-foreground">© 2026 Jack — 3D Creator</p>
    </footer>
  );
}

function Index() {
  return (
    <main className="overflow-x-clip">
      <Hero />
      <Showcase />
      <About />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}
