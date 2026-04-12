import { useState, useEffect, useRef } from "react";
import logo from "./assets/logo-sri-darsh.jpg";

/*cards*/
import b1 from "./assets/IMG-20260321-WA0024.jpg";
import b2 from "./assets/IMG-20260321-WA0067.jpg";
import b3 from "./assets/IMG-20260321-WA0068.jpg";
import b4 from "./assets/IMG-20260321-WA0082.jpg";
import b5 from "./assets/IMG-20260321-WA0064.jpg";
import b6 from "./assets/IMG-20260321-WA0079.jpg";

/*invitation*/
import b7 from "./assets/IMG-20260321-WA0043.jpg";
import b8 from "./assets/IMG-20260321-WA0054.jpg";
import b9 from "./assets/IMG-20260321-WA0052.jpg";
import b10 from "./assets/IMG-20260321-WA0059.jpg";
import b11 from "./assets/IMG-20260321-WA0056.jpg";
import b12 from "./assets/IMG-20260321-WA0057.jpg";

/*brochure*/
import b13 from "./assets/IMG-20260321-WA0118.jpg";
import b14 from "./assets/IMG-20260321-WA0028.jpg";
import b15 from "./assets/IMG-20260321-WA0120.jpg";
import b16 from "./assets/IMG-20260321-WA0117.jpg";
import b17 from "./assets/IMG-20260321-WA0119.jpg";
import b18 from "./assets/IMG-20260321-WA0039.jpg";

/*flex*/
import b19 from "./assets/IMG-20260321-WA0111.jpg";

/*stickers-labels*/
import b20 from "./assets/IMG-20260321-WA0093.jpg";
import b21 from "./assets/IMG-20260321-WA0094.jpg";

/*id-cards*/
import b24 from "./assets/IMG-20260321-WA0083.jpg";
import b25 from "./assets/IMG-20260321-WA0084.jpg";
import b26 from "./assets/IMG-20260321-WA0085.jpg";
import b27 from "./assets/IMG-20260321-WA0086.jpg";

/*rubber-stamps*/
import b28 from "./assets/IMG-20260321-WA0095.jpg";
import b29 from "./assets/IMG-20260321-WA0096.jpg";
import b30 from "./assets/IMG-20260321-WA0097.jpg";

/*lamination*/
import b31 from "./assets/IMG-20260321-WA0019.jpg";
import b32 from "./assets/IMG-20260321-WA0022.jpg";
import b33 from "./assets/IMG-20260321-WA0011.jpg";
import b34 from "./assets/IMG-20260321-WA0023.jpg";

/*nameplates*/
import b35 from "./assets/IMG-20260321-WA0098.jpg";
import b36 from "./assets/IMG-20260321-WA0100.jpg";

/*badges*/
import b37 from "./assets/IMG-20260321-WA0060.jpg";
import b38 from "./assets/IMG-20260321-WA0063.jpg";

/*standees*/
import b39 from "./assets/IMG-20260321-WA0104.jpg";
import b40 from "./assets/IMG-20260321-WA0112.jpg";

/*vibuthi-covers*/
import b41 from "./assets/IMG-20260321-WA0020.jpg";
import b42 from "./assets/IMG-20260321-WA0021.jpg";

/*posters*/
import b43 from "./assets/IMG-20260321-WA0121.jpg";

/*menu cards*/
import b44 from "./assets/IMG-20260321-WA0103.jpg";

/* ─── DATA ─── */
const GALLERY_CATS = [
  { id:"business-cards",  label:"Business Cards",   icon:"🪪", imgs:[b1,b2,b3,b4,b5,b6],       desc:"Premium matte, gloss & soft-touch finish",   span:"tall" },
  { id:"invitations",     label:"Invitations",      icon:"💌", imgs:[b7,b8,b9,b10,b11,b12],    desc:"Wedding, event & corporate invitations",       span:"wide" },
  { id:"brochures",       label:"Brochures",        icon:"📄", imgs:[b13,b14,b15,b16,b17,b18], desc:"Tri-fold, bi-fold & custom formats",            span:"normal" },
  { id:"flex-boards",     label:"Flex Boards",      icon:"📣", imgs:[b19],                     desc:"Large-format outdoor & indoor displays",        span:"wide" },
  { id:"stickers",        label:"Stickers & Labels",icon:"🏷️", imgs:[b20,b21],                 desc:"Die-cut, roll & sheet stickers",                span:"normal" },
  { id:"id-cards",        label:"ID Cards",         icon:"🪪", imgs:[b24,b25,b26,b27],         desc:"Employee, student & event ID cards",            span:"normal" },
  { id:"rubber-stamps",   label:"Rubber Stamps",    icon:"🔖", imgs:[b28,b29,b30],             desc:"Custom rubber & self-inking stamps",            span:"normal" },
  { id:"lamination",      label:"Lamination",       icon:"✨", imgs:[b31,b32,b33,b34],         desc:"Gloss, matte & thermal lamination",             span:"tall" },
  { id:"name-plates",     label:"Name Plates",      icon:"🪧", imgs:[b35,b36],                 desc:"Acrylic, brass & engraved name plates",         span:"normal" },
  { id:"badges",          label:"Badges",           icon:"📛", imgs:[b37,b38],                 desc:"Metal, plastic & custom event badges",          span:"normal" },
  { id:"standees",        label:"Standees",         icon:"🖼️", imgs:[b39,b40],                 desc:"Roll-up & cut-out standee displays",            span:"tall" },
  { id:"vibuthi-covers",  label:"Vibuthi Covers",   icon:"🙏", imgs:[b41,b42],                 desc:"Traditional vibuthi packet covers",             span:"normal" },
  { id:"posters",         label:"Posters",          icon:"🖼️", imgs:[b43],                     desc:"A4 to A0 full-color poster printing",           span:"wide" },
  { id:"menu-cards",      label:"Menu Cards",       icon:"📋", imgs:[b44],                     desc:"Restaurant & café menu printing",               span:"normal" },
];

/* Featured hero images - a mix from different categories */
const HERO_IMGS = [b7, b1, b13, b39, b43];

const PRINT_TYPES = [
  { id:"digital",  name:"Digital Printing", icon:"💻", desc:"Fast, precise digital printing for short runs. Perfect for personalised prints and quick-turn jobs.", points:["Short Run Printing","Variable Data Print","Quick Turnaround","Photo-Quality Output"], cover: b1 },
  { id:"offset",   name:"Offset Printing",  icon:"🖨️", desc:"Traditional offset printing for sharp, consistent quality on large volumes — books, magazines, and catalogues.", points:["Books & Magazines","Bulk Brochures","Sharp CMYK Colour","Cost-Effective for Volume"], cover: b13 },
  { id:"screen",   name:"Screen Printing",  icon:"🖼️", desc:"High-quality screen printing for T-shirts, bags, uniforms, and promotional merchandise.", points:["T-Shirts & Uniforms","Cotton Bags & Caps","Spot Colour Printing","Bulk Order Friendly"], cover: b43 },
  { id:"dtp",      name:"DTP Designing",    icon:"🎨", desc:"Professional Desktop Publishing — from logos and brochures to full publication layouts.", points:["Logo & Brand Design","Brochure & Flyer Layouts","Menu & Catalogue Design","Invitation & Card Design"], cover: b7 },
];

const REVIEWS = [
  { name:"Bharath Gowda",      initial:"B", text:"Best Printing Service. Friendly staff and lowest prices in Coimbatore!", ago:"4 months ago", rating:5 },
  { name:"Subramaniam",        initial:"S", text:"Quality was excellent. Highly recommend Sri Darshna Printers.",          ago:"4 months ago", rating:5 },
  { name:"Jothi Prakash S",    initial:"J", text:"Superb work at very low cost! Thank you for your amazing service.",      ago:"6 years ago",  rating:5 },
  { name:"Sagunthala Senthil", initial:"S", text:"Best printing in Gandhipuram. Clean output and professional staff.",     ago:"4 months ago", rating:5 },
  { name:"Gokul Kumar",        initial:"G", text:"Great response from the team. Work delivered on time and looked great.",  ago:"6 years ago",  rating:5 },
];

const NAV = ["Home","Services","Gallery","About","Contact"];
const TICKER = ["Business Cards","Invitations","Brochures","Flex Boards","Stickers","ID Cards","Rubber Stamps","DTP Design","Screen Printing","Offset Printing","Digital Printing","Name Plates","Badges","Standees","Posters","Calendars","Menu Cards","Est. 1999","Gandhipuram CBE","5-Star Rated"];

