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
  { id:"lamination",      label:"Lamination",       color:"#1e2e0a", imgs:[b33,b34,b31,b32], desc:"Protective & glossy lamination" },
  { id:"nameplates",      label:"Nameplates",       color:"#2e1a1e", imgs:[b35,b36], desc:"Engraved & embossed nameplates" },
  { id:"badges",          label:"Badges",           color:"#1a2e2e", imgs:[b37,b38,b45,b46], desc:"Metal, plastic & fabric badges" },
  { id:"sunpack",         label:"Sunpack",          color:"#2e2e0a", imgs:[b55,b56,b57], desc:"Protective sunpack cases" },
  { id:"vibhuti-covers",  label:"Vibhuti Covers",   color:"#0a2e2e", imgs:[b41,b42], desc:"Sacred vibhuti packaging" },
  { id:"calendars",       label:"Calendars",        color:"#2e0a2e", imgs:[b58,b59,b60,b61,b62], desc:"Wall, table & pocket calendars" },
  { id:"design-service",  label:"Design Service",   color:"#1a1a2e", imgs:[b68,b69,b70,b71], desc:"Custom brand & print design" }
];

const NAV = ["Gallery", "Services", "About", "Contact"];

/* ═══════════════════════════════════════════════════════ */

/* ─── Counter Animation Hook ─── */
function useCountUp(endValue, duration = 2000, shouldCount = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldCount) return;
    
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(endValue * progress));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [endValue, duration, shouldCount]);

  return count;
}

/* ─── Global Styles ─── */
const globalStyles = `
  * {
    scroll-behavior: smooth !important;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-8px);
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }

  .modal-bg {
    animation: fadeInUp 0.3s ease-out;
  }

  .modal-box {
    animation: scaleIn 0.4s ease-out;
  }

  .lb-bg {
    animation: fadeInUp 0.3s ease-out;
  }

  .modal-close, .lb-close, .lb-nav {
    transition: all 0.2s ease;
  }

  .modal-close:hover, .lb-close:hover, .lb-nav:hover {
    transform: scale(1.1);
  }
`;

