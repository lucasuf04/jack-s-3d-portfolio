import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  Play,
  X,
  Mail,
  Instagram,
  MessageCircle,
  Sparkles,
  ArrowUpRight,
  ChevronDown,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  Monitor,
  Smartphone,
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
import mercadopagoThumbH from "@/assets/mercadopago-thumb-h.jpg";
import mercadopagoThumbV from "@/assets/mercadopago-thumb-v.jpg";
import xpThumbH from "@/assets/xp-thumb-h.jpg";
import xpThumbV from "@/assets/xp-thumb-v.jpg";
import discordThumbH from "@/assets/discord-thumb-h.jpg";
import discordThumbV from "@/assets/discord-thumb-v.jpg";
import googledriveThumbH from "@/assets/googledrive-thumb-h.jpg";
import googledriveThumbV from "@/assets/googledrive-thumb-v.jpg";
import socialDraJuliana from "@/assets/social-dra-juliana.jpg";
import socialBuffetMunger from "@/assets/social-buffet-munger.jpg";
import socialItte from "@/assets/social-itte.jpg";
import socialRavensbury from "@/assets/social-ravensbury.jpg";
import socialCardas from "@/assets/social-cardas.jpg";
import ytMiniVslShadow from "@/assets/yt-mini-vsl-shadow.jpg";
import ytKaizenVsl from "@/assets/yt-kaizen-vsl.jpg";
import ytVslItte from "@/assets/yt-vsl-itte.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lucas — Editor de Vídeo e Motion Designer" },
      {
        name: "description",
        content:
          "Portfólio de edição de vídeo e motion design: vídeos para redes sociais, YouTube, motion graphics e demonstrações de apps e SaaS.",
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
  whatsappNumber: "5549999725340",
  whatsappDisplay: "+55 (49) 9 9972-5340",
  email: "lucasunser0103@gmail.com",
  instagramHandle: "@lucasuf_editor",
  instagramUrl: "https://instagram.com/lucasuf_editor",
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
    src: projectMercadoPago,
    alt: "Demonstração de Apps & Plataformas SaaS",
    title: "Demonstração de Apps & Plataformas SaaS",
    tag: "01 • Apps & SaaS",
    videoUrl: "/videos/mercadopago-demo.mp4",
  },
  {
    src: socialDraJuliana,
    alt: "Edição de Vídeos para Redes Sociais",
    title: "Edição de Vídeos para Redes Sociais",
    tag: "02 • Redes Sociais",
    videoUrl: "/videos/social-dra-juliana.mp4",
  },
  {
    src: showcaseMotion,
    alt: "Motion Design Profissional",
    title: "Motion Design Profissional",
    tag: "03 • Motion Design",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  },
  {
    src: ytMiniVslShadow,
    alt: "Edição para YouTube & Podcasts",
    title: "Edição para YouTube & Podcasts",
    tag: "04 • YouTube & Podcasts",
    videoUrl: "/videos/yt-mini-vsl-shadow.mp4",
  },
  {
    src: projectChrisThumb1,
    alt: "Edição de Conteúdo em Escala",
    title: "Edição de Conteúdo em Escala",
    tag: "05 • Conteúdo em Escala",
    videoUrl: "/videos/chris-conteudo-escala.mp4",
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
    title: "Edição para YouTube & Podcasts",
    text: "Produção e edição de vídeos de formato mais longo, com narrativa visual, efeitos, sound design, animações e recursos que tornam o conteúdo mais envolvente e profissional.",
  },
  {
    title: "Edição de Conteúdo em Escala",
    text: "Edição de vídeos mais simples e objetivos para marcas e criadores que precisam de um grande volume de publicações. Processos ágeis no Premiere Pro, cortes precisos, legendas dinâmicas e padronização visual para manter a frequência de postagens.",
  },
];

export interface VideoVariant {
  id: string;
  shortLabel: string;
  title: string;
  subtitle: string;
  description: string;
  horizontalVideo?: string;
  verticalVideo?: string;
  horizontalThumb?: string;
  verticalThumb?: string;
  tools: string[];
  metric: string;
}

