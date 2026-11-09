import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  Play,
  X,
  ExternalLink,
  Mail,
  Instagram,
  Youtube,
  Linkedin,
  MessageCircle,
  Sparkles,
  ArrowUpRight,
  Check,
  ChevronDown,
  Copy,
  SlidersHorizontal,
} from "lucide-react";

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
import projectChrisThumb1 from "@/assets/project-chris-thumb1.jpg";
import projectChrisThumb2 from "@/assets/project-chris-thumb2.jpg";
import projectMercadoPago from "@/assets/project-mercadopago.jpg";
import projectDiscord from "@/assets/project-discord.jpg";

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

/* ==========================================================================
   CONFIGURAÇÕES PESSOAIS (Edite facilmente com os seus dados reais)
   ========================================================================== */
export const PORTFOLIO_CONFIG = {
  name: "Lucas",
  role: "Editor de Vídeo & Motion Designer",
  // Insira seu WhatsApp no formato internacional: 55 + DDD + Número (ex: 5511999999999)
  whatsappNumber: "5511999999999",
  whatsappDisplay: "+55 (11) 99999-9999",
  email: "contato@lucaseditor.com.br",
  instagramUrl: "https://instagram.com",
  youtubeUrl: "https://youtube.com",
  linkedinUrl: "https://linkedin.com",
  githubUrl: "https://github.com/lucasuf04",
  status: "🟢 Disponível para novos projetos",
};

