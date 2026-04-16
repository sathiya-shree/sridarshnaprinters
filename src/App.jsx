import { useState, useEffect, useRef } from "react";
import logo from "./assets/lgos.png";
import digital from "./assets/digital-printing-machine.jpg";
import offset from "./assets/offset.png";
import screen from "./assets/screen-print.jpeg";
import dtp from "./assets/IMG-20260321-WA0115.jpg";

/*cards*/
import b1 from "./assets/IMG-20260321-WA0024.jpg";
import b2 from "./assets/IMG-20260321-WA0067.jpg";
import b3 from "./assets/IMG-20260321-WA0068.jpg";
import b4 from "./assets/IMG-20260321-WA0082.jpg";
import b5 from "./assets/IMG-20260321-WA0070.jpg";
import b6 from "./assets/IMG-20260321-WA0079.jpg";

/*invitation*/
import b7 from "./assets/IMG-20260321-WA0043.jpg";
import b8 from "./assets/IMG-20260321-WA0054.jpg";
import b9 from "./assets/IMG-20260321-WA0052.jpg";
import b10 from "./assets/IMG-20260321-WA0059.jpg";
import b11 from "./assets/IMG-20260321-WA0056.jpg";
import b12 from "./assets/IMG-20260321-WA0057.jpg";

/*brochure*/
import b13 from "./assets/IMG-20260321-WA0074.jpg";
import b14 from "./assets/IMG-20260321-WA0029.jpg";
import b15 from "./assets/IMG-20260321-WA0110.jpg";
import b16 from "./assets/IMG-20260321-WA0037.jpg";
import b17 from "./assets/IMG-20260321-WA0038.jpg";
import b18 from "./assets/IMG-20260321-WA0039.jpg";

/*flex*/
import b19 from "./assets/IMG-20260321-WA0111.jpg";
import b65 from "./assets/IMG-20260321-WA0109.jpg";
import b66 from "./assets/IMG-20260321-WA0106.jpg";
import b67 from "./assets/IMG-20260321-WA0107.jpg";


/*stickers-labels*/
import b20 from "./assets/IMG-20260321-WA0093.jpg";
import b53 from "./assets/stick.png";
import b54 from "./assets/label-stickers-printing-services.jpg";
import b21 from "./assets/IMG-20260321-WA0094.jpg";

/*letter-pads*/
import b47 from "./assets/letterhead.jpg";
import b48 from "./assets/online-letterhead.jpg";
import b49 from "./assets/letter.png";
import b50 from "./assets/letterhead-template.jpg";
import b51 from "./assets/modern-company-letterhead_162891-247.avif";

/*id-cards*/
import b24 from "./assets/IMG-20260321-WA0083.jpg";
import b25 from "./assets/IN_ID-cardsl_Hero-image_05.webp";
import b26 from "./assets/IMG-20260321-WA0085.jpg";
import b27 from "./assets/id.webp";
import b52 from "./assets/corporate-id-card-tags.jpg";

/*rubber-stamps*/
import b28 from "./assets/IMG-20260321-WA0095.jpg";
import b29 from "./assets/IMG-20260321-WA0096.jpg";
import b30 from "./assets/IMG-20260321-WA0097.jpg";

/*lamination*/
import b33 from "./assets/IMG-20260321-WA0011.jpg";
import b34 from "./assets/IMG-20260321-WA0019.jpg";
import b31 from "./assets/IMG-20260321-WA0090.jpg";
import b32 from "./assets/IMG-20260321-WA0023.jpg";



/*nameplates*/
import b35 from "./assets/IMG-20260321-WA0098.jpg";
import b36 from "./assets/IMG-20260321-WA0100.jpg";

/*badges*/
import b37 from "./assets/IMG-20260321-WA0060.jpg";
import b38 from "./assets/IMG-20260321-WA0063.jpg";
import b45 from "./assets/badges.jpeg";
import b46 from "./assets/DIYPrintableBlankBadgePartywholesalehubcopy.webp";
/*standees*/
import b39 from "./assets/IMG-20260321-WA0104.jpg";
import b40 from "./assets/IMG-20260321-WA0112.jpg";

/*sunpacks*/
import b55 from "./assets/sun.webp";
import b56 from "./assets/sunpack2.jpg";
import b57 from "./assets/IMG-20260321-WA0018.jpg";

/*vibuthi-covers*/
import b41 from "./assets/IMG-20260321-WA0020.jpg";
import b42 from "./assets/IMG-20260321-WA0021.jpg";

/*posters*/
import b43 from "./assets/IMG-20260321-WA0121.jpg";


/*calendars*/
import b58 from "./assets/cal-1.jpeg";
import b59 from "./assets/cal-2.jpeg";
import b60 from "./assets/cal-3.jpeg";
import b61 from "./assets/cal-4.jpeg";
import b62 from "./assets/cal-5.jpeg";

/*menu cards*/
import b44 from "./assets/IMG-20260321-WA0103.jpg";
import b63 from "./assets/menu-card (1).jpeg";
/*design*/
import b68 from "./assets/IMG-20260321-WA0117.jpg";
import b69 from "./assets/IMG-20260321-WA0122.jpg";
import b70 from "./assets/IMG-20260321-WA0119.jpg";
import b71 from "./assets/IMG-20260321-WA0118.jpg";



/* ─── PRINTING TYPES (new section below Services) ─── */
const HERO_IMGS = [];

const PRINT_TYPES = [
  { 
    id:"digital",
    name:"Digital Printing",
    desc:"Fast, precise digital printing for short runs. Perfect for personalised prints and quick-turn jobs.",
    points:[
      "Short Run Printing",
      "Variable Data Print",
      "Quick Turnaround",
      "Photo-Quality Output"
    ],
    cover: digital
  },

  { 
    id:"offset",
    name:"Offset Printing",
    desc:"Traditional offset printing for sharp, consistent quality on large volumes — books, magazines, and catalogues.",
    points:[
      "Books & Magazines",
      "Bulk Brochures",
      "Sharp CMYK Colour",
      "Cost-Effective for Volume"
    ],
    cover: offset
  },

  { 
    id:"screen",
    name:"Screen Printing",
    desc:"High-quality screen printing for T-shirts, bags, uniforms, and promotional merchandise.",
    points:[
      "T-Shirts & Uniforms",
      "Cotton Bags & Caps",
      "Spot Colour Printing",
      "Bulk Order Friendly"
    ],
    cover: screen
  },

  { 
    id:"dtp",
    name:"DTP Designing",
    desc:"Professional Desktop Publishing — from logos and brochures to full publication layouts.",
    points:[
      "Logo & Brand Design",
      "Brochure & Flyer Layouts",
      "Menu & Catalogue Design",
      "Invitation & Card Design"
    ],
    cover: dtp
  }
];

/* ─── GALLERY ─── */
const GALLERY_CATS = [
  { id:"business-cards",  label:"Business Cards",  color:"#1a1f5e", imgs:[b1,b2,b3,b4,b5,b6], desc:"Premium matte, gloss & soft-touch finish" },
  { id:"invitations",     label:"Invitations",       color:"#3d1040", imgs:[b7,b8,b9,b10,b11,b12], desc:"Wedding, event & corporate invitations" },
  { id:"brochures",       label:"Brochures",         color:"#0a2540", imgs:[b14,b13,b15,b16,b17,b18], desc:"Tri-fold, bi-fold & custom formats" },
  { id:"flex-boards",     label:"Flex Boards",       color:"#0d2e1a", imgs:[b19,b65,b66,b67], desc:"Large-format outdoor & indoor displays" },
    { id:"standees",        label:"Standees",         color:"#2a0a2e", imgs:[b39,b40], desc:"Roll-up & cut-out standee displays" },
  { id:"stickers-labels", label:"Stickers & Labels",color:"#2e1a0a", imgs:[b20,b53,b54,b21], desc:"Die-cut, roll & sheet stickers" },
    { id:"menu-cards",      label:"Menu Cards",        color:"#0a1e2e", imgs:[b44,b63], desc:"Restaurant & café menu printing" },
  { id:"letterheads",      label:"Letter Pads",       color:"#1a2e0a", imgs:[b47,b48,b49,b50,b51], desc:"Branded letterheads & notepads" },
  { id:"id-cards",        label:"ID Cards",         color:"#0a1a2e", imgs:[b24,b25,b26,b27,b52], desc:"Employee, student & event ID cards" },
    { id:"posters",         label:"Posters",          color:"#0a2e1a", imgs:[b43], desc:"A4 to A0 full-color poster printing" },
  { id:"rubber-stamps",   label:"Rubber Stamps",    color:"#2e0a0a", imgs:[b30,b29,b28], desc:"Custom rubber & self-inking stamps" },
  { id:"lamination",      label:"Lamination",        color:"#1a1a2e", imgs:[b31,b34,b33,b32], desc:"Gloss, matte & thermal lamination" },
  { id:"badges",          label:"Badges",            color:"#0a2e2a", imgs:[b37,b38,b45,b46], desc:"Metal, plastic & custom event badges" },
  { id:"sun-packs",       label:"Sun Packs",        color:"#2e1a00", imgs:[b57,b56,b55], desc:"UV-resistant sun pack board printing" },
  { id:"vibuthi-covers",  label:"Vibuthi Covers",    color:"#1a0a2e", imgs:[b41,b42], desc:"Traditional vibuthi packet covers" },
  { id:"calendars",       label:"Calendars",      color:"#2e0a1a", imgs:[b62,b59,b60,b61,b58], desc:"Wall, desk & customised calendars" },
  { id:"dtp-design",      label:"DTP & Design",      color:"#1e0a2a", imgs:[b68,b69,b70,b71], desc:"Logos, layouts & desktop publishing" },
  { id:"name-plates",     label:"Name Plates",       color:"#2e2a0a", imgs:[b35,b36], desc:"Acrylic, brass & engraved name plates" },

];