export const SAAS_EXAMPLES: VideoVariant[] = [
  {
    id: "mercadopago",
    shortLabel: "Mercado Pago",
    title: "Mercado Pago — Rendimento & Experiência Mobile",
    subtitle: "Fintech & App Walkthrough",
    description:
      "Vídeo comercial de alta conversão demonstrando a experiência do aplicativo do Mercado Pago. Interface animada com motion graphics de telas, transições de dados e gráficos de rendimento para onboarding e aquisição de usuários.",
    horizontalVideo: "/videos/mercadopago-horizontal.mp4",
    verticalVideo: "/videos/mercadopago-vertical.mp4",
    horizontalThumb: mercadopagoThumbH,
    verticalThumb: mercadopagoThumbV,
    tools: ["Premiere Pro", "Remotion"],
    metric: "UI/UX Motion & Alta Conversão",
  },
  {
    id: "xp",
    shortLabel: "XP Investimentos",
    title: "XP Investimentos — Cartão Visa Infinite & App",
    subtitle: "Fintech & 3D Motion",
    description:
      "Apresentação comercial com animação elegante do cartão em 3D, telas dinâmicas do app de investimentos e destaque de benefícios exclusivos com ritmo moderno e sofisticado.",
    horizontalVideo: "/videos/xp-horizontal.mp4",
    verticalVideo: "/videos/xp-vertical.mp4",
    horizontalThumb: xpThumbH,
    verticalThumb: xpThumbV,
    tools: ["Premiere Pro", "Remotion"],
    metric: "3D Motion & Sofisticação",
  },
  {
    id: "discord",
    shortLabel: "Discord",
    title: "Discord — Interface de Plataforma & Canais",
    subtitle: "Software & SaaS Walkthrough",
    description:
      "Walkthrough dinâmico de software explorando navegação entre canais, micro-interações de chat, animações tipográficas e sound design sincronizado para demonstrar recursos com clareza e dinamismo.",
    horizontalVideo: "/videos/discord-horizontal.mp4",
    verticalVideo: "/videos/discord-vertical.mp4",
    horizontalThumb: discordThumbH,
    verticalThumb: discordThumbV,
    tools: ["Premiere Pro", "Remotion"],
    metric: "Interface Fluida & Sound Design",
  },
  {
    id: "googledrive",
    shortLabel: "Google Drive",
    title: "Google Drive — Resolução de Armazenamento",
    subtitle: "Cloud SaaS & Tutorial Dinâmico",
    description:
      "Vídeo explicativo moderno com narrativa de problema e solução em plataforma de nuvem. Motion graphics de interface, animação de tela de computador e tutoriais dinâmicos de alta clareza.",
    horizontalVideo: "/videos/googledrive-horizontal.mp4",
    verticalVideo: "/videos/googledrive-vertical.mp4",
    horizontalThumb: googledriveThumbH,
    verticalThumb: googledriveThumbV,
    tools: ["Premiere Pro", "Remotion"],
    metric: "Tutorial Dinâmico & UI Explainer",
  },
];