const NAV = [
  { label: "Sobre", href: "#about" },
  { label: "Serviços", href: "#services" },
  { label: "Projetos", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contact" },
];

const SHOWCASE = [
  {
    src: projectChrisThumb1,
    alt: "Edição de Conteúdo em Escala",
    title: "Edição de Conteúdo em Escala",
    tag: "9:16 Vertical",
    videoUrl: "/videos/chris-conteudo-escala.mp4",
  },
  {
    src: projectMercadoPago,
    alt: "Demonstração de App: Mercado Pago",
    title: "Demo Comercial de App & SaaS (Mercado Pago)",
    tag: "UI/UX & Produto",
    videoUrl: "/videos/mercadopago-demo.mp4",
  },
  {
    src: projectDiscord,
    alt: "Walkthrough de Plataforma: Discord",
    title: "Demonstração de Software & Interface (Discord)",
    tag: "UI & Motion",
    videoUrl: "/videos/discord-demo.mp4",
  },
  {
    src: showcaseMotion,
    alt: "Motion design com formas 3D",
    title: "Motion Design & Animação 3D",
    tag: "Motion Graphics",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  },
];

const ABOUT_TEXT =
  "Sou editor de vídeo e motion designer, atuando há aproximadamente 3 anos na criação de conteúdos audiovisuais. Meu trabalho é focado em vídeos para mídias sociais, como Instagram, YouTube e outras plataformas digitais, além do desenvolvimento de motions profissionais e vídeos com o intuito de demonstrar funções de apps e SaaS. Busco transformar ideias em conteúdos dinâmicos, modernos e visualmente impactantes, combinando edição estratégica, animações, efeitos e técnicas de motion design para criar vídeos que prendam a atenção e transmitam mensagens com qualidade.";

const TOOLS_TEXT =
  "Trabalho com as principais ferramentas do mercado — Adobe Premiere Pro, After Effects e Remotion — para desenvolver projetos criativos, dinâmicos e de alto nível.";

const TOOLS = ["Premiere Pro", "After Effects", "Remotion"];

const SERVICES = [
  {
    title: "Demonstração de Apps & Plataformas SaaS",
    text: "Vídeos modernos focados em demonstrar produtos digitais, aplicativos e plataformas SaaS com máxima clareza. Motion graphics de interface (UI/UX), animação de telas, transições fluidas e destaques visuais de funcionalidades voltados para onboarding e conversão.",
  },
  {
    title: "Edição de Vídeos para Redes Sociais",
    text: "Edição dinâmica e estratégica para Instagram Reels, YouTube Shorts, TikTok e outras plataformas. Cortes precisos, legendas animadas, efeitos visuais e ritmo pensado para manter a audiência engajada.",
  },
  {
    title: "Motion Design Profissional",
    text: "Criação de animações modernas e profissionais, com elementos gráficos, transições, tipografia animada e efeitos visuais que dão mais personalidade e impacto aos vídeos.",
  },
  {
    title: "Vídeos com Remotion & Código",
    text: "Desenvolvimento de vídeos personalizados utilizando código e animações avançadas. Uma abordagem que permite criar composições modernas, movimentos fluidos e experiências visuais diferenciadas.",
  },
  {
    title: "Edição para YouTube & Podcasts",
    text: "Produção e edição de vídeos de formato mais longo, com narrativa visual, efeitos, sound design, animações e recursos que tornam o conteúdo mais envolvente e profissional.",
  },
  {
    title: "Edição de Conteúdo em Escala",
    text: "Edição de vídeos mais simples e objetivos para marcas e criadores que precisam de um grande volume de publicações. Processos ágeis no Premiere Pro, cortes precisos, legendas dinâmicas e padronização visual para manter a frequência de postagens.",
  },
];

export interface ProjectItem {
  id: string;
  kind: string;
  name: string;
  category: "all" | "reels" | "motion" | "youtube" | "commercial";
  aspect: "horizontal" | "vertical";
  description: string;
  tools: string[];
  metric: string;
  images: string[];
  videoUrl?: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "conteudo-escala",
    kind: "Cliente — Produção Contínua",
    name: "Edição de Conteúdo em Escala",
    category: "reels",
    aspect: "vertical",
    description:
      "Edição ágil e estratégica voltada para marcas e criadores que necessitam de alto volume de postagens com consistência visual. Cortes precisos, legendas dinâmicas animadas, ritmo acelerado e retenção pensada para prender a atenção no Instagram Reels, TikTok e Shorts.",
    tools: ["Premiere Pro"],
    metric: "Alta Retenção & Consistência",
    images: [projectChrisThumb1],
    videoUrl: "/videos/chris-conteudo-escala.mp4",
  },
  {
    id: "app-mercadopago",
    kind: "Demonstração de App & SaaS",
    name: "Demonstração de App: Mercado Pago & Rendimento",
    category: "commercial",
    aspect: "horizontal",
    description:
      "Vídeo comercial de alta conversão demonstrando a experiência e benefícios do aplicativo do Mercado Pago. Interface animada com motion graphics dinâmicos (UI/UX), transições de telas e gráficos de rendimento para onboarding e aquisição de usuários.",
    tools: ["Premiere Pro", "After Effects"],
    metric: "UI/UX Motion & Alta Conversão",
    images: [projectMercadoPago],
    videoUrl: "/videos/mercadopago-demo.mp4",
  },
  {
    id: "app-discord",
    kind: "Tech & Software Walkthrough",
    name: "Demonstração de Plataforma: Interface do Discord",
    category: "commercial",
    aspect: "horizontal",
    description:
      "Walkthrough dinâmico de interface de software, explorando navegação entre canais, animações de chat, tipografia e sound design sincronizado para apresentar funcionalidades com clareza e ritmo.",
    tools: ["Premiere Pro", "After Effects"],
    metric: "Walkthrough Fluido de Interface",
    images: [projectDiscord],
    videoUrl: "/videos/discord-demo.mp4",
  },
  {
    id: "reels-series",
    kind: "Criador de Conteúdo",
    name: "Série de Reels e cortes dinâmicos de podcast",
    category: "reels",
    aspect: "vertical",
    description:
      "Cortes estratégicos verticais com gancho forte nos primeiros 3 segundos, legendas dinâmicas animadas palavra por palavra, efeitos sonoros pontuais e b-rolls para maximizar a taxa de retenção da audiência no Instagram e TikTok.",
    tools: ["Premiere Pro", "After Effects"],
    metric: "+2.4M Visualizações Orgânicas",
    images: [projectReel],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  },
  {
    id: "youtube-documentary",
    kind: "Canal do YouTube",
    name: "Edição narrativa e documental para YouTube",
    category: "youtube",
    aspect: "horizontal",
    description:
      "Edição completa de vídeo de 15 minutos com narrativa envolvente, pesquisa de ilustrações visuais, motion graphics explicativos de dados, mapas animados e sound design que guia as emoções do espectador.",
    tools: ["Premiere Pro", "After Effects"],
    metric: "74% Retenção Média",
    images: [showcaseYoutube],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  },
  {
    id: "remotion-motion",
    kind: "Projeto Especial",
    name: "Motion Graphics procedural com Remotion & Código",
    category: "motion",
    aspect: "horizontal",
    description:
      "Animações programáticas geradas via código (React + Remotion). Permite criar composições matemáticas perfeitas, gráficos gerados a partir de dados reais e exportação em altíssima fidelidade a 60fps.",
    tools: ["Remotion", "After Effects"],
    metric: "Render a 60 FPS Perfeito",
    images: [showcaseMotion],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  },
];