const REVIEWS = [
  { name:"Bharath Gowda",      initial:"B", text:"Best Printing Service. Friendly staff and lowest prices in Coimbatore!", ago:"4 months ago", stars:5 },
  { name:"Subramaniam",        initial:"S", text:"Quality was excellent. Highly recommend Sri Darshna Printers.",          ago:"4 months ago", stars:5 },
  { name:"Jothi Prakash S",    initial:"J", text:"Superb work at very low cost! Thank you for your amazing service.",      ago:"6 years ago", stars:5  },
  { name:"Sagunthala Senthil", initial:"S", text:"Best printing in Gandhipuram. Clean output and professional staff.",     ago:"4 months ago", stars:5 },
  { name:"Gokul Kumar",        initial:"G", text:"Great response from the team. Work delivered on time and looked great.",  ago:"6 years ago", stars:5  },
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

/* ─── CUSTOM CURSOR ─── */
function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const posRef = useRef({ x: -100, y: -100 });
  const dotPosRef = useRef({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const move = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const down = () => setClicked(true);
    const up = () => setClicked(false);

    const checkHover = (e) => {
      const el = e.target;
      const isHoverable = el.closest("button,a,.scard,.ptcard,.gal-card,.wcard,.faq-btn,[data-cursor-hover]");
      setHovered(!!isHoverable);
    };

    const animate = () => {
      dotPosRef.current.x += (posRef.current.x - dotPosRef.current.x) * 0.12;
      dotPosRef.current.y += (posRef.current.y - dotPosRef.current.y) * 0.12;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPosRef.current.x - 20}px, ${dotPosRef.current.y - 20}px)`;
      }
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${posRef.current.x - 4}px, ${posRef.current.y - 4}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousemove", checkHover, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", checkHover);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      <div ref={cursorRef} style={{
        position: "fixed", top: 0, left: 0, width: 8, height: 8, borderRadius: "50%",
        background: "var(--gold)", zIndex: 9999, pointerEvents: "none",
        transition: "width .2s, height .2s, background .2s",
        willChange: "transform",
      }} />
      <div ref={dotRef} style={{
        position: "fixed", top: 0, left: 0, width: 40, height: 40, borderRadius: "50%",
        border: `1.5px solid ${hovered ? "var(--gold)" : "rgba(184,146,42,0.45)"}`,
        zIndex: 9998, pointerEvents: "none",
        transition: "border-color .3s, width .3s, height .3s",
        willChange: "transform",
        transform: clicked ? "scale(0.85)" : "scale(1)",
      }} />
    </>
  );
}

/* ─── 3D COMPUTER (CSS/SVG inline) ─── */
function Computer3D() {
  const [angle, setAngle] = useState(0);
  const [screenText, setScreenText] = useState(0);
  const screenTexts = ["✦ Digital Print", "✦ Offset Print", "✦ Screen Print", "✦ DTP Design", "✦ Business Cards", "✦ Flex Boards", "✦ Invitaions", "✦ Standee", "✦ Brochure"];

  useEffect(() => {
    let frame = 0;
    const id = setInterval(() => {
      frame++;
      setAngle(Math.sin(frame * 0.025) * 8);
    }, 50);
    const sid = setInterval(() => setScreenText(t => (t + 1) % screenTexts.length), 2800);
    return () => { clearInterval(id); clearInterval(sid); };
  }, []);

  return (
    <div style={{ perspective: "800px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", padding: "20px 0" }}>
      <div style={{
        transform: `rotateY(${angle}deg) rotateX(5deg)`,
        transition: "transform 0.1s linear",
        transformStyle: "preserve-3d",
        width: 220, position: "relative"
      }}>
        {/* Monitor */}
        <div style={{
          width: 220, height: 150, background: "linear-gradient(145deg,#1a2240,#0d1530)",
          border: "3px solid rgba(212,170,74,0.5)", borderRadius: 10,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 0 30px rgba(212,170,74,0.15), inset 0 0 20px rgba(0,0,0,0.5)",
          position: "relative", overflow: "hidden"
        }}>
          {/* Screen glow */}
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(212,170,74,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
          {/* Scanlines */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)", pointerEvents: "none" }} />
          {/* Screen content */}
          <div style={{ textAlign: "center", zIndex: 1, padding: 12 }}>
            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(212,170,74,0.5)", marginBottom: 8 }}>Sri Darshna Printers</div>
            <div style={{ fontFamily: "'Rubik',sans-serif", fontSize: 13, fontWeight: 700, color: "var(--gold2)", letterSpacing: 1, transition: "all 0.5s", animation: "screenFlip 2.8s infinite" }}>
              {screenTexts[screenText]}
            </div>
            <div style={{ marginTop: 10, display: "flex", justifyContent: "center", gap: 4 }}>
              {[...Array(3)].map((_, i) => (
                <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: i === (screenText % 3) ? "var(--gold)" : "rgba(212,170,74,0.3)", transition: "background .3s" }} />
              ))}
            </div>
          </div>
          {/* Corner decorations */}
          {[["top","left"],["top","right"],["bottom","left"],["bottom","right"]].map(([v,h],i) => (
            <div key={i} style={{ position:"absolute", [v]:6, [h]:6, width:10, height:10, [`border${v[0].toUpperCase()+v.slice(1)}`]:"1.5px solid rgba(212,170,74,0.6)", [`border${h[0].toUpperCase()+h.slice(1)}`]:"1.5px solid rgba(212,170,74,0.6)" }}/>
          ))}
        </div>
        {/* Neck */}
        <div style={{ width: 14, height: 22, background: "linear-gradient(180deg,#1a2240,#0d1530)", margin: "0 auto", borderBottom: "2px solid rgba(212,170,74,0.3)" }} />
        {/* Base */}
        <div style={{ width: 100, height: 12, background: "linear-gradient(135deg,#1a2240,#0d1530)", margin: "0 auto", border: "2px solid rgba(212,170,74,0.3)", borderRadius: 4 }} />
        {/* Keyboard */}
        <div style={{ width: 200, height: 55, background: "linear-gradient(135deg,#14204a,#0a1530)", border: "2px solid rgba(212,170,74,0.3)", borderRadius: 6, margin: "8px auto 0", padding: 6 }}>
          {[4,5,5].map((count, row) => (
            <div key={row} style={{ display: "flex", gap: 3, marginBottom: 3, justifyContent: "center" }}>
              {[...Array(count)].map((_, i) => (
                <div key={i} style={{ flex: 1, height: 10, background: "rgba(212,170,74,0.12)", border: "1px solid rgba(212,170,74,0.2)", borderRadius: 2 }} />
              ))}
            </div>
          ))}
        </div>
        {/* Reflection */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 150, background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)", borderRadius: 10, pointerEvents: "none" }} />
      </div>
      <style>{`@keyframes screenFlip { 0%,100%{opacity:1;} 40%{opacity:0;} 50%{opacity:1;} }`}</style>
    </div>
  );
}

/* ─── INTRO CARD REVEAL ─── */
function IntroCard({ onDone }) {
  const [phase, setPhase] = useState(0); // 0=enter, 1=show, 2=exit
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    // Generate sparkle positions
    setSparkles([...Array(14)].map((_, i) => ({
      id: i, x: Math.random() * 100, y: Math.random() * 100,
      size: Math.random() * 4 + 2, delay: Math.random() * 1.2, dur: Math.random() * 1 + 0.8
    })));
    const t1 = setTimeout(() => setPhase(1), 80);
    const t2 = setTimeout(() => setPhase(2), 3200);
    const t3 = setTimeout(() => onDone(), 3900);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div onClick={() => { setPhase(2); setTimeout(onDone, 700); }} style={{
      position: "fixed", inset: 0, zIndex: 2000,
      background: "rgba(10,12,20,0.97)", backdropFilter: "blur(18px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      cursor: "pointer",
      opacity: phase === 2 ? 0 : 1,
      transition: "opacity .7s cubic-bezier(.16,1,.3,1)",
    }}>
      {/* Animated grid bg */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(212,170,74,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(212,170,74,0.04) 1px,transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

      {/* Sparkles */}
      {sparkles.map(s => (
        <div key={s.id} style={{
          position: "absolute", left: `${s.x}%`, top: `${s.y}%`,
          width: s.size, height: s.size, borderRadius: "50%",
          background: "var(--gold2)", opacity: 0,
          animation: `sparkle ${s.dur}s ${s.delay}s ease-in-out infinite alternate`,
        }} />
      ))}

      {/* Card */}
      <div style={{
        background: "linear-gradient(145deg,#14204a,#0a1020)",
        border: "1px solid rgba(212,170,74,0.35)",
        padding: "52px 64px",
        textAlign: "center",
        position: "relative",
        maxWidth: 480, width: "90%",
        transform: phase === 0 ? "scale(0.82) translateY(40px)" : phase === 2 ? "scale(0.92) translateY(-20px)" : "scale(1) translateY(0)",
        opacity: phase === 0 ? 0 : phase === 2 ? 0 : 1,
        transition: "all .85s cubic-bezier(.16,1,.3,1)",
        boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 60px rgba(212,170,74,0.08)",
      }}>
        {/* Corner deco */}
        {[["top","left"],["top","right"],["bottom","left"],["bottom","right"]].map(([v,h],i) => (
          <div key={i} style={{ position:"absolute",[v]:14,[h]:14,width:22,height:22,[`border${v[0].toUpperCase()+v.slice(1)}`]:"2px solid rgba(212,170,74,0.7)",[`border${h[0].toUpperCase()+h.slice(1)}`]:"2px solid rgba(212,170,74,0.7)" }}/>
        ))}

        {/* Logo */}
        <div style={{ width: 72, height: 72, margin: "0 auto 24px", border: "1.5px solid rgba(212,170,74,0.3)", background: "rgba(255,255,255,0.04)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8 }}>
          <img src={logo} alt="Logo" style={{ maxWidth: "85%", maxHeight: "85%", objectFit: "contain" }} />
        </div>

        <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, fontWeight: 500, letterSpacing: ".32em", textTransform: "uppercase", color: "rgba(212,170,74,0.55)", marginBottom: 16 }}>Est. 1999 · Coimbatore</div>

        <h1 style={{ fontFamily: "'Nunito',serif", fontSize: "clamp(28px,5vw,42px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, letterSpacing: "-.5px", marginBottom: 12 }}>
          Sri Darshna<br /><span style={{ color: "var(--gold2)" }}>Printers</span>
        </h1>

        <div style={{ width: 52, height: 2, background: "linear-gradient(90deg,var(--gold),var(--gold2))", margin: "20px auto" }} />

        <p style={{ fontFamily: "'Nunito',sans-serif", fontSize: 15, fontWeight: 700, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 28 }}>
          Premium Printing · Gandhipuram<br />
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 13 }}>★★★★★ 5.0 · 20 Google Reviews</span>
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap" }}>
          {["Business Cards","Brochures","Flex Boards","ID Cards","Banners"].map(tag => (
            <span key={tag} style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, fontWeight: 500, letterSpacing: ".2em", textTransform: "uppercase", padding: "5px 12px", border: "1px solid rgba(212,170,74,0.25)", color: "rgba(212,170,74,0.55)", borderRadius: 3 }}>{tag}</span>
          ))}
        </div>

        <div style={{ marginTop: 28, fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: ".2em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase" }}>
          tap anywhere to enter
        </div>
      </div>
      <style>{`@keyframes sparkle { from{opacity:0;transform:scale(0.5);} to{opacity:0.8;transform:scale(1.4);} }`}</style>
    </div>
  );
}

/* ─── GOOGLE REVIEW CARDS ─── */
function ReviewCards() {
  const allReviews = [
    {
      name: "Arun K",
      initial: "A",
      col: "#1a2a6e",
      text: "Really impressed with the print clarity and finishing. Everything was exactly as expected.",
      ago: "2 weeks ago",
      stars: 5
    },
    {
      name: "Meena R",
      initial: "M",
      col: "#1a4a2e",
      text: "Very professional service. They understood my requirement quickly and delivered on time.",
      ago: "1 month ago",
      stars: 5
    },
    {
      name: "Karthik V",
      initial: "K",
      col: "#4a1a2e",
      text: "Good quality prints at reasonable pricing. Will definitely come back for future work.",
      ago: "3 weeks ago",
      stars: 4
    },
    {
      name: "Divya S",
      initial: "D",
      col: "#2e1a4a",
      text: "Loved the finishing and paper quality. Staff were helpful throughout the process.",
      ago: "2 months ago",
      stars: 5
    },
    {
      name: "Rahul M",
      initial: "R",
      col: "#1a4a4a",
      text: "Quick turnaround and neat work. Communication was smooth and clear.",
      ago: "10 days ago",
      stars: 5
    },
  ];
  const [hovIdx, setHovIdx] = useState(null);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginTop: 40 }}>
      {allReviews.map((r, i) => (
        <div key={i}
          onMouseEnter={() => setHovIdx(i)}
          onMouseLeave={() => setHovIdx(null)}
          style={{
            background: "#fff",
            border: "1.5px solid var(--line)",
            padding: "28px 24px",
            position: "relative",
            transition: "transform .4s cubic-bezier(.16,1,.3,1), box-shadow .4s, border-color .3s",
            transform: hovIdx === i ? "translateY(-6px)" : "none",
            boxShadow: hovIdx === i ? "0 20px 48px rgba(0,0,0,0.1)" : "0 4px 12px rgba(0,0,0,0.04)",
            borderColor: hovIdx === i ? "rgba(184,146,42,0.4)" : "var(--line)",
          }}
        >
     
          {/* Stars */}
          <div style={{ color: "#FBBC04", fontSize: 14, letterSpacing: 2, marginBottom: 14 }}>{"★".repeat(r.stars)}</div>

          {/* Quote */}
          <p style={{ fontFamily: "'Nunito',sans-serif", fontSize: 14, fontWeight: 700, fontStyle: "italic", color: "var(--ink2)", lineHeight: 1.75, marginBottom: 20, minHeight: 60 }}>
            "{r.text}"
          </p>

          {/* Divider */}
          <div style={{ height: 1, background: "var(--line)", marginBottom: 16 }} />

          {/* Author */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: r.col, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Rubik',sans-serif", fontSize: 17, fontWeight: 900, color: "#fff", flexShrink: 0 }}>
              {r.initial}
            </div>
            <div>
              <div style={{ fontFamily: "'Rubik',sans-serif", fontSize: 14, fontWeight: 700, color: "var(--ink)" }}>{r.name}</div>
              <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: ".14em", color: "var(--muted)", marginTop: 2 }}> {r.ago}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

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

/* ─── GALLERY CARD ─── */
export function GalCard({ cat, onClick }) {
  const [hov, setHov] = useState(false);

  const previewImg = Array.isArray(cat.imgs) ? cat.imgs[0] : null;

  return (
    <div
      onClick={() => onClick(cat)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        cursor: "pointer",
        aspectRatio: "4/3",
        overflow: "hidden",
        background: cat.color || "#1a1a1a",
        borderRadius: "12px",
        transition: "transform .5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow .5s",
        boxShadow: hov ? "0 20px 40px rgba(0,0,0,0.25)" : "0 10px 20px rgba(0,0,0,0.1)",
        transform: hov ? "translateY(-5px)" : "none",
      }}
    >
      {previewImg && (
        <img
          src={previewImg}
          alt={cat.label}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hov ? "scale(1.1)" : "scale(1)",
            transition: "transform .8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
      )}

      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)",
          backgroundSize: "24px 24px",
          pointerEvents: "none"
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transform: hov ? "scale(0.8)" : "scale(1)",
          opacity: hov ? 0 : 1,
          transition: "all .4s"
        }}
      >
        <div style={{ fontSize: 44, opacity: 0.8, filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.3))" }}>
          {cat.icon}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(15, 20, 30, 0.75)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: hov ? 1 : 0,
          transition: "opacity .4s",
          padding: 24,
          textAlign: "center"
        }}
      >
        <div style={{ 
          fontSize: 18, 
          fontWeight: 800, 
          color: "#fff",
          transform: hov ? "translateY(0)" : "translateY(10px)",
          transition: "transform .4s cubic-bezier(0.16, 1, 0.3, 1)"
        }}>
          {cat.label}
        </div>

        <div style={{ 
          fontSize: 13, 
          color: "rgba(255,255,255,.7)", 
          margin: "12px 0",
          transform: hov ? "translateY(0)" : "translateY(15px)",
          transition: "transform .4s .05s cubic-bezier(0.16, 1, 0.3, 1)"
        }}>
          {cat.desc}
        </div>

        <div
          style={{
            fontSize: 11,
            fontWeight: 800,
            color: "#d4aa4a",
            border: "1px solid rgba(212,170,74,.5)",
            padding: "8px 18px",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            transform: hov ? "translateY(0)" : "translateY(20px)",
            transition: "transform .4s .1s cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        >
          View All →
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
          padding: "20px 15px 12px",
          opacity: hov ? 0 : 1,
          transition: "opacity .3s"
        }}
      >
        <div style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>
          {cat.label}
        </div>
      </div>
    </div>
  );
}

/* ─── MODAL IMAGE ─── */
export function ModalImg({ src, label, idx, onClick }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        aspectRatio: "1/1",
        overflow: "hidden",
        cursor: "pointer",
        borderRadius: "8px",
        background: "#000",
        transition: "transform .4s cubic-bezier(0.16, 1, 0.3, 1)"
      }}
    >
      {src && (
        <img
          src={src}
          alt={label}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: hov ? 0.7 : 1,
            transform: hov ? "scale(1.08)" : "scale(1)",
            transition: "all .6s cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        />
      )}

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(184, 146, 42, 0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: hov ? 1 : 0,
          transition: "opacity .3s",
          backdropFilter: hov ? "blur(3px)" : "none"
        }}
      >
        <div
          style={{
            color: "#fff",
            background: "rgba(0,0,0,0.6)",
            border: "1px solid rgba(255,255,255,.3)",
            padding: "8px 16px",
            fontSize: 11,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "1px"
          }}
        >
          Enlarge
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 10,
          right: 12,
          color: "#fff",
          fontSize: 10,
          fontWeight: 700,
          opacity: 0.8,
          fontFamily: "monospace"
        }}
      >
        [{String(idx + 1).padStart(2, '0')}]
      </div>
    </div>
  );
}

/* ─── FULLSCREEN VIEWER ─── */
export function FullscreenViewer({ src, onClose }) {
  if (!src) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(10, 12, 18, 0.96)",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: "40px"
      }}
    >
      <img
        src={src}
        alt="preview"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
          boxShadow: "0 40px 100px rgba(0,0,0,0.6)",
          borderRadius: "4px"
        }}
      />

      <div
        onClick={onClose}
        style={{
          position: "absolute",
          top: 30,
          right: 40,
          fontSize: "24px",
          color: "#fff",
          cursor: "pointer",
          width: "44px",
          height: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "50%",
          transition: "background .3s"
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
        onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
      >
        ✕
      </div>
    </div>
  );
}

/* ─── MAIN ─── */
export default function SriDarshna() {
  const [showIntro, setShowIntro]   = useState(true);
  const [scrollY,    setScrollY]    = useState(0);
  const [activeNav,  setActiveNav]  = useState("Home");
  const [revIdx,     setRevIdx]     = useState(0);
  const [openFaq,    setOpenFaq]    = useState(null);
  const [form,       setForm]       = useState({ name:"", phone:"", service:"", message:"" });
  const [sent,       setSent]       = useState(false);
  const [pct,        setPct]        = useState(0);
  const [modalCat,   setModalCat]   = useState(null);
  const [lightbox,   setLightbox]   = useState(null);
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
        if (e.key === "ArrowRight") setLightbox(l => ({ ...l, idx:(l.idx+1)%l.cat.imgs.length }));
        if (e.key === "ArrowLeft")  setLightbox(l => ({ ...l, idx:(l.idx-1+l.cat.imgs.length)%l.cat.imgs.length }));
      }
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [lightbox]);

  useEffect(() => {
    document.body.style.overflow = (modalCat || lightbox || showIntro) ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalCat, lightbox, showIntro]);

  // Hide system cursor on desktop
  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (!isTouchDevice) document.body.style.cursor = "none";
    return () => { document.body.style.cursor = ""; };
  }, []);

  const go = s => { document.getElementById(s.toLowerCase())?.scrollIntoView({ behavior:"smooth" }); setMobileMenu(false); };
  const navUp = scrollY > 50;

  const CSS=`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Manrope:wght@400;500;600&display=swap');
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
    .nl{font-family:'Rubik',sans-serif;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;background:none;border:none;border-bottom:2px solid transparent;padding-bottom:3px;cursor:none;transition:color .22s,border-color .22s;}
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
    .scard{border:1.5px solid var(--line);padding:30px 24px 26px;background:var(--cream);position:relative;overflow:hidden;transition:transform .4s cubic-bezier(.16,1,.3,1),box-shadow .4s,border-color .35s,background .35s;cursor:none;}
    .scard::after{content:'';position:absolute;bottom:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--gold),var(--gold2));transform:scaleX(0);transform-origin:left;transition:transform .4s cubic-bezier(.16,1,.3,1);}
    .scard:hover{transform:translateY(-7px);box-shadow:0 24px 56px rgba(0,0,0,.1);border-color:rgba(184,146,42,.3);background:#fff;}
    .scard:hover::after{transform:scaleX(1);}

    /* ── PRINT TYPE CARDS ── */
.ptcard {
  overflow: hidden;
  position: relative;
  cursor: none;
  transition: 
    transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), 
    box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  background: var(--cream);
  z-index: 1;
}