export const SOCIAL_EXAMPLES: VideoVariant[] = [
  {
    id: "dra-juliana",
    shortLabel: "Dra. Juliana",
    title: "Dra. Juliana — Conteúdo Médico de Alta Retenção",
    subtitle: "Reels Estratégico • Saúde & Autoridade",
    description:
      "Edição dinâmica vertical para Instagram Reels focada em autoridade médica. Cortes ágeis no ritmo da fala, legendas animadas centralizadas para prender a atenção, inserções visuais e transições limpas.",
    verticalVideo: "/videos/social-dra-juliana.mp4",
    verticalThumb: socialDraJuliana,
    tools: ["Premiere Pro", "After Effects"],
    metric: "Autoridade & Legendas Dinâmicas",
  },
  {
    id: "buffet-munger",
    shortLabel: "Buffet & Munger",
    title: "Buffet & Munger — Storytelling Visual & Finanças",
    subtitle: "Reels Cinematográfico • Storytelling",
    description:
      "Edição narrativa vertical sobre Warren Buffett e Charlie Munger com estética neon e estilo cinematográfico. Efeitos de luz, sound design imersivo, tipografia em movimento e ganchos visuais poderosos de retenção.",
    verticalVideo: "/videos/social-buffet-munger.mp4",
    verticalThumb: socialBuffetMunger,
    tools: ["Premiere Pro", "After Effects"],
    metric: "Storytelling & Visual Neon",
  },
  {
    id: "criativo-itte",
    shortLabel: "Criativo Itté",
    title: "Criativo Itté — Anúncio Direto & Motion 3D",
    subtitle: "Tráfego Pago & Reels Criativo",
    description:
      "Criativo de alta conversão desenvolvido para anúncios em redes sociais. Elementos gráficos em 3D integrados à fala, cores vibrantes da marca, cortes dinâmicos e chamada para ação pensada para performance.",
    verticalVideo: "/videos/social-itte.mp4",
    verticalThumb: socialItte,
    tools: ["Premiere Pro", "After Effects"],
    metric: "Criativo de Alta Conversão",
  },
  {
    id: "ravensbury",
    shortLabel: "Ravensbury",
    title: "Ravensbury — Estética de Luxo & Joalheria",
    subtitle: "Reels Internacional • Luxo & Detalhes",
    description:
      "Edição vertical em inglês com estética cinematográfica voltada para joalheria fina. Foco em nitidez dos detalhes da peça, color grading refinado, ritmo elegante e legendas dinâmicas discretas.",
    verticalVideo: "/videos/social-ravensbury.mp4",
    verticalThumb: socialRavensbury,
    tools: ["Premiere Pro", "After Effects"],
    metric: "Estética de Luxo (EN)",
  },
  {
    id: "cardas-01",
    shortLabel: "Cardas",
    title: "Cardas — Conteúdo Educativo & Cartões Blur",
    subtitle: "Educação & Negócios • Reels Dinâmico",
    description:
      "Edição vertical de alta retenção com inserção de cartões translúcidos com blur, tipografia destacada em camadas, cortes precisos no ritmo da fala e legendas limpas de fácil leitura.",
    verticalVideo: "/videos/social-cardas.mp4",
    verticalThumb: socialCardas,
    tools: ["Premiere Pro", "After Effects"],
    metric: "60 FPS • Alta Retenção",
  },
];

export const YOUTUBE_EXAMPLES: VideoVariant[] = [
  {
    id: "mini-vsl-shadow",
    shortLabel: "Mini VSL Shadow",
    title: "Mini VSL Shadow — Edição Narrativa & Motion Dark",
    subtitle: "YouTube & Mini VSL • Storytelling",
    description:
      "Edição widescreen (16:9) em estética dark e envolvente, combinando ritmo narrativo acelerado, efeitos de luz neon, sound design cinematográfico e motion graphics pontuais para máxima retenção do início ao fim.",
    horizontalVideo: "/videos/yt-mini-vsl-shadow.mp4",
    horizontalThumb: ytMiniVslShadow,
    tools: ["Premiere Pro", "After Effects"],
    metric: "Storytelling & Alta Retenção",
  },
  {
    id: "kaizen-vsl",
    shortLabel: "Kaizen VSL",
    title: "Kaizen VSL — Ritmo Dinâmico & Tipografia Emocional",
    subtitle: "YouTube & VSL • Motion Design",
    description:
      "Produção de formato longo focada em clareza argumentativa. Combina tipografia animada com brilho neon, transições fluidas, fluxogramas explicativos e trilha sonora dinâmica para prender a atenção do espectador.",
    horizontalVideo: "/videos/yt-kaizen-vsl.mp4",
    horizontalThumb: ytKaizenVsl,
    tools: ["Premiere Pro", "After Effects"],
    metric: "Tipografia & Fluxo Visual",
  },
  {
    id: "vsl-itte",
    shortLabel: "VSL Itté",
    title: "VSL Itté — Vídeo Completo de Alta Conversão",
    subtitle: "YouTube & Apresentação Widescreen",
    description:
      "Edição estratégica completa em 16:9 com tratamento de cor (color grading), b-rolls dinâmicos, inserts visuais que ilustram cada ponto da fala e sound design imersivo voltado para conversão e autoridade.",
    horizontalVideo: "/videos/yt-vsl-itte.mp4",
    horizontalThumb: ytVslItte,
    tools: ["Premiere Pro", "After Effects"],
    metric: "Edição Completa 16:9",
  },
];