const FAQS = [
  {
    question: "Qual é o prazo médio de entrega dos vídeos?",
    answer:
      "Para vídeos curtos (Reels, TikToks e Shorts), o prazo habitual é de 24 a 48 horas úteis por vídeo. Para vídeos longos de YouTube ou animações de motion complexas, o prazo varia entre 3 a 5 dias úteis, dependendo da extensão e do nível de efeitos visuais.",
  },
  {
    question: "Como funciona o processo de alterações e aprovação?",
    answer:
      "A cada entrega, você recebe o vídeo para revisão com direito a até 2 rodadas completas de ajustes sem qualquer custo adicional. As alterações podem ser alinhadas via WhatsApp ou diretamente por marcações em ferramentas de revisão (como Frame.io).",
  },
  {
    question: "Você inclui sound design, legendas dinâmicas e trilha sonora?",
    answer:
      "Sim! Todos os projetos já incluem sound design completo (efeitos sonoros para enfatizar ações), trilhas sonoras profissionais livres de direitos autorais (royalty-free para não dar problema de copyright) e legendas animadas estilizadas para prender a atenção.",
  },
  {
    question: "Como te envio o material bruto para edição?",
    answer:
      "Você pode enviar os arquivos gravados diretamente através de pastas compartilhadas no Google Drive, Dropbox, WeTransfer, OneDrive ou Frame.io. Se tiver dúvidas, te oriento com o método mais simples.",
  },
  {
    question: "Você trabalha com planos mensais ou apenas projetos avulsos?",
    answer:
      "Trabalho com ambos os modelos! Tenho opções para projetos avulsos e também pacotes recorrentes com volume mensal (ex: 8, 12 ou 20 vídeos por mês), garantindo um valor mais acessível por vídeo e prioridade na fila de edição.",
  },
];

function getWhatsAppUrl(customText?: string) {
  const text =
    customText ||
    `Olá Lucas! Acessei seu portfólio profissional e gostaria de conversar sobre um projeto de edição de vídeo.`;
  return `https://wa.me/${PORTFOLIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

function ContactButton({
  className = "",
  label = "FALE COMIGO",
  customText,
}: {
  className?: string;
  label?: string;
  customText?: string;
}) {
  return (
    <a
      href={getWhatsAppUrl(customText)}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-cta inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-xs font-semibold uppercase tracking-[0.15em] transition-transform hover:scale-105 sm:text-sm ${className}`}
    >
      <MessageCircle className="h-4 w-4 shrink-0" />
      <span>{label}</span>
    </a>
  );
}