.ptcard:hover {
  transform: translateY(-10px);
  box-shadow: 
    0 30px 60px -12px rgba(20, 32, 74, 0.15), 
    0 18px 36px -18px rgba(0, 0, 0, 0.2);
}

.ptcard-img {
  position: relative;
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--cream2);
}

.ptcard-img::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    45deg, 
    rgba(255,255,255,0) 0%, 
    rgba(255,255,255,0.2) 50%, 
    rgba(255,255,255,0) 100%
  );
  transform: translateX(-100%);
  transition: transform 0.8s ease;
}

.ptcard:hover .ptcard-img::after {
  transform: translateX(100%);
}

.ptcard-img-inner {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.ptcard:hover .ptcard-img-inner {
  transform: scale(1.1);
}

.ptcard-body {
  padding: 32px;
  background: #fff;
  border: 1.5px solid var(--line);
  border-top: none;
  position: relative;
  transition: border-color 0.4s ease;
}

.ptcard-body::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--gold), var(--gold2));
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.ptcard:hover .ptcard-body::before {
  transform: scaleX(1);
  transform-origin: left;
}

.ptcard h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  margin-bottom: 12px;
  transition: color 0.3s ease;
}

.ptcard:hover h3 {
  color: var(--gold);
}

.ptcard p {
  font-family: 'Manrope', sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--muted);
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.ptcard:hover p {
  opacity: 1;
}

    /* ── GAL GRID ── */
    .gal-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;}

    /* ── WHY CARDS ── */