export interface ProjectItem {
  id: string;
  kind: string;
  name: string;
  category: "all" | "saas" | "social" | "motion" | "youtube" | "escala";
  aspect: "horizontal" | "vertical";
  description: string;
  tools: string[];
  metric: string;
  images: string[];
  videoUrl?: string | undefined;
  carouselItems?: VideoVariant[] | undefined;
  horizontalVideo?: string | undefined;
  verticalVideo?: string | undefined;
  horizontalThumb?: string | undefined;
  verticalThumb?: string | undefined;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "demo-apps-saas",
    kind: "Serviço 01 — Apps & SaaS",
    name: "Demonstração de Apps & Plataformas SaaS",
    category: "saas",
    aspect: "horizontal",
    description:
      "Vídeos modernos focados em demonstrar produtos digitais, aplicativos e plataformas SaaS com máxima clareza. Motion graphics de interface (UI/UX), animação de telas, transições fluidas e destaques visuais de funcionalidades voltados para onboarding e conversão.",
    tools: ["Premiere Pro", "Remotion"],
    metric: "4 Exemplos em 2 Formatos (16:9 e 9:16)",
    images: [mercadopagoThumbH],
    videoUrl: "/videos/mercadopago-horizontal.mp4",
    carouselItems: SAAS_EXAMPLES,
  },
  {
    id: "edicao-redes-sociais",
    kind: "Serviço 02 — Redes Sociais",
    name: "Edição de Vídeos para Redes Sociais",
    category: "social",
    aspect: "vertical",
    description:
      "Edição dinâmica e estratégica para Instagram Reels, YouTube Shorts, TikTok e outras plataformas. Cortes precisos, legendas animadas, efeitos visuais e ritmo pensado para manter a audiência engajada.",
    tools: ["Premiere Pro", "After Effects"],
    metric: "5 Exemplos em 9:16 Vertical",
    images: [socialDraJuliana],
    videoUrl: "/videos/social-dra-juliana.mp4",
    carouselItems: SOCIAL_EXAMPLES,
  },
  {
    id: "motion-design-profissional",
    kind: "Serviço 03 — Motion Design",
    name: "Motion Design Profissional",
    category: "motion",
    aspect: "horizontal",
    description:
      "Criação de animações modernas e profissionais, com elementos gráficos, transições, tipografia animada e efeitos visuais que dão mais personalidade e impacto aos vídeos.",
    tools: ["After Effects"],
    metric: "Design de Alto Impacto Visual",
    images: [showcaseMotion],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  },
  {
    id: "edicao-youtube-podcasts",
    kind: "Serviço 04 — YouTube & Podcasts",
    name: "Edição para YouTube & Podcasts",
    category: "youtube",
    aspect: "horizontal",
    description:
      "Produção e edição de vídeos de formato mais longo, com narrativa visual, efeitos, sound design, animações e recursos que tornam o conteúdo mais envolvente e profissional.",
    tools: ["Premiere Pro", "After Effects"],
    metric: "3 Exemplos em 16:9 Widescreen",
    images: [ytMiniVslShadow],
    videoUrl: "/videos/yt-mini-vsl-shadow.mp4",
    carouselItems: YOUTUBE_EXAMPLES,
  },
  {
    id: "edicao-conteudo-escala",
    kind: "Serviço 05 — Conteúdo em Escala",
    name: "Edição de Conteúdo em Escala",
    category: "escala",
    aspect: "vertical",
    description:
      "Edição de vídeos mais simples e objetivos para marcas e criadores que precisam de um grande volume de publicações. Processos ágeis no Premiere Pro, cortes precisos, legendas dinâmicas e padronização visual para manter a frequência de postagens.",
    tools: ["Premiere Pro"],
    metric: "Alta Retenção & Consistência",
    images: [projectChrisThumb1],
    videoUrl: "/videos/chris-conteudo-escala.mp4",
  },
];