/* ─── HOOKS ─── */
function useReveal(delay = 0) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.getBoundingClientRect().top < window.innerHeight + 60) { setVisible(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } }, { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, visible, delay];
}

function Reveal({ children, d = 0, className = "", style = {} }) {
  const [ref, vis] = useReveal(d);
  return (
    <div ref={ref} className={className} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "none" : "translateY(40px)",
      transition: `opacity 0.9s ${d}s cubic-bezier(.16,1,.3,1), transform 0.9s ${d}s cubic-bezier(.16,1,.3,1)`,
      ...style
    }}>{children}</div>
  );
}

/* ─── MAIN ─── */
export default function SriDarshna() {
  const [scrollY, setScrollY] = useState(0);
  const [activeNav, setActiveNav] = useState("Home");
  const [revIdx, setRevIdx] = useState(0);
  const [heroIdx, setHeroIdx] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ name:"", phone:"", service:"", message:"" });
  const [sent, setSent] = useState(false);
  const [pct, setPct] = useState(0);
  const [modalCat, setModalCat] = useState(null);
  const [lightbox, setLightbox] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const fn = () => {
      setScrollY(window.scrollY);
      setPct(Math.min(window.scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1) * 100, 100));
      for (const n of NAV) {
        const el = document.getElementById(n.toLowerCase());
        if (!el) continue;
        const { top, bottom } = el.getBoundingClientRect();
        if (top <= 80 && bottom > 80) { setActiveNav(n); break; }
      }
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setRevIdx(i => (i + 1) % REVIEWS.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setHeroIdx(i => (i + 1) % HERO_IMGS.length), 3200);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const fn = e => {
      if (e.key === "Escape") { setLightbox(null); setModalCat(null); setMobileMenu(false); }
      if (lightbox) {
        const imgs = lightbox.cat.imgs;
        if (e.key === "ArrowRight") setLightbox(l => ({ ...l, idx: (l.idx + 1) % imgs.length }));
        if (e.key === "ArrowLeft")  setLightbox(l => ({ ...l, idx: (l.idx - 1 + imgs.length) % imgs.length }));
      }
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [lightbox]);

  useEffect(() => {
    document.body.style.overflow = (modalCat || lightbox || mobileMenu) ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalCat, lightbox, mobileMenu]);

  const go = s => {
    document.getElementById(s.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileMenu(false);
  };

  const navUp = scrollY > 60;

  const CSS = `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Syne:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
    html{scroll-behavior:smooth;}
    :root{
      --ink:#100e0b;
      --ink2:#2d2820;
      --muted:#6b6258;
      --gold:#c49a3c;
      --gold2:#e8bf6a;
      --gold3:#f5dfa0;
      --cream:#faf7f2;
      --cream2:#f2ece1;
      --cream3:#e8dece;
      --navy:#0e1830;
      --navy2:#162040;
      --line:rgba(16,14,11,.1);
      --linew:rgba(255,255,255,.12);
    }
    body{background:var(--cream);color:var(--ink);font-family:'DM Sans',sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden;}
    ::selection{background:var(--gold);color:#fff;}
    ::-webkit-scrollbar{width:3px;}
    ::-webkit-scrollbar-thumb{background:var(--gold);}

    /* ── PROGRESS ── */
    .prog{position:fixed;top:0;left:0;height:2px;background:linear-gradient(90deg,var(--gold),var(--gold2));z-index:9999;pointer-events:none;transition:width .1s;}

    /* ── NAV ── */
    .nav{position:fixed;top:0;left:0;right:0;z-index:500;height:68px;display:flex;align-items:center;padding:0 48px;justify-content:space-between;transition:all .5s cubic-bezier(.16,1,.3,1);}
    .nav.scrolled{background:rgba(250,247,242,.96);border-bottom:1px solid var(--line);backdrop-filter:blur(24px);}
    .nav-logo-wrap{display:flex;align-items:center;gap:14px;cursor:pointer;text-decoration:none;}
    .nav-logo-img{width:46px;height:46px;object-fit:contain;border-radius:4px;}
    .nav-logo-text{font-family:'Syne',sans-serif;font-size:17px;font-weight:800;color:var(--ink);line-height:1.1;transition:color .3s;}
    .nav.not-scrolled .nav-logo-text{color:#fff;}
    .nav-sub{font-family:'Space Mono',monospace;font-size:9px;color:var(--gold2);letter-spacing:.25em;text-transform:uppercase;margin-top:2px;}
    .nav-links{display:flex;align-items:center;gap:8px;}
    .nl{font-family:'DM Sans',sans-serif;font-size:14px;font-weight:600;padding:8px 14px;background:none;border:none;cursor:pointer;color:rgba(255,255,255,.75);transition:all .25s;position:relative;letter-spacing:.02em;}
    .nl::after{content:'';position:absolute;bottom:4px;left:14px;right:14px;height:1.5px;background:var(--gold2);transform:scaleX(0);transition:transform .3s cubic-bezier(.16,1,.3,1);}
    .nl:hover,.nl.on{color:var(--gold2);}
    .nl:hover::after,.nl.on::after{transform:scaleX(1);}
    .nav.scrolled .nl{color:var(--muted);}
    .nav.scrolled .nl:hover,.nav.scrolled .nl.on{color:var(--gold);}
    .nav.scrolled .nl::after{background:var(--gold);}
    .nav-cta{font-family:'Syne',sans-serif;font-size:12px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;padding:10px 22px;background:var(--gold);color:#fff;border:none;cursor:pointer;transition:all .25s;}
    .nav-cta:hover{background:var(--navy);transform:translateY(-1px);}

    /* ── HERO ── */
    .hero{position:relative;min-height:100vh;display:flex;align-items:flex-end;overflow:hidden;background:var(--navy);}
    .hero-bg{position:absolute;inset:0;z-index:0;}
    .hero-bg-img{position:absolute;inset:0;background-size:cover;background-position:center;transition:opacity 1.4s ease-in-out;}
    .hero-bg-overlay{position:absolute;inset:0;background:linear-gradient(to right, rgba(14,24,48,.92) 45%, rgba(14,24,48,.5) 75%, rgba(14,24,48,.3) 100%), linear-gradient(to top, rgba(14,24,48,.8) 0%, transparent 50%);}
    .hero-content{position:relative;z-index:1;padding:0 60px 80px;max-width:1200px;width:100%;}
    .hero-eyebrow{font-family:'Space Mono',monospace;font-size:11px;font-weight:700;letter-spacing:.3em;text-transform:uppercase;color:var(--gold2);margin-bottom:24px;display:flex;align-items:center;gap:16px;}
    .hero-eyebrow::before{content:'';display:block;width:32px;height:1px;background:var(--gold2);}
    .hero-h1{font-family:'Cormorant Garamond',serif;font-size:clamp(68px,10vw,140px);font-weight:700;color:#fff;line-height:.9;letter-spacing:-.02em;margin-bottom:32px;}
    .hero-h1 em{font-style:italic;color:var(--gold2);}
    .hero-desc{font-family:'DM Sans',sans-serif;font-size:17px;font-weight:400;color:rgba(255,255,255,.6);line-height:1.85;max-width:460px;margin-bottom:48px;}
    .hero-btns{display:flex;gap:14px;flex-wrap:wrap;}
    .btn-primary{font-family:'Syne',sans-serif;font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;padding:16px 36px;background:var(--gold);color:#fff;border:none;cursor:pointer;transition:all .3s;display:inline-block;text-decoration:none;}
    .btn-primary:hover{background:var(--gold2);transform:translateY(-2px);box-shadow:0 12px 32px rgba(196,154,60,.4);}
    .btn-ghost{font-family:'Syne',sans-serif;font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;padding:15px 36px;background:transparent;color:rgba(255,255,255,.8);border:1.5px solid rgba(255,255,255,.25);cursor:pointer;transition:all .3s;}
    .btn-ghost:hover{border-color:var(--gold2);color:var(--gold2);}
    .hero-stats{position:absolute;right:60px;bottom:80px;z-index:1;display:flex;flex-direction:column;gap:0;border:1px solid rgba(255,255,255,.1);overflow:hidden;min-width:180px;}
    .hero-stat{padding:22px 28px;background:rgba(255,255,255,.04);border-bottom:1px solid rgba(255,255,255,.08);backdrop-filter:blur(12px);}
    .hero-stat:last-child{border-bottom:none;}
    .hero-stat-n{font-family:'Cormorant Garamond',serif;font-size:44px;font-weight:700;color:var(--gold2);line-height:1;}
    .hero-stat-l{font-family:'Space Mono',monospace;font-size:9px;letter-spacing:.22em;text-transform:uppercase;color:rgba(255,255,255,.35);margin-top:4px;}
    .hero-scroll{position:absolute;bottom:32px;left:50%;transform:translateX(-50%);z-index:1;display:flex;flex-direction:column;align-items:center;gap:10px;cursor:pointer;opacity:.55;}
    .hero-scroll-line{width:1px;height:52px;background:linear-gradient(to bottom,transparent,var(--gold2));animation:scrollpulse 2s ease-in-out infinite;}
    .hero-img-dots{position:absolute;right:60px;top:50%;transform:translateY(-50%);z-index:1;display:flex;flex-direction:column;gap:8px;align-items:center;}
    @keyframes scrollpulse{0%,100%{opacity:.4;}50%{opacity:1;}}

    /* ── TRUST STRIP ── */
    .trust{background:var(--gold);padding:0;overflow:hidden;}
    .trust-inner{display:flex;align-items:stretch;}
    .trust-item{font-family:'Syne',sans-serif;font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#fff;padding:15px 32px;border-right:1px solid rgba(255,255,255,.2);white-space:nowrap;display:flex;align-items:center;gap:10px;}
    .trust-item:last-child{border-right:none;}

    /* ── TICKER ── */
    .ticker{background:var(--cream2);border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:13px 0;overflow:hidden;}
    .tick-t{display:inline-flex;animation:tick 32s linear infinite;white-space:nowrap;}
    .tick-t:hover{animation-play-state:paused;}
    .tick-i{font-family:'Space Mono',monospace;font-size:11px;color:var(--muted);padding:0 28px;display:inline-flex;align-items:center;gap:18px;}
    .tick-dot{width:4px;height:4px;border-radius:50%;background:var(--gold);}
    @keyframes tick{from{transform:translateX(0);}to{transform:translateX(-50%);}}

    /* ── SECTION BASE ── */
    .sec{padding:120px 60px;}
    .wrap{max-width:1200px;margin:0 auto;}
    .sec-eyebrow{font-family:'Space Mono',monospace;font-size:10px;font-weight:700;letter-spacing:.3em;text-transform:uppercase;color:var(--gold);margin-bottom:16px;display:flex;align-items:center;gap:14px;}
    .sec-eyebrow::before{content:'';width:24px;height:1px;background:var(--gold);display:block;}
    .sec-h2{font-family:'Cormorant Garamond',serif;font-size:clamp(40px,5vw,68px);font-weight:700;line-height:1.05;color:var(--ink);letter-spacing:-.01em;}
    .sec-h2 em{font-style:italic;color:var(--gold);}
    .sec-divider{width:48px;height:2px;background:linear-gradient(90deg,var(--gold),var(--gold2));margin-top:20px;}

    /* ── SERVICES ── */
    .services-sec{background:var(--cream);}
    .services-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:2px;margin-top:64px;background:var(--line);}
    .service-card{background:var(--cream);overflow:hidden;position:relative;cursor:default;}
    .service-card-img{height:280px;overflow:hidden;position:relative;}
    .service-card-img img{width:100%;height:100%;object-fit:cover;transition:transform .8s cubic-bezier(.16,1,.3,1);}
    .service-card:hover .service-card-img img{transform:scale(1.08);}
    .service-card-img-overlay{position:absolute;inset:0;background:linear-gradient(to top, rgba(14,24,48,.7) 0%, transparent 50%);}
    .service-card-body{padding:32px 36px 40px;}
    .service-card-badge{display:inline-block;font-family:'Space Mono',monospace;font-size:9px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--gold);border:1px solid rgba(196,154,60,.3);padding:5px 12px;margin-bottom:18px;}
    .service-card-title{font-family:'Syne',sans-serif;font-size:26px;font-weight:900;color:var(--ink);margin-bottom:12px;line-height:1.15;}
    .service-card-desc{font-family:'DM Sans',sans-serif;font-size:15px;color:var(--muted);line-height:1.8;margin-bottom:22px;}
    .service-points{display:flex;flex-direction:column;gap:9px;}
    .service-point{display:flex;align-items:center;gap:10px;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:600;color:var(--ink2);}
    .service-point::before{content:'';width:5px;height:5px;border-radius:50%;background:var(--gold);flex-shrink:0;}
    .service-card-hover-bar{position:absolute;bottom:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--gold),var(--gold2));transform:scaleX(0);transform-origin:left;transition:transform .5s cubic-bezier(.16,1,.3,1);}
    .service-card:hover .service-card-hover-bar{transform:scaleX(1);}

    /* ── GALLERY ── */
    .gallery-sec{background:var(--cream2);}
    .gallery-masonry{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:64px;}
    .gal-item{overflow:hidden;position:relative;cursor:pointer;background:var(--cream3);}
    .gal-item.tall{grid-row:span 2;}
    .gal-item.wide{grid-column:span 2;}
    .gal-item img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .7s cubic-bezier(.16,1,.3,1);}
    .gal-item:hover img{transform:scale(1.06);}
    .gal-item-overlay{position:absolute;inset:0;background:linear-gradient(to top, rgba(14,24,48,.85) 0%, transparent 55%);opacity:0;transition:opacity .4s;}
    .gal-item:hover .gal-item-overlay{opacity:1;}
    .gal-item-info{position:absolute;bottom:0;left:0;right:0;padding:20px 22px;transform:translateY(12px);transition:transform .4s cubic-bezier(.16,1,.3,1);opacity:0;}
    .gal-item:hover .gal-item-info{transform:translateY(0);opacity:1;}
    .gal-item-label{font-family:'Syne',sans-serif;font-size:16px;font-weight:800;color:#fff;margin-bottom:4px;}
    .gal-item-desc{font-family:'DM Sans',sans-serif;font-size:12px;color:rgba(255,255,255,.65);}
    .gal-item-icon{position:absolute;top:14px;right:14px;width:38px;height:38px;background:rgba(0,0,0,.4);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;font-size:18px;opacity:0;transition:opacity .3s;border:1px solid rgba(255,255,255,.15);}
    .gal-item:hover .gal-item-icon{opacity:1;}
    .gal-placeholder{display:flex;align-items:center;justify-content:center;background:var(--cream3);height:100%;}
    .gal-placeholder-inner{display:flex;flex-direction:column;align-items:center;gap:12px;}

    /* ── FEATURED PRODUCTS ── */
    .featured-sec{background:var(--navy);padding:120px 60px;}
    .featured-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:2px;margin-top:64px;background:rgba(255,255,255,.06);}
    .feat-card{background:var(--navy2);overflow:hidden;position:relative;cursor:pointer;transition:background .3s;}
    .feat-card:hover{background:rgba(22,32,64,.8);}
    .feat-card-img{height:220px;overflow:hidden;position:relative;}
    .feat-card-img img{width:100%;height:100%;object-fit:cover;transition:transform .7s cubic-bezier(.16,1,.3,1);filter:brightness(.85);}
    .feat-card:hover .feat-card-img img{transform:scale(1.1);filter:brightness(1);}
    .feat-card-body{padding:28px 30px 36px;}
    .feat-card-num{font-family:'Space Mono',monospace;font-size:10px;color:rgba(255,255,255,.2);letter-spacing:.2em;margin-bottom:14px;}
    .feat-card-title{font-family:'Cormorant Garamond',serif;font-size:28px;font-weight:700;color:#fff;margin-bottom:10px;font-style:italic;}
    .feat-card-desc{font-family:'DM Sans',sans-serif;font-size:13px;color:rgba(255,255,255,.45);line-height:1.75;margin-bottom:20px;}
    .feat-card-tags{display:flex;flex-wrap:wrap;gap:6px;}
    .feat-tag{font-family:'Space Mono',monospace;font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:var(--gold2);border:1px solid rgba(232,191,106,.2);padding:4px 10px;}
    .feat-card-arrow{position:absolute;top:20px;right:20px;width:36px;height:36px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.4);font-size:16px;transition:all .3s;}
    .feat-card:hover .feat-card-arrow{background:var(--gold);border-color:var(--gold);color:#fff;}

    /* ── SHOWCASE STRIP ── */
    .showcase-strip{background:var(--cream3);padding:0;overflow:hidden;}
    .showcase-row{display:flex;gap:2px;}
    .showcase-img{flex:1;height:260px;overflow:hidden;position:relative;}
    .showcase-img img{width:100%;height:100%;object-fit:cover;transition:transform .6s cubic-bezier(.16,1,.3,1);}
    .showcase-img:hover img{transform:scale(1.08);}

    /* ── ABOUT ── */
    .about-sec{background:var(--cream);}
    .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;}
    .about-img-collage{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:200px 200px;gap:10px;}
    .about-img-main{grid-row:1/3;overflow:hidden;}
    .about-img-main img{width:100%;height:100%;object-fit:cover;transition:transform .7s cubic-bezier(.16,1,.3,1);}
    .about-img-main:hover img{transform:scale(1.04);}
    .about-img-sm{overflow:hidden;}
    .about-img-sm img{width:100%;height:100%;object-fit:cover;transition:transform .7s cubic-bezier(.16,1,.3,1);}
    .about-img-sm:hover img{transform:scale(1.06);}
    .about-info-badge{display:inline-flex;align-items:center;gap:12px;font-family:'Space Mono',monospace;font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:var(--muted);background:var(--cream2);border:1px solid var(--line);padding:10px 18px;margin-bottom:24px;}
    .about-stats-row{display:flex;gap:0;border:1px solid var(--line);margin-top:40px;overflow:hidden;}
    .about-stat{flex:1;padding:24px 20px;text-align:center;border-right:1px solid var(--line);}
    .about-stat:last-child{border-right:none;}
    .about-stat-n{font-family:'Cormorant Garamond',serif;font-size:48px;font-weight:700;color:var(--navy);line-height:1;}
    .about-stat-l{font-family:'Space Mono',monospace;font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:var(--muted);margin-top:6px;}
    .about-contact-box{background:var(--navy);padding:32px 36px;margin-top:32px;}
    .about-contact-item{display:flex;gap:14px;align-items:flex-start;padding:14px 0;border-bottom:1px solid rgba(255,255,255,.07);}
    .about-contact-item:last-child{border-bottom:none;}
    .about-contact-icon{font-size:18px;margin-top:1px;flex-shrink:0;}
    .about-contact-text{font-family:'DM Sans',sans-serif;font-size:14px;color:rgba(255,255,255,.5);line-height:1.65;}
    .about-contact-label{font-family:'Space Mono',monospace;font-size:9px;letter-spacing:.22em;text-transform:uppercase;color:var(--gold2);margin-bottom:4px;}

    /* ── REVIEWS ── */
    .reviews-sec{background:var(--cream2);}
    .review-carousel{max-width:780px;margin:64px auto 0;}
    .review-card{background:#fff;padding:52px 56px;border:1px solid var(--line);position:relative;overflow:hidden;}
    .review-card::before{content:'\201C';position:absolute;top:-10px;left:24px;font-family:'Cormorant Garamond',serif;font-size:120px;color:var(--gold);opacity:.12;line-height:1;}
    .review-stars{color:var(--gold);font-size:18px;letter-spacing:3px;margin-bottom:24px;}
    .review-text{font-family:'Cormorant Garamond',serif;font-size:22px;font-style:italic;color:var(--ink);line-height:1.7;margin-bottom:32px;}
    .review-author{display:flex;align-items:center;gap:16px;}
    .review-avatar{width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,var(--navy),#2a3880);display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-size:20px;font-weight:900;color:var(--gold2);}
    .review-name{font-family:'Syne',sans-serif;font-size:16px;font-weight:800;color:var(--ink);}
    .review-ago{font-family:'Space Mono',monospace;font-size:10px;color:var(--muted);letter-spacing:.12em;margin-top:4px;}
    .review-dots{display:flex;justify-content:center;gap:8px;margin-top:24px;}
    .review-dot{width:8px;height:8px;border-radius:50%;border:none;cursor:pointer;transition:all .3s;background:var(--cream3);}
    .review-dot.on{background:var(--gold);width:28px;border-radius:4px;}
    @keyframes revIn{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:none;}}
    .rev-animate{animation:revIn .6s cubic-bezier(.16,1,.3,1) both;}

    /* ── FAQ ── */
    .faq-sec{background:var(--cream);}
    .faq-wrap{max-width:740px;margin:64px auto 0;}
    .faq-item{border-bottom:1px solid var(--line);}
    .faq-btn{width:100%;display:flex;justify-content:space-between;align-items:center;padding:24px 0;background:none;border:none;cursor:pointer;gap:24px;text-align:left;}
    .faq-q{font-family:'DM Sans',sans-serif;font-size:17px;font-weight:700;color:var(--ink);line-height:1.5;}
    .faq-icon{font-size:22px;color:var(--gold);font-weight:900;flex-shrink:0;transition:transform .35s cubic-bezier(.16,1,.3,1);font-family:'DM Sans',sans-serif;}
    .faq-answer{max-height:0;overflow:hidden;transition:max-height .5s cubic-bezier(.16,1,.3,1);}
    .faq-answer-inner{padding:0 0 24px;font-family:'DM Sans',sans-serif;font-size:15px;color:var(--muted);line-height:1.9;}

    /* ── CONTACT ── */
    .contact-sec{background:var(--navy);padding:120px 60px;}
    .contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;}
    .inp{width:100%;padding:16px 20px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);color:#fff;font-family:'DM Sans',sans-serif;font-size:15px;outline:none;resize:none;transition:border-color .25s;}
    .inp::placeholder{color:rgba(255,255,255,.3);font-size:14px;}
    .inp:focus{border-color:var(--gold2);}
    .inp option{background:var(--navy);color:#fff;}
    .form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
    .contact-info-item{display:flex;gap:16px;padding:20px 0;border-bottom:1px solid rgba(255,255,255,.07);}
    .contact-info-item:last-of-type{border-bottom:none;}
    .contact-icon-box{width:48px;height:48px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;}
    .contact-label{font-family:'Space Mono',monospace;font-size:9px;letter-spacing:.25em;text-transform:uppercase;color:var(--gold2);margin-bottom:6px;}
    .contact-val{font-family:'DM Sans',sans-serif;font-size:15px;color:rgba(255,255,255,.55);line-height:1.65;white-space:pre-line;}
    .contact-map{border:1px solid rgba(255,255,255,.08);overflow:hidden;margin-top:20px;}
    .contact-map-link{display:flex;align-items:center;justify-content:center;gap:8px;padding:14px;background:rgba(255,255,255,.05);color:var(--gold2);text-decoration:none;font-family:'Syne',sans-serif;font-size:11px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;transition:background .25s;}
    .contact-map-link:hover{background:var(--gold);}
    .wa-btn{display:flex;align-items:center;justify-content:center;gap:10px;padding:16px;background:#22c55e;color:#fff;border:none;cursor:pointer;font-family:'Syne',sans-serif;font-size:12px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;transition:background .25s;}
    .wa-btn:hover{background:#16a34a;}

    /* ── FOOTER ── */
    footer{background:var(--ink);padding:72px 60px 32px;}
    .footer-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:48px;margin-bottom:56px;}
    .footer-brand-name{font-family:'Cormorant Garamond',serif;font-size:28px;font-weight:700;color:#fff;font-style:italic;margin-bottom:6px;}
    .footer-brand-sub{font-family:'Space Mono',monospace;font-size:9px;letter-spacing:.3em;text-transform:uppercase;color:var(--gold2);margin-bottom:16px;}
    .footer-desc{font-family:'DM Sans',sans-serif;font-size:13px;color:rgba(255,255,255,.3);line-height:1.85;}
    .footer-col-title{font-family:'Syne',sans-serif;font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);margin-bottom:18px;}
    .footer-link{display:block;font-family:'DM Sans',sans-serif;font-size:13px;color:rgba(255,255,255,.35);margin-bottom:10px;cursor:pointer;transition:color .2s;background:none;border:none;text-align:left;padding:0;}
    .footer-link:hover{color:var(--gold2);}
    .footer-bottom{border-top:1px solid rgba(255,255,255,.07);padding-top:22px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;}
    .footer-copy{font-family:'DM Sans',sans-serif;font-size:13px;color:rgba(255,255,255,.2);}
    .footer-mono{font-family:'Space Mono',monospace;font-size:10px;color:rgba(255,255,255,.15);letter-spacing:.2em;}

    /* ── MODAL ── */
    .modal-bg{position:fixed;inset:0;z-index:800;background:rgba(10,12,20,.92);display:flex;align-items:center;justify-content:center;backdrop-filter:blur(16px);padding:20px;}
    .modal-box{background:var(--cream);width:100%;max-width:1080px;max-height:92vh;overflow-y:auto;position:relative;}
    .modal-hdr{padding:30px 40px 24px;border-bottom:1px solid var(--line);display:flex;align-items:flex-start;justify-content:space-between;position:sticky;top:0;background:var(--cream);z-index:2;}
    .modal-close{width:42px;height:42px;border:1px solid var(--line);background:none;cursor:pointer;font-size:18px;display:flex;align-items:center;justify-content:center;transition:all .22s;flex-shrink:0;color:var(--ink);}
    .modal-close:hover{background:var(--ink);color:#fff;}
    .modal-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:4px;padding:0;}
    .modal-img{aspect-ratio:4/3;overflow:hidden;cursor:zoom-in;position:relative;}
    .modal-img img{width:100%;height:100%;object-fit:cover;transition:transform .6s cubic-bezier(.16,1,.3,1);}
    .modal-img:hover img{transform:scale(1.06);}
    .modal-actions{padding:28px 40px 36px;display:flex;gap:12px;background:var(--cream2);border-top:1px solid var(--line);}

    /* ── LIGHTBOX ── */
    .lb-bg{position:fixed;inset:0;z-index:900;background:rgba(0,0,0,.97);display:flex;align-items:center;justify-content:center;}
    .lb-img{max-width:90vw;max-height:90vh;object-fit:contain;display:block;}
    .lb-nav{position:absolute;top:50%;transform:translateY(-50%);width:52px;height:52px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);color:#fff;font-size:22px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;font-family:'DM Sans',sans-serif;}
    .lb-nav:hover{background:var(--gold);border-color:var(--gold);}
    .lb-close{position:absolute;top:20px;right:20px;width:44px;height:44px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);color:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;font-family:'DM Sans',sans-serif;}
    .lb-close:hover{background:rgba(255,255,255,.2);}
    .lb-counter{position:absolute;bottom:24px;left:50%;transform:translateX(-50%);font-family:'Space Mono',monospace;font-size:11px;color:rgba(255,255,255,.4);letter-spacing:.2em;}

    /* ── WA FLOAT ── */
    .wa-float{position:fixed;bottom:28px;right:28px;width:56px;height:56px;border-radius:50%;background:#22c55e;display:flex;align-items:center;justify-content:center;z-index:400;box-shadow:0 6px 24px rgba(34,197,94,.45);transition:transform .25s,box-shadow .25s;text-decoration:none;}
    .wa-float:hover{transform:scale(1.12);box-shadow:0 12px 36px rgba(34,197,94,.6);}

    /* ── ANIMATIONS ── */
    @keyframes hup{from{opacity:0;transform:translateY(28px);}to{opacity:1;transform:none;}}

    /* ── MOBILE ── */
    @media(max-width:1024px){
      .services-grid{grid-template-columns:1fr;}
      .featured-grid{grid-template-columns:1fr 1fr;}
      .footer-grid{grid-template-columns:1fr 1fr;}
    }
    @media(max-width:768px){
      .sec{padding:80px 24px;}
      .featured-sec,.contact-sec{padding:80px 24px;}
      footer{padding:60px 24px 28px;}
      .nav{padding:0 24px;}
      .nd{display:none!important;}
      .hero-content{padding:0 24px 72px;}
      .hero-stats{display:none;}
      .hero-img-dots{display:none;}
      .about-grid,.contact-grid{grid-template-columns:1fr;}
      .gallery-masonry{grid-template-columns:1fr 1fr!important;}
      .gal-item.tall,.gal-item.wide{grid-row:auto;grid-column:auto;}
      .featured-grid{grid-template-columns:1fr;}
      .showcase-row{flex-wrap:wrap;}
      .showcase-img{height:180px;min-width:50%;}
      .footer-grid{grid-template-columns:1fr;}
      .modal-grid{grid-template-columns:1fr 1fr!important;}
      .review-card{padding:32px 28px;}
      .hero-h1{font-size:clamp(52px,12vw,80px);}
      .about-img-collage{grid-template-columns:1fr;grid-template-rows:180px 120px 120px;}
      .about-img-main{grid-row:auto;}
      .form-row{grid-template-columns:1fr;}
      .modal-actions{flex-wrap:wrap;}
    }

    /* mobile menu */
    .mobile-menu{position:fixed;inset:0;z-index:600;background:var(--navy);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;transform:translateX(100%);transition:transform .5s cubic-bezier(.16,1,.3,1);}
    .mobile-menu.open{transform:translateX(0);}
    .mobile-nl{font-family:'Cormorant Garamond',serif;font-size:clamp(40px,8vw,56px);font-weight:700;font-style:italic;color:#fff;background:none;border:none;cursor:pointer;padding:8px 0;transition:color .25s;line-height:1.15;}
    .mobile-nl:hover{color:var(--gold2);}
    .hamburger{width:40px;height:40px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:5px;z-index:700;position:relative;}
    .ham-line{width:24px;height:1.5px;background:var(--gold2);transition:all .35s;}
    .hamburger.open .ham-line:nth-child(1){transform:rotate(45deg) translate(4.5px,4.5px);}
    .hamburger.open .ham-line:nth-child(2){opacity:0;transform:scaleX(0);}
    .hamburger.open .ham-line:nth-child(3){transform:rotate(-45deg) translate(4.5px,-4.5px);}
  `;

  const FAQS = [
    { q:"What is your turnaround time?", a:"Most jobs are completed within 1–3 working days. For large bulk orders, we will give you a clear timeline when you place your order." },
    { q:"What file formats do you accept?", a:"We accept PDF, PNG, JPG, AI, PSD and CorelDRAW files. For best results, submit PDF at 300 DPI. Our team can also help create or adjust your artwork." },
    { q:"Do you offer design services?", a:"Yes! Our in-house DTP team creates or refines your artwork. We offer affordable design packages for brochures, invitations, menus, and more." },
    { q:"What is your minimum order quantity?", a:"We accept any size order — even a single card or name plate. Bulk orders receive better per-unit pricing." },
    { q:"How do I place an order?", a:"Visit our shop in Gandhipuram, call us at 9842262124 & 98427 35737, WhatsApp us, or fill in the quote form on this page." },
  ];

  return (
    <div style={{ background:"var(--cream)", color:"var(--ink)", minHeight:"100vh" }}>
      <style>{CSS}</style>

      {/* Progress bar */}
      <div className="prog" style={{ width:`${pct}%` }} />

      {/* WhatsApp float */}
      <a href="https://wa.me/919842262124?text=Hi%2C%20I%27d%20like%20a%20quote%20from%20Sri%20Darshna%20Printers" target="_blank" rel="noopener noreferrer" className="wa-float">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenu ? "open" : ""}`}>
        {NAV.map((n, i) => (
          <button key={n} className="mobile-nl" style={{ animationDelay:`${i*.07}s` }} onClick={() => go(n)}>{n}</button>
        ))}
        <div style={{ marginTop:24, display:"flex", gap:12 }}>
          <a href="tel:+919842262124" style={{ fontFamily:"'Space Mono',monospace", fontSize:12, color:"rgba(255,255,255,.4)", textDecoration:"none" }}>9842262124</a>
        </div>
      </div>

      {/* ══ NAVBAR ══ */}
      <nav className={`nav ${navUp ? "scrolled" : "not-scrolled"}`}>
        <div className="nav-logo-wrap" onClick={() => go("home")}>
          <img src={logo} alt="Sri Darshna Printers" className="nav-logo-img" />
          <div>
            <div className="nav-logo-text">Sri Darshna Printers</div>
            <div className="nav-sub">Est. 1999 · Coimbatore</div>
          </div>
        </div>
        <div className="nav-links nd">
          {NAV.map(n => (
            <button key={n} className={`nl ${activeNav === n ? "on" : ""}`} onClick={() => go(n)}>{n}</button>
          ))}
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:12 }}>
          <button className="nav-cta nd" onClick={() => go("contact")}>Contact Us</button>
          <a href="tel:+919842262124" className="nd" style={{ fontFamily:"'Space Mono',monospace", fontSize:12, fontWeight:700, color: navUp ? "var(--gold)" : "var(--gold2)", textDecoration:"none", letterSpacing:".04em" }}>9842262124</a>
          <button className={`hamburger ${mobileMenu ? "open" : ""}`} onClick={() => setMobileMenu(m => !m)} style={{ display:"none" }} id="ham">
            <span className="ham-line"/><span className="ham-line"/><span className="ham-line"/>
          </button>
        </div>
      </nav>
      <style>{`@media(max-width:768px){#ham{display:flex!important;}}`}</style>

      {/* ══ HERO ══ */}
      <section id="home">
        <div className="hero">
          <div className="hero-bg">
            {HERO_IMGS.map((img, i) => (
              <div key={i} className="hero-bg-img" style={{
                backgroundImage:`url(${img})`,
                opacity: i === heroIdx ? 1 : 0,
              }} />
            ))}
            <div className="hero-bg-overlay" />
          </div>

          {/* Image indicator dots */}
          <div className="hero-img-dots">
            {HERO_IMGS.map((_, i) => (
              <button key={i} onClick={() => setHeroIdx(i)} style={{
                width: i === heroIdx ? 2 : 2,
                height: i === heroIdx ? 32 : 8,
                background: i === heroIdx ? "var(--gold2)" : "rgba(255,255,255,.25)",
                border: "none",
                cursor: "pointer",
                borderRadius: 2,
                transition: "all .4s",
                padding: 0,
              }} />
            ))}
          </div>

          <div className="hero-content">
            <div className="hero-eyebrow" style={{ animation:"hup .8s .1s both" }}>
              Gandhipuram, Coimbatore
              <span style={{ color:"rgba(255,255,255,.3)", fontSize:9, letterSpacing:".18em" }}>★★★★★ 5.0 · 20 Reviews</span>
            </div>
            <h1 className="hero-h1" style={{ animation:"hup .95s .2s both" }}>
              Sri Darshna<br /><em>Printers</em>
            </h1>
            <p className="hero-desc" style={{ animation:"hup .9s .4s both" }}>
              Premium printing for every need — from visiting cards to giant flex boards. Quality you can see, prices you will love. Serving Coimbatore since 1999.
            </p>
            <div className="hero-btns" style={{ animation:"hup .9s .55s both" }}>
              <button className="btn-primary" onClick={() => go("contact")}>Contact Us</button>
              <button className="btn-ghost" onClick={() => go("gallery")}>View Our Work</button>
            </div>
          </div>

          {/* Stats panel */}
          <div className="hero-stats" style={{ animation:"hup .9s .6s both" }}>
            {[["25+","Years"],["18+","Products"],["20","Reviews"],["5★","Rated"]].map(([n, l]) => (
              <div key={l} className="hero-stat">
                <div className="hero-stat-n">{n}</div>
                <div className="hero-stat-l">{l}</div>
              </div>
            ))}
          </div>

          <div className="hero-scroll" onClick={() => go("services")}>
            <div className="hero-scroll-line" />
            <span style={{ fontFamily:"'Space Mono',monospace", fontSize:9, color:"rgba(255,255,255,.35)", letterSpacing:".28em", textTransform:"uppercase" }}>scroll</span>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="trust">
        <div className="trust-inner" style={{ overflowX:"auto" }}>
          {["✦ Lowest Prices in CBE","✦ 18+ Print Products","✦ 5-Star Rated","✦ Est. 1999","✦ DTP & Design Support","✦ Quick Turnaround"].map(t => (
            <div key={t} className="trust-item">{t}</div>
          ))}
        </div>
      </div>

      {/* Ticker */}
      <div className="ticker">
        <div className="tick-t">
          {[...TICKER,...TICKER,...TICKER,...TICKER].map((t, i) => (
            <span key={i} className="tick-i"><span className="tick-dot"/>{t}</span>
          ))}
        </div>
      </div>

      {/* ══ SERVICES ══ */}
      <section id="services" className="sec services-sec">
        <div className="wrap">
          <Reveal>
            <div className="sec-eyebrow">How We Print</div>
            <h2 className="sec-h2">Our Printing <em>Methods</em></h2>
            <div className="sec-divider"/>
            <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:17, color:"var(--muted)", lineHeight:1.85, maxWidth:500, marginTop:16 }}>
              We use the right technology for every job — ensuring the best result whether you need a single card or a bulk production run.
            </p>
          </Reveal>
          <div className="services-grid">
            {PRINT_TYPES.map((pt, i) => (
              <Reveal key={pt.id} d={i * .08}>
                <div className="service-card">
                  <div className="service-card-img">
                    <img src={pt.cover} alt={pt.name} />
                    <div className="service-card-img-overlay"/>
                  </div>
                  <div className="service-card-body">
                    <div className="service-card-badge">{pt.icon} {pt.name}</div>
                    <h3 className="service-card-title">{pt.name}</h3>
                    <p className="service-card-desc">{pt.desc}</p>
                    <div className="service-points">
                      {pt.points.map(p => <div key={p} className="service-point">{p}</div>)}
                    </div>
                  </div>
                  <div className="service-card-hover-bar"/>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SHOWCASE STRIP ══ */}
      <div className="showcase-strip">
        <div className="showcase-row">
          {[b7, b1, b19, b43, b39, b13].map((img, i) => (
            <div key={i} className="showcase-img">
              <img src={img} alt="print sample" />
            </div>
          ))}
        </div>
      </div>

      {/* ══ GALLERY ══ */}
      <section id="gallery" className="sec gallery-sec">
        <div className="wrap">
          <Reveal style={{ marginBottom:8 }}>
            <div className="sec-eyebrow">Our Work</div>
            <h2 className="sec-h2">Product <em>Gallery</em></h2>
            <div className="sec-divider"/>
            <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:17, color:"var(--muted)", lineHeight:1.85, maxWidth:500, marginTop:16 }}>
              Browse our range. Click any category to see all prints — tap an image to view full size.
            </p>
          </Reveal>

          <div className="gallery-masonry">
            {GALLERY_CATS.map((cat, i) => (
              <Reveal key={cat.id} d={i * .03}>
                <div
                  className={`gal-item ${cat.span === "tall" ? "tall" : ""} ${cat.span === "wide" ? "wide" : ""}`}
                  style={{ minHeight: cat.span === "tall" ? 480 : cat.span === "wide" ? 240 : 240 }}
                  onClick={() => setModalCat(cat)}
                >
                  {cat.imgs && cat.imgs.length > 0 && typeof cat.imgs[0] === "string" ? (
                    <img src={cat.imgs[0]} alt={cat.label} loading="lazy" />
                  ) : (
                    <div className="gal-placeholder" style={{ height:"100%", background:`linear-gradient(135deg, #1a1f5e22, #0a254022)` }}>
                      <div className="gal-placeholder-inner">
                        <span style={{ fontSize:36 }}>{cat.icon}</span>
                        <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:13, color:"var(--muted)", fontWeight:600 }}>{cat.label}</span>
                      </div>
                    </div>
                  )}
                  <div className="gal-item-overlay"/>
                  <div className="gal-item-info">
                    <div className="gal-item-label">{cat.label}</div>
                    <div className="gal-item-desc">{cat.desc}</div>
                  </div>
                  <div className="gal-item-icon">{cat.icon}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURED PRODUCTS ══ */}
      <section className="featured-sec">
        <div className="wrap">
          <Reveal>
            <div className="sec-eyebrow" style={{ color:"var(--gold2)" }}>
              <span style={{ background:"var(--gold2)", display:"block", width:24, height:1 }}/>
              Popular Products
            </div>
            <h2 className="sec-h2" style={{ color:"#fff" }}>Customer <em style={{ color:"var(--gold2)" }}>Favourites</em></h2>
            <div className="sec-divider" style={{ background:"linear-gradient(90deg, var(--gold2), var(--gold3))" }}/>
          </Reveal>
          <div className="featured-grid" style={{ marginTop:64 }}>
            {[
              { title:"Business Cards", desc:"Matte, gloss & soft-touch. Every card tells your story.", imgs:[b1,b2,b3,b4], tags:["Matte","Gloss","Round Corner"] },
              { title:"Invitations", desc:"Weddings, events & launches. We make first impressions count.", imgs:[b7,b8,b9,b10], tags:["Wedding","Corporate","Event"] },
              { title:"Brochures", desc:"Tri-fold to multi-page. Sharp print, vivid colours.", imgs:[b13,b14,b15,b16], tags:["Tri-fold","Bi-fold","Full Colour"] },
            ].map((item, i) => (
              <Reveal key={item.title} d={i * .09}>
                <div className="feat-card" onClick={() => {
                  const cat = GALLERY_CATS.find(c => c.label.toLowerCase().includes(item.title.toLowerCase().split(" ")[0]));
                  if (cat) setModalCat(cat);
                }}>
                  <div className="feat-card-img">
                    <img src={item.imgs[0]} alt={item.title} />
                  </div>
                  <div className="feat-card-body">
                    <div className="feat-card-num">0{i+1} —</div>
                    <div className="feat-card-title">{item.title}</div>
                    <div className="feat-card-desc">{item.desc}</div>
                    <div className="feat-card-tags">
                      {item.tags.map(t => <span key={t} className="feat-tag">{t}</span>)}
                    </div>
                  </div>
                  <div className="feat-card-arrow">→</div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* secondary row */}
          <div className="featured-grid" style={{ marginTop:2, gridTemplateColumns:"repeat(4,1fr)" }}>
            {[
              { title:"Lamination", img:b31 },
              { title:"ID Cards", img:b24 },
              { title:"Rubber Stamps", img:b28 },
              { title:"Flex Boards", img:b19 },
            ].map((item, i) => (
              <Reveal key={item.title} d={i * .06}>
                <div className="feat-card" onClick={() => {
                  const cat = GALLERY_CATS.find(c => c.label.toLowerCase().includes(item.title.toLowerCase().split(" ")[0]));
                  if (cat) setModalCat(cat);
                }}>
                  <div className="feat-card-img" style={{ height:180 }}>
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="feat-card-body" style={{ paddingBottom:24 }}>
                    <div className="feat-card-title" style={{ fontSize:22 }}>{item.title}</div>
                  </div>
                  <div className="feat-card-arrow">→</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section id="about" className="sec about-sec">
        <div className="wrap">
          <div className="about-grid">
            <Reveal>
              <div className="about-img-collage">
                <div className="about-img-main">
                  <img src={b7} alt="invitation print" />
                </div>
                <div className="about-img-sm">
                  <img src={b1} alt="business card" />
                </div>
                <div className="about-img-sm">
                  <img src={b43} alt="poster print" />
                </div>
              </div>
              <div className="about-contact-box">
                {[
                  { ic:"📍", label:"Address", val:"530, 7th Street Ext\nGandhipuram, Coimbatore 641012" },
                  { ic:"📞", label:"Phone", val:"9842262124 & 98427 35737" },
                  { ic:"⏰", label:"Hours", val:"Opens at 10 AM · Monday – Saturday" },
                ].map(({ ic, label, val }) => (
                  <div key={label} className="about-contact-item">
                    <div className="about-contact-icon">{ic}</div>
                    <div>
                      <div className="about-contact-label">{label}</div>
                      <div className="about-contact-text">{val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <div>
              <Reveal>
                <div className="about-info-badge">
                  <span style={{ color:"var(--gold)" }}>★★★★★</span>
                  5.0 · 20 Google Reviews
                </div>
                <div className="sec-eyebrow">Our Story</div>
                <h2 className="sec-h2">Gandhipuram's Most<br /><em>Trusted Print Shop</em></h2>
                <div className="sec-divider"/>
              </Reveal>
              <Reveal d={.1}>
                <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:16, color:"var(--muted)", lineHeight:1.95, marginTop:24, marginBottom:18 }}>
                  Sri Darshna Printers has been the go-to printing destination for residents, businesses and institutions across Coimbatore since 1999. Located in the heart of Gandhipuram, we have built our reputation on exceptional quality at the lowest prices.
                </p>
                <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:16, color:"var(--muted)", lineHeight:1.95, marginBottom:8 }}>
                  Whether it is a single visiting card or a bulk calendar order, our experienced team ensures every job is completed with precision — with in-house DTP and design support for every client.
                </p>
                <div className="about-stats-row">
                  {[["25+","Years"],["18+","Products"],["20","Reviews"],["5★","Rated"]].map(([n, l]) => (
                    <div key={l} className="about-stat">
                      <div className="about-stat-n">{n}</div>
                      <div className="about-stat-l">{l}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop:32, display:"flex", gap:14, flexWrap:"wrap" }}>
                  <button className="btn-primary" onClick={() => go("contact")}>Contact Us</button>
                  <a href="https://wa.me/919842735737" target="_blank" rel="noopener noreferrer"
                    style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"15px 28px", background:"#22c55e", color:"#fff", textDecoration:"none", fontFamily:"'Syne',sans-serif", fontSize:12, fontWeight:800, letterSpacing:".1em", textTransform:"uppercase", transition:"background .25s" }}
                    onMouseOver={e=>e.currentTarget.style.background="#16a34a"}
                    onMouseOut={e=>e.currentTarget.style.background="#22c55e"}>
                    WhatsApp Us
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══ REVIEWS ══ */}
      <section className="sec reviews-sec">
        <div className="wrap">
          <Reveal style={{ textAlign:"center" }}>
            <div className="sec-eyebrow" style={{ justifyContent:"center" }}>Client Voices</div>
            <h2 className="sec-h2" style={{ textAlign:"center" }}>What Customers <em>Say</em></h2>
            <div className="sec-divider" style={{ margin:"18px auto" }}/>
            <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:16, color:"var(--muted)", maxWidth:420, margin:"16px auto 0", lineHeight:1.85 }}>
              20 verified Google reviews. Every one of them — five stars.
            </p>
          </Reveal>
          <div className="review-carousel">
            <div key={revIdx} className="review-card rev-animate">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"{REVIEWS[revIdx].text}"</p>
              <div className="review-author">
                <div className="review-avatar">{REVIEWS[revIdx].initial}</div>
                <div>
                  <div className="review-name">{REVIEWS[revIdx].name}</div>
                  <div className="review-ago">{REVIEWS[revIdx].ago}</div>
                </div>
              </div>
            </div>
            <div className="review-dots">
              {REVIEWS.map((_, i) => (
                <button key={i} className={`review-dot ${i === revIdx ? "on" : ""}`} onClick={() => setRevIdx(i)} />
              ))}
            </div>
            <div style={{ textAlign:"center", marginTop:28 }}>
              <a href="https://maps.google.com/?q=Sri+Darshna+Printers+Gandhipuram+Coimbatore" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily:"'Space Mono',monospace", fontSize:10, fontWeight:700, letterSpacing:".2em", textTransform:"uppercase", color:"var(--gold)", textDecoration:"none", borderBottom:"1px solid rgba(196,154,60,.35)", paddingBottom:2 }}>
                View All Reviews on Google →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Second showcase strip */}
      <div className="showcase-strip">
        <div className="showcase-row">
          {[b28, b35, b37, b20, b41, b44].map((img, i) => (
            <div key={i} className="showcase-img">
              <img src={img} alt="print sample" />
            </div>
          ))}
        </div>
      </div>

      {/* ══ FAQ ══ */}
      <section className="sec faq-sec">
        <div className="wrap">
          <Reveal style={{ textAlign:"center" }}>
            <div className="sec-eyebrow" style={{ justifyContent:"center" }}>FAQ</div>
            <h2 className="sec-h2" style={{ textAlign:"center" }}>Frequently Asked <em>Questions</em></h2>
            <div className="sec-divider" style={{ margin:"18px auto" }}/>
          </Reveal>
          <div className="faq-wrap">
            {FAQS.map((f, i) => (
              <Reveal key={i} d={i * .05}>
                <div className="faq-item">
                  <button className="faq-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span className="faq-q">{f.q}</span>
                    <span className="faq-icon" style={{ transform: openFaq === i ? "rotate(45deg)" : "none" }}>+</span>
                  </button>
                  <div className="faq-answer" style={{ maxHeight: openFaq === i ? 300 : 0 }}>
                    <div className="faq-answer-inner">{f.a}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" className="contact-sec">
        <div className="wrap">
          <Reveal style={{ textAlign:"center", marginBottom:64 }}>
            <div className="sec-eyebrow" style={{ color:"var(--gold2)", justifyContent:"center" }}>
              <span style={{ width:24, height:1, background:"var(--gold2)", display:"block" }}/>
              Get in Touch
            </div>
            <h2 className="sec-h2" style={{ color:"#fff", textAlign:"center" }}>Request a <em style={{ color:"var(--gold2)" }}>Contact Us</em></h2>
            <div className="sec-divider" style={{ margin:"18px auto", background:"linear-gradient(90deg,var(--gold2),var(--gold3))" }}/>
          </Reveal>
          <div className="contact-grid">
            <Reveal>
              {sent ? (
                <div style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.08)", padding:"64px 48px", textAlign:"center" }}>
                  <div style={{ fontSize:56, marginBottom:20 }}>✅</div>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:36, fontWeight:700, color:"#fff", marginBottom:12, fontStyle:"italic" }}>Thank You!</div>
                  <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:16, color:"rgba(255,255,255,.45)" }}>We have received your enquiry and will be in touch shortly.</p>
                </div>
              ) : (
                <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                  <div className="form-row">
                    <input className="inp" placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name:e.target.value})} />
                    <input className="inp" placeholder="Phone Number" value={form.phone} onChange={e => setForm({...form, phone:e.target.value})} />
                  </div>
                  <select className="inp" value={form.service} onChange={e => setForm({...form, service:e.target.value})} style={{ color: form.service ? "#fff" : "rgba(255,255,255,.3)" }}>
                    <option value="" disabled>Select a Product / Service</option>
                    {[...PRINT_TYPES.map(p=>({name:p.name,icon:p.icon})),...GALLERY_CATS.map(g=>({name:g.label,icon:g.icon}))].map(s => (
                      <option key={s.name}>{s.icon} {s.name}</option>
                    ))}
                  </select>
                  <textarea className="inp" rows={5} placeholder="Describe your requirement — quantity, size, material..." value={form.message} onChange={e => setForm({...form, message:e.target.value})} style={{ resize:"vertical" }}/>
                  <button className="btn-primary" style={{ padding:16, fontSize:12, letterSpacing:".14em" }} onClick={() => { if (form.name && form.phone) setSent(true); }}>
                    Send Enquiry →
                  </button>
                  <a href="https://wa.me/919842262124?text=Hi%2C%20I%27d%20like%20a%20printing%20quote" target="_blank" rel="noopener noreferrer" className="wa-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Chat on WhatsApp
                  </a>
                </div>
              )}
            </Reveal>
            <Reveal d={.1}>
              <div>
                {[
                  { ic:"📍", label:"Address", val:"530, 7th Street Extension\nGandhipuram, Coimbatore — 641012" },
                  { ic:"📞", label:"Phone", val:"9842262124 & 98427 35737" },
                  { ic:"⏰", label:"Hours", val:"Opens at 10 AM · Monday – Saturday" },
                  { ic:"⭐", label:"Rating", val:"5.0 · 20 Verified Google Reviews" },
                ].map(({ ic, label, val }) => (
                  <div key={label} className="contact-info-item">
                    <div className="contact-icon-box">{ic}</div>
                    <div>
                      <div className="contact-label">{label}</div>
                      <div className="contact-val">{val}</div>
                    </div>
                  </div>
                ))}
                <div className="contact-map">
                  <iframe title="Sri Darshna Printers" width="100%" height="200" frameBorder="0" style={{ display:"block", filter:"grayscale(1) contrast(1.1)" }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0!2d76.9558!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x1!2sSri+Darshna+Printers!5e0!3m2!1sen!2sin!4v1"
                    allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                  <a href="https://maps.google.com/?q=Sri+Darshna+Printers+Gandhipuram+Coimbatore" target="_blank" rel="noopener noreferrer" className="contact-map-link">
                    📍 Get Directions →
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div className="footer-grid">
            <div>
              <div className="footer-brand-name">Sri Darshna Printers</div>
              <div className="footer-brand-sub">Est. 1999 · Coimbatore</div>
              <p className="footer-desc">Premium printing for every need at the most competitive prices in Coimbatore since 1999.</p>
            </div>
            <div>
              <div className="footer-col-title">Products</div>
              {GALLERY_CATS.slice(0, 7).map(s => (
                <button key={s.label} className="footer-link" onClick={() => setModalCat(s)}>{s.label}</button>
              ))}
            </div>
            <div>
              <div className="footer-col-title">Navigate</div>
              {NAV.map(n => (
                <button key={n} className="footer-link" onClick={() => go(n)}>{n}</button>
              ))}
            </div>
            <div>
              <div className="footer-col-title">Find Us</div>
              {[["📍","Gandhipuram, Coimbatore"],["📞","9842262124"],["⏰","Opens 10 AM"],["📅","Est. 1999"]].map(([ic, tx]) => (
                <div key={tx} style={{ display:"flex", gap:10, marginBottom:12 }}>
                  <span style={{ fontSize:14 }}>{ic}</span>
                  <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:13, color:"rgba(255,255,255,.3)" }}>{tx}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="footer-bottom">
            <span className="footer-copy">© 2026 Sri Darshna Printers · All rights reserved.</span>
            <span className="footer-mono">Since 1999</span>
          </div>
        </div>
      </footer>

      {/* ══ GALLERY MODAL ══ */}
      {modalCat && (
        <div className="modal-bg" onClick={e => { if (e.target === e.currentTarget) setModalCat(null); }}>
          <div className="modal-box">
            <div className="modal-hdr">
              <div>
                <div style={{ fontFamily:"'Space Mono',monospace", fontSize:10, letterSpacing:".25em", textTransform:"uppercase", color:"var(--gold)", marginBottom:8 }}>Gallery</div>
                <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:28, fontWeight:900, color:"var(--ink)" }}>{modalCat.label}</h3>
                <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:14, color:"var(--muted)", marginTop:5 }}>{modalCat.desc} — click any image to enlarge</p>
              </div>
              <button className="modal-close" onClick={() => setModalCat(null)}>✕</button>
            </div>
            <div className="modal-grid">
              {modalCat.imgs && modalCat.imgs.length > 0 && typeof modalCat.imgs[0] === "string"
                ? modalCat.imgs.map((img, idx) => (
                    <div key={idx} className="modal-img" onClick={() => setLightbox({ cat: modalCat, idx })}>
                      <img src={img} alt={`${modalCat.label} ${idx+1}`} loading="lazy" />
                    </div>
                  ))
                : (
                  <div style={{ gridColumn:"1/-1", padding:"60px 40px", textAlign:"center", color:"var(--muted)", fontFamily:"'DM Sans',sans-serif", fontSize:15 }}>
                    <div style={{ fontSize:52, marginBottom:16 }}>{modalCat.icon}</div>
                    <p>Sample images coming soon. Contact us for a preview of {modalCat.label}.</p>
                  </div>
                )
              }
            </div>
            <div className="modal-actions">
              <button className="btn-primary" style={{ fontSize:12 }} onClick={() => { setModalCat(null); go("contact"); }}>
                Order {modalCat.label} →
              </button>
              <a href="https://wa.me/919842735737" target="_blank" rel="noopener noreferrer"
                style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"15px 24px", background:"#22c55e", color:"#fff", textDecoration:"none", fontFamily:"'Syne',sans-serif", fontSize:12, fontWeight:800, letterSpacing:".1em", textTransform:"uppercase" }}>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ══ LIGHTBOX ══ */}
      {lightbox && (
        <div className="lb-bg" onClick={e => { if (e.target === e.currentTarget) setLightbox(null); }}>
          <button className="lb-close" onClick={() => setLightbox(null)}>✕</button>
          <button className="lb-nav" style={{ left:20 }} onClick={() => setLightbox(l => ({ ...l, idx:(l.idx-1+l.cat.imgs.length)%l.cat.imgs.length }))}>‹</button>
          {lightbox.cat.imgs && typeof lightbox.cat.imgs[lightbox.idx] === "string" ? (
            <img src={lightbox.cat.imgs[lightbox.idx]} alt={lightbox.cat.label} className="lb-img" />
          ) : (
            <div style={{ width:"60vw", height:"70vh", background:"#1a1a2e", display:"flex", alignItems:"center", justifyContent:"center", fontSize:60 }}>{lightbox.cat.icon}</div>
          )}
          <button className="lb-nav" style={{ right:20 }} onClick={() => setLightbox(l => ({ ...l, idx:(l.idx+1)%l.cat.imgs.length }))}>›</button>
          <div className="lb-counter">{lightbox.idx+1} / {lightbox.cat.imgs.length}</div>
        </div>
      )}
    </div>
  );
}
