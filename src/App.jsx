import { useState, useEffect, useRef } from "react";
import logo from "./assets/logo-sri.jpg";

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

/*letter-pads*/

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

/*sunpacks*/

/*vibuthi-covers*/
import b41 from "./assets/IMG-20260321-WA0020.jpg";
import b42 from "./assets/IMG-20260321-WA0021.jpg";

/*posters*/
import b43 from "./assets/IMG-20260321-WA0121.jpg";


/*calendars*/

/*menu cards*/
import b44 from "./assets/IMG-20260321-WA0103.jpg";

/*design*/

/* ─── PRINTING TYPES (new section below Services) ─── */
const PRINT_TYPES = [
  {
    id: "dtp",
    name: "DTP Designing",
    icon: "🎨",
    color: "#1e0a3c",
    desc: "Professional Desktop Publishing — from logos and brochures to full publication layouts. We design, you print.",
    points: ["Logo & Brand Design", "Brochure & Flyer Layouts", "Menu & Catalogue Design", "Invitation & Card Design"],
    badge: "Design Studio",
  },
  {
    id: "screen",
    name: "Screen Printing",
    icon: "🖼️",
    color: "#0d2e1a",
    desc: "High-quality screen printing for T-shirts, bags, uniforms, and promotional merchandise. Vibrant, lasting colours.",
    points: ["T-Shirts & Uniforms", "Cotton Bags & Caps", "Spot Colour Printing", "Bulk Order Friendly"],
    badge: "Merchandise",
  },
  {
    id: "offset",
    name: "Offset Printing",
    icon: "🖨️",
    color: "#14204a",
    desc: "Traditional offset printing for sharp, consistent quality on large volumes — books, magazines, and catalogues.",
    points: ["Books & Magazines", "Bulk Brochures", "Sharp CMYK Colour", "Cost-Effective for Volume"],
    badge: "Bulk Printing",
  },
  {
    id: "digital",
    name: "Digital Printing",
    icon: "💻",
    color: "#2e0a0a",
    desc: "Fast, precise digital printing for short runs. Perfect for personalised prints, proofs, and quick-turn jobs.",
    points: ["Short Run Printing", "Variable Data Print", "Quick Turnaround", "Photo-Quality Output"],
    badge: "Fast & Precise",
  },
];

/* ─── GALLERY ─── */
const GALLERY_CATS = [
  { id:"business-cards",  label:"Business Cards",   icon:"🪪", color:"#1a1f5e", imgs:[b1,b2,b3,b4,b5,b6], desc:"Premium matte, gloss & soft-touch finish" },
  { id:"invitations",     label:"Invitations",      icon:"💌", color:"#3d1040", imgs:[b7,b8,b9,b10,b11,b12], desc:"Wedding, event & corporate invitations" },
  { id:"brochures",       label:"Brochures",        icon:"📄", color:"#0a2540", imgs:[b13,b14,b15,b16,b17,b18], desc:"Tri-fold, bi-fold & custom formats" },
  { id:"flex-boards",     label:"Flex Boards",      icon:"📣", color:"#0d2e1a", imgs:[b19], desc:"Large-format outdoor & indoor displays" },
  { id:"stickers-labels", label:"Stickers & Labels",icon:"🏷️", color:"#2e1a0a", imgs:[b20,b21], desc:"Die-cut, roll & sheet stickers" },
  { id:"letterpads",      label:"Letter Pads",      icon:"📝", color:"#1a2e0a", imgs:6, desc:"Branded letterheads & notepads" },
  { id:"id-cards",        label:"ID Cards",         icon:"🪪", color:"#0a1a2e", imgs:[b24,b25,b26,b27], desc:"Employee, student & event ID cards" },
  { id:"rubber-stamps",   label:"Rubber Stamps",    icon:"🔖", color:"#2e0a0a", imgs:[b28,b29,b30], desc:"Custom rubber & self-inking stamps" },
  { id:"lamination",      label:"Lamination",       icon:"✨", color:"#1a1a2e", imgs:[b31,b32,b33,b34], desc:"Gloss, matte & thermal lamination" },
  { id:"name-plates",     label:"Name Plates",      icon:"🪧", color:"#2e2a0a", imgs:[b35,b36], desc:"Acrylic, brass & engraved name plates" },
  { id:"badges",          label:"Badges",           icon:"📛", color:"#0a2e2a", imgs:[b37,b38], desc:"Metal, plastic & custom event badges" },
  { id:"standees",        label:"Standees",         icon:"🖼️", color:"#2a0a2e", imgs:[b39,b40], desc:"Roll-up & cut-out standee displays" },
  { id:"sun-packs",       label:"Sun Packs",        icon:"☀️", color:"#2e1a00", imgs:6, desc:"UV-resistant sun pack board printing" },
  { id:"vibuthi-covers",  label:"Vibuthi Covers",   icon:"🙏", color:"#1a0a2e", imgs:[b41,b42], desc:"Traditional vibuthi packet covers" },
  { id:"posters",         label:"Posters",          icon:"🖼️", color:"#0a2e1a", imgs:[b43], desc:"A4 to A0 full-color poster printing" },
  { id:"calendars",       label:"Calendars",        icon:"📅", color:"#2e0a1a", imgs:6, desc:"Wall, desk & customised calendars" },
  { id:"menu-cards",      label:"Menu Cards",       icon:"📋", color:"#0a1e2e", imgs:[b44], desc:"Restaurant & café menu printing" },
  { id:"dtp-design",      label:"DTP & Design",     icon:"🎨", color:"#1e0a2a", imgs:6, desc:"Logos, layouts & desktop publishing" },
];



const REVIEWS = [
  { name:"Bharath Gowda",      initial:"B", text:"Best Printing Service. Friendly staff and lowest prices in Coimbatore!", ago:"4 months ago" },
  { name:"Subramaniam",        initial:"S", text:"Quality was excellent. Highly recommend Sri Darshna Printers.",          ago:"4 months ago" },
  { name:"Jothi Prakash S",    initial:"J", text:"Superb work at very low cost! Thank you for your amazing service.",      ago:"6 years ago"  },
  { name:"Sagunthala Senthil", initial:"S", text:"Best printing in Gandhipuram. Clean output and professional staff.",     ago:"4 months ago" },
  { name:"Gokul Kumar",        initial:"G", text:"Great response from the team. Work delivered on time and looked great.",  ago:"6 years ago"  },
];

const WHY_US = [
  { icon:"💰", title:"Lowest Prices",      desc:"Most competitive pricing in Coimbatore — no hidden charges ever." },
  { icon:"✅", title:"100% Satisfaction",  desc:"Not happy? We reprint. Your satisfaction is our promise, every time." },
  { icon:"📦", title:"All Under One Roof", desc:"From business cards to standees — everything in one shop." },
  { icon:"⭐", title:"5-Star Rated",       desc:"20 verified Google reviews with a perfect 5.0 rating." },
  { icon:"🎨", title:"DTP Support",        desc:"In-house design team helps with artwork at affordable rates." },
  { icon:"📅", title:"Est. Since 1999",    desc:"25+ years of trusted printing for homes, businesses and institutions." },
];

const FAQS = [
  { q:"What is your turnaround time?",        a:"Most jobs are completed within 1–3 working days. For large bulk orders, we will give you a clear timeline when you place your order." },
  { q:"What file formats do you accept?",     a:"We accept PDF, PNG, JPG, AI, PSD and CorelDRAW files. For best results, submit PDF at 300 DPI. Our team can also help create or adjust your artwork." },
  { q:"Do you offer design services?",        a:"Yes! Our in-house DTP team creates or refines your artwork. We offer affordable design packages for brochures, invitations, menus, and more." },
  { q:"What is your minimum order quantity?", a:"We accept any size order — even a single card or name plate. Bulk orders receive better per-unit pricing." },
  { q:"How do I place an order?",             a:"Visit our shop in Gandhipuram, call 9842262124 & 98427 35737, WhatsApp us, or fill in the quote form on this page." },
];

const NAV = ["Home","Services","Gallery","About","Contact"];