const FAQS = [
  {
    question: "Qual é o prazo médio de entrega dos vídeos?",
    answer:
      "Para vídeos curtos (Reels, TikToks e Shorts), o prazo habitual é de 24 a 48 horas úteis por vídeo. Para vídeos em grande escala, trabalho normalmente com pacotes contínuos e entrego pelo menos 1 vídeo por dia. Já para vídeos longos de YouTube ou animações de motion complexas, o prazo varia entre 3 a 5 dias úteis, dependendo da extensão e do nível de efeitos visuais.",
  },
  {
    question: "Você inclui sound design, legendas dinâmicas e trilha sonora?",
    answer:
      "Sim! Todos os projetos já incluem sound design completo (efeitos sonoros para enfatizar ações), trilhas sonoras profissionais livres de direitos autorais (royalty-free para não dar problema de copyright) e legendas animadas estilizadas para prender a atenção.",
  },
  {
    question: "Como te envio o material bruto para edição?",
    answer:
      "Você pode enviar os arquivos gravados diretamente através de pastas compartilhadas no Google Drive, Dropbox ou WeTransfer. Se tiver dúvidas, te oriento com o método mais simples.",
  },
  {
    question: "Você trabalha com planos mensais ou apenas projetos avulsos?",
    answer:
      "Trabalho com ambos os modelos! Tenho opções para projetos avulsos e também pacotes recorrentes com volume mensal, garantindo um valor mais acessível por vídeo e prioridade na fila de edição.",
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
                const firstWord = item.title.split(" ")[0] ?? "";
                const match =
                  PROJECTS.find((p) => p.name === item.title) ??
                  (firstWord ? PROJECTS.find((p) => p.name.includes(firstWord)) : undefined) ??
                  PROJECTS[0];
                if (match) onSelectProject(match);
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

/** Card com Carrossel de Múltiplos Exemplos (suporta apenas um formato ou alternância 16:9 / 9:16) */
function CarouselProjectCard({
  project,
  items,
  orderNumber,
  onSelectProject,
  topOffset,
}: {
  project: ProjectItem;
  items: VideoVariant[];
  orderNumber: string;
  onSelectProject: (proj: ProjectItem) => void;
  topOffset: string;
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [aspect, setAspect] = useState<"horizontal" | "vertical">(project.aspect || "horizontal");

  const currentExample = items[activeIdx] ?? items[0];
  if (!currentExample) return null;

  const hasHorizontal = !!(currentExample.horizontalVideo && currentExample.horizontalThumb);
  const hasVertical = !!(currentExample.verticalVideo && currentExample.verticalThumb);
  const hasBothFormats = hasHorizontal && hasVertical;
  const effectiveAspect: "horizontal" | "vertical" = hasBothFormats
    ? aspect
    : hasVertical
      ? "vertical"
      : "horizontal";

  const currentThumb =
    (effectiveAspect === "vertical"
      ? currentExample.verticalThumb
      : currentExample.horizontalThumb) ??
    project.images[0] ??
    "";
  const currentVideo =
    (effectiveAspect === "vertical"
      ? currentExample.verticalVideo
      : currentExample.horizontalVideo) || project.videoUrl;

  const handleOpenVideo = () => {
    onSelectProject({
      id: `${project.id}-${currentExample.id}-${effectiveAspect}`,
      kind: `${orderNumber}. ${project.name} • ${currentExample.subtitle}`,
      name: currentExample.title,
      category: project.category,
      aspect: effectiveAspect,
      description: currentExample.description,
      tools: currentExample.tools,
      metric: hasBothFormats
        ? effectiveAspect === "vertical"
          ? "9:16 Vertical (Reels/Shorts)"
          : "16:9 Widescreen (Demo)"
        : currentExample.metric,
      images: [currentThumb],
      videoUrl: currentVideo,
      horizontalVideo: currentExample.horizontalVideo,
      verticalVideo: currentExample.verticalVideo,
      horizontalThumb: currentExample.horizontalThumb,
      verticalThumb: currentExample.verticalThumb,
    });
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <article
      className="group sticky rounded-[2.5rem] border border-outline bg-background p-5 transition-all duration-300 hover:border-foreground/40 sm:p-10 shadow-2xl"
      style={{ top: topOffset }}
    >
      <header className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex items-start gap-4 sm:gap-8">
          <span className="font-display-black text-6xl sm:text-8xl text-muted-foreground/50">
            {orderNumber}
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-surface/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground border border-outline/30">
                {project.kind}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/20 px-3 py-1 text-[11px] font-semibold text-primary">
                <Sparkles className="h-3 w-3" />
                {currentExample.metric}
              </span>
              <span className="rounded-full bg-foreground/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-foreground border border-outline/30">
                {activeIdx + 1} de {items.length} Exemplos
              </span>
            </div>

            <h3 className="mt-3 text-xl font-bold uppercase sm:text-3xl text-foreground">
              {currentExample.title}
            </h3>

            <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base leading-relaxed">
              {currentExample.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {currentExample.tools.map((t) => (
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
          onClick={handleOpenVideo}
          className="mt-4 sm:mt-0 inline-flex items-center justify-center gap-2 shrink-0 rounded-full border-2 border-outline px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:bg-foreground hover:text-background sm:px-8 sm:py-4 sm:text-sm cursor-pointer"
        >
          <Play className="h-4 w-4 fill-current" />
          <span>
            {hasBothFormats
              ? `Assistir Vídeo (${effectiveAspect === "horizontal" ? "16:9" : "9:16"})`
              : "Assistir Vídeo"}
          </span>
        </button>
      </header>

      {/* Barra de Controle: Seletor de Exemplos + Alternador de Formato (quando há 16:9 e 9:16) */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-outline/30 bg-surface/5 p-3 sm:px-6 sm:py-4">
        {/* Seletor de Exemplos (Abas/Pills do Carrossel) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {items.map((ex, idx) => (
            <button
              key={ex.id}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                activeIdx === idx
                  ? "bg-foreground text-background shadow-md scale-105"
                  : "border border-outline/30 text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {ex.shortLabel}
            </button>
          ))}
        </div>

        {hasBothFormats && (
          <div className="flex items-center gap-2">
            <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold hidden sm:inline">
              Formato:
            </span>
            <div className="inline-flex rounded-full border border-outline/30 bg-background p-1">
              <button
                type="button"
                onClick={() => setAspect("horizontal")}
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all cursor-pointer ${
                  aspect === "horizontal"
                    ? "bg-foreground text-background shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Monitor className="h-3.5 w-3.5" />
                <span>16:9 Horizontal</span>
              </button>
              <button
                type="button"
                onClick={() => setAspect("vertical")}
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all cursor-pointer ${
                  aspect === "vertical"
                    ? "bg-foreground text-background shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Smartphone className="h-3.5 w-3.5" />
                <span>9:16 Vertical</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Área da Prévia com Botões de Navegação < e > */}
      <div className="relative mt-6 flex items-center justify-center">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Vídeo anterior"
          className="absolute left-2 sm:-left-4 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-outline/40 bg-background/90 text-foreground backdrop-blur-md shadow-xl transition-all hover:scale-110 hover:border-foreground cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Próximo vídeo"
          className="absolute right-2 sm:-right-4 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-outline/40 bg-background/90 text-foreground backdrop-blur-md shadow-xl transition-all hover:scale-110 hover:border-foreground cursor-pointer"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* Prévia do Vídeo (Proporcional: Vertical 9:16 ou Widescreen 16:9) */}
        <div
          onClick={handleOpenVideo}
          className="flex justify-center w-full cursor-pointer"
        >
          {effectiveAspect === "vertical" ? (
            <div className="group/thumb relative aspect-[9/16] w-full max-w-[280px] sm:max-w-[340px] overflow-hidden rounded-[2rem] border border-outline/30 bg-black shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
              <img
                key={`${project.id}-vert-${activeIdx}`}
                src={currentThumb}
                alt={`${currentExample.title} — prévia vertical`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover/thumb:opacity-100">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/30 backdrop-blur-md transition-transform duration-300 group-hover/thumb:scale-110">
                  <Play className="h-8 w-8 fill-white pl-1 text-white" />
                </div>
                <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-white">
                  {hasBothFormats ? "Assistir Versão Vertical (9:16)" : "Assistir Vídeo"}
                </span>
              </div>
            </div>
          ) : (
            <div className="group/thumb relative aspect-video w-full overflow-hidden rounded-[2rem] border border-outline/30 bg-black shadow-2xl transition-transform duration-300 hover:scale-[1.01]">
              <img
                key={`${project.id}-horiz-${activeIdx}`}
                src={currentThumb}
                alt={`${currentExample.title} — prévia horizontal`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover/thumb:opacity-100">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/30 backdrop-blur-md transition-transform duration-300 group-hover/thumb:scale-110">
                  <Play className="h-8 w-8 fill-white pl-1 text-white" />
                </div>
                <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-white">
                  {hasBothFormats ? "Assistir Versão Widescreen (16:9)" : "Assistir Vídeo"}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Indicadores de Paginação (Dots) */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {items.map((_, dotIdx) => (
          <button
            key={dotIdx}
            type="button"
            onClick={() => setActiveIdx(dotIdx)}
            aria-label={`Ir para exemplo ${dotIdx + 1}`}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              activeIdx === dotIdx ? "w-8 bg-foreground" : "w-2 bg-muted-foreground/30 hover:bg-foreground/60"
            }`}
          />
        ))}
      </div>
    </article>
  );
}

function Projects({ onSelectProject }: { onSelectProject: (proj: ProjectItem) => void }) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = [
    { id: "all", label: "Todos os Projetos" },
    { id: "saas", label: "01. Apps & SaaS" },
    { id: "social", label: "02. Redes Sociais" },
    { id: "motion", label: "03. Motion Design" },
    { id: "youtube", label: "04. YouTube & Podcasts" },
    { id: "escala", label: "05. Em Escala" },
  ];

  const filteredProjects =
    activeTab === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="-mt-16 bg-background px-4 pb-24 pt-36 sm:px-10">
      <div className="text-center">
        <h2 className="font-display-black text-chrome text-[16vw] sm:text-[9rem]">Projetos</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
          Exemplos práticos e reais dos 5 serviços prestados, com ferramentas utilizadas e prévias em vídeo.
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
        {filteredProjects.map((p, i) =>
          p.carouselItems && p.carouselItems.length > 0 ? (
            <CarouselProjectCard
              key={p.id}
              project={p}
              items={p.carouselItems}
              orderNumber={String(PROJECTS.indexOf(p) + 1).padStart(2, "0")}
              onSelectProject={onSelectProject}
              topOffset={`${5 + (i % 6) * 1.5}rem`}
            />
          ) : (
            <article
              key={p.id}
              className="group sticky rounded-[2.5rem] border border-outline bg-background p-5 transition-all duration-300 hover:border-foreground/40 sm:p-10 shadow-2xl"
              style={{ top: `${5 + (i % 6) * 1.5}rem` }}
            >
              <header className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-4 sm:gap-8">
                  <span className="font-display-black text-6xl sm:text-8xl text-muted-foreground/50">
                    {String(PROJECTS.indexOf(p) + 1).padStart(2, "0")}
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
          )
        )}
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
          Perguntas comuns sobre prazos, envio de arquivos, pacotes e processo de trabalho.
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
  return (
    <footer id="contact" className="flex flex-col items-center px-6 pb-16 pt-16 text-center">
      <h2
        className="font-display-black text-chrome text-[14vw] sm:text-[8rem]"
        style={{ letterSpacing: "0em" }}
      >
        Vamos conversar
      </h2>
      <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-xl leading-relaxed">
        Tem um projeto em mente ou precisa de edição constante para seus canais?
        Me chame e vamos transformar sua visão em vídeos com alto impacto e retenção.
      </p>

      {/* Botão de Ação Direta */}
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
      </div>

      {/* Redes Sociais & Contato Direto */}
      <div className="mt-10 flex items-center justify-center gap-6">
        <a
          href={PORTFOLIO_CONFIG.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Instagram ${PORTFOLIO_CONFIG.instagramHandle}`}
          title={PORTFOLIO_CONFIG.instagramHandle}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-outline/30 text-muted-foreground transition-all hover:scale-110 hover:border-foreground hover:text-foreground"
        >
          <Instagram className="h-5 w-5" />
        </a>
        <a
          href={`mailto:${PORTFOLIO_CONFIG.email}`}
          aria-label={`Enviar email para ${PORTFOLIO_CONFIG.email}`}
          title={PORTFOLIO_CONFIG.email}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-outline/30 text-muted-foreground transition-all hover:scale-110 hover:border-foreground hover:text-foreground"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>

      <div className="mt-16 flex flex-col items-center gap-2 border-t border-outline/10 pt-8 text-xs uppercase tracking-widest text-muted-foreground">
        <p>© {new Date().getFullYear()} {PORTFOLIO_CONFIG.name} — Todos os direitos reservados.</p>
        <p className="text-[11px] text-muted-foreground/60">Edição de Vídeo • Motion Design</p>
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
  const [modalAspect, setModalAspect] = useState<"horizontal" | "vertical">(
    project?.aspect || "horizontal"
  );

  useEffect(() => {
    if (project) {
      setModalAspect(project.aspect || "horizontal");
    }
  }, [project]);

  if (!project) return null;

  const hasBothFormats = !!(project.horizontalVideo && project.verticalVideo);
  const isVertical = hasBothFormats
    ? modalAspect === "vertical"
    : project.aspect === "vertical";

  const currentVideoUrl = hasBothFormats
    ? modalAspect === "vertical"
      ? project.verticalVideo
      : project.horizontalVideo
    : project.videoUrl;

  const currentPoster = hasBothFormats
    ? modalAspect === "vertical"
      ? project.verticalThumb || project.images[0]
      : project.horizontalThumb || project.images[0]
    : project.images[0];

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

          {/* Seletor de Formato dentro do Modal (se disponível) */}
          {hasBothFormats && (
            <div className="mt-4 flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Alternar Formato:
              </span>
              <div className="inline-flex rounded-full border border-outline/30 bg-background p-1">
                <button
                  type="button"
                  onClick={() => setModalAspect("horizontal")}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold cursor-pointer transition-all ${
                    modalAspect === "horizontal"
                      ? "bg-foreground text-background shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Monitor className="h-3.5 w-3.5" />
                  <span>16:9 Horizontal</span>
                </button>
                <button
                  type="button"
                  onClick={() => setModalAspect("vertical")}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold cursor-pointer transition-all ${
                    modalAspect === "vertical"
                      ? "bg-foreground text-background shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Smartphone className="h-3.5 w-3.5" />
                  <span>9:16 Vertical</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Player de Vídeo */}
        <div className="mt-6 overflow-hidden rounded-2xl bg-black border border-outline/30 flex justify-center items-center">
          {currentVideoUrl ? (
            currentVideoUrl.endsWith(".mp4") || currentVideoUrl.startsWith("/videos/") ? (
              <div className={`relative w-full ${isVertical ? "max-w-xs sm:max-w-sm mx-auto" : "aspect-video"}`}>
                <video
                  key={`${currentVideoUrl}-${modalAspect}`}
                  src={currentVideoUrl}
                  controls
                  autoPlay
                  playsInline
                  poster={currentPoster}
                  className="w-full max-h-[72vh] object-contain rounded-xl mx-auto shadow-2xl"
                />
              </div>
            ) : (
              <div className={`relative w-full ${isVertical ? "aspect-[9/16] max-w-sm mx-auto" : "aspect-video"}`}>
                <iframe
                  src={currentVideoUrl}
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