.wcard {
  position: relative;
  border: 1.5px solid var(--line);
  padding: 40px 28px;
  background: var(--cream);
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
  z-index: 1;
}

.wcard::before {
  content: "";
  position: absolute;
  inset: 0;
  border: 1.5px solid var(--gold);
  margin: -1.5px;
  clip-path: inset(0 100% 100% 0);
  transition: clip-path 0.6s cubic-bezier(0.2, 1, 0.3, 1);
  z-index: 2;
}

.wcard:hover::before {
  clip-path: inset(0 0 0 0);
}

.wcard::after {
  content: "";
  position: absolute;
  top: 0; left: -150%;
  width: 100%; height: 100%;
  background: linear-gradient(
    120deg, 
    transparent, 
    rgba(255, 255, 255, 0.6), 
    transparent
  );
  transition: 0.8s;
  z-index: 3;
}

.wcard:hover::after {
  left: 150%;
}

.wcard:hover {
  transform: translateY(-5px);
  background: #ffffff;
  box-shadow: 0 15px 35px -10px rgba(20, 32, 74, 0.1);
}

.wcard-accent {
  position: absolute;
  top: 0;
  left: 50%;
  width: 0;
  height: 3px;
  background: var(--gold);
  transition: all 0.4s ease;
  transform: translateX(-50%);
  z-index: 4;
}

