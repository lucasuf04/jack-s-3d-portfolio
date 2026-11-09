import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import avatarHead from "@/assets/avatar-head.png";
import iconMoon from "@/assets/icon-moon.png";
import iconCube from "@/assets/icon-cube.png";
import iconSmiley from "@/assets/icon-smiley.png";
import iconCursor from "@/assets/icon-cursor.png";
import showcaseReel from "@/assets/showcase-reel.jpg";
import showcaseMotion from "@/assets/showcase-motion.jpg";
import showcaseSaas from "@/assets/showcase-saas.jpg";
import showcaseYoutube from "@/assets/showcase-youtube.jpg";
import projectTimeline from "@/assets/project-timeline.jpg";
import projectMotion from "@/assets/project-motion.jpg";
import projectReel from "@/assets/project-reel.jpg";
import projectPodcast from "@/assets/project-podcast.jpg";
import projectSneaker from "@/assets/project-sneaker.jpg";
import projectLens from "@/assets/project-lens.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lucas — Editor de Vídeo e Motion Designer" },
      {
        name: "description",
        content:
          "Portfólio de edição de vídeo e motion design: vídeos para redes sociais, YouTube, Remotion, comerciais e demonstrações de apps e SaaS.",
      },
      { property: "og:title", content: "Lucas — Editor de Vídeo e Motion Designer" },
      {
        property: "og:description",
        content:
          "Vídeos dinâmicos, modernos e visualmente impactantes para Instagram, YouTube, marcas e SaaS.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Sobre", href: "#about" },
  { label: "Serviços", href: "#services" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

const SHOWCASE = [
  { src: showcaseReel, alt: "Vídeo vertical para Reels" },
  { src: showcaseMotion, alt: "Motion design com formas 3D" },
  { src: showcaseSaas, alt: "Vídeo de demonstração de app" },
  { src: showcaseYoutube, alt: "Vídeo para YouTube" },
];

const ABOUT_TEXT =
  "Sou editor de vídeo e motion designer, atuando há aproximadamente 3 anos na criação de conteúdos audiovisuais. Meu trabalho é focado em vídeos para mídias sociais, como Instagram, YouTube e outras plataformas digitais, além do desenvolvimento de motions profissionais e vídeos com o intuito de demonstrar funções de apps e SaaS. Busco transformar ideias em conteúdos dinâmicos, modernos e visualmente impactantes, combinando edição estratégica, animações, efeitos e técnicas de motion design para criar vídeos que prendam a atenção e transmitam mensagens com qualidade.";

const TOOLS_TEXT =
  "Trabalho com ferramentas como Adobe Premiere Pro, After Effects e Remotion, explorando também novas tecnologias e soluções com inteligência artificial para desenvolver projetos criativos, personalizados e de alto nível.";

const TOOLS = ["Premiere Pro", "After Effects", "Remotion", "Inteligência Artificial"];

const SERVICES = [
  {
    title: "Edição de Vídeos para Redes Sociais",
    text: "Edição dinâmica e estratégica para Instagram Reels, YouTube Shorts, TikTok e outras plataformas. Cortes precisos, legendas animadas, efeitos visuais e ritmo pensado para manter a audiência engajada.",
  },
  {
    title: "Motion Design Profissional",
    text: "Criação de animações modernas e profissionais, com elementos gráficos, transições, tipografia animada e efeitos visuais que dão mais personalidade e impacto aos vídeos.",
  },
  {
    title: "Vídeos com Remotion",
    text: "Desenvolvimento de vídeos personalizados utilizando código e animações avançadas. Uma abordagem que permite criar composições modernas, movimentos fluidos e experiências visuais diferenciadas.",
  },
  {
    title: "Edição para YouTube",
    text: "Produção e edição de vídeos de formato mais longo, com narrativa visual, efeitos, sound design, animações e recursos que tornam o conteúdo mais envolvente e profissional.",
  },
  {
    title: "Vídeos Promocionais e Comerciais",
    text: "Criação de vídeos para marcas, empresas e produtos, destacando diferenciais, transmitindo valor e apresentando informações de maneira criativa e visualmente atrativa.",
  },
  {
    title: "Edição de Conteúdo em Escala",
    text: "Edição de vídeos mais simples e objetivos para marcas e criadores que precisam de um grande volume de publicações. Processos ágeis, cortes, legendas, ajustes e padronização visual para manter a frequência de postagens nas redes sociais.",
  },
];

const PROJECTS = [
  { kind: "Cliente", name: "Vídeo de lançamento de SaaS", images: [projectTimeline, projectMotion] },
  { kind: "Pessoal", name: "Série de Reels e cortes de podcast", images: [projectReel, projectPodcast] },
  { kind: "Cliente", name: "Comercial de produto", images: [projectSneaker, projectLens] },
];

function ContactButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="#contact"
      className={`btn-cta inline-flex items-center justify-center rounded-full px-8 py-3 text-xs font-semibold uppercase tracking-[0.15em] transition-transform hover:scale-105 sm:text-sm ${className}`}
    >
      CONTATE-ME
    </a>
  );
}