/** Movimento da cabeça seguindo o cursor estritamente por posição (sem rotação/perspectiva 3D) */
function useCursorFollow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frame = 0;

    const onMove = (e: PointerEvent) => {
      // Normaliza a posição do cursor em relação ao centro da janela (-1 a +1)
      target.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const onLeave = () => {
      // Retorna suavemente para o centro quando o cursor sai da janela
      target.x = 0;
      target.y = 0;
    };

    const tick = () => {
      // Suavização fluida (lerp) para o movimento de translação
      const ease = 0.08;
      current.x += (target.x - current.x) * ease;
      current.y += (target.y - current.y) * ease;

      const element = ref.current;
      if (element) {
        const { x, y } = current;
        // Move APENAS a posição (X e Y), sem qualquer rotação ou perspectiva 3D
        element.style.transform = `translate3d(${x * 45}px, ${y * 30}px, 0)`;
      }
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
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

      <h1 className="font-display-black text-chrome relative z-0 mt-6 text-center text-[12.6vw] whitespace-nowrap sm:mt-4">
        Olá, sou Lucas
      </h1>

      <div className="pointer-events-none relative z-10 -mt-[4vw] flex justify-center sm:absolute sm:inset-x-0 sm:top-[10vw] sm:mt-0">
        <div ref={headRef} className="will-change-transform">
          <img
            src={avatarHead}
            alt="Avatar do Lucas"
            width={766}
            height={900}
            className="animate-rise-in w-[72vw] max-w-[520px] drop-shadow-[0_30px_40px_oklch(0_0_0/0.6)] sm:w-[36vw]"
          />
        </div>
      </div>

      <div className="relative z-20 mt-6 flex flex-col items-start justify-between gap-6 pb-8 sm:mt-auto sm:flex-row sm:items-end">
        <p className="max-w-[20rem] text-sm uppercase leading-snug sm:text-base">
          Editor de vídeo e motion designer criando conteúdos dinâmicos que prendem a atenção e convertem
        </p>
        <ContactButton label="FALE NO WHATSAPP" />
      </div>
    </section>
  );
}