.wcard:hover .wcard-accent {
  width: 40%;
}

.wcard h3 {
  transition: transform 0.4s cubic-bezier(0.2, 1, 0.3, 1), color 0.3s;
}

.wcard:hover h3 {
  color: var(--gold);
  transform: translateY(-2px);
}

.wcard p {
  transition: opacity 0.4s ease;
}

.wcard:hover p {
  opacity: 0.9;
}


/* ── THE HERITAGE VAULT (NAVY BOX) ── */
.heritage-card {
  background: var(--navy);
  padding: 52px 44px;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 40px 100px -20px rgba(10, 15, 30, 0.5);
}

.heritage-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("https://www.transparenttextures.com/patterns/stardust.png");
  opacity: 0.1;
  pointer-events: none;
}

.heritage-glow {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: radial-gradient(
    circle at 50% 0%, 
    rgba(212, 170, 74, 0.15) 0%, 
    transparent 70%
  );
  pointer-events: none;
  transition: opacity 0.5s ease;
}

.heritage-card:hover {
  transform: translateY(-5px);
  border-color: rgba(212, 170, 74, 0.2);
  box-shadow: 0 50px 120px -30px rgba(10, 15, 30, 0.7);
}

.heritage-card::after {
  content: "";
  position: absolute;
  top: -90%; left: -100%;
  width: 200%; height: 200%;
  background: linear-gradient(
    135deg,
    transparent 0%,
    rgba(255, 255, 255, 0.02) 45%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0.02) 55%,
    transparent 100%
  );
  transform: rotate(-10deg);
  transition: all 0.8s ease;
  pointer-events: none;
}

.heritage-card:hover::after {
  top: -20%;
  left: -20%;
}