/* ─── SCROLL REVEAL ─── */
function Reveal({ children, d = 0, style = {} }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (el.getBoundingClientRect().top < window.innerHeight + 60) { setShow(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShow(true); io.disconnect(); } }, { threshold: 0.06 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ opacity:show?1:0, transform:show?"none":"translateY(32px)", transition:`opacity .85s ${d}s cubic-bezier(.16,1,.3,1),transform .85s ${d}s cubic-bezier(.16,1,.3,1)`, ...style }}>
      {children}
    </div>
  );
}

/* ─── GALLERY PLACEHOLDER CARD ─── */
function GalCard({ cat, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <div onClick={() => onClick(cat)} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ position:"relative", cursor:"pointer", aspectRatio:"4/3", overflow:"hidden", background:cat.color }}>
      <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)", backgroundSize:"24px 24px" }}/>
      <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", transition:"transform .6s cubic-bezier(.16,1,.3,1)", transform:hov?"scale(1.06)":"none" }}>
        <div style={{ fontSize:40, opacity:hov?.9:.6, marginBottom:12, transition:"opacity .3s" }}>{cat.icon}</div>
        <div style={{ display:"flex", flexDirection:"column", gap:6, width:80 }}>
          {[75,55,65,40].map((w,k) => <div key={k} style={{ height:4, width:`${w}%`, background:"rgba(255,255,255,.2)", borderRadius:2 }}/>)}
        </div>
      </div>
      {/* hover overlay */}
      <div style={{ position:"absolute", inset:0, background:"rgba(0,0,0,.65)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", opacity:hov?1:0, transition:"opacity .32s", padding:20 }}>
        <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:18, fontWeight:800, color:"#fff", marginBottom:6, textAlign:"center" }}>{cat.label}</div>
        <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:14, fontWeight:600, color:"rgba(255,255,255,.65)", textAlign:"center", marginBottom:18 }}>{cat.desc}</div>
        <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:13, fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", color:"#d4aa4a", border:"1px solid rgba(212,170,74,.5)", padding:"8px 20px" }}>View All →</div>
      </div>
      {/* bottom label */}
      <div style={{ position:"absolute", bottom:0, left:0, right:0, background:"rgba(0,0,0,.6)", padding:"11px 14px", backdropFilter:"blur(4px)" }}>
        <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:15, fontWeight:800, color:"#fff" }}>{cat.label}</div>
      </div>
      <div style={{ position:"absolute", top:10, left:10, fontFamily:"'Nunito',sans-serif", fontSize:11, fontWeight:700, letterSpacing:".14em", textTransform:"uppercase", color:"rgba(255,255,255,.45)", padding:"3px 8px", border:"1px solid rgba(255,255,255,.15)", background:"rgba(0,0,0,.3)" }}>
        {String(GALLERY_CATS.indexOf(cat)+1).padStart(2,"0")}
      </div>
    </div>
  );
}

/* ─── MODAL PLACEHOLDER IMG ─── */
function ModalImg({ color, icon, label, idx, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <div onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background:color, aspectRatio:"4/3", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", cursor:"pointer", position:"relative", overflow:"hidden", transition:"transform .4s cubic-bezier(.16,1,.3,1)", transform:hov?"scale(1.04)":"none" }}>
      <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)", backgroundSize:"22px 22px" }}/>
      <div style={{ fontSize:32, opacity:.6, marginBottom:10, position:"relative" }}>{icon}</div>
      <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:13, fontWeight:700, color:"rgba(255,255,255,.45)", position:"relative" }}>{label} #{idx+1}</div>
      <div style={{ position:"absolute", inset:0, background:"rgba(0,0,0,.5)", display:"flex", alignItems:"center", justifyContent:"center", opacity:hov?1:0, transition:"opacity .3s" }}>
        <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:12, fontWeight:700, letterSpacing:".2em", textTransform:"uppercase", color:"rgba(255,255,255,.9)", border:"1px solid rgba(255,255,255,.35)", padding:"8px 18px" }}>Enlarge</div>
      </div>
      <div style={{ position:"absolute", bottom:8, right:10, fontFamily:"'Nunito',sans-serif", fontSize:11, fontWeight:600, color:"rgba(255,255,255,.25)" }}>#{idx+1}</div>
    </div>
  );
}

