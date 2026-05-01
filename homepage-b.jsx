/* global React, CinemaPlate, Wordmark, LSMark, ReliningAnimation, PartnerMarquee, StatTicker, HeroVideo, LanguagePill, useViewport, rv, LogoPlate */

// Variation B — "Industrial precision" (B2B reseller + training)
function HomepageB({ accent = "#C9A572", density = "spacious", heroLayout = "video", forceDesktop = false }) {
  const realVp = useViewport();
  const vp = forceDesktop ? { width: 1440, isMobile: false, isTablet: false, isDesktop: true } : realVp;
  const pad = density === "dense" ? 56 : density === "spacious" ? 104 : 80;
  const sectionPadV = rv(vp, Math.round(pad * 0.55), Math.round(pad * 0.8), pad);
  const sectionPadH = rv(vp, 20, 36, 56);
  const sans = "'Inter', system-ui, sans-serif";
  const mono = "'JetBrains Mono', ui-monospace, monospace";

  return (
    <div style={{ background: "#1c1b20", color: "#E6E4DF", fontFamily: sans, overflow: "hidden" }}>
      <header style={{
        position: "sticky", top: 0, zIndex: 10, background: "rgba(28,27,32,0.85)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(230,228,223,0.08)",
        display: "grid",
        gridTemplateColumns: vp.isDesktop ? "auto 1fr auto" : "1fr auto",
        alignItems: "center", gap: rv(vp, 12, 24, 48),
        padding: `${rv(vp, 16, 18, 20)}px ${sectionPadH}px`,
      }}>
        {/* On mobile the BackBar at top-left covers brand; drop wordmark there. */}
        {!vp.isMobile && <Wordmark accent={accent} size={rv(vp, 26, 28, 28)} tracking="0.28em" />}
        {vp.isMobile && <span />}
        {vp.isDesktop && (
          <nav style={{ display: "flex", gap: 36, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500, justifyContent: "center" }}>
            {[["Tuotteet", "01"], ["Menetelmä", "02"], ["Koulutus", "03"], ["Kumppanit", "04"], ["Yritys", "05"], ["Yhteys", "06"]].map(([x, n]) => (
              <a key={x} href="#" style={{ color: "#E6E4DF", textDecoration: "none", display: "flex", gap: 8, alignItems: "baseline" }}>
                <span style={{ color: accent, fontFamily: mono, fontSize: 10 }}>{n}</span>{x}
              </a>
            ))}
          </nav>
        )}
        <div style={{ display: "flex", gap: rv(vp, 8, 12, 16), alignItems: "center", justifyContent: "flex-end" }}>
          {!vp.isMobile && <LanguagePill accent={accent} active="FI" />}
          <a href="tel:+358503264439" style={{
            padding: "12px 20px", background: accent, color: "#0E0E10",
            fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", fontWeight: 700,
            minHeight: 44, display: "inline-flex", alignItems: "center",
          }}>Soita →</a>
        </div>
      </header>

      {/* HERO */}
      <section style={{
        display: "grid",
        gridTemplateColumns: rv(vp, "1fr", "1fr", "5fr 7fr"),
        minHeight: rv(vp, 0, 600, 760),
        borderBottom: "1px solid rgba(230,228,223,0.08)",
      }}>
        <div style={{
          padding: `${rv(vp, 40, 56, 72)}px ${sectionPadH}px ${rv(vp, 40, 56, 56)}px`,
          display: "flex", flexDirection: "column", justifyContent: "space-between",
          borderRight: vp.isDesktop ? "1px solid rgba(230,228,223,0.08)" : "none",
        }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 11, color: accent, letterSpacing: "0.12em", marginBottom: rv(vp, 24, 28, 32), wordBreak: "break-word" }}>
              LSO/2026 — RESELLER · TRAINING · NORDICS
            </div>
            <h1 style={{
              fontFamily: sans, fontWeight: 300,
              fontSize: "clamp(48px, 11vw, 92px)",
              lineHeight: 0.95, letterSpacing: "-0.035em",
              margin: 0, color: "#F4F1E8",
            }}>
              Sukitusalan<br/>
              <span style={{ color: accent, fontWeight: 500 }}>tukku.</span>
            </h1>
            <p style={{ marginTop: rv(vp, 24, 30, 36), fontSize: rv(vp, 16, 16, 16), lineHeight: 1.6, color: "#c9c2b6", maxWidth: 420 }}>
              Sanikomin, Bodusin ja Suomen Sukitustarvikkeen tuotteet —
              valikoimasta varastoon, koulutuksiin ja työmaalle.
            </p>
          </div>

          <div style={{ marginTop: rv(vp, 36, 44, 56) }}>
            {[
              ["Tuotteita varastossa", "300+ nimikettä"],
              ["Toimitusalue", "FI · SE · NO · DK"],
              ["Toimitusaika FI", "1–2 työpäivää"],
              ["Verkkokauppa", "Kesä 2026"],
              ["Koulutus", "1–3 pv kurssit"],
            ].map(([k, v], i) => (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: rv(vp, "1fr 1fr", "200px 1fr", "200px 1fr"),
                gap: 12,
                padding: "14px 0", borderTop: "1px solid rgba(230,228,223,0.08)",
                fontFamily: mono, fontSize: 12,
              }}>
                <div style={{ color: "#a8a59c", letterSpacing: "0.06em" }}>{k}</div>
                <div style={{ color: "#F4F1E8", textAlign: vp.isMobile ? "right" : "left" }}>{v}</div>
              </div>
            ))}
            <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="tel:+358503264439" style={{
                padding: "16px 28px", background: accent, color: "#0E0E10",
                fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none",
                minHeight: 48, display: "inline-flex", alignItems: "center",
              }}>Soita →</a>
              <a href="#shop" style={{
                padding: "16px 28px", border: "1px solid rgba(230,228,223,0.25)", color: "#E6E4DF",
                fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none",
                minHeight: 48, display: "inline-flex", alignItems: "center",
              }}>Verkkokauppa</a>
            </div>
          </div>
        </div>

        <div style={{ position: "relative", minHeight: rv(vp, 320, 0, 0) }}>
          {heroLayout === "video"
            ? <HeroVideo videoSrc="https://ihcirdgmyzuzxyit.public.blob.vercel-storage.com/videos/polinvent_mainpage_teaser.mp4" useVideo={true} accent={accent} overlay={0.25} label="POLINVENT · DEMO" />
            : heroLayout === "image"
            ? <CinemaPlate src="assets/van-bronze-side.jpg" focal="50% 55%" overlay={0.25} accent={accent} />
            : <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, #2a2218, #16151a 70%)", display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ transform: "scale(4)" }}><LSMark size={120} accent={accent} dark="#1a1a1c" /></div></div>}
          {!vp.isMobile && (
            <div style={{
              position: "absolute", right: 24, top: 24, padding: 20, minWidth: 240, maxWidth: "calc(100% - 48px)",
              background: "rgba(28,27,32,0.85)", backdropFilter: "blur(8px)", border: `1px solid ${accent}40`,
            }}>
              <div style={{ fontFamily: mono, fontSize: 10, color: accent, letterSpacing: "0.18em", marginBottom: 10 }}>STOCK · LIVE</div>
              <div style={{ fontSize: 13, color: "#F4F1E8", marginBottom: 14 }}>Sanikom DN100 · 30 m</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, fontFamily: mono, fontSize: 11, color: "#a8a59c" }}>
                <div>SKU</div><div style={{ color: "#F4F1E8", textAlign: "right" }}>P-100-30</div>
                <div>STOCK</div><div style={{ color: accent, textAlign: "right" }}>14 rullaa</div>
                <div>SHIP</div><div style={{ color: "#F4F1E8", textAlign: "right" }}>FI 1–2 pv</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* BRAND PLATE — photographed 3D logo as section break */}
      <section aria-label="Line Systems -tunnus" style={{
        padding: `${rv(vp, 40, 56, 72)}px ${sectionPadH}px`,
        background: "#16151a",
        borderBottom: "1px solid rgba(230,228,223,0.08)",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: rv(vp, "1fr", "1fr", "5fr 7fr"),
          gap: rv(vp, 28, 40, 56),
          alignItems: "center", maxWidth: 1280, margin: "0 auto",
        }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 11, color: accent, letterSpacing: "0.18em", marginBottom: 16 }}>IDENTITY · 2026</div>
            <div style={{ fontFamily: sans, fontWeight: 300, fontSize: rv(vp, 28, 32, 36), color: "#F4F1E8", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
              Geometrinen tunnus<br/>insinöörin tarkkuudella.
            </div>
            <div style={{ marginTop: 18, fontFamily: mono, fontSize: 12, color: "#a8a59c", lineHeight: 1.7 }}>
              Pronssipinta, kohokuvioitu 3D-renderöinti.<br/>
              Käytössä laitteissa, vaatteissa, kalustossa.
            </div>
          </div>
          <LogoPlate accent={accent} framed={true} glow={false} />
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section style={{ padding: `${sectionPadV}px ${sectionPadH}px`, borderBottom: "1px solid rgba(230,228,223,0.08)" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: rv(vp, "1fr", "1fr", "1fr 3fr"),
          gap: rv(vp, 24, 40, 64),
          marginBottom: rv(vp, 36, 48, 56),
        }}>
          <div style={{ fontFamily: mono, fontSize: 11, color: accent, letterSpacing: "0.18em" }}>CATALOG</div>
          <h2 style={{
            fontFamily: sans, fontWeight: 300,
            fontSize: "clamp(36px, 8vw, 64px)",
            lineHeight: 1.0, letterSpacing: "-0.025em", margin: 0, color: "#F4F1E8",
          }}>
            300+ nimikettä,<br/>
            <span style={{ color: "#a8a59c" }}>kahdeksassa kategoriassa.</span>
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: rv(vp, "1fr", "repeat(2, 1fr)", "repeat(4, 1fr)"),
          gap: 1, background: "rgba(230,228,223,0.08)", border: "1px solid rgba(230,228,223,0.08)",
        }}>
          {[
            { code: "C.01", title: "Sukat & sukkamateriaalit", n: "85", brands: "Sanikom · Bodus" },
            { code: "C.02", title: "Hartsit (EX-sarja)", n: "32", brands: "Sanikom" },
            { code: "C.03", title: "Inversiorummut & höyry", n: "14", brands: "Sanikom" },
            { code: "C.04", title: "Metroliner DN100–400", n: "12", brands: "Bodus" },
            { code: "C.05", title: "TV-kuvaus & raportointi", n: "22", brands: "Bodus" },
            { code: "C.06", title: "Painepesu & putkenavaus", n: "18", brands: "Bodus" },
            { code: "C.07", title: "Kalibrointiletkut", n: "40", brands: "Sanikom · Bodus" },
            { code: "C.08", title: "R-Case & PPE", n: "60+", brands: "Suomen Sukitustarvike" },
          ].map((s, i) => (
            <a key={i} href="#" style={{ background: "#1c1b20", padding: rv(vp, 22, 26, 32), position: "relative", textDecoration: "none", color: "#F4F1E8", minHeight: 140 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 20, gap: 8 }}>
                <div style={{ fontFamily: mono, fontSize: 11, color: accent, letterSpacing: "0.18em" }}>{s.code}</div>
                <div style={{ fontFamily: mono, fontSize: 11, color: "#a8a59c" }}>{s.n} SKUs</div>
              </div>
              <div style={{ fontSize: rv(vp, 22, 24, 28), fontWeight: 400, color: "#F4F1E8", letterSpacing: "-0.02em", marginBottom: 14 }}>{s.title}</div>
              {s.brands && <div style={{ fontSize: 11, color: "#a8a59c" }}>{s.brands}</div>}
              <div style={{ position: "absolute", right: 22, bottom: 22, color: accent, fontSize: 18 }}>→</div>
            </a>
          ))}
        </div>
      </section>

      {/* METHOD ANIMATION */}
      <section style={{ padding: `${sectionPadV}px ${sectionPadH}px`, borderBottom: "1px solid rgba(230,228,223,0.08)" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: rv(vp, "1fr", "1fr", "1fr 3fr"),
          gap: rv(vp, 24, 40, 64),
          marginBottom: rv(vp, 36, 48, 56),
        }}>
          <div style={{ fontFamily: mono, fontSize: 11, color: accent, letterSpacing: "0.18em" }}>METHOD</div>
          <h2 style={{
            fontFamily: sans, fontWeight: 300,
            fontSize: "clamp(32px, 7vw, 64px)",
            lineHeight: 1.0, letterSpacing: "-0.025em", margin: 0, color: "#F4F1E8",
          }}>
            Cured-In-Place Pipe.<br/>
            <span style={{ color: "#a8a59c" }}>Tuotteet ja koulutus, jotka tekevät siitä tuottavaa.</span>
          </h2>
        </div>
        <div style={{ background: "#16151a", border: "1px solid rgba(230,228,223,0.08)", padding: rv(vp, 18, 24, 32), position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 12, right: 16, fontFamily: mono, fontSize: 10, color: accent, letterSpacing: "0.18em" }}>FIG. — INVERSION</div>
          <ReliningAnimation height={rv(vp, 180, 220, 260)} accent={accent} />
        </div>
      </section>

      {/* TRAINING */}
      <section style={{ padding: `${sectionPadV}px ${sectionPadH}px`, borderBottom: "1px solid rgba(230,228,223,0.08)" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: rv(vp, "1fr", "1fr", "1fr 3fr"),
          gap: rv(vp, 24, 40, 64),
          marginBottom: rv(vp, 36, 48, 56),
        }}>
          <div style={{ fontFamily: mono, fontSize: 11, color: accent, letterSpacing: "0.18em" }}>TRAINING</div>
          <h2 style={{
            fontFamily: sans, fontWeight: 300,
            fontSize: "clamp(36px, 8vw, 64px)",
            lineHeight: 1.0, letterSpacing: "-0.025em", margin: 0, color: "#F4F1E8",
          }}>
            Koulutuskalenteri.
          </h2>
        </div>
        <div style={{ border: "1px solid rgba(230,228,223,0.08)" }}>
          {[
            ["T.01", "Sanikom perehdytys", "1 pv", "Jyväskylä", "12.06.26", "vapaa"],
            ["T.02", "Sukituskurssi (sertifiointi)", "3 pv", "Jyväskylä", "18–20.06.26", "3 paikkaa"],
            ["T.03", "Bodus Metroliner-asennus", "2 pv", "Jyväskylä", "08–09.07.26", "5 paikkaa"],
            ["T.04", "Työmaakäynti, asiakas", "0,5 pv", "Sopimuksen mukaan", "—", "tarjous"],
          ].map((r, i) => vp.isMobile ? (
            <div key={i} style={{
              padding: "20px 18px", borderTop: i === 0 ? "none" : "1px solid rgba(230,228,223,0.08)",
              fontFamily: mono, fontSize: 12, color: "#a8a59c",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8, gap: 12 }}>
                <span style={{ color: accent, letterSpacing: "0.12em" }}>{r[0]}</span>
                <span style={{ color: accent, textAlign: "right" }}>{r[5]}</span>
              </div>
              <div style={{ color: "#F4F1E8", fontSize: 16, fontFamily: sans, marginBottom: 8, lineHeight: 1.3 }}>{r[1]}</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, fontSize: 11 }}>
                <span>{r[2]}</span>
                <span>{r[3]}</span>
                <span style={{ color: "#F4F1E8", textAlign: "right" }}>{r[4]}</span>
              </div>
            </div>
          ) : (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: vp.isTablet ? "80px 2fr 80px 1fr 1fr 90px 24px" : "100px 2fr 100px 1fr 1fr 100px 32px",
              padding: rv(vp, "16px 18px", "18px 20px", "20px 24px"),
              borderTop: i === 0 ? "none" : "1px solid rgba(230,228,223,0.08)",
              fontFamily: mono, fontSize: 12, alignItems: "center", color: "#a8a59c", gap: 8,
            }}>
              <div style={{ color: accent, letterSpacing: "0.12em" }}>{r[0]}</div>
              <div style={{ color: "#F4F1E8", fontSize: 14, fontFamily: sans }}>{r[1]}</div>
              <div>{r[2]}</div>
              <div>{r[3]}</div>
              <div style={{ color: "#F4F1E8" }}>{r[4]}</div>
              <div style={{ color: accent, textAlign: "right" }}>{r[5]}</div>
              <div style={{ color: accent, textAlign: "right" }}>→</div>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section style={{ padding: `${sectionPadV}px ${sectionPadH}px`, borderBottom: "1px solid rgba(230,228,223,0.08)" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: rv(vp, "1fr", "1fr", "1fr 3fr"),
          gap: rv(vp, 24, 40, 64),
          marginBottom: rv(vp, 36, 48, 56),
        }}>
          <div style={{ fontFamily: mono, fontSize: 11, color: accent, letterSpacing: "0.18em" }}>PARTNERS</div>
          <h2 style={{
            fontFamily: sans, fontWeight: 300,
            fontSize: "clamp(36px, 8vw, 64px)",
            lineHeight: 1.0, letterSpacing: "-0.025em", margin: 0, color: "#F4F1E8",
          }}>
            Valmistajat.
          </h2>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: rv(vp, "1fr", "1fr", "repeat(3, 1fr)"),
          gap: 1, background: "rgba(230,228,223,0.08)", border: "1px solid rgba(230,228,223,0.08)",
        }}>
          {[
            ["Sanikom", "SI · Slovenia", "Inversiorummut, EX-epoksit, silikaattihartsi 3P W01, höyrykattilat, kyllästyspöydät, päälinja- ja pistesukat."],
            ["Bodus", "CH · Sveitsi", "Metroliner® DN 100–400 kotitalouskaivoihin, painepesu- ja TV-kuvauslaitteet, tiiviyskoetus, kalustosaneerausvaunut."],
            ["Suomen Sukitustarvike", "FI · Vantaa", "Suomalainen tukku — sukitustarvikkeet, R-Case-työkalu, sertifiointi, 24/7 myymälä."],
          ].map(([n, c, f], i) => (
            <div key={i} style={{ background: "#1c1b20", padding: rv(vp, 24, 28, 32) }}>
              <div style={{ fontFamily: mono, fontSize: 10, color: "#a8a59c", letterSpacing: "0.18em", marginBottom: 14 }}>{c}</div>
              <div style={{ fontSize: rv(vp, 24, 26, 28), color: "#F4F1E8", marginBottom: 12, letterSpacing: "-0.02em", fontWeight: 400 }}>{n}</div>
              <div style={{ fontSize: 13, lineHeight: 1.65, color: "#c9c2b6" }}>{f}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WEBSHOP TEASER */}
      <section id="shop" style={{ padding: `${sectionPadV}px ${sectionPadH}px`, borderBottom: "1px solid rgba(230,228,223,0.08)" }}>
        <div style={{
          background: "#16151a", border: `1px solid ${accent}40`,
          padding: rv(vp, 28, 40, 56),
          display: "grid",
          gridTemplateColumns: rv(vp, "1fr", "1fr", "1fr 1fr"),
          gap: rv(vp, 28, 40, 64),
          alignItems: "center",
        }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 11, color: accent, letterSpacing: "0.18em", marginBottom: 24 }}>
              [SOON] · WEBSHOP — KESÄ 2026
            </div>
            <h2 style={{
              fontFamily: sans, fontWeight: 300,
              fontSize: "clamp(32px, 7.5vw, 56px)",
              lineHeight: 1.0, letterSpacing: "-0.025em", margin: 0, color: "#F4F1E8",
            }}>
              Tilaa suoraan,<br/>
              <span style={{ color: accent }}>seuraavaksi päiväksi.</span>
            </h2>
            <p style={{ marginTop: 24, fontSize: rv(vp, 16, 16, 15), lineHeight: 1.65, color: "#a8a59c", maxWidth: 460 }}>
              Suomalainen verkkokauppa — varasto, laskutus ja toimitus
              automaattisesti. Toimitukset koko Pohjolaan.
            </p>
          </div>
          <form style={{ display: "flex", flexDirection: "column", gap: 14 }} onSubmit={(e) => e.preventDefault()}>
            <label style={{ fontFamily: mono, fontSize: 11, color: "#a8a59c", letterSpacing: "0.18em" }}>NOTIFY ON LAUNCH →</label>
            <div style={{ display: "flex", flexWrap: "wrap", border: `1px solid ${accent}` }}>
              <input placeholder="firma@osoite.fi" inputMode="email" style={{ flex: "1 1 200px", background: "transparent", border: 0, outline: 0, color: "#F4F1E8", padding: "16px 18px", fontFamily: mono, fontSize: 16, minWidth: 0 }} />
              <button style={{ background: accent, color: "#0E0E10", border: 0, padding: "16px 28px", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, cursor: "pointer", minHeight: 48 }}>Liity →</button>
            </div>
          </form>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: `${sectionPadV}px ${sectionPadH}px` }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: rv(vp, "1fr", "1fr", "1fr 1fr"),
          gap: rv(vp, 28, 40, 64),
          alignItems: "center",
        }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 11, color: accent, letterSpacing: "0.18em", marginBottom: 24 }}>CONTACT</div>
            <h2 style={{
              fontFamily: sans, fontWeight: 300,
              fontSize: "clamp(48px, 12vw, 88px)",
              lineHeight: 1.0, letterSpacing: "-0.025em", margin: 0, color: "#F4F1E8",
            }}>
              Soita.<br/>
              <span style={{ color: accent }}>Vastataan.</span>
            </h2>
            <a href="tel:+358503264439" style={{
              display: "inline-block", marginTop: 32,
              fontFamily: mono,
              fontSize: "clamp(26px, 6vw, 36px)",
              color: accent, textDecoration: "none", letterSpacing: "0.04em",
              minHeight: 56,
            }}>
              050 326 4439
            </a>
          </div>
          <div style={{ fontFamily: mono, fontSize: 13 }}>
            {[
              ["EMAIL", "jonne@linesystems.fi"],
              ["WHATSAPP", "050 326 4439"],
              ["OFFICE", "Vilkkutie 3 A 15, 40320 Jyväskylä"],
              ["SHIP TO", "FI · SE · NO · DK"],
              ["HOURS", "Ma–Pe 7–18"],
              ["VAT / Y", "3616448-8"],
            ].map(([k, v], i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "16px 0", borderTop: "1px solid rgba(230,228,223,0.08)", gap: 12 }}>
                <div style={{ color: "#a8a59c", letterSpacing: "0.18em" }}>{k}</div>
                <div style={{ color: "#F4F1E8", textAlign: "right", wordBreak: "break-word" }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{
        padding: `${rv(vp, 28, 32, 40)}px ${sectionPadH}px`,
        background: "#16151a", borderTop: `1px solid ${accent}30`,
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16,
        fontFamily: mono, fontSize: 11,
      }}>
        <Wordmark accent={accent} size={24} />
        <LanguagePill accent={accent} active="FI" />
        <div style={{ color: "#a8a59c", letterSpacing: "0.06em", flex: vp.isMobile ? "1 1 100%" : "0 1 auto", textAlign: vp.isMobile ? "left" : "right" }}>© 2026 Line Systems Oy · Y 3616448-8</div>
      </footer>
    </div>
  );
}

window.HomepageB = HomepageB;