.logo-container {
  width: 55px;
  height: 45px;
  border: 1px solid rgba(212, 170, 74, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(4px);
  transition: all 0.4s ease;
}

.heritage-card:hover .logo-container {
  border-color: var(--gold2);
  background: rgba(255, 255, 255, 0.07);
  transform: scale(1.05);
}

.logo-container.logo-hero {
  display: none;
}

    /* ── REVIEW ── */
    @keyframes revIn{from{opacity:0;transform:translateY(14px);}to{opacity:1;transform:none;}}
    .rev-enter{animation:revIn .5s cubic-bezier(.16,1,.3,1) both;}

    /* ── FAQ ── */
    .faq-row{border-bottom:1.5px solid var(--line);}
    .faq-btn{width:100%;display:flex;justify-content:space-between;align-items:center;padding:22px 28px;background:none;border:none;cursor:none;gap:24px;text-align:left;}

    /* ── BTNS ── */
    .btn{font-family:'Rubik',sans-serif;font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:15px 32px;background:var(--gold);color:#fff;border:none;cursor:none;transition:background .22s,transform .18s;}
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
    .modal-close{width:40px;height:40px;border:1.5px solid var(--line);background:none;cursor:none;font-size:18px;font-weight:700;display:flex;align-items:center;justify-content:center;transition:all .22s;flex-shrink:0;font-family:'Nunito',sans-serif;}
    .modal-close:hover{border-color:var(--gold);color:var(--gold);}
    .modal-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding:24px 36px 32px;}

    /* ── LIGHTBOX ── */
    .lb-bg{position:fixed;inset:0;z-index:900;background:rgba(0,0,0,.95);display:flex;align-items:center;justify-content:center;}
    .lb-nav{position:absolute;top:50%;transform:translateY(-50%);width:52px;height:52px;background:rgba(255,255,255,.08);border:1.5px solid rgba(255,255,255,.18);color:#fff;font-size:22px;font-family:'Nunito',sans-serif;font-weight:900;cursor:none;display:flex;align-items:center;justify-content:center;transition:all .2s;}
    .lb-nav:hover{background:rgba(255,255,255,.18);}
    .lb-close{position:absolute;top:20px;right:20px;width:44px;height:44px;background:rgba(255,255,255,.08);border:1.5px solid rgba(255,255,255,.18);color:#fff;font-size:18px;font-family:'Nunito',sans-serif;font-weight:900;cursor:none;display:flex;align-items:center;justify-content:center;}

    /* ── WA FLOAT ── */
    .wa-float{position:fixed;bottom:28px;right:28px;width:58px;height:58px;border-radius:50%;background:#22c55e;display:flex;align-items:center;justify-content:center;z-index:400;box-shadow:0 8px 28px rgba(34,197,94,.4);transition:transform .2s,box-shadow .2s;text-decoration:none;}
    .wa-float:hover{transform:scale(1.1);box-shadow:0 14px 38px rgba(34,197,94,.55);}

    /* ── MOBILE MENU ── */
    .mob-menu{position:fixed;inset:0;z-index:500;background:rgba(10,12,20,.97);backdrop-filter:blur(18px);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:32px;}
    .mob-nl{font-family:'Rubik',sans-serif;font-size:28px;font-weight:900;letter-spacing:.06em;text-transform:uppercase;background:none;border:none;color:rgba(255,255,255,.7);cursor:pointer;transition:color .2s;}
    .mob-nl:hover{color:var(--gold2);}

    @keyframes hup{from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:none;}}

    @media(max-width:900px){
      .nav{padding:0 20px;}
      .nd{display:none!important;}
      .sec{padding:72px 20px;}
      .hero{grid-template-columns:1fr;min-height:auto;}
      .hero-l{padding:96px 20px 52px;}
      .hero-r{border-left:none;border-top:1px solid rgba(255,255,255,.08);}
      .gal-grid{grid-template-columns:1fr 1fr!important;}
      .svc-grid{grid-template-columns:1fr 1fr!important;}
      .pt-grid{grid-template-columns:1fr 1fr!important;}
      .modal-grid{grid-template-columns:1fr 1fr!important;}
      .two{grid-template-columns:1fr!important;gap:48px!important;}
      .mob-ham{display:flex!important;}
    }
    @media(min-width:901px){
      .mob-ham{display:none!important;}
    }
`;

  
  const TICK = ["Business Cards","Invitations","Brochures","Flex Boards","Stickers & Labels","Letter Pads","ID Cards","Rubber Stamps","DTP Design","Screen Printing","Offset Printing","Digital Printing","Name Plates","Badges","Standees","Posters","Calendars","Menu Cards","Since 1999","Gandhipuram CBE","5-Star Rated"];

  return (
    <div style={{ background:"var(--cream)", color:"var(--ink)", minHeight:"100vh" }}>
      <style>{CSS}</style>

      {/* ── CUSTOM CURSOR ── */}
      <CustomCursor />

      {/* ── INTRO CARD ── */}
      {showIntro && <IntroCard onDone={() => setShowIntro(false)} />}

      <div className="prog" style={{ width:`${pct}%` }} />

      {/* WhatsApp float */}
      <a href="https://wa.me/919842262124?text=Hi%2C%20I%27d%20like%20a%20quote%20from%20Sri%20Darshna%20Printers" target="_blank" rel="noopener noreferrer" className="wa-float">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      {/* ── MOBILE MENU ── */}
      {mobileMenu && (
        <div className="mob-menu">
          <div onClick={() => setMobileMenu(false)} style={{ position:"absolute", top:24, right:24, width:44, height:44, display:"flex", alignItems:"center", justifyContent:"center", border:"1.5px solid rgba(255,255,255,.15)", color:"#fff", cursor:"pointer", fontSize:20 }}>✕</div>
          {NAV.map(n => <button key={n} className="mob-nl" onClick={() => go(n)}>{n}</button>)}
          <a href="https://wa.me/919842262124" target="_blank" rel="noopener noreferrer" style={{ fontFamily:"'Rubik',sans-serif", fontSize:15, fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", padding:"16px 36px", background:"#22c55e", color:"#fff", textDecoration:"none", borderRadius:4 }}>WhatsApp Us</a>
        </div>
      )}

{/* ══ NAVBAR ══ */}
<nav className={`nav ${navUp ? "up" : ""}`}>
  
  {/* Left Section: Logo and Title */}
  <div style={{ display: "flex", alignItems: "center", gap: 5, cursor: "none" }} onClick={() => go("home")}>
    <div style={{ 
      width: 39, 
      height: 39, 
      background: navUp ? "linear-gradient(135deg,#14204a,#b8922a)" : "rgba(255,255,255,.08)", 
      border: navUp ? "none" : "1px solid rgba(255,255,255,.15)", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      flexShrink: 0, 
      transition: "background .4s" 
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "40px",
        width: "auto",
        marginRight: "0.9px"
      }}>
        <img 
          src={logo} 
          alt="Logo" 
          style={{
            height: "100%",
            width: "auto",
            objectFit: "contain"
          }} 
        />
      </div>
    </div>
    <div>
      <div style={{ fontFamily: "'Nunito',serif", fontSize: 20, fontWeight: 900, color: navUp ? "var(--ink)" : "#fff", lineHeight: 1.1, transition: "color .4s", letterSpacing: ".02em" }}>
        Sri Darshna Printers
      </div>
      <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, fontWeight: 500, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--gold2)", marginTop: 2 }}>
        Est. 1999 · Coimbatore
      </div>
    </div>
  </div>

  {/* Middle Section: Navigation Links */}
  <div className="nd" style={{ display: "flex", gap: 32 }}>
    {NAV.map(n => (
      <button 
        key={n} 
        className={`nl ${activeNav === n ? "on" : ""}`}
        style={{ color: navUp ? (activeNav === n ? "var(--gold)" : "var(--muted)") : (activeNav === n ? "var(--gold2)" : "rgba(255,255,255,.7)") }}
        onClick={() => go(n)}
      >
        {n}
      </button>
    ))}
  </div>

  {/* Hamburger for mobile */}
  <button className="mob-ham" onClick={() => setMobileMenu(true)} style={{ background:"none", border:"none", cursor:"pointer", display:"flex", flexDirection:"column", gap:5, padding:8 }}>
    {[0,1,2].map(i => <div key={i} style={{ width:26, height:2, background: navUp ? "var(--ink)" : "#fff", borderRadius:2, transition:"background .3s" }} />)}
  </button>

  {/* Right Section */}
  <div className="nd" style={{ width: 41 }}></div> 
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
            <h1 style={{ fontFamily:"'Nunito',serif", fontSize:"clamp(50px,9vw,132px)", fontWeight:700, color:"#fff", lineHeight:.88, letterSpacing:"-1px", animation:"hup .95s .2s both" }}>
              Sri Darshna<br /><span style={{ color:"var(--gold2)" }}>Printers</span>
            </h1>
            <div style={{ animation:"hup .85s .45s both", paddingTop:40, marginTop:44, borderTop:"1px solid rgba(255,255,255,.1)" }}>
              <p style={{ fontFamily:"'DM Mono',monospace", fontSize:11, fontWeight:500, letterSpacing:".22em", textTransform:"uppercase", color:"rgba(255,255,255,.38)", marginBottom:14 }}>Gandhipuram, Coimbatore · Tamil Nadu</p>
              <p style={{ fontFamily:"'Nunito',sans-serif", fontSize:17, fontWeight:700, color:"rgba(255,255,255,.6)", lineHeight:1.85, maxWidth:480, marginBottom:40 }}>Premium printing for every need — from visiting cards to giant flex boards. Quality you can see, prices you will love.</p>
              <div style={{ display:"flex", gap:14, flexWrap:"wrap" }}>
                <button className="btn" style={{ fontSize:13 }} onClick={() => go("contact")}>Place Your Order</button>
                <button className="btn inv" style={{ fontSize:13 }} onClick={() => go("gallery")}>View Gallery</button>
              </div>
              <div style={{ display:"flex", gap:36, marginTop:44, flexWrap:"wrap" }}>
                {[["📍","Gandhipuram, CBE"],["⏰","Opens 10 AM"],["📞","9842262124 & 98427 35737"]].map(([ic,tx]) => (
                  <div key={tx} style={{ display:"flex", alignItems:"center", gap:8 }}>
                    <span style={{ fontSize:16 }}>{ic}</span>
                    <span style={{ fontFamily:"'Nunito',sans-serif", fontSize:17, fontWeight:700, color:"#fff" }}>{tx}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="hero-r" style={{ animation:"hup .9s .38s both" }}>
            <div className="hero-r-top">
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:22, width:"100%", padding:"0 20px" }}>
                <div style={{ width:164, height:45,  display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",  position:"relative" }}>
                  
                  <div style={{
  fontFamily:"'Nunito',sans-serif",
  fontSize:11,
  fontWeight:700,
  letterSpacing:".2em",
  textTransform:"uppercase",
  color:"rgba(212,170,74,.4)",
  marginTop:70
}}>
  <div
  style={{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "7.5px"
  }}
>
 
</div>

</div>

                </div>

                {/* ── 3D COMPUTER ── */}
                <Computer3D />

                <div style={{ 
  display: "flex", 
  flexDirection: "column", 
  alignItems: "center", 
  justifyContent: "center", 
  padding: "15px 10px",
  minHeight: "70px",
  width: "auto" 
}}>
  <div style={{ textAlign: "center" }}>
    <div style={{ fontFamily: "'Nunito',serif", fontSize: 21, fontWeight: 900, color: "#fff", marginTop:-25, letterSpacing: ".02em", lineHeight: 1.1 }}>
      Sri Darshna Printers
    </div>
    <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, fontWeight: 500, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--gold2)", marginTop: 4 }}>
      Coimbatore
    </div>
    <div style={{ 
      fontFamily: "'DM Mono',monospace", 
      fontSize: "20px", 
      fontWeight: 600, 
      color: "#dfd7d7", 
      marginTop:8,
      lineHeight: 1.2
    }}>
      98422 62124<br/>98427 35737
    </div>
  </div>
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
              <a href="https://wa.me/919842262124" target="_blank" rel="noopener noreferrer"
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

      <h2 style={{
        fontFamily: "'Rubik',sans-serif",
        fontSize: "clamp(32px,4vw,54px)",
        fontWeight: 900,
        lineHeight: 1.1,
        color: "var(--ink)"
      }}>
        How We <span style={{ color: "var(--gold)" }}>Print</span>
      </h2>

      <div className="divg" />

      <p style={{
        fontFamily: "'Nunito',sans-serif",
        fontSize: 17,
        fontWeight: 700,
        color: "var(--muted)",
        lineHeight: 1.85,
        maxWidth: 520,
        marginTop: 16
      }}>
        We use multiple printing technologies to give you the best result for every job — big or small.
      </p>
    </Reveal>

    {/* GRID */}
    <div
      className="pt-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: 16,
        marginTop: 52
      }}
    >
      
      {PRINT_TYPES.map((pt, i) => (
        <Reveal key={pt.id} d={i * 0.07}>
          <div className="ptcard">

            {/* IMAGE */}
            <div
              className="ptcard-img"
              style={{
                position: "relative",
                height: 220,
                backgroundImage: `url(${pt.cover})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                overflow: "hidden"
              }}
            >
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)"
              }} />

              <div
                className="ptcard-img-inner"
                style={{
                  position: "relative",
                  zIndex: 2,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 14
                }}
              >
                <div style={{ fontSize: 52, opacity: 0.7 }}>
                  {pt.icon}
                </div>

                <div className="ptcard-img">
  <img 
    src={pt.cover}
    alt={pt.name}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }}
  />
</div>
              </div>
            </div>

            {/* BODY */}
            <div className="ptcard-body" style={{ padding: 18 }}>
              <h3 style={{
                fontFamily: "'Rubik',sans-serif",
                fontSize: 20,
                fontWeight: 900,
                color: "var(--ink)",
                marginBottom: 10,
                lineHeight: 1.15
              }}>
                {pt.name}
              </h3>

              <p style={{
                fontFamily: "'Nunito',sans-serif",
                fontSize: 14,
                fontWeight: 700,
                color: "var(--muted)",
                lineHeight: 1.82,
                marginBottom: 18
              }}>
                {pt.desc}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {pt.points.map(point => (
                  <div key={point} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10
                  }}>
                    <div style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--gold)",
                      flexShrink: 0
                    }} />
                    <span style={{
                      fontFamily: "'Nunito',sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "var(--ink2)"
                    }}>
                      {point}
                    </span>
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
    <Reveal style={{ textAlign: "center", marginBottom: 60 }}>
      <div className="ey" style={{ justifyContent: "center" }}>Why Choose Us</div>
      <h2 style={{ 
        fontFamily: "'Rubik',sans-serif", 
        fontSize: "clamp(32px, 4vw, 54px)", 
        fontWeight: 1000, 
        lineHeight: 1.1, 
        color: "var(--ink)" 
      }}>
        Sri Darshna Printers <span style={{ color: "var(--gold)" }}>Standard</span>
      </h2>
      <div className="divg" style={{ margin: "18px auto" }} />
      <p style={{ 
        fontFamily: "'Nunito',sans-serif", 
        fontSize: 17, 
        fontWeight: 700, 
        color: "var(--muted)", 
        maxWidth: 460, 
        margin: "16px auto 0", 
        lineHeight: 1.85 
      }}>
        25+ years of trusted printing. Our work has spoken for us since 1999.
      </p>
    </Reveal>

   <div 
  style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }} 
  className="svc-grid"