/* ─── MAIN ─── */
export default function SriDarshna() {
  const [scrollY,    setScrollY]    = useState(0);
  const [activeNav,  setActiveNav]  = useState("Home");
  const [revIdx,     setRevIdx]     = useState(0);
  const [openFaq,    setOpenFaq]    = useState(null);
  const [form,       setForm]       = useState({ name:"", phone:"", service:"", message:"" });
  const [sent,       setSent]       = useState(false);
  const [pct,        setPct]        = useState(0);
  const [modalCat,   setModalCat]   = useState(null);
  const [lightbox,   setLightbox]   = useState(null);

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
    window.addEventListener("scroll", fn, { passive:true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setRevIdx(i => (i + 1) % REVIEWS.length), 4500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const fn = e => {
      if (e.key === "Escape") { setLightbox(null); setModalCat(null); }
      if (lightbox) {
        if (e.key === "ArrowRight") setLightbox(l => ({ ...l, idx:(l.idx+1)%l.cat.imgs }));
        if (e.key === "ArrowLeft")  setLightbox(l => ({ ...l, idx:(l.idx-1+l.cat.imgs)%l.cat.imgs }));
      }
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [lightbox]);

  useEffect(() => {
    document.body.style.overflow = (modalCat || lightbox) ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalCat, lightbox]);

  const go = s => { document.getElementById(s.toLowerCase())?.scrollIntoView({ behavior:"smooth" }); };
  const navUp = scrollY > 50;

  const CSS = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Nunito:wght@700;800;900&family=Rubik:wght@500;600;700;900&family=DM+Mono:wght@400;500&display=swap');

    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
    html{scroll-behavior:smooth;}

    :root{
      --ink:   #0f0e0c;
      --ink2:  #2c2820;
      --muted: #5a5550;
      --gold:  #b8922a;
      --gold2: #d4aa4a;
      --navy:  #14204a;
      --cream: #faf8f4;
      --cream2:#f3ede4;
      --cream3:#ebe3d8;
      --line:  rgba(15,14,12,.12);
    }

    body{background:var(--cream);color:var(--ink);font-family:'Nunito',sans-serif;font-weight:700;-webkit-font-smoothing:antialiased;overflow-x:hidden;}
    ::-webkit-scrollbar{width:4px;}::-webkit-scrollbar-thumb{background:var(--gold);border-radius:2px;}

    /* ── NAV ── */
    .nav{position:fixed;top:0;left:0;right:0;z-index:300;height:72px;display:flex;align-items:center;padding:0 52px;justify-content:space-between;transition:background .4s,border-color .4s,backdrop-filter .4s;border-bottom:1px solid transparent;}
    .nav.up{background:rgba(250,248,244,.97);border-color:var(--line);backdrop-filter:blur(20px);}
    .nl{font-family:'Rubik',sans-serif;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;background:none;border:none;border-bottom:2px solid transparent;padding-bottom:3px;cursor:pointer;transition:color .22s,border-color .22s;}
    .nl:hover,.nl.on{color:var(--gold);border-color:var(--gold);}

    /* ── SECTIONS ── */
    .sec{padding:108px 52px;border-top:1px solid var(--line);}
    .sec.bg2{background:var(--cream2);}
    .sec.bg3{background:var(--cream3);}
    .wrap{max-width:1180px;margin:0 auto;}

    /* eyebrow */
    .ey{font-family:'DM Mono',monospace;font-size:11px;font-weight:500;letter-spacing:.32em;text-transform:uppercase;color:var(--gold);margin-bottom:18px;display:flex;align-items:center;gap:14px;}
    .ey::before{content:'';display:block;width:28px;height:2px;background:var(--gold);}
    .divg{width:52px;height:3px;background:linear-gradient(90deg,var(--gold),var(--gold2));margin-top:18px;}

    /* ── HERO ── */
    .hero{min-height:100vh;display:grid;grid-template-columns:1fr 400px;background:var(--navy);position:relative;overflow:hidden;}
    .hero-l{display:flex;flex-direction:column;justify-content:flex-end;padding:100px 60px 72px;position:relative;z-index:1;}
    .hero-r{border-left:1px solid rgba(255,255,255,.08);display:flex;flex-direction:column;}
    .hero-r-top{flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.03);border-bottom:1px solid rgba(255,255,255,.08);}
    .hero-r-bot{padding:28px 32px 36px;display:flex;flex-direction:column;gap:16px;}

    /* ── SERVICE CARDS ── */
    .scard{border:1.5px solid var(--line);padding:30px 24px 26px;background:var(--cream);position:relative;overflow:hidden;transition:transform .4s cubic-bezier(.16,1,.3,1),box-shadow .4s,border-color .35s,background .35s;cursor:default;}
    .scard::after{content:'';position:absolute;bottom:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--gold),var(--gold2));transform:scaleX(0);transform-origin:left;transition:transform .4s cubic-bezier(.16,1,.3,1);}
    .scard:hover{transform:translateY(-7px);box-shadow:0 24px 56px rgba(0,0,0,.1);border-color:rgba(184,146,42,.3);background:#fff;}
    .scard:hover::after{transform:scaleX(1);}

    /* ── PRINT TYPE CARDS ── */
    .ptcard{overflow:hidden;position:relative;cursor:default;transition:transform .4s cubic-bezier(.16,1,.3,1),box-shadow .4s;}
    .ptcard:hover{transform:translateY(-6px);box-shadow:0 28px 64px rgba(0,0,0,.18);}
    .ptcard-img{position:relative;height:240px;display:flex;align-items:center;justify-content:center;overflow:hidden;}
    .ptcard-img-inner{transition:transform .7s cubic-bezier(.16,1,.3,1);}
    .ptcard:hover .ptcard-img-inner{transform:scale(1.06);}
    .ptcard-body{padding:28px 28px 32px;background:var(--cream);border:1.5px solid var(--line);border-top:none;}

    /* ── GAL GRID ── */
    .gal-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;}

    /* ── WHY CARDS ── */
    .wcard{border:1.5px solid var(--line);padding:30px 24px;background:var(--cream);transition:transform .35s cubic-bezier(.16,1,.3,1),box-shadow .35s,border-color .3s;}
    .wcard:hover{transform:translateY(-5px);box-shadow:0 20px 48px rgba(184,146,42,.12);border-color:rgba(184,146,42,.35);}

    /* ── REVIEW ── */
    @keyframes revIn{from{opacity:0;transform:translateY(14px);}to{opacity:1;transform:none;}}
    .rev-enter{animation:revIn .5s cubic-bezier(.16,1,.3,1) both;}

    /* ── FAQ ── */
    .faq-row{border-bottom:1.5px solid var(--line);}
    .faq-btn{width:100%;display:flex;justify-content:space-between;align-items:center;padding:22px 28px;background:none;border:none;cursor:pointer;gap:24px;text-align:left;}

    /* ── BTNS ── */
    .btn{font-family:'Rubik',sans-serif;font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:15px 32px;background:var(--gold);color:#fff;border:none;cursor:pointer;transition:background .22s,transform .18s;}
    .btn:hover{background:#9a7820;transform:translateY(-1px);}
    .btn.ghost{background:transparent;color:var(--ink);border:2px solid var(--line);}
    .btn.ghost:hover{border-color:var(--gold);color:var(--gold);}
    .btn.inv{background:transparent;color:rgba(255,255,255,.88);border:2px solid rgba(255,255,255,.22);}
    .btn.inv:hover{border-color:var(--gold2);color:var(--gold2);}

    /* ── INPUT ── */
    .inp{width:100%;padding:14px 18px;background:var(--cream3);border:1.5px solid var(--line);color:var(--ink);font-family:'Nunito',sans-serif;font-size:15px;font-weight:700;outline:none;resize:none;transition:border-color .22s;}
    .inp::placeholder{color:#a09890;font-size:14px;font-weight:700;}
    .inp:focus{border-color:var(--gold);}

    /* ── TICKER ── */
    .ticker{overflow:hidden;border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:14px 0;background:var(--cream);}
    .tick-t{display:inline-flex;animation:tick 28s linear infinite;white-space:nowrap;}
    .tick-t:hover{animation-play-state:paused;}
    .tick-i{font-family:'Rubik',sans-serif;font-size:15px;font-weight:600;color:var(--muted);padding:0 36px;display:inline-flex;align-items:center;gap:20px;}
    .tick-d{width:5px;height:5px;border-radius:50%;background:var(--gold);}
    @keyframes tick{from{transform:translateX(0);}to{transform:translateX(-50%);}}

    /* ── PROGRESS ── */
    .prog{position:fixed;top:0;left:0;height:3px;background:linear-gradient(90deg,var(--gold),var(--gold2));z-index:999;pointer-events:none;}

    /* ── MODAL ── */
    .modal-bg{position:fixed;inset:0;z-index:800;background:rgba(0,0,0,.88);display:flex;align-items:center;justify-content:center;backdrop-filter:blur(8px);padding:20px;}
    .modal-box{background:var(--cream);width:100%;max-width:1040px;max-height:90vh;overflow-y:auto;position:relative;}
    .modal-hdr{padding:28px 36px 22px;border-bottom:1.5px solid var(--line);display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;background:var(--cream);z-index:2;}
    .modal-close{width:40px;height:40px;border:1.5px solid var(--line);background:none;cursor:pointer;font-size:18px;font-weight:700;display:flex;align-items:center;justify-content:center;transition:all .22s;flex-shrink:0;font-family:'Nunito',sans-serif;}
    .modal-close:hover{border-color:var(--gold);color:var(--gold);}
    .modal-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding:24px 36px 32px;}

    /* ── LIGHTBOX ── */
    .lb-bg{position:fixed;inset:0;z-index:900;background:rgba(0,0,0,.95);display:flex;align-items:center;justify-content:center;}
    .lb-nav{position:absolute;top:50%;transform:translateY(-50%);width:52px;height:52px;background:rgba(255,255,255,.08);border:1.5px solid rgba(255,255,255,.18);color:#fff;font-size:22px;font-family:'Nunito',sans-serif;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;}
    .lb-nav:hover{background:rgba(255,255,255,.18);}
    .lb-close{position:absolute;top:20px;right:20px;width:44px;height:44px;background:rgba(255,255,255,.08);border:1.5px solid rgba(255,255,255,.18);color:#fff;font-size:18px;font-family:'Nunito',sans-serif;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;}

    /* ── WA FLOAT ── */
    .wa-float{position:fixed;bottom:28px;right:28px;width:58px;height:58px;border-radius:50%;background:#22c55e;display:flex;align-items:center;justify-content:center;z-index:400;box-shadow:0 8px 28px rgba(34,197,94,.4);transition:transform .2s,box-shadow .2s;text-decoration:none;}
    .wa-float:hover{transform:scale(1.1);box-shadow:0 14px 38px rgba(34,197,94,.55);}

    @keyframes hup{from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:none;}}

    @media(max-width:900px){
      .nav{padding:0 20px;}
      .nd{display:none!important;}
      .sec{padding:80px 20px;}
      .hero{grid-template-columns:1fr;min-height:auto;}
      .hero-l{padding:96px 20px 52px;}
      .hero-r{border-left:none;border-top:1px solid rgba(255,255,255,.08);}
      .gal-grid{grid-template-columns:1fr 1fr!important;}
      .svc-grid{grid-template-columns:1fr 1fr!important;}
      .pt-grid{grid-template-columns:1fr 1fr!important;}
      .modal-grid{grid-template-columns:1fr 1fr!important;}
      .two{grid-template-columns:1fr!important;gap:48px!important;}
    }
  `;

  const TICK = ["Business Cards","Invitations","Brochures","Flex Boards","Stickers & Labels","Letter Pads","ID Cards","Rubber Stamps","DTP Design","Screen Printing","Offset Printing","Digital Printing","Name Plates","Badges","Standees","Posters","Calendars","Menu Cards","Since 1999","Gandhipuram CBE","5-Star Rated"];

  return (
    <div style={{ background:"var(--cream)", color:"var(--ink)", minHeight:"100vh" }}>
      <style>{CSS}</style>

      <div className="prog" style={{ width:`${pct}%` }} />

      {/* WhatsApp float */}
      <a href="https://wa.me/919842735737?text=Hi%2C%20I%27d%20like%20a%20quote%20from%20Sri%20Darshna%20Printers" target="_blank" rel="noopener noreferrer" className="wa-float">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      {/* ══ NAVBAR ══ */}
      <nav className={`nav ${navUp?"up":""}`}>
        <div style={{ display:"flex", alignItems:"center", gap:14, cursor:"pointer" }} onClick={() => go("home")}>
          <div style={{ width:48, height:48, background:navUp?"linear-gradient(135deg,#14204a,#b8922a)":"rgba(255,255,255,.08)", border:navUp?"none":"1px solid rgba(255,255,255,.15)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, transition:"background .4s" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={navUp?"#d4aa4a":"rgba(255,255,255,.8)"} strokeWidth="1.5" strokeLinecap="round"><rect x="3" y="7" width="18" height="11" rx="1"/><path d="M7 7V4a1 1 0 011-1h8a1 1 0 011 1v3"/><path d="M7 14h10v5a1 1 0 01-1 1H8a1 1 0 01-1-1v-5z"/><circle cx="17.5" cy="10.5" r=".5" fill={navUp?"#d4aa4a":"rgba(255,255,255,.8)"}/></svg>
          </div>
          <div>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:20, fontWeight:900, color:navUp?"var(--ink)":"#fff", lineHeight:1.1, transition:"color .4s", letterSpacing:".02em" }}>Sri Darshna Printers</div>
            <div style={{ fontFamily:"'DM Mono',monospace", fontSize:9, fontWeight:500, letterSpacing:".28em", textTransform:"uppercase", color:"var(--gold2)", marginTop:2 }}>Est. 1999 · Coimbatore</div>
          </div>
        </div>
        <div className="nd" style={{ display:"flex", gap:32 }}>
          {NAV.map(n => (
            <button key={n} className={`nl ${activeNav===n?"on":""}`}
              style={{ color:navUp?(activeNav===n?"var(--gold)":"var(--muted)"):(activeNav===n?"var(--gold2)":"rgba(255,255,255,.7)") }}
              onClick={() => go(n)}>{n}</button>
          ))}
        </div>
        <div style={{ display:"flex", gap:10 }}>
          <button className="btn ghost nd" style={{ fontSize:11, padding:"11px 22px", borderColor:navUp?"var(--line)":"rgba(255,255,255,.22)", color:navUp?"var(--ink)":"rgba(255,255,255,.85)" }} onClick={() => go("contact")}>Get a Quote</button>
          <a href="tel:+919842735737" className="nd" style={{ display:"inline-flex", alignItems:"center", gap:7, fontFamily:"'Rubik',sans-serif", fontSize:13, fontWeight:700, color:"var(--gold2)", textDecoration:"none" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
            9842262124 & 98427 35737
          </a>
        </div>
      </nav>

      {/* ══ HERO ══ */}
      <section id="home">
        <div className="hero">
          <div style={{ position:"absolute", inset:0, opacity:.025, backgroundImage:"linear-gradient(rgba(212,170,74,1) 1px,transparent 1px),linear-gradient(90deg,rgba(212,170,74,1) 1px,transparent 1px)", backgroundSize:"72px 72px", pointerEvents:"none" }}/>
          <div className="hero-l">
            <div style={{ animation:"hup .8s .1s both", marginBottom:40, display:"flex", gap:12, flexWrap:"wrap" }}>
              <span style={{ display:"inline-flex", alignItems:"center", gap:8, fontFamily:"'DM Mono',monospace", fontSize:11, fontWeight:500, letterSpacing:".22em", textTransform:"uppercase", color:"rgba(255,255,255,.55)", padding:"7px 16px", border:"1px solid rgba(255,255,255,.12)" }}>★★★★★ 5.0 · 20 Reviews</span>
              <span style={{ display:"inline-flex", alignItems:"center", gap:8, fontFamily:"'DM Mono',monospace", fontSize:11, fontWeight:500, letterSpacing:".22em", textTransform:"uppercase", color:"var(--gold2)", padding:"7px 16px", border:"1px solid rgba(212,170,74,.32)" }}>Est. 1999</span>
            </div>
            <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(60px,9vw,132px)", fontWeight:900, color:"#fff", lineHeight:.88, letterSpacing:"-1px", animation:"hup .95s .2s both" }}>
              Sri Darshna<br /><span style={{ color:"var(--gold2)" }}>Printers</span>
            </h1>
            <div style={{ animation:"hup .85s .45s both", paddingTop:40, marginTop:44, borderTop:"1px solid rgba(255,255,255,.1)" }}>
              <p style={{ fontFamily:"'DM Mono',monospace", fontSize:11, fontWeight:500, letterSpacing:".22em", textTransform:"uppercase", color:"rgba(255,255,255,.38)", marginBottom:14 }}>Gandhipuram, Coimbatore · Tamil Nadu</p>
              <p style={{ fontFamily:"'Nunito',sans-serif", fontSize:17, fontWeight:700, color:"rgba(255,255,255,.6)", lineHeight:1.85, maxWidth:480, marginBottom:40 }}>Premium printing for every need — from visiting cards to giant flex boards. Quality you can see, prices you will love.</p>
              <div style={{ display:"flex", gap:14, flexWrap:"wrap" }}>
                <button className="btn" style={{ fontSize:13 }} onClick={() => go("contact")}>Get a Free Quote</button>
                <button className="btn inv" style={{ fontSize:13 }} onClick={() => go("gallery")}>View Gallery</button>
              </div>
              <div style={{ display:"flex", gap:36, marginTop:44, flexWrap:"wrap" }}>
                {[["📍","Gandhipuram, CBE"],["⏰","Opens 10 AM"],["📞","9842262124 & 98427 35737"]].map(([ic,tx]) => (
                  <div key={tx} style={{ display:"flex", alignItems:"center", gap:8 }}>
                    <span style={{ fontSize:16 }}>{ic}</span>
                    <span style={{ fontFamily:"'Nunito',sans-serif", fontSize:14, fontWeight:700, color:"rgba(255,255,255,.4)" }}>{tx}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="hero-r" style={{ animation:"hup .9s .38s both" }}>
            <div className="hero-r-top">
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:22 }}>
                <div style={{ width:164, height:164, border:"2px solid rgba(212,170,74,.32)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", background:"rgba(255,255,255,.03)", position:"relative" }}>
                  {[["top","left"],["top","right"],["bottom","left"],["bottom","right"]].map(([v,h],i) => (
                    <div key={i} style={{ position:"absolute", [v]:-2, [h]:-2, width:18, height:18, [`border${v[0].toUpperCase()+v.slice(1)}`]:"3px solid var(--gold2)", [`border${h[0].toUpperCase()+h.slice(1)}`]:"3px solid var(--gold2)" }}/>
                  ))}
                  <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="rgba(212,170,74,.55)" strokeWidth="1" strokeLinecap="round"><rect x="3" y="7" width="18" height="11" rx="1"/><path d="M7 7V4a1 1 0 011-1h8a1 1 0 011 1v3"/><path d="M7 14h10v5a1 1 0 01-1 1H8a1 1 0 01-1-1v-5z"/><circle cx="17.5" cy="10.5" r=".5" fill="rgba(212,170,74,.55)"/></svg>
                  <div style={{
  fontFamily:"'Nunito',sans-serif",
  fontSize:11,
  fontWeight:700,
  letterSpacing:".2em",
  textTransform:"uppercase",
  color:"rgba(212,170,74,.4)",
  marginTop:12
}}>
  
  <div style={{
  width: "102%",
  display: "flex",
  justifyContent: "center",
  marginTop: 20
}}>
  <div style={{
    height: 160,   // 🔥 increase this for bigger logo
    width: 320     // adjust width if needed
  }}>
    <img
      src={logo}
      alt="Sri Darshna Logo"
      style={{
        height: "100%",
        width: "100%",
        objectFit: "contain"
      }}
    />
  </div>
</div>
</div>
                </div>
                <div style={{ textAlign:"center" }}>
                  <div style={{ fontFamily:"'Playfair Display',serif", fontSize:21, fontWeight:900, color:"#fff", letterSpacing:".02em" }}>Sri Darshna Printers</div>
                  <div style={{ fontFamily:"'DM Mono',monospace", fontSize:9, fontWeight:500, letterSpacing:".28em", textTransform:"uppercase", color:"var(--gold2)", marginTop:4 }}>Coimbatore</div>
                </div>
              </div>
            </div>
            <div className="hero-r-bot">
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
                {[["18+","Products"],["25+","Yrs Exp"],["20+","Reviews"],["5★","Rated"]].map(([n,l]) => (
                  <div key={l} style={{ border:"1px solid rgba(255,255,255,.1)", padding:"16px 14px", background:"rgba(255,255,255,.04)" }}>
                    <div style={{ fontFamily:"'Rubik',sans-serif", fontSize:28, fontWeight:900, color:"var(--gold2)", lineHeight:1 }}>{n}</div>
                    <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:12, fontWeight:700, letterSpacing:".14em", textTransform:"uppercase", color:"rgba(255,255,255,.35)", marginTop:5 }}>{l}</div>
                  </div>
                ))}
              </div>
              <a href="https://wa.me/919842735737" target="_blank" rel="noopener noreferrer"
                style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10, padding:"14px", background:"rgba(34,197,94,.15)", border:"1px solid rgba(34,197,94,.3)", color:"#4ade80", textDecoration:"none", fontFamily:"'Rubik',sans-serif", fontSize:13, fontWeight:700, letterSpacing:".08em", textTransform:"uppercase" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#4ade80"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div style={{ background:"var(--gold)", padding:"15px 52px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", display:"flex", justifyContent:"space-around", flexWrap:"wrap", gap:8 }}>
          {["✦ Lowest Prices in CBE","✦ 18+ Print Products","✦ 5-Star Rated","✦ Est. 1999","✦ DTP & Design Support"].map(t => (
            <span key={t} style={{ fontFamily:"'Rubik',sans-serif", fontSize:13, fontWeight:700, color:"#fff", letterSpacing:".08em" }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Ticker */}
      <div className="ticker">
        <div className="tick-t">
          {[...TICK,...TICK,...TICK,...TICK].map((t,i) => <span key={i} className="tick-i"><span className="tick-d"/>{t}</span>)}
        </div>
      </div>

      {/* ══ SERVICES ══ */}
      <section id="services" className="sec">
        <div className="wrap">
          <Reveal>
            <div className="ey">Our Services</div>
            <h2 style={{ fontFamily:"'Rubik',sans-serif", fontSize:"clamp(32px,4vw,54px)", fontWeight:900, lineHeight:1.1, color:"var(--ink)" }}>
              How We <span style={{ color:"var(--gold)" }}>Print</span>
            </h2>
            <div className="divg"/>
            <p style={{ fontFamily:"'Nunito',sans-serif", fontSize:17, fontWeight:700, color:"var(--muted)", lineHeight:1.85, maxWidth:520, marginTop:16 }}>We use multiple printing technologies to give you the best result for every job — big or small.</p>
          </Reveal>

            <div className="pt-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:16, marginTop:52 }}>
              {PRINT_TYPES.map((pt, i) => (
                <Reveal key={pt.id} d={i*.07}>
                  <div className="ptcard">
                    {/* IMAGE PLACEHOLDER */}
                    <div className="ptcard-img" style={{ background:pt.color }}>
                      <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)", backgroundSize:"24px 24px" }}/>
                      {/* badge */}
                      <div style={{ position:"absolute", top:14, left:14, fontFamily:"'Rubik',sans-serif", fontSize:10, fontWeight:700, letterSpacing:".14em", textTransform:"uppercase", color:"var(--gold2)", padding:"4px 10px", border:"1px solid rgba(212,170,74,.4)", background:"rgba(0,0,0,.35)" }}>{pt.badge}</div>
                      <div className="ptcard-img-inner" style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:14 }}>
                        <div style={{ fontSize:52, opacity:.65 }}>{pt.icon}</div>
                        <div style={{ display:"flex", flexDirection:"column", gap:7, width:100 }}>
                          {[80,58,70,44].map((w,k) => <div key={k} style={{ height:5, width:`${w}%`, background:"rgba(255,255,255,.2)", borderRadius:3 }}/>)}
                        </div>
                        <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:11, fontWeight:800, letterSpacing:".18em", textTransform:"uppercase", color:"rgba(255,255,255,.3)", marginTop:6 }}>Add Your Image Here</div>
                      </div>
                    </div>
                    {/* BODY */}
                    <div className="ptcard-body">
                      <h3 style={{ fontFamily:"'Rubik',sans-serif", fontSize:20, fontWeight:900, color:"var(--ink)", marginBottom:10, lineHeight:1.15 }}>{pt.name}</h3>
                      <p style={{ fontFamily:"'Nunito',sans-serif", fontSize:14, fontWeight:700, color:"var(--muted)", lineHeight:1.82, marginBottom:18 }}>{pt.desc}</p>
                      <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
                        {pt.points.map(point => (
                          <div key={point} style={{ display:"flex", alignItems:"center", gap:10 }}>
                            <div style={{ width:6, height:6, borderRadius:"50%", background:"var(--gold)", flexShrink:0 }}/>
                            <span style={{ fontFamily:"'Nunito',sans-serif", fontSize:13, fontWeight:700, color:"var(--ink2)" }}>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
        </div>
      </section>

      {/* ══ GALLERY ══ */}
      <section id="gallery" className="sec bg2">
        <div className="wrap">
          <Reveal style={{ marginBottom:52 }}>
            <div className="ey">Our Work</div>
            <h2 style={{ fontFamily:"'Rubik',sans-serif", fontSize:"clamp(32px,4vw,54px)", fontWeight:900, lineHeight:1.1, color:"var(--ink)" }}>
              Product <span style={{ color:"var(--gold)" }}>Gallery</span>
            </h2>
            <div className="divg"/>
            <p style={{ fontFamily:"'Nunito',sans-serif", fontSize:17, fontWeight:700, color:"var(--muted)", lineHeight:1.85, maxWidth:540, marginTop:16 }}>Hover over a category to preview — click to browse all images. Tap any image to view full size.</p>
          </Reveal>
          <div className="gal-grid">
            {GALLERY_CATS.map((cat, i) => (
              <Reveal key={cat.id} d={i*.025}>
                <GalCard cat={cat} onClick={setModalCat} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY US ══ */}
      <section className="sec bg3">
        <div className="wrap">
          <Reveal style={{ textAlign:"center", marginBottom:60 }}>
            <div className="ey" style={{ justifyContent:"center" }}>Why Choose Us</div>
            <h2 style={{ fontFamily:"'Rubik',sans-serif", fontSize:"clamp(32px,4vw,54px)", fontWeight:900, lineHeight:1.1, color:"var(--ink)" }}>
              Sri Darshna Printers <span style={{ color:"var(--gold)" }}>Standard</span>
            </h2>
            <div className="divg" style={{ margin:"18px auto" }}/>
            <p style={{ fontFamily:"'Nunito',sans-serif", fontSize:17, fontWeight:700, color:"var(--muted)", maxWidth:460, margin:"16px auto 0", lineHeight:1.85 }}>25+ years of trusted printing. Our work has spoken for us since 1999.</p>
          </Reveal>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14 }} className="svc-grid">
            {WHY_US.map((w,i) => (
              <Reveal key={w.title} d={i*.07}>
                <div className="wcard">
                  <div style={{ width:52, height:52, background:"var(--cream2)", border:"1.5px solid var(--line)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:24, marginBottom:18 }}>{w.icon}</div>
                  <h3 style={{ fontFamily:"'Rubik',sans-serif", fontSize:21, fontWeight:800, color:"var(--ink)", marginBottom:10 }}>{w.title}</h3>
                  <p style={{ fontFamily:"'Nunito',sans-serif", fontSize:15, fontWeight:700, color:"var(--muted)", lineHeight:1.82 }}>{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section id="about" className="sec">
        <div className="wrap">
          <div className="two" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"center" }}>
            <Reveal>
              <div style={{ background:"var(--navy)", padding:"52px 44px", position:"relative", overflow:"hidden" }}>
                <div style={{ position:"absolute", top:0, right:0, width:120, height:120, border:"1px solid rgba(212,170,74,.1)", borderRadius:"0 0 0 100%", pointerEvents:"none" }}/>
                <div style={{ width:72, height:72, border:"2px solid rgba(212,170,74,.32)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:22 }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(212,170,74,.65)" strokeWidth="1.2" strokeLinecap="round"><rect x="3" y="7" width="18" height="11" rx="1"/><path d="M7 7V4a1 1 0 011-1h8a1 1 0 011 1v3"/><path d="M7 14h10v5a1 1 0 01-1 1H8a1 1 0 01-1-1v-5z"/></svg>
                </div>
                <div style={{ fontFamily:"'Rubik',sans-serif", fontSize:56, fontWeight:900, color:"var(--gold2)", lineHeight:1, marginBottom:6 }}>5.0</div>
                <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:13, fontWeight:700, letterSpacing:".18em", textTransform:"uppercase", color:"rgba(255,255,255,.38)", marginBottom:32 }}>Google Rating · 20 Reviews</div>
                <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
                  {[["📍","530, 7th Street Ext\nGandhipuram, Coimbatore 641012"],["📞","9842262124 & 98427 35737"],["⏰","Opens 10 AM · Mon–Sat"],["📅","Established 1999"]].map(([ic,tx]) => (
                    <div key={tx} style={{ display:"flex", gap:13, alignItems:"flex-start" }}>
                      <span style={{ fontSize:17, marginTop:1, flexShrink:0 }}>{ic}</span>
                      <span style={{ fontFamily:"'Nunito',sans-serif", fontSize:14, fontWeight:700, color:"rgba(255,255,255,.48)", lineHeight:1.65, whiteSpace:"pre-line" }}>{tx}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop:32, display:"flex", gap:10, flexWrap:"wrap" }}>
                  {[{l:"Facebook",h:"https://facebook.com"},{l:"Instagram",h:"https://instagram.com"}].map(s => (
                    <a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer"
                      style={{ fontFamily:"'Rubik',sans-serif", fontSize:11, fontWeight:700, letterSpacing:".14em", textTransform:"uppercase", padding:"10px 18px", border:"1.5px solid rgba(255,255,255,.18)", color:"rgba(255,255,255,.6)", textDecoration:"none", transition:"all .22s" }}
                      onMouseOver={e => { e.currentTarget.style.borderColor="var(--gold2)"; e.currentTarget.style.color="var(--gold2)"; }}
                      onMouseOut={e  => { e.currentTarget.style.borderColor="rgba(255,255,255,.18)"; e.currentTarget.style.color="rgba(255,255,255,.6)"; }}>{s.l}</a>
                  ))}
                </div>
              </div>
            </Reveal>
            <div>
              <Reveal>
                <div className="ey">Our Story</div>
                <h2 style={{ fontFamily:"'Rubik',sans-serif", fontSize:"clamp(28px,3.5vw,48px)", fontWeight:900, lineHeight:1.15, color:"var(--ink)", marginBottom:18 }}>Gandhipuram's Most<br/><span style={{ color:"var(--gold)" }}>Trusted Print Shop</span></h2>
                <div className="divg"/>
              </Reveal>
              <Reveal d={.1}>
                <p style={{ fontFamily:"'Nunito',sans-serif", fontSize:16, fontWeight:700, color:"var(--muted)", lineHeight:1.95, marginTop:20, marginBottom:18 }}>Sri Darshna Printers has been the go-to printing destination for residents, businesses and institutions across Coimbatore since 1999. Located in the heart of Gandhipuram, we have built our reputation on exceptional quality at the lowest prices.</p>
                <p style={{ fontFamily:"'Nunito',sans-serif", fontSize:16, fontWeight:700, color:"var(--muted)", lineHeight:1.95, marginBottom:40 }}>Whether it is a single visiting card or a bulk calendar order, our experienced team ensures every job is completed with precision and care — with in-house DTP and design support for every client.</p>
                <div style={{ display:"flex", gap:44, flexWrap:"wrap", marginBottom:40 }}>
                  {[["25+","Years"],["18+","Products"],["20","Reviews"],["5★","Rated"]].map(([n,l]) => (
                    <div key={l}>
                      <div style={{ fontFamily:"'Rubik',sans-serif", fontSize:46, fontWeight:900, color:"var(--navy)", lineHeight:1 }}>{n}</div>
                      <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:12, fontWeight:700, letterSpacing:".18em", textTransform:"uppercase", color:"var(--muted)", marginTop:6 }}>{l}</div>
                    </div>
                  ))}
                </div>
                <button className="btn" style={{ fontSize:13 }} onClick={() => go("contact")}>Get a Free Quote</button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══ REVIEWS ══ */}
      <section className="sec bg2">
        <div className="wrap" style={{ maxWidth:760 }}>
          <Reveal style={{ textAlign:"center", marginBottom:52 }}>
            <div className="ey" style={{ justifyContent:"center" }}>Client Reviews</div>
            <h2 style={{ fontFamily:"'Rubik',sans-serif", fontSize:"clamp(28px,4vw,48px)", fontWeight:900, color:"var(--ink)" }}>What Our Customers <span style={{ color:"var(--gold)" }}>Say</span></h2>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10, marginTop:16 }}>
              <span style={{ color:"var(--gold)", fontSize:18, letterSpacing:3 }}>★★★★★</span>
              <span style={{ fontFamily:"'Rubik',sans-serif", fontSize:18, fontWeight:900, color:"var(--navy)" }}>5.0</span>
              <span style={{ fontFamily:"'Nunito',sans-serif", fontSize:16, fontWeight:700, color:"var(--muted)" }}>· 20 Google Reviews</span>
            </div>
          </Reveal>
          <div key={revIdx} className="rev-enter" style={{ background:"#fff", border:"1.5px solid var(--line)", padding:"44px 48px", marginBottom:24, position:"relative" }}>
            <div style={{ position:"absolute", top:16, left:24, fontFamily:"serif", fontSize:72, color:"var(--gold)", opacity:.13, lineHeight:1 }}>"</div>
            <div style={{ color:"var(--gold)", fontSize:18, letterSpacing:3, marginBottom:18 }}>★★★★★</div>
            <p style={{ fontFamily:"'Nunito',sans-serif", fontSize:19, fontWeight:700, fontStyle:"italic", color:"var(--ink2)", lineHeight:1.72, marginBottom:26 }}>"{REVIEWS[revIdx].text}"</p>
            <div style={{ display:"flex", alignItems:"center", gap:16 }}>
              <div style={{ width:48, height:48, borderRadius:"50%", background:"linear-gradient(135deg,var(--navy),#2a3680)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Rubik',sans-serif", fontSize:20, fontWeight:900, color:"var(--gold2)" }}>{REVIEWS[revIdx].initial}</div>
              <div>
                <div style={{ fontFamily:"'Rubik',sans-serif", fontSize:15, fontWeight:700, color:"var(--ink)" }}>{REVIEWS[revIdx].name}</div>
                <div style={{ fontFamily:"'DM Mono',monospace", fontSize:11, fontWeight:500, letterSpacing:".14em", color:"var(--muted)", marginTop:2 }}>{REVIEWS[revIdx].ago}</div>
              </div>
            </div>
          </div>
          <div style={{ display:"flex", justifyContent:"center", gap:8, marginBottom:32 }}>
            {REVIEWS.map((_,i) => <button key={i} onClick={() => setRevIdx(i)} style={{ width:i===revIdx?30:10, height:10, borderRadius:5, border:"none", cursor:"pointer", background:i===revIdx?"var(--gold)":"#d8d0c4", transition:"all .3s", padding:0 }}/>)}
          </div>
          <div style={{ textAlign:"center" }}>
            <a href="https://maps.google.com/?q=Sri+Darshna+Printers+Gandhipuram+Coimbatore" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily:"'Rubik',sans-serif", fontSize:13, fontWeight:700, letterSpacing:".14em", textTransform:"uppercase", color:"var(--gold)", textDecoration:"none", borderBottom:"2px solid rgba(184,146,42,.35)", paddingBottom:2 }}>View All Reviews on Google →</a>
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="sec">
        <div className="wrap" style={{ maxWidth:780 }}>
          <Reveal style={{ textAlign:"center", marginBottom:56 }}>
            <div className="ey" style={{ justifyContent:"center" }}>FAQ</div>
            <h2 style={{ fontFamily:"'Rubik',sans-serif", fontSize:"clamp(28px,4vw,48px)", fontWeight:900, color:"var(--ink)" }}>Frequently Asked <span style={{ color:"var(--gold)" }}>Questions</span></h2>
            <div className="divg" style={{ margin:"18px auto" }}/>
          </Reveal>
          <div style={{ border:"1.5px solid var(--line)", background:"#fff" }}>
            {FAQS.map((f,i) => (
              <div key={i} className="faq-row">
                <button className="faq-btn" onClick={() => setOpenFaq(openFaq===i?null:i)}>
                  <span style={{ fontFamily:"'Rubik',sans-serif", fontSize:16, fontWeight:700, color:"var(--ink)", lineHeight:1.5 }}>{f.q}</span>
                  <span style={{ color:"var(--gold)", fontSize:24, fontWeight:900, flexShrink:0, display:"inline-block", transform:openFaq===i?"rotate(45deg)":"none", transition:"transform .32s cubic-bezier(.16,1,.3,1)", lineHeight:1 }}>+</span>
                </button>
                <div style={{ maxHeight:openFaq===i?200:0, overflow:"hidden", transition:"max-height .48s cubic-bezier(.16,1,.3,1)" }}>
                  <p style={{ fontFamily:"'Nunito',sans-serif", fontSize:15, fontWeight:700, color:"var(--muted)", lineHeight:1.88, padding:"0 28px 24px" }}>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" className="sec bg2">
        <div className="wrap">
          <Reveal style={{ textAlign:"center", marginBottom:60 }}>
            <div className="ey" style={{ justifyContent:"center" }}>Get in Touch</div>
            <h2 style={{ fontFamily:"'Rubik',sans-serif", fontSize:"clamp(28px,4vw,54px)", fontWeight:900, color:"var(--ink)" }}>Request a <span style={{ color:"var(--gold)" }}>Free Quote</span></h2>
            <div className="divg" style={{ margin:"18px auto" }}/>
          </Reveal>
          <div className="two" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"start" }}>
            <Reveal>
              {sent ? (
                <div style={{ border:"1.5px solid var(--line)", padding:"52px 36px", textAlign:"center", background:"#fff" }}>
                  <div style={{ fontSize:52, marginBottom:18 }}>✅</div>
                  <div style={{ fontFamily:"'Rubik',sans-serif", fontSize:30, fontWeight:900, color:"var(--navy)", marginBottom:12 }}>Thank You!</div>
                  <p style={{ fontFamily:"'Nunito',sans-serif", fontSize:16, fontWeight:700, color:"var(--muted)" }}>We have received your enquiry and will respond shortly.</p>
                </div>
              ) : (
                <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                  <div style={{ display:"flex", gap:10 }}>
                    <input className="inp" placeholder="Full Name" value={form.name} onChange={e => setForm({...form,name:e.target.value})} style={{ flex:1 }}/>
                    <input className="inp" placeholder="Phone Number" value={form.phone} onChange={e => setForm({...form,phone:e.target.value})} style={{ flex:1 }}/>
                  </div>
                  <select className="inp" value={form.service} onChange={e => setForm({...form,service:e.target.value})} style={{ color:form.service?"var(--ink)":"#a09890" }}>
                    <option value="" disabled>Select a Product / Service</option>
                    {[...PRINT_TYPES.map(p=>({name:p.name,icon:p.icon})),...GALLERY_CATS.map(g=>({name:g.label,icon:g.icon}))].map(s => <option key={s.name}>{s.icon} {s.name}</option>)}
                  </select>
                  <textarea className="inp" rows={5} placeholder="Describe your requirement — quantity, size, material..." value={form.message} onChange={e => setForm({...form,message:e.target.value})} style={{ resize:"vertical" }}/>
                  <button className="btn" style={{ width:"100%", padding:16, fontSize:13 }} onClick={() => { if(form.name&&form.phone) setSent(true); }}>Send Enquiry →</button>
                  <a href="https://wa.me/919842735737?text=Hi%2C%20I%27d%20like%20a%20printing%20quote" target="_blank" rel="noopener noreferrer"
                    style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10, padding:"15px", background:"#22c55e", color:"#fff", textDecoration:"none", fontFamily:"'Rubik',sans-serif", fontSize:13, fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", transition:"background .22s" }}
                    onMouseOver={e => e.currentTarget.style.background="#16a34a"}
                    onMouseOut={e  => e.currentTarget.style.background="#22c55e"}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Chat on WhatsApp
                  </a>
                </div>
              )}
            </Reveal>
            <Reveal d={.1}>
              <div style={{ display:"flex", flexDirection:"column", gap:18 }}>
                {[{ic:"📍",l:"Address",v:"530, 7th Street Extension\nGandhipuram, Coimbatore — 641012"},{ic:"📞",l:"Phone",v:"9842262124 & 98427 35737"},{ic:"⏰",l:"Hours",v:"Opens at 10 AM · Monday – Saturday"},{ic:"📅",l:"Since",v:"Established 1999 — 25+ Years of Trust"},{ic:"⭐",l:"Rating",v:"5.0 · 20 Verified Google Reviews"}].map(({ic,l,v}) => (
                  <div key={l} style={{ display:"flex", gap:16 }}>
                    <div style={{ width:46, height:46, background:"#fff", border:"1.5px solid var(--line)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0 }}>{ic}</div>
                    <div>
                      <div style={{ fontFamily:"'DM Mono',monospace", fontSize:10, fontWeight:500, letterSpacing:".28em", textTransform:"uppercase", color:"var(--gold)", marginBottom:5 }}>{l}</div>
                      <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:15, fontWeight:700, color:"var(--ink2)", lineHeight:1.65, whiteSpace:"pre-line" }}>{v}</div>
                    </div>
                  </div>
                ))}
                <div style={{ border:"1.5px solid var(--line)", overflow:"hidden", marginTop:6 }}>
                  <iframe title="Sri Darshna Printers" width="100%" height="190" frameBorder="0" style={{ display:"block" }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0!2d76.9558!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x1!2sSri+Darshna+Printers!5e0!3m2!1sen!2sin!4v1"
                    allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                  <a href="https://maps.google.com/?q=Sri+Darshna+Printers+Gandhipuram+Coimbatore" target="_blank" rel="noopener noreferrer"
                    style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, padding:"13px", background:"var(--navy)", color:"var(--gold2)", textDecoration:"none", fontFamily:"'Rubik',sans-serif", fontSize:12, fontWeight:700, letterSpacing:".18em", textTransform:"uppercase" }}>
                    📍 Get Directions →
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ background:"var(--navy)", padding:"60px 52px 28px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1.2fr 1fr 1fr 1fr", gap:44, marginBottom:48 }}>
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:13, marginBottom:18 }}>
                <div style={{ width:44, height:44, border:"2px solid rgba(212,170,74,.32)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(212,170,74,.7)" strokeWidth="1.4" strokeLinecap="round"><rect x="3" y="7" width="18" height="11" rx="1"/><path d="M7 7V4a1 1 0 011-1h8a1 1 0 011 1v3"/><path d="M7 14h10v5a1 1 0 01-1 1H8a1 1 0 01-1-1v-5z"/></svg>
                </div>
                <div>
                  <div style={{ fontFamily:"'Playfair Display',serif", fontSize:18, fontWeight:900, color:"#fff", letterSpacing:".02em" }}>Sri Darshna Printers</div>
                  <div style={{ fontFamily:"'DM Mono',monospace", fontSize:8.5, fontWeight:500, letterSpacing:".28em", color:"var(--gold2)", textTransform:"uppercase", marginTop:3 }}>Est. 1999 · Coimbatore</div>
                </div>
              </div>
              <p style={{ fontFamily:"'Nunito',sans-serif", fontSize:13, fontWeight:700, color:"rgba(255,255,255,.42)", lineHeight:1.85, marginBottom:18 }}>Premium printing for every need at the most competitive prices in Coimbatore since 1999.</p>
              <div style={{ display:"flex", gap:8 }}>
                {[{l:"FB",h:"https://facebook.com"},{l:"IG",h:"https://instagram.com"}].map(s => (
                  <a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer"
                    style={{ width:36, height:36, background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.12)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Rubik',sans-serif", fontSize:11, fontWeight:700, color:"rgba(255,255,255,.55)", textDecoration:"none", transition:"all .22s" }}
                    onMouseOver={e => { e.currentTarget.style.background="rgba(184,146,42,.2)"; e.currentTarget.style.color="var(--gold2)"; }}
                    onMouseOut={e  => { e.currentTarget.style.background="rgba(255,255,255,.06)"; e.currentTarget.style.color="rgba(255,255,255,.55)"; }}>{s.l}</a>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontFamily:"'Rubik',sans-serif", fontSize:11, fontWeight:700, letterSpacing:".28em", textTransform:"uppercase", color:"var(--gold)", marginBottom:18 }}>Services</div>
              <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
                {GALLERY_CATS.slice(0,7).map(s => <span key={s.label} style={{ fontFamily:"'Nunito',sans-serif", fontSize:13, fontWeight:700, color:"rgba(255,255,255,.42)", cursor:"pointer", transition:"color .2s" }} onMouseOver={e=>e.target.style.color="#fff"} onMouseOut={e=>e.target.style.color="rgba(255,255,255,.42)"}>{s.label}</span>)}
              </div>
            </div>
            <div>
              <div style={{ fontFamily:"'Rubik',sans-serif", fontSize:11, fontWeight:700, letterSpacing:".28em", textTransform:"uppercase", color:"var(--gold)", marginBottom:18 }}>Navigate</div>
              <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
                {NAV.map(n => <span key={n} style={{ fontFamily:"'Nunito',sans-serif", fontSize:13, fontWeight:700, color:"rgba(255,255,255,.42)", cursor:"pointer", transition:"color .2s" }} onClick={() => go(n)} onMouseOver={e=>e.target.style.color="#fff"} onMouseOut={e=>e.target.style.color="rgba(255,255,255,.42)"}>{n}</span>)}
              </div>
            </div>
            <div>
              <div style={{ fontFamily:"'Rubik',sans-serif", fontSize:11, fontWeight:700, letterSpacing:".28em", textTransform:"uppercase", color:"var(--gold)", marginBottom:18 }}>Find Us</div>
              <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                {[["📍","Gandhipuram, Coimbatore"],["📞","9842262124 & 98427 35737"],["⏰","Opens 10 AM"],["📅","Est. 1999"]].map(([ic,tx]) => (
                  <div key={tx} style={{ display:"flex", gap:10 }}>
                    <span style={{ fontSize:15 }}>{ic}</span>
                    <span style={{ fontFamily:"'Nunito',sans-serif", fontSize:13, fontWeight:700, color:"rgba(255,255,255,.42)" }}>{tx}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ borderTop:"1px solid rgba(255,255,255,.08)", paddingTop:22, display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:10 }}>
            <span style={{ fontFamily:"'Nunito',sans-serif", fontSize:13, fontWeight:700, color:"rgba(255,255,255,.3)" }}>© 2026 Sri Darshna Printers · All rights reserved.</span>
            <span style={{ fontFamily:"'DM Mono',monospace", fontSize:11, fontWeight:500, letterSpacing:".18em", color:"rgba(255,255,255,.3)" }}>Since 1999</span>
          </div>
        </div>
      </footer>

      {/* ══ GALLERY MODAL ══ */}
      {modalCat && (
        <div className="modal-bg" onClick={e => { if(e.target===e.currentTarget) setModalCat(null); }}>
          <div className="modal-box">
            <div className="modal-hdr">
              <div>
                <div style={{ fontFamily:"'DM Mono',monospace", fontSize:10, fontWeight:500, letterSpacing:".28em", textTransform:"uppercase", color:"var(--gold)", marginBottom:8 }}>Gallery</div>
                <h3 style={{ fontFamily:"'Rubik',sans-serif", fontSize:28, fontWeight:900, color:"var(--ink)" }}>{modalCat.label}</h3>
                <p style={{ fontFamily:"'Nunito',sans-serif", fontSize:15, fontWeight:700, color:"var(--muted)", marginTop:5 }}>{modalCat.desc} — click any image to enlarge</p>
              </div>
              <button className="modal-close" onClick={() => setModalCat(null)}>✕</button>
            </div>
            <div className="modal-grid">
              {modalCat.imgs.map((img, idx) => (
  <img
    key={idx}
    src={img}
    alt={modalCat.label}
    onClick={() => setLightbox({ cat: modalCat, idx })}
    style={{
  width: "100%",
  aspectRatio: "1 / 1",   // ✅ makes it square
  objectFit: "cover",
  borderRadius: 12,
  cursor: "pointer"
}}
  />
))}
            </div>
            <div style={{ padding:"0 36px 32px", display:"flex", gap:12 }}>
              <button className="btn" style={{ fontSize:12 }} onClick={() => { setModalCat(null); go("contact"); }}>Order {modalCat.label} →</button>
              <a href="https://wa.me/919842735737" target="_blank" rel="noopener noreferrer"
                style={{ display:"inline-flex", alignItems:"center", gap:8, fontFamily:"'Rubik',sans-serif", fontSize:12, fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", padding:"14px 24px", background:"#22c55e", color:"#fff", textDecoration:"none" }}>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ══ LIGHTBOX ══ */}
      {lightbox && (
        <div className="lb-bg" onClick={e => { if(e.target===e.currentTarget) setLightbox(null); }}>
          <button className="lb-close" onClick={() => setLightbox(null)}>✕</button>
          <button className="lb-nav" style={{ left:24 }} onClick={() => setLightbox(l => ({ ...l, idx:(l.idx-1+l.cat.imgs)%l.cat.imgs }))}>‹</button>
          <div style={{ width:"60vw", maxWidth:700, aspectRatio:"4/3", background:lightbox.cat.color, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", border:"1px solid rgba(255,255,255,.1)", position:"relative" }}>
            <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)", backgroundSize:"32px 32px" }}/>
            <div style={{ fontSize:80, opacity:.6, marginBottom:22 }}>{lightbox.cat.icon}</div>
            <div style={{ fontFamily:"'Rubik',sans-serif", fontSize:24, fontWeight:900, color:"rgba(255,255,255,.65)", marginBottom:8 }}>{lightbox.cat.label}</div>
            <div style={{ fontFamily:"'DM Mono',monospace", fontSize:12, fontWeight:500, letterSpacing:".24em", color:"rgba(255,255,255,.35)" }}>Image #{lightbox.idx+1}</div>
          </div>
          <button className="lb-nav" style={{ right:24 }} onClick={() => setLightbox(l => ({ ...l, idx:(l.idx+1)%l.cat.imgs }))}>›</button>
          <div style={{ position:"absolute", bottom:28, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:14 }}>
            <div style={{ display:"flex", gap:8 }}>
              {Array.from({ length:lightbox.cat.imgs }).map((_,i) => <div key={i} style={{ width:i===lightbox.idx?28:10, height:10, borderRadius:5, background:i===lightbox.idx?"var(--gold)":"rgba(255,255,255,.3)", transition:"all .3s" }}/>)}
            </div>
            <div style={{ fontFamily:"'DM Mono',monospace", fontSize:12, fontWeight:500, letterSpacing:".24em", color:"rgba(255,255,255,.4)" }}>{lightbox.idx+1} / {lightbox.cat.imgs}</div>
          </div>
        </div>
      )}
    </div>
  );
}