function Showcase({ onSelectProject }: { onSelectProject: (proj: ProjectItem) => void }) {
  const row = [...SHOWCASE, ...SHOWCASE];
  return (
    <section aria-label="Trabalhos em destaque" className="space-y-4 overflow-hidden py-10">
      {["animate-marquee-left", "animate-marquee-right"].map((anim, r) => (
        <div key={anim} className={`flex w-max gap-4 ${anim} hover:[animation-play-state:paused]`}>
          {(r ? [...row].reverse() : row).map((item, i) => (
            <div
              key={i}
              onClick={() => {
                const match = PROJECTS.find((p) => p.name.includes(item.title.split(" ")[0])) || PROJECTS[0];
                onSelectProject(match);
              }}
              className="group relative h-40 w-auto cursor-pointer overflow-hidden rounded-xl border border-outline/20 sm:h-56"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                width={755}
                height={459}
                className="h-full w-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md">
                  <Play className="h-6 w-6 fill-white pl-0.5" />
                </div>
                <span className="mt-2 text-xs font-semibold uppercase tracking-wider text-white">
                  {item.title}
                </span>
                <span className="mt-1 text-[10px] text-muted-foreground uppercase">{item.tag}</span>
              </div>
            </div>
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
        <ContactButton className="mt-14" label="INICIAR UM PROJETO" />
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

function Projects({ onSelectProject }: { onSelectProject: (proj: ProjectItem) => void }) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = [
    { id: "all", label: "Todos" },
    { id: "reels", label: "Reels & Shorts" },
    { id: "commercial", label: "Apps & SaaS" },
    { id: "youtube", label: "YouTube" },
    { id: "motion", label: "Motion & Remotion" },
  ];

  const filteredProjects =
    activeTab === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="-mt-16 bg-background px-4 pb-24 pt-36 sm:px-10">
      <div className="text-center">
        <h2 className="font-display-black text-chrome text-[16vw] sm:text-[9rem]">Projetos</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
          Clique em qualquer projeto para abrir os detalhes, ferramentas utilizadas e assistir à prévia do vídeo.
        </p>

        {/* Filtros de Categoria */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === c.id
                  ? "bg-foreground text-background shadow-md scale-105"
                  : "border border-outline/40 text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl space-y-10">
        {filteredProjects.map((p, i) => (
          <article
            key={p.id}
            className="group sticky rounded-[2.5rem] border border-outline bg-background p-5 transition-all duration-300 hover:border-foreground/40 sm:p-10 shadow-2xl"
            style={{ top: `${5 + (i % 6) * 1.5}rem` }}
          >
            <header className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex items-start gap-4 sm:gap-8">
                <span className="font-display-black text-6xl sm:text-8xl text-muted-foreground/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-surface/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground border border-outline/30">
                      {p.kind}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/20 px-3 py-1 text-[11px] font-semibold text-primary">
                      <Sparkles className="h-3 w-3" />
                      {p.metric}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold uppercase sm:text-3xl text-foreground">
                    {p.name}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base leading-relaxed">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tools.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-outline/20 bg-card px-2.5 py-1 text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onSelectProject(p)}
                className="mt-4 sm:mt-0 inline-flex items-center justify-center gap-2 shrink-0 rounded-full border-2 border-outline px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:bg-foreground hover:text-background sm:px-8 sm:py-4 sm:text-sm cursor-pointer"
              >
                <Play className="h-4 w-4 fill-current" />
                <span>Assistir Vídeo</span>
              </button>
            </header>

            {/* Prévia do Projeto: Respeita a proporção real (Vertical 9:16 ou Widescreen 16:9) */}
            <div
              onClick={() => onSelectProject(p)}
              className="mt-8 flex justify-center cursor-pointer"
            >
              {p.aspect === "vertical" ? (
                <div className="group/thumb relative aspect-[9/16] w-full max-w-[280px] sm:max-w-[340px] overflow-hidden rounded-[2rem] border border-outline/30 bg-black shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                  <img
                    src={p.images[0]}
                    alt={`${p.name} — prévia`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover/thumb:opacity-100">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/30 backdrop-blur-md transition-transform duration-300 group-hover/thumb:scale-110">
                      <Play className="h-8 w-8 fill-white pl-1 text-white" />
                    </div>
                    <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-white">Assistir Vídeo</span>
                  </div>
                </div>
              ) : (
                <div className="group/thumb relative aspect-video w-full overflow-hidden rounded-[2rem] border border-outline/30 bg-black shadow-2xl transition-transform duration-300 hover:scale-[1.01]">
                  <img
                    src={p.images[0]}
                    alt={`${p.name} — prévia`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover/thumb:opacity-100">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/30 backdrop-blur-md transition-transform duration-300 group-hover/thumb:scale-110">
                      <Play className="h-8 w-8 fill-white pl-1 text-white" />
                    </div>
                    <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-white">Assistir Vídeo</span>
                  </div>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="bg-background px-4 py-24 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display-black text-chrome text-center text-[13vw] sm:text-[7rem]">
          Dúvidas
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-sm text-muted-foreground sm:text-base">
          Perguntas comuns sobre prazos, formatos de entrega, revisões e processo de trabalho.
        </p>

        <div className="mt-12 space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-outline/30 bg-card transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-white/[0.02] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold uppercase tracking-wide text-foreground sm:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-foreground" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm leading-relaxed text-muted-foreground sm:text-base border-t border-outline/10">
                    <p className="mt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_CONFIG.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="flex flex-col items-center px-6 pb-16 pt-16 text-center">
      <h2 className="font-display-black text-chrome text-[14vw] sm:text-[8rem]">
        Vamos conversar
      </h2>
      <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-xl leading-relaxed">
        Tem um projeto em mente ou precisa de edição constante para seus canais?
        Me chame e vamos transformar sua visão em vídeos com alto impacto e retenção.
      </p>

      {/* Botões de Ação Direta */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href={getWhatsAppUrl("Olá Lucas! Gostaria de um orçamento para um projeto de edição de vídeo.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta inline-flex items-center justify-center gap-3 rounded-full px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] transition-transform hover:scale-105"
        >
          <MessageCircle className="h-5 w-5" />
          <span>Falar no WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={handleCopyEmail}
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-outline px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] transition-colors hover:bg-foreground hover:text-background cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-emerald-400" />
              <span>Email Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              <span>Copiar Email</span>
            </>
          )}
        </button>
      </div>

      {/* Redes Sociais */}
      <div className="mt-12 flex items-center justify-center gap-6">
        <a
          href={PORTFOLIO_CONFIG.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-outline/30 text-muted-foreground transition-all hover:scale-110 hover:border-foreground hover:text-foreground"
        >
          <Instagram className="h-5 w-5" />
        </a>
        <a
          href={PORTFOLIO_CONFIG.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-outline/30 text-muted-foreground transition-all hover:scale-110 hover:border-foreground hover:text-foreground"
        >
          <Youtube className="h-5 w-5" />
        </a>
        <a
          href={PORTFOLIO_CONFIG.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-outline/30 text-muted-foreground transition-all hover:scale-110 hover:border-foreground hover:text-foreground"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href={PORTFOLIO_CONFIG.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-outline/30 text-muted-foreground transition-all hover:scale-110 hover:border-foreground hover:text-foreground"
        >
          <ExternalLink className="h-5 w-5" />
        </a>
        <a
          href={`mailto:${PORTFOLIO_CONFIG.email}`}
          aria-label="Email"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-outline/30 text-muted-foreground transition-all hover:scale-110 hover:border-foreground hover:text-foreground"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>

      <div className="mt-16 flex flex-col items-center gap-2 border-t border-outline/10 pt-8 text-xs uppercase tracking-widest text-muted-foreground">
        <p>© {new Date().getFullYear()} {PORTFOLIO_CONFIG.name} — Todos os direitos reservados.</p>
        <p className="text-[11px] text-muted-foreground/60">Edição de Vídeo • Motion Design • Remotion</p>
      </div>
    </footer>
  );
}

/** Modal com Player de Vídeo e Detalhes do Projeto */
function VideoModal({
  project,
  onClose,
}: {
  project: ProjectItem | null;
  onClose: () => void;
}) {
  if (!project) return null;

  const isVertical = project.aspect === "vertical";

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-h-[92vh] overflow-y-auto rounded-[2rem] border border-outline/40 bg-card p-6 sm:p-8 text-foreground shadow-2xl transition-all ${
          isVertical ? "max-w-2xl" : "max-w-4xl"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Fechar modal"
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-outline/40 bg-background/80 text-foreground transition-transform hover:scale-110 cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Cabeçalho */}
        <div className="pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-surface/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground border border-outline/20">
              {project.kind}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3 w-3" />
              {project.metric}
            </span>
          </div>
          <h3 className="mt-3 text-2xl font-bold uppercase sm:text-3xl text-foreground">
            {project.name}
          </h3>
        </div>

        {/* Player de Vídeo */}
        <div className="mt-6 overflow-hidden rounded-2xl bg-black border border-outline/30 flex justify-center items-center">
          {project.videoUrl ? (
            project.videoUrl.endsWith(".mp4") || project.videoUrl.startsWith("/videos/") ? (
              <div className={`relative w-full ${isVertical ? "max-w-xs sm:max-w-sm mx-auto" : "aspect-video"}`}>
                <video
                  src={project.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  poster={project.images[0]}
                  className="w-full max-h-[72vh] object-contain rounded-xl mx-auto shadow-2xl"
                />
              </div>
            ) : (
              <div className={`relative w-full ${isVertical ? "aspect-[9/16] max-w-sm mx-auto" : "aspect-video"}`}>
                <iframe
                  src={project.videoUrl}
                  title={project.name}
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )
          ) : (
            <div className="flex aspect-video w-full flex-col items-center justify-center p-8 text-center bg-black/60">
              <img
                src={project.images[0]}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-30"
              />
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                <Play className="h-8 w-8 fill-white pl-1 text-white" />
              </div>
              <p className="relative z-10 mt-4 text-sm text-muted-foreground">
                Vídeo de demonstração em alta definição
              </p>
            </div>
          )}
        </div>

        {/* Detalhes do Projeto */}
        <div className="mt-6">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Sobre o Projeto & Estratégia de Edição
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-foreground sm:text-base">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tools.map((t) => (
              <span
                key={t}
                className="rounded-full border border-outline/40 bg-background px-3 py-1 text-xs font-semibold text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          {/* CTA para WhatsApp */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-outline/10 pt-6">
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              Gostou desse resultado? Podemos aplicar o mesmo padrão aos seus vídeos.
            </p>
            <a
              href={getWhatsAppUrl(`Olá Lucas! Gostei muito do projeto "${project.name}" e gostaria de fazer algo parecido.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] transition-transform hover:scale-105 shrink-0"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Solicitar Vídeo Semelhante</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Index() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <main className="overflow-x-clip">
      <Hero />
      <Showcase onSelectProject={(p) => setSelectedProject(p)} />
      <About />
      <Services />
      <Projects onSelectProject={(p) => setSelectedProject(p)} />
      <FAQ />
      <Contact />
      <VideoModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  );
}