>
  {WHY_US.map((w, i) => (
    <Reveal key={w.title} d={i * .07}>
      <div className="wcard">
        <div className="wcard-accent"></div>
        <div className="wcard-icon">
          {w.icon}
        </div>

        <h3 style={{ 
          fontFamily: "'Rubik',sans-serif", 
          fontSize: 21, 
          fontWeight: 800, 
          color: "var(--ink)", 
          marginBottom: 10 
        }}>
          {w.title}
        </h3>
        
        <p style={{ 
          fontFamily: "'Nunito',sans-serif", 
          fontSize: 15, 
          fontWeight: 700, 
          color: "var(--muted)", 
          lineHeight: 1.82 
        }}>
          {w.desc}
        </p>
      </div>
    </Reveal>
  ))}
</div>
  </div>
</section>


{/* ══ ABOUT SECTION ══ */}
<section id="about" className="sec">
  <div className="wrap">
    <div className="two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
      
      {/* ── LEFT COLUMN: THE HERITAGE VAULT ── */}
      <Reveal>
        <div className="heritage-card">
          <div className="heritage-glow" />
          
          <div style={{ 
            position: "absolute", 
            top: 0, 
            right: 0, 
            width: 140, 
            height: 140, 
            border: "1px solid rgba(212,170,74,.15)", 
            borderRadius: "0 0 0 100%", 
            pointerEvents: "none" 
          }} />
          
          <div className="logo-container">
            <img 
              src={logo} 
              alt="Logo" 
              style={{ maxWidth: "180%", maxHeight: "160%", objectFit: "auto" }} 
            />
          </div>

          <div style={{ position: "relative", zIndex: 2 }}>
            <div style={{ fontFamily: "'Rubik',sans-serif", fontSize: 56, fontWeight: 900, color: "var(--gold2)", lineHeight: 1, marginBottom: 6 }}>
              5.0
            </div>
            <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(255,255,255,.38)", marginBottom: 32 }}>
              Google Rating · 20 Reviews
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20, position: "relative", zIndex: 2 }}>
            {[
              ["📍", `530, 7th Street Ext\nGandhipuram, Coimbatore 641012`],
              ["📞", "9842262124 & 98427 35737"],
              ["⏰", "Opens 10 AM · Mon–Sat"],
              ["📅", "Established 1999"]
            ].map(([ic, tx]) => (
              <div key={tx} style={{ display: "flex", gap: 13, alignItems: "flex-start", group: "true" }}>
                <span style={{ fontSize: 18, marginTop: 1, flexShrink: 0, filter: "drop-shadow(0 0 8px rgba(212,170,74,0.3))" }}>{ic}</span>
                <span style={{ 
                  fontFamily: "'Nunito',sans-serif", 
                  fontSize: 16, 
                  fontWeight: 700, 
                  color: "rgba(255, 255, 255, 0.55)", 
                  lineHeight: 1.6, 
                  whiteSpace: "pre-line",
                  transition: "color 0.3s ease"
                }}>
                  {tx}
                </span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40, display: "flex", gap: 12, flexWrap: "wrap", position: "relative", zIndex: 2 }}>
            {[{ l: "Facebook", h: "https://facebook.com/people/Sri-Darshna-Printers" }, { l: "Instagram", h: "https://www.instagram.com/sri_darshna_printers/" }].map(s => (
              <a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer"
                style={{ 
                  fontFamily: "'Rubik',sans-serif", 
                  fontSize: 11, 
                  fontWeight: 700, 
                  letterSpacing: ".14em", 
                  textTransform: "uppercase", 
                  padding: "12px 22px", 
                  border: "1.5px solid rgba(255,255,255,.12)", 
                  color: "rgba(255,255,255,.5)", 
                  textDecoration: "none", 
                  transition: "all .3s ease",
                  background: "rgba(255,255,255,0.02)"
                }}
                onMouseOver={e => { 
                  e.currentTarget.style.borderColor = "var(--gold2)"; 
                  e.currentTarget.style.color = "var(--gold2)";
                  e.currentTarget.style.background = "rgba(212,170,74,0.05)";
                }}
                onMouseOut={e => { 
                  e.currentTarget.style.borderColor = "rgba(255,255,255,.12)"; 
                  e.currentTarget.style.color = "rgba(255,255,255,.5)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                }}>
                {s.l}
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ── RIGHT COLUMN: OUR STORY ── */}
      <div>
        <Reveal>
          <div className="ey">Our Story</div>
          <h2 style={{ fontFamily: "'Rubik',sans-serif", fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 900, lineHeight: 1.15, color: "var(--ink)", marginBottom: 18 }}>
            Gandhipuram's Most<br /><span style={{ color: "var(--gold)" }}>Trusted Print Shop</span>
          </h2>
          <div className="divg" />
        </Reveal>
        
        <Reveal d={.1}>
          <p style={{ fontFamily: "'Nunito',sans-serif", fontSize: 16, fontWeight: 700, color: "var(--muted)", lineHeight: 1.95, marginTop: 25, marginBottom: 18 }}>
            Sri Darshna Printers has been the go-to printing destination for residents, businesses and institutions across Coimbatore since 1999.
          </p>
          
          <div style={{ display: "flex", gap: 44, flexWrap: "wrap", margin: "40px 0" }}>
            {[["25+", "Years"], ["18+", "Products"], ["20", "Reviews"], ["5★", "Rated"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Rubik',sans-serif", fontSize: 44, fontWeight: 900, color: "var(--navy)", lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 11, fontWeight: 800, letterSpacing: ".15em", textTransform: "uppercase", color: "var(--muted)", marginTop: 8 }}>{l}</div>
              </div>
            ))}
          </div>
          
          <button className="btn" style={{ fontSize: 13 }} onClick={() => go("contact")}>
            Place Your Order
          </button>
        </Reveal>
      </div>
    </div>
  </div>
</section>

      {/* ══ REVIEWS ══ */}
      <section className="sec bg2">
        <div className="wrap">
          <Reveal style={{ textAlign:"center", marginBottom:52 }}>
            <div className="ey" style={{ justifyContent:"center" }}>Client Reviews</div>
            <h2 style={{ fontFamily:"'Rubik',sans-serif", fontSize:"clamp(28px,4vw,48px)", fontWeight:900, color:"var(--ink)" }}>What Our Customers <span style={{ color:"var(--gold)" }}>Say</span></h2>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10, marginTop:16 }}>
              <span style={{ color:"var(--gold)", fontSize:18, letterSpacing:3 }}>★★★★★</span>
              <span style={{ fontFamily:"'Rubik',sans-serif", fontSize:18, fontWeight:900, color:"var(--navy)" }}>5.0</span>
              <span style={{ fontFamily:"'Nunito',sans-serif", fontSize:16, fontWeight:700, color:"var(--muted)" }}>· 20 Google Reviews</span>
            </div>
          </Reveal>

         

          {/* Divider */}
          <div style={{ margin:"52px 0 0", borderTop:"1.5px solid var(--line)" }} />

          {/* Original animated single review */}
          <div key={revIdx} className="rev-enter" style={{ background:"#fff", border:"1.5px solid var(--line)", padding:"44px 48px", marginTop:40, marginBottom:24, position:"relative" }}>
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
       {/* ── GOOGLE REVIEW CARDS ── */}
          <Reveal>
            <ReviewCards />
          </Reveal>

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
            <div className="ey" style={{ justifyContent:"center" }}>Place Your Order</div>
            <h2 style={{ fontFamily:"'Rubik',sans-serif", fontSize:"clamp(28px,4vw,54px)", fontWeight:900, color:"var(--ink)" }}><span style={{ color:"var(--gold)" }}>Contact us</span></h2>
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
                  <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
                    <input className="inp" placeholder="Full Name" value={form.name} onChange={e => setForm({...form,name:e.target.value})} style={{ flex:1, minWidth:140 }}/>
                    <input className="inp" placeholder="Phone Number" value={form.phone} onChange={e => setForm({...form,phone:e.target.value})} style={{ flex:1, minWidth:140 }}/>
                  </div>
                  <select className="inp" value={form.service} onChange={e => setForm({...form,service:e.target.value})} style={{ color:form.service?"var(--ink)":"#a09890" }}>
                    <option value="" disabled>Select a Product / Service</option>
                    {[...PRINT_TYPES.map(p=>({name:p.name,icon:p.icon})),...GALLERY_CATS.map(g=>({name:g.label,icon:g.icon}))].map(s => <option key={s.name}>{s.icon} {s.name}</option>)}
                  </select>
                  <textarea className="inp" rows={5} placeholder="Describe your requirement — quantity, size, material..." value={form.message} onChange={e => setForm({...form,message:e.target.value})} style={{ resize:"vertical" }}/>
                  <button className="btn" style={{ width:"100%", padding:16, fontSize:13 }} onClick={() => { if(form.name&&form.phone) setSent(true); }}>Place Your Order →</button>
                  <a href="https://wa.me/919842262124?text=Hi%2C%20I%27d%20like%20a%20printing%20quote" target="_blank" rel="noopener noreferrer"
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
{[
  {
    ic:"📍",
    l:"Address",
    v:<>530, 7th Street Extension<br/>Gandhipuram, Coimbatore — 641012</>
  },
  {ic:"📞",l:"Phone",v:"9842262124 & 98427 35737"},
  {ic:"⏰",l:"Hours",v:"Opens at 10 AM · Monday – Saturday"},
  {ic:"📅",l:"Since",v:"Established 1999 — 25+ Years of Trust"},
  {ic:"⭐",l:"Rating",v:"5.0 · 20 Verified Google Reviews"}
].map(({ic,l,v}) => (                  <div key={l} style={{ display:"flex", gap:16 }}>
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
<footer style={{ background: "var(--navy)", padding: "60px 52px 28px" }}>
  <div style={{ maxWidth: 1100, margin: "0 auto" }}>
    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr 1fr", gap: 44, marginBottom: 48 }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 18 }}>
          
          <div style={{ 
            width: 70,
            height: 50, 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            overflow: "hidden"
          }}>
            <img 
              src={logo}
              alt="Sri Darshna Printers Logo"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain"
              }}
            />
          </div>

          <div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 900, color: "#fff", letterSpacing: ".02em" }}>Sri Darshna Printers</div>
            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 8.5, fontWeight: 500, letterSpacing: ".28em", color: "var(--gold2)", textTransform: "uppercase", marginTop: 3 }}>Est. 1999 · Coimbatore</div>
          </div>
        </div>
        <p style={{ 
          fontFamily: "'Nunito',sans-serif", 
          fontSize: 13, 
          fontWeight: 700, 
          color: "rgba(255,255,255,.42)", 
          lineHeight: 1.85, 
          marginBottom: 18 
        }}>
          Premium printing for every need at the most competitive prices in Coimbatore since 1999.
        </p>