/** Smoothly eases the head toward the cursor position (no React re-renders per frame). */
function useCursorFollow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frame = 0;

    const onMove = (e: PointerEvent) => {
      target.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const onLeave = () => {
      target.x = 0;
      target.y = 0;
    };

    const tick = () => {
      const ease = 0.06;
      current.x += (target.x - current.x) * ease;
      current.y += (target.y - current.y) * ease;
      const el = ref.current;
      if (el) {
        const { x, y } = current;
        el.style.transform = `perspective(1000px) translate3d(${x * 28}px, ${y * 18}px, 0) rotateY(${x * 18}deg) rotateX(${-y * 12}deg) rotateZ(${x * 3}deg)`;
      }
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    frame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return ref;
}

function Hero() {
  const headRef = useCursorFollow();

  return (
    <section className="relative flex flex-col overflow-hidden px-4 pt-6 sm:min-h-svh sm:px-10">
      <nav className="relative z-20 flex items-center justify-between text-xs font-semibold uppercase tracking-wider sm:text-base md:px-12">
        {NAV.map((n) => (
          <a key={n.label} href={n.href} className="transition-opacity hover:opacity-70">
            {n.label}
          </a>
        ))}
      </nav>

      <h1 className="font-display-black text-chrome relative z-0 mt-6 text-center text-[15.5vw] whitespace-nowrap sm:mt-4">
        Olá, sou Lucas
      </h1>

      <div className="pointer-events-none relative z-10 -mt-[7vw] flex justify-center sm:absolute sm:inset-x-0 sm:top-[8vw] sm:mt-0">
        <div ref={headRef} className="will-change-transform [transform-style:preserve-3d]">
          <img
            src={avatarHead}
            alt="Avatar 3D do Lucas"
            width={766}
            height={900}
            className="animate-rise-in w-[72vw] max-w-[520px] drop-shadow-[0_30px_40px_oklch(0_0_0/0.6)] sm:w-[36vw]"
          />
        </div>
      </div>

      <div className="relative z-20 mt-6 flex flex-col items-start justify-between gap-6 pb-8 sm:mt-auto sm:flex-row sm:items-end">
        <p className="max-w-[20rem] text-sm uppercase leading-snug sm:text-base">
          Editor de vídeo e motion designer criando conteúdos que prendem a atenção
        </p>
        <ContactButton />
      </div>
    </section>
  );
}

function Showcase() {
  const row = [...SHOWCASE, ...SHOWCASE];
  return (
    <section aria-label="Trabalhos em destaque" className="space-y-4 overflow-hidden py-10">
      {["animate-marquee-left", "animate-marquee-right"].map((anim, r) => (
        <div key={anim} className={`flex w-max gap-4 ${anim}`}>
          {(r ? [...row].reverse() : row).map((item, i) => (
            <img
              key={i}
              src={item.src}
              alt={item.alt}
              loading="lazy"
              width={755}
              height={459}
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

  const words = ABOUT_TEXT.split(" ");
  const lit = Math.round(progress * words.length);

  return (
    <section id="about" className="relative overflow-hidden px-6 py-24 sm:py-36">
      <img src={iconMoon} alt="" loading="lazy" width={816} height={816} className="animate-float absolute left-[4%] top-12 w-24 sm:w-44" />
      <img src={iconCube} alt="" loading="lazy" width={816} height={816} className="animate-float absolute right-[4%] top-12 w-24 [animation-delay:-2s] sm:w-48" />
      <img src={iconSmiley} alt="" loading="lazy" width={816} height={816} className="animate-float absolute bottom-10 left-[8%] w-20 [--r:-12deg] [animation-delay:-3s] sm:w-40" />
      <img src={iconCursor} alt="" loading="lazy" width={816} height={816} className="animate-float absolute bottom-10 right-[8%] w-20 [animation-delay:-1s] sm:w-36" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="font-display-black text-chrome text-[15vw] whitespace-nowrap sm:text-[9rem]">Sobre mim</h2>
        <p ref={ref} className="mt-12 max-w-2xl text-lg font-semibold leading-relaxed sm:text-2xl" aria-label={ABOUT_TEXT}>
          {words.map((w, i) => (
            <span
              key={i}
              aria-hidden="true"
              className={`transition-colors duration-300 ${i < lit ? "text-foreground" : "text-muted"}`}
            >
              {w}{" "}
            </span>
          ))}
        </p>
        <p className="mt-10 max-w-xl text-base text-muted-foreground sm:text-lg">{TOOLS_TEXT}</p>
        <ul className="mt-6 flex flex-wrap justify-center gap-3">
          {TOOLS.map((t) => (
            <li
              key={t}
              className="rounded-full border border-outline px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] sm:text-sm"
            >
              {t}
            </li>
          ))}
        </ul>
        <ContactButton className="mt-14" />
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative z-10 rounded-[2.5rem] bg-surface px-6 py-20 text-surface-foreground sm:rounded-[3.5rem] sm:py-28">
      <h2 className="font-display-black text-center text-[16vw] sm:text-[9rem]">Serviços</h2>
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
      <h2 className="font-display-black text-chrome text-center text-[16vw] sm:text-[9rem]">Projetos</h2>
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
                Ver projeto
              </a>
            </header>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-[2fr_3fr] sm:gap-6">
              <img src={p.images[0]} alt={`${p.name} — prévia`} loading="lazy" width={502} height={372} className="h-44 w-full rounded-[2rem] object-cover sm:h-72" />
              <img src={p.images[1]} alt={`${p.name} — detalhe`} loading="lazy" width={502} height={372} className="h-44 w-full rounded-[2rem] object-cover sm:h-72" />
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
      <h2 className="font-display-black text-chrome text-[14vw] sm:text-[8rem]">Vamos conversar</h2>
      <p className="mt-8 max-w-md text-lg text-muted-foreground">
        Tem um projeto em mente? Me chame e vamos transformar sua ideia em um vídeo que prende a atenção.
      </p>
      <a href="mailto:hello@jack.studio" className="btn-cta mt-10 rounded-full px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] transition-transform hover:scale-105">
        CONTATO
      </a>
      <p className="mt-16 text-xs uppercase tracking-widest text-muted-foreground">{"\n"}</p>
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