export default function App() {
  const [section, setSection] = useState("home");
  const [modalCat, setModalCat] = useState(null);
  const [lightbox, setLightbox] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const countClients = useCountUp(500, 2000, isVisible.stats);
  const countProjects = useCountUp(10000, 2000, isVisible.stats);
  const countYears = useCountUp(27, 1500, isVisible.stats);

  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.dataset.section]: true,
          }));
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll("[data-section]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  function go(s) {
    setSection(s.toLowerCase());
    setTimeout(() => {
      const el = document.querySelector(`[data-section="${s.toLowerCase()}"]`);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  return (
    <div style={{ background:"#0a0a0a", color:"#fff", overflow:"hidden" }}>
      <style>{globalStyles}</style>

      {/* ══ NAVIGATION ══ */}
      <nav ref={navRef} style={{
        position:"fixed", top:0, left:0, right:0, zIndex:1000,
        background:"rgba(10, 10, 10, 0.95)", backdropFilter:"blur(10px)",
        borderBottom:"1px solid rgba(212, 170, 74, 0.1)",
        padding:"16px 32px",
        animation:"fadeInDown 0.5s ease-out"
      }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <img src={logo} alt="Sri Darshna Printers" style={{
            height:44,
            cursor:"pointer",
            transition:"transform 0.3s ease",
            transform:`scale(${1 + scrollY * 0.0002})`
          }} onClick={() => go("home")} />
          <div style={{ display:"flex", gap:28, alignItems:"center" }}>
            {NAV.map((n, i) => (
              <span
                key={n}
                onClick={() => go(n)}
                style={{
                  fontFamily:"'Rubik',sans-serif",
                  fontSize:13,
                  fontWeight:700,
                  letterSpacing:".1em",
                  textTransform:"uppercase",
                  color: section === n.toLowerCase() ? "var(--gold)" : "rgba(255,255,255,.6)",
                  cursor:"pointer",
                  transition:"all 0.3s ease",
                  position:"relative",
                  animation:`slideInRight 0.5s ease-out ${i * 50}ms backwards`
                }}
                onMouseOver={(e) => {
                  e.target.style.color = "var(--gold)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  e.target.style.color = section === n.toLowerCase() ? "var(--gold)" : "rgba(255,255,255,.6)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </nav>

      <div style={{ paddingTop:60 }}>
        {/* ══ HERO ══ */}
        <section data-section="home" style={{
          minHeight:"100vh",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          background:"linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)",
          position:"relative",
          overflow:"hidden"
        }}>
          {/* Animated background elements */}
          <div style={{
            position:"absolute",
            top:"10%",
            left:"5%",
            width:400,
            height:400,
            borderRadius:"50%",
            background:"radial-gradient(circle, rgba(184,146,42,.05) 0%, transparent 70%)",
            animation:"float 6s ease-in-out infinite"
          }} />
          <div style={{
            position:"absolute",
            bottom:"10%",
            right:"5%",
            width:500,
            height:500,
            borderRadius:"50%",
            background:"radial-gradient(circle, rgba(184,146,42,.03) 0%, transparent 70%)",
            animation:"float 8s ease-in-out infinite 1s"
          }} />

          <div style={{
            position:"relative",
            zIndex:10,
            textAlign:"center",
            maxWidth:900,
            animation:"fadeInUp 0.8s ease-out"
          }}>
            <div style={{
              fontFamily:"'DM Mono',monospace",
              fontSize:13,
              fontWeight:500,
              letterSpacing:".28em",
              textTransform:"uppercase",
              color:"var(--gold)",
              marginBottom:24,
              animation:"fadeInUp 0.8s ease-out 0.1s backwards"
            }}>
              Premium Printing Since 1999
            </div>
            <h1 style={{
              fontFamily:"'Playfair Display',serif",
              fontSize:72,
              fontWeight:900,
              lineHeight:1.1,
              marginBottom:24,
              color:"#fff",
              animation:"fadeInUp 0.8s ease-out 0.2s backwards",
              letterSpacing:"-0.02em"
            }}>
              Sri Darshna Printers
            </h1>
            <p style={{
              fontFamily:"'Nunito',sans-serif",
              fontSize:18,
              fontWeight:600,
              color:"rgba(255,255,255,.7)",
              marginBottom:48,
              lineHeight:1.6,
              animation:"fadeInUp 0.8s ease-out 0.3s backwards"
            }}>
              Transforming ideas into stunning printed reality. From business cards to large-format displays, we deliver excellence at every scale.
            </p>
            <div style={{
              display:"flex",
              gap:20,
              justifyContent:"center",
              animation:"fadeInUp 0.8s ease-out 0.4s backwards"
            }}>
              <button
                onClick={() => go("gallery")}
                style={{
                  fontFamily:"'Rubik',sans-serif",
                  fontSize:13,
                  fontWeight:700,
                  letterSpacing:".1em",
                  textTransform:"uppercase",
                  padding:"16px 40px",
                  background:"var(--gold)",
                  color:"#000",
                  border:"none",
                  borderRadius:6,
                  cursor:"pointer",
                  transition:"all 0.3s ease",
                  position:"relative",
                  overflow:"hidden"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 12px 24px rgba(184,146,42,.3)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Explore Gallery →
              </button>
              <a
                href="https://wa.me/919842262124"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily:"'Rubik',sans-serif",
                  fontSize:13,
                  fontWeight:700,
                  letterSpacing:".1em",
                  textTransform:"uppercase",
                  padding:"16px 40px",
                  background:"transparent",
                  color:"var(--gold)",
                  border:"2px solid var(--gold)",
                  borderRadius:6,
                  cursor:"pointer",
                  transition:"all 0.3s ease",
                  textDecoration:"none",
                  display:"inline-flex",
                  alignItems:"center"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "rgba(184,146,42,.1)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div style={{
            position:"absolute",
            bottom:40,
            left:"50%",
            transform:"translateX(-50%)",
            animation:"float 3s ease-in-out infinite"
          }}>
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none" stroke="var(--gold)" strokeWidth="2">
              <path d="M12 10v20M6 24l6 6 6-6" />
            </svg>
          </div>
        </section>

        {/* ══ STATS ══ */}
        <section data-section="stats" style={{
          padding:"80px 32px",
          background:"linear-gradient(180deg, #1a1a2e 0%, #0a0a0a 100%)",
          borderBottom:"1px solid rgba(212,170,74,.1)"
        }}>
          <div style={{ maxWidth:1200, margin:"0 auto" }}>
            <div style={{
              display:"grid",
              gridTemplateColumns:"repeat(3, 1fr)",
              gap:60,
              animation:"fadeInUp 0.8s ease-out"
            }}>
              {[
                { num: countClients, label: "Happy Clients", suffix: "+" },
                { num: countProjects, label: "Projects Completed", suffix: "" },
                { num: countYears, label: "Years of Excellence", suffix: "+" }
              ].map((stat, i) => (
                <div key={i} style={{
                  textAlign:"center",
                  animation:`scaleIn 0.6s ease-out ${i * 100}ms backwards`
                }}>
                  <div style={{
                    fontFamily:"'Playfair Display',serif",
                    fontSize:56,
                    fontWeight:900,
                    color:"var(--gold)",
                    marginBottom:12,
                    transition:"all 0.3s ease"
                  }}>
                    {stat.num}{stat.suffix}
                  </div>
                  <div style={{
                    fontFamily:"'Nunito',sans-serif",
                    fontSize:14,
                    fontWeight:600,
                    color:"rgba(255,255,255,.6)",
                    letterSpacing:".05em"
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ PRINTING TYPES ══ */}
        <section data-section="services" style={{
          padding:"80px 32px",
          background:"#0a0a0a"
        }}>
          <div style={{ maxWidth:1200, margin:"0 auto" }}>
            <div style={{
              textAlign:"center",
              marginBottom:80,
              animation:"fadeInUp 0.8s ease-out"
            }}>
              <div style={{
                fontFamily:"'DM Mono',monospace",
                fontSize:12,
                fontWeight:500,
                letterSpacing:".28em",
                textTransform:"uppercase",
                color:"var(--gold)",
                marginBottom:16
              }}>Our Services</div>
              <h2 style={{
                fontFamily:"'Playfair Display',serif",
                fontSize:48,
                fontWeight:900,
                color:"#fff",
                letterSpacing:"-0.02em"
              }}>
                Printing Excellence
              </h2>
            </div>

            <div style={{
              display:"grid",
              gridTemplateColumns:"repeat(2, 1fr)",
              gap:40
            }}>
              {PRINT_TYPES.map((type, i) => (
                <div
                  key={type.id}
                  style={{
                    display:"flex",
                    gap:28,
                    padding:32,
                    background:"rgba(212,170,74,.03)",
                    border:"1px solid rgba(212,170,74,.1)",
                    borderRadius:12,
                    transition:"all 0.3s ease",
                    animation:`slideInLeft 0.6s ease-out ${i * 100}ms backwards`,
                    cursor:"pointer"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "rgba(212,170,74,.08)";
                    e.currentTarget.style.borderColor = "rgba(212,170,74,.3)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "rgba(212,170,74,.03)";
                    e.currentTarget.style.borderColor = "rgba(212,170,74,.1)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <img
                    src={type.cover}
                    alt={type.name}
                    style={{
                      width:140,
                      height:140,
                      objectFit:"cover",
                      borderRadius:8,
                      flexShrink:0,
                      transition:"transform 0.3s ease"
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                  <div>
                    <h3 style={{
                      fontFamily:"'Rubik',sans-serif",
                      fontSize:20,
                      fontWeight:700,
                      color:"#fff",
                      marginBottom:8
                    }}>
                      {type.name}
                    </h3>
                    <p style={{
                      fontFamily:"'Nunito',sans-serif",
                      fontSize:13,
                      fontWeight:600,
                      color:"rgba(255,255,255,.6)",
                      lineHeight:1.6,
                      marginBottom:16
                    }}>
                      {type.desc}
                    </p>
                    <div style={{
                      display:"flex",
                      flexWrap:"wrap",
                      gap:8
                    }}>
                      {type.points.map((point) => (
                        <span
                          key={point}
                          style={{
                            fontFamily:"'DM Mono',monospace",
                            fontSize:10,
                            fontWeight:500,
                            letterSpacing:".05em",
                            padding:"6px 12px",
                            background:"rgba(212,170,74,.15)",
                            color:"var(--gold)",
                            borderRadius:4,
                            transition:"all 0.2s ease"
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.background = "rgba(212,170,74,.3)";
                            e.currentTarget.style.transform = "scale(1.05)";
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.background = "rgba(212,170,74,.15)";
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ GALLERY ══ */}
        <section data-section="gallery" style={{
          padding:"80px 32px",
          background:"linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 100%)"
        }}>
          <div style={{ maxWidth:1200, margin:"0 auto" }}>
            <div style={{
              textAlign:"center",
              marginBottom:80,
              animation:"fadeInUp 0.8s ease-out"
            }}>
              <div style={{
                fontFamily:"'DM Mono',monospace",
                fontSize:12,
                fontWeight:500,
                letterSpacing:".28em",
                textTransform:"uppercase",
                color:"var(--gold)",
                marginBottom:16
              }}>
                Showcase
              </div>
              <h2 style={{
                fontFamily:"'Playfair Display',serif",
                fontSize:48,
                fontWeight:900,
                color:"#fff",
                letterSpacing:"-0.02em"
              }}>
                Our Work
              </h2>
            </div>

            <div style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",
              gap:20
            }}>
              {GALLERY_CATS.map((cat, i) => (
                <div
                  key={cat.id}
                  onClick={() => setModalCat(cat)}
                  style={{
                    cursor:"pointer",
                    borderRadius:12,
                    overflow:"hidden",
                    aspect:"square",
                    position:"relative",
                    background:cat.color,
                    transition:"all 0.3s ease",
                    animation:`scaleIn 0.5s ease-out ${i * 50}ms backwards`,
                    transform:"translateZ(0)"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.04)";
                    const overlay = e.currentTarget.querySelector(".overlay");
                    if (overlay) overlay.style.opacity = "1";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    const overlay = e.currentTarget.querySelector(".overlay");
                    if (overlay) overlay.style.opacity = "0.8";
                  }}
                >
                  <img
                    src={cat.imgs[0]}
                    alt={cat.label}
                    style={{
                      width:"100%",
                      height:"100%",
                      objectFit:"cover",
                      transition:"transform 0.4s ease"
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                  <div
                    className="overlay"
                    style={{
                      position:"absolute",
                      inset:0,
                      background:"linear-gradient(135deg, rgba(0,0,0,.6) 0%, rgba(184,146,42,.2) 100%)",
                      display:"flex",
                      flexDirection:"column",
                      justifyContent:"flex-end",
                      padding:24,
                      opacity:0.8,
                      transition:"opacity 0.3s ease"
                    }}
                  >
                    <div style={{
                      fontFamily:"'Rubik',sans-serif",
                      fontSize:16,
                      fontWeight:700,
                      color:"#fff",
                      marginBottom:6
                    }}>
                      {cat.label}
                    </div>
                    <div style={{
                      fontFamily:"'Nunito',sans-serif",
                      fontSize:12,
                      fontWeight:600,
                      color:"rgba(255,255,255,.7)"
                    }}>
                      {cat.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ ABOUT ══ */}
        <section data-section="about" style={{
          padding:"80px 32px",
          background:"#0a0a0a"
        }}>
          <div style={{ maxWidth:1200, margin:"0 auto" }}>
            <div style={{
              display:"grid",
              gridTemplateColumns:"1fr 1fr",
              gap:80,
              alignItems:"center",
              animation:"fadeInUp 0.8s ease-out"
            }}>
              <div style={{
                animation:"slideInLeft 0.8s ease-out"
              }}>
                <div style={{
                  fontFamily:"'DM Mono',monospace",
                  fontSize:12,
                  fontWeight:500,
                  letterSpacing:".28em",
                  textTransform:"uppercase",
                  color:"var(--gold)",
                  marginBottom:16
                }}>
                  About Us
                </div>
                <h2 style={{
                  fontFamily:"'Playfair Display',serif",
                  fontSize:42,
                  fontWeight:900,
                  color:"#fff",
                  lineHeight:1.2,
                  marginBottom:24,
                  letterSpacing:"-0.02em"
                }}>
                  Est. 1999
                </h2>
                <p style={{
                  fontFamily:"'Nunito',sans-serif",
                  fontSize:15,
                  fontWeight:600,
                  color:"rgba(255,255,255,.7)",
                  lineHeight:1.8,
                  marginBottom:24
                }}>
                  Sri Darshna Printers has been a cornerstone of printing excellence in Coimbatore for over two decades. We combine traditional craftsmanship with cutting-edge technology to deliver printing solutions that stand out.
                </p>
                <p style={{
                  fontFamily:"'Nunito',sans-serif",
                  fontSize:15,
                  fontWeight:600,
                  color:"rgba(255,255,255,.7)",
                  lineHeight:1.8,
                  marginBottom:32
                }}>
                  Our commitment to quality, innovation, and customer satisfaction has made us the trusted partner for businesses of all sizes.
                </p>
                <button
                  onClick={() => go("contact")}
                  style={{
                    fontFamily:"'Rubik',sans-serif",
                    fontSize:13,
                    fontWeight:700,
                    letterSpacing:".1em",
                    textTransform:"uppercase",
                    padding:"14px 28px",
                    background:"var(--gold)",
                    color:"#000",
                    border:"none",
                    borderRadius:6,
                    cursor:"pointer",
                    transition:"all 0.3s ease"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 12px 24px rgba(184,146,42,.3)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Get in Touch
                </button>
              </div>
              <div style={{
                animation:"slideInRight 0.8s ease-out",
                display:"grid",
                gridTemplateColumns:"1fr 1fr",
                gap:20
              }}>
                {[
                  { title: "Digital Printing", icon: "🖨️" },
                  { title: "Offset Printing", icon: "📋" },
                  { title: "Screen Printing", icon: "👕" },
                  { title: "Design Services", icon: "✨" },
                  { title: "Custom Packaging", icon: "📦" },
                  { title: "Large Format", icon: "📏" }
                ].map((service, i) => (
                  <div
                    key={i}
                    style={{
                      padding:24,
                      background:"rgba(212,170,74,.05)",
                      border:"1px solid rgba(212,170,74,.15)",
                      borderRadius:8,
                      transition:"all 0.3s ease",
                      animation:`scaleIn 0.5s ease-out ${i * 100}ms backwards`
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = "rgba(212,170,74,.12)";
                      e.currentTarget.style.borderColor = "rgba(212,170,42,.3)";
                      e.currentTarget.style.transform = "translateY(-4px)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "rgba(212,170,74,.05)";
                      e.currentTarget.style.borderColor = "rgba(212,170,74,.15)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <div style={{
                      fontSize:28,
                      marginBottom:8
                    }}>
                      {service.icon}
                    </div>
                    <div style={{
                      fontFamily:"'Rubik',sans-serif",
                      fontSize:13,
                      fontWeight:700,
                      color:"#fff"
                    }}>
                      {service.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ CONTACT ══ */}
        <section data-section="contact" style={{
          padding:"80px 32px",
          background:"linear-gradient(135deg, #1a1a2e 0%, #0a0a0a 100%)",
          borderTop:"1px solid rgba(212,170,74,.1)"
        }}>
          <div style={{ maxWidth:800, margin:"0 auto", animation:"fadeInUp 0.8s ease-out" }}>
            <div style={{
              textAlign:"center",
              marginBottom:60
            }}>
              <div style={{
                fontFamily:"'DM Mono',monospace",
                fontSize:12,
                fontWeight:500,
                letterSpacing:".28em",
                textTransform:"uppercase",
                color:"var(--gold)",
                marginBottom:16
              }}>
                Get In Touch
              </div>
              <h2 style={{
                fontFamily:"'Playfair Display',serif",
                fontSize:42,
                fontWeight:900,
                color:"#fff",
                letterSpacing:"-0.02em"
              }}>
                Ready to Print?
              </h2>
            </div>

            <div style={{
              display:"grid",
              gridTemplateColumns:"repeat(2, 1fr)",
              gap:32,
              marginBottom:60
            }}>
              {[
                { icon: "📍", title: "Location", text: "Gandhipuram, Coimbatore" },
                { icon: "📞", title: "Phone", text: "9842262124 & 98427 35737" },
                { icon: "⏰", title: "Hours", text: "Opens 10 AM · Closed Sundays" },
                { icon: "✉️", title: "Email", text: "contact@sridarshnaprinters.com" }
              ].map((contact, i) => (
                <div
                  key={i}
                  style={{
                    padding:32,
                    background:"rgba(212,170,74,.05)",
                    border:"1px solid rgba(212,170,74,.15)",
                    borderRadius:8,
                    transition:"all 0.3s ease",
                    animation:`slideInUp 0.6s ease-out ${i * 100}ms backwards`,
                    cursor:"pointer"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "rgba(212,170,74,.12)";
                    e.currentTarget.style.borderColor = "rgba(212,170,74,.3)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "rgba(212,170,74,.05)";
                    e.currentTarget.style.borderColor = "rgba(212,170,74,.15)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div style={{
                    fontSize:24,
                    marginBottom:12
                  }}>
                    {contact.icon}
                  </div>
                  <div style={{
                    fontFamily:"'Rubik',sans-serif",
                    fontSize:13,
                    fontWeight:700,
                    color:"var(--gold)",
                    marginBottom:6,
                    letterSpacing:".05em",
                    textTransform:"uppercase"
                  }}>
                    {contact.title}
                  </div>
                  <div style={{
                    fontFamily:"'Nunito',sans-serif",
                    fontSize:14,
                    fontWeight:600,
                    color:"rgba(255,255,255,.8)"
                  }}>
                    {contact.text}
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              textAlign:"center"
            }}>
              <a
                href="https://wa.me/919842262124"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display:"inline-flex",
                  alignItems:"center",
                  gap:12,
                  fontFamily:"'Rubik',sans-serif",
                  fontSize:14,
                  fontWeight:700,
                  letterSpacing:".1em",
                  textTransform:"uppercase",
                  padding:"16px 40px",
                  background:"#22c55e",
                  color:"#fff",
                  textDecoration:"none",
                  borderRadius:6,
                  transition:"all 0.3s ease",
                  animation:"slideInUp 0.6s ease-out 0.4s backwards"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 12px 24px rgba(34,197,94,.3)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                💬 Message on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ══ FOOTER ══ */}
        <footer style={{
          padding:"64px 32px",
          background:"#000",
          borderTop:"1px solid rgba(212,170,74,.1)",
          animation:"fadeInUp 0.8s ease-out"
        }}>
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
                  {[{l:"FB",h:"https://www.facebook.com/people/Sri-Darshna-Printers"},{l:"IG",h:"https://www.instagram.com/sri_darshna_printers/"}].map(s => (
                    <a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer"
                      style={{ width:36, height:36, background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.12)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Rubik',sans-serif", fontSize:11, fontWeight:700, color:"rgba(255,255,255,.55)", textDecoration:"none", transition:"all .3s ease" }}
                      onMouseOver={e => { e.currentTarget.style.background="rgba(184,146,42,.2)"; e.currentTarget.style.color="var(--gold2)"; e.currentTarget.style.transform="scale(1.1)"; }}
                      onMouseOut={e  => { e.currentTarget.style.background="rgba(255,255,255,.06)"; e.currentTarget.style.color="rgba(255,255,255,.55)"; e.currentTarget.style.transform="scale(1)"; }}>{s.l}</a>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontFamily:"'Rubik',sans-serif", fontSize:11, fontWeight:700, letterSpacing:".28em", textTransform:"uppercase", color:"var(--gold)", marginBottom:18 }}>Services</div>
                <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
                  {GALLERY_CATS.slice(0,7).map(s => <span key={s.label} style={{ fontFamily:"'Nunito',sans-serif", fontSize:13, fontWeight:700, color:"rgba(255,255,255,.42)", cursor:"pointer", transition:"all 0.2s ease" }} onMouseOver={e=>{ e.target.style.color="#fff"; e.target.style.transform="translateX(4px)"; }} onMouseOut={e=>{ e.target.style.color="rgba(255,255,255,.42)"; e.target.style.transform="translateX(0)"; }}>{s.label}</span>)}
                </div>
              </div>
              <div>
                <div style={{ fontFamily:"'Rubik',sans-serif", fontSize:11, fontWeight:700, letterSpacing:".28em", textTransform:"uppercase", color:"var(--gold)", marginBottom:18 }}>Navigate</div>
                <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
                  {NAV.map(n => <span key={n} style={{ fontFamily:"'Nunito',sans-serif", fontSize:13, fontWeight:700, color:"rgba(255,255,255,.42)", cursor:"pointer", transition:"all 0.2s ease" }} onClick={() => go(n)} onMouseOver={e=>{ e.target.style.color="#fff"; e.target.style.transform="translateX(4px)"; }} onMouseOut={e=>{ e.target.style.color="rgba(255,255,255,.42)"; e.target.style.transform="translateX(0)"; }}>{n}</span>)}
                </div>
              </div>
              <div>
                <div style={{ fontFamily:"'Rubik',sans-serif", fontSize:11, fontWeight:700, letterSpacing:".28em", textTransform:"uppercase", color:"var(--gold)", marginBottom:18 }}>Find Us</div>
                <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                  {[["📍","Gandhipuram, Coimbatore"],["📞","9842262124 & 98427 35737"],["⏰","Opens 10 AM"],["📅","Est. 1999"]].map(([ic,tx]) => (
                    <div key={tx} style={{ display:"flex", gap:10, transition:"all 0.2s ease", cursor:"pointer" }} onMouseOver={e=>{ e.currentTarget.style.transform="translateX(4px)"; }} onMouseOut={e=>{ e.currentTarget.style.transform="translateX(0)"; }}>
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
          <div className="modal-bg" onClick={e => { if(e.target===e.currentTarget) setModalCat(null); }} style={{ position:"fixed", inset:0, background:"rgba(0,0,0,.85)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:2000, backdropFilter:"blur(4px)" }}>
            <div className="modal-box" style={{ background:"#1a1a2e", borderRadius:16, maxWidth:"90vw", maxHeight:"90vh", overflow:"auto", padding:36, position:"relative", border:"1px solid rgba(212,170,74,.2)" }}>
              <div className="modal-hdr" style={{ marginBottom:32 }}>
                <div>
                  <div style={{ fontFamily:"'DM Mono',monospace", fontSize:10, fontWeight:500, letterSpacing:".28em", textTransform:"uppercase", color:"var(--gold)", marginBottom:8 }}>Gallery</div>
                  <h3 style={{ fontFamily:"'Rubik',sans-serif", fontSize:28, fontWeight:900, color:"#fff", marginBottom:8 }}>{modalCat.label}</h3>
                  <p style={{ fontFamily:"'Nunito',sans-serif", fontSize:15, fontWeight:700, color:"rgba(255,255,255,.6)", marginTop:5 }}>{modalCat.desc} — click any image to enlarge</p>
                </div>
                <button className="modal-close" onClick={() => setModalCat(null)} style={{ position:"absolute", top:20, right:20, width:40, height:40, background:"rgba(212,170,74,.1)", border:"1px solid rgba(212,170,74,.2)", borderRadius:6, color:"#fff", fontSize:20, cursor:"pointer", transition:"all 0.2s ease", display:"flex", alignItems:"center", justifyContent:"center" }} onMouseOver={e=>{ e.currentTarget.style.background="rgba(212,170,74,.2)"; }} onMouseOut={e=>{ e.currentTarget.style.background="rgba(212,170,74,.1)"; }}>✕</button>
              </div>
              <div className="modal-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(120px, 1fr))", gap:12, marginBottom:28 }}>
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
                      borderRadius: 8,
                      cursor: "pointer",
                      transition:"all 0.3s ease",
                      border:"1px solid rgba(212,170,74,.2)"
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.borderColor = "rgba(212,170,74,.5)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.borderColor = "rgba(212,170,74,.2)";
                    }}
                  />
                ))}
              </div>
              <div style={{ display:"flex", gap:12 }}>
                <button style={{ fontSize:12, fontFamily:"'Rubik',sans-serif", fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", padding:"14px 24px", background:"var(--gold)", color:"#000", border:"none", borderRadius:6, cursor:"pointer", transition:"all 0.3s ease" }} onClick={() => { setModalCat(null); go("contact"); }} onMouseOver={(e) => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 8px 16px rgba(184,146,42,.3)"; }} onMouseOut={(e) => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none"; }}>Order {modalCat.label} →</button>
                <a href="https://wa.me/919842262124" target="_blank" rel="noopener noreferrer"
                  style={{ display:"inline-flex", alignItems:"center", gap:8, fontFamily:"'Rubik',sans-serif", fontSize:12, fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", padding:"14px 24px", background:"#22c55e", color:"#fff", textDecoration:"none", borderRadius:6, transition:"all 0.3s ease", cursor:"pointer" }} onMouseOver={(e) => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 8px 16px rgba(34,197,94,.3)"; }} onMouseOut={(e) => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none"; }}>
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
            style={{ position:"fixed", inset:0, background:"rgba(0,0,0,.95)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:3000, backdropFilter:"blur(8px)" }}
          >
            {/* CLOSE */}
            <button className="lb-close" onClick={() => setLightbox(null)} style={{ position:"absolute", top:24, right:24, width:48, height:48, background:"rgba(255,255,255,.1)", border:"1px solid rgba(255,255,255,.2)", borderRadius:8, color:"#fff", fontSize:24, cursor:"pointer", transition:"all 0.2s ease", display:"flex", alignItems:"center", justifyContent:"center" }} onMouseOver={e=>{ e.currentTarget.style.background="rgba(255,255,255,.15)"; e.currentTarget.style.transform="scale(1.1)"; }} onMouseOut={e=>{ e.currentTarget.style.background="rgba(255,255,255,.1)"; e.currentTarget.style.transform="scale(1)"; }}>✕</button>

            {/* LEFT */}
            <button
              className="lb-nav"
              style={{ position:"absolute", left:24, width:48, height:48, background:"rgba(255,255,255,.1)", border:"1px solid rgba(255,255,255,.2)", borderRadius:8, color:"#fff", fontSize:32, cursor:"pointer", transition:"all 0.2s ease", display:"flex", alignItems:"center", justifyContent:"center" }}
              onClick={() =>
                setLightbox(l => ({
                  ...l,
                  idx: (l.idx - 1 + l.cat.imgs.length) % l.cat.imgs.length
                }))
              }
              onMouseOver={e=>{ e.currentTarget.style.background="rgba(255,255,255,.15)"; e.currentTarget.style.transform="scale(1.1)"; }}
              onMouseOut={e=>{ e.currentTarget.style.background="rgba(255,255,255,.1)"; e.currentTarget.style.transform="scale(1)"; }}
            >
              ‹
            </button>

            {/* ✅ REAL IMAGE (MAIN FIX) */}
            <img
              src={lightbox.cat.imgs[lightbox.idx]}
              alt="preview"
              style={{
                maxWidth: "90vw",
                maxHeight: "85vh",
                objectFit: "contain",
                borderRadius: 10,
                animation:"scaleIn 0.3s ease-out"
              }}
            />

            {/* RIGHT */}
            <button
              className="lb-nav"
              style={{ position:"absolute", right:24, width:48, height:48, background:"rgba(255,255,255,.1)", border:"1px solid rgba(255,255,255,.2)", borderRadius:8, color:"#fff", fontSize:32, cursor:"pointer", transition:"all 0.2s ease", display:"flex", alignItems:"center", justifyContent:"center" }}
              onClick={() =>
                setLightbox(l => ({
                  ...l,
                  idx: (l.idx + 1) % l.cat.imgs.length
                }))
              }
              onMouseOver={e=>{ e.currentTarget.style.background="rgba(255,255,255,.15)"; e.currentTarget.style.transform="scale(1.1)"; }}
              onMouseOut={e=>{ e.currentTarget.style.background="rgba(255,255,255,.1)"; e.currentTarget.style.transform="scale(1)"; }}
            >
              ›
            </button>

            {/* DOTS */}
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
                    transition: "all .3s",
                    cursor:"pointer"
                  }}
                  onClick={() => setLightbox(l => ({ ...l, idx: i }))}
                  onMouseOver={e=>{ if (i !== lightbox.idx) e.currentTarget.style.background="rgba(255,255,255,.6)"; }}
                  onMouseOut={e=>{ if (i !== lightbox.idx) e.currentTarget.style.background="rgba(255,255,255,.4)"; }}
                />
              ))}
            </div>

            {/* COUNTER */}
            <div
              style={{
                position: "absolute",
                bottom: 10,
                width: "100%",
                textAlign: "center",
                color: "rgba(255,255,255,.7)",
                fontSize: 12,
                fontFamily:"'DM Mono',monospace",
                fontWeight:500
              }}
            >
              {lightbox.idx + 1} / {lightbox.cat.imgs.length}
            </div>
          </div>
        )}
      </div>

      {/* ══ CSS VARIABLES ══ */}
      <style>{`
        :root {
          --gold: #d4aa4a;
          --gold2: #b8922a;
          --ink: #0a0a0a;
          --muted: rgba(255,255,255,.6);
        }
      `}</style>
    </div>
  );
}