<div style={{ display: "flex", gap: 10 }}>
  {[
    {
      l: "FB",
      h: "https://www.facebook.com/people/Sri-Darshna-Printers",
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
    },
    {
      l: "IG",
      h: "https://www.instagram.com/sri_darshna_printers/",
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
    }
  ].map(s => (
    <a 
      key={s.l} 
      href={s.h} 
      target="_blank" 
      rel="noopener noreferrer"
      style={{ 
        width: 40, 
        height: 40, 
        background: "rgba(255,255,255,.06)", 
        border: "1px solid rgba(255,255,255,.12)", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        color: "rgba(255,255,255,.55)", 
        textDecoration: "none", 
        transition: "all .3s cubic-bezier(0.16, 1, 0.3, 1)",
        borderRadius: "4px" 
      }}
      onMouseOver={e => { 
        e.currentTarget.style.background = "rgba(184,146,42,.25)"; 
        e.currentTarget.style.color = "var(--gold2)";
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.borderColor = "rgba(184,146,42,0.4)";
        e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
      }}
      onMouseOut={e => { 
        e.currentTarget.style.background = "rgba(255,255,255,.06)"; 
        e.currentTarget.style.color = "rgba(255,255,255,.55)"; 
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,.12)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {s.icon}
    </a>
  ))}
</div>
            </div>
            <div>
              <div style={{ fontFamily:"'Rubik',sans-serif", fontSize:11, fontWeight:700, letterSpacing:".28em", textTransform:"uppercase", color:"var(--gold)", marginBottom:18 }}>Services</div>
              <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
                {GALLERY_CATS.slice(0,7).map(s => <span key={s.label} style={{ fontFamily:"'Nunito',sans-serif", fontSize:13, fontWeight:700, color:"rgba(255,255,255,.42)", cursor:"none", transition:"color .2s" }} onMouseOver={e=>e.target.style.color="#fff"} onMouseOut={e=>e.target.style.color="rgba(255,255,255,.42)"}>{s.label}</span>)}
              </div>
            </div>
            <div>
              <div style={{ fontFamily:"'Rubik',sans-serif", fontSize:11, fontWeight:700, letterSpacing:".28em", textTransform:"uppercase", color:"var(--gold)", marginBottom:18 }}>Navigate</div>
              <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
                {NAV.map(n => <span key={n} style={{ fontFamily:"'Nunito',sans-serif", fontSize:13, fontWeight:700, color:"rgba(255,255,255,.42)", cursor:"none", transition:"color .2s" }} onClick={() => go(n)} onMouseOver={e=>e.target.style.color="#fff"} onMouseOut={e=>e.target.style.color="rgba(255,255,255,.42)"}>{n}</span>)}
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
  aspectRatio: "1 / 1",
  objectFit: "cover",
  borderRadius: 12,
  cursor: "none"
}}
  />
))}
            </div>
            <div style={{ padding:"0 36px 32px", display:"flex", gap:12 }}>
              <button className="btn" style={{ fontSize:12 }} onClick={() => { setModalCat(null); go("contact"); }}>Order {modalCat.label} →</button>
              <a href="https://wa.me/919842262124" target="_blank" rel="noopener noreferrer"
                style={{ display:"inline-flex", alignItems:"center", gap:8, fontFamily:"'Rubik',sans-serif", fontSize:12, fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", padding:"14px 24px", background:"#22c55e", color:"#fff", textDecoration:"none" }}>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ══ LIGHTBOX ══ */}
{lightbox && (
  <div
    className="lb-bg"
    onClick={e => { if (e.target === e.currentTarget) setLightbox(null); }}
  >
    <button className="lb-close" onClick={() => setLightbox(null)}>✕</button>

    <button
      className="lb-nav"
      style={{ left: 24 }}
      onClick={() =>
        setLightbox(l => ({
          ...l,
          idx: (l.idx - 1 + l.cat.imgs.length) % l.cat.imgs.length
        }))
      }
    >
      ‹
    </button>

    <img
      src={lightbox.cat.imgs[lightbox.idx]}
      alt="preview"
      style={{
        maxWidth: "90vw",
        maxHeight: "85vh",
        objectFit: "contain",
        borderRadius: 10
      }}
    />

    <button
      className="lb-nav"
      style={{ right: 24 }}
      onClick={() =>
        setLightbox(l => ({
          ...l,
          idx: (l.idx + 1) % l.cat.imgs.length
        }))
      }
    >
      ›
    </button>

    <div
      style={{
        position: "absolute",
        bottom: 28,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: 8
      }}
    >
      {lightbox.cat.imgs.map((_, i) => (
        <div
          key={i}
          style={{
            width: i === lightbox.idx ? 24 : 8,
            height: 8,
            borderRadius: 4,
            background: i === lightbox.idx ? "var(--gold)" : "rgba(255,255,255,.4)",
            transition: "all .3s"
          }}
        />
      ))}
    </div>

    <div
      style={{
        position: "absolute",
        bottom: 10,
        width: "100%",
        textAlign: "center",
        color: "rgba(255,255,255,.7)",
        fontSize: 12
      }}
    >
      {lightbox.idx + 1} / {lightbox.cat.imgs.length}
    </div>
  </div>
)}
    </div>
  );
}