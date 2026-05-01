/* global React, CinemaPlate, Wordmark, LSMark, ReliningAnimation, PartnerMarquee, StatTicker, HeroVideo, LanguagePill, useViewport, rv, LogoPlate */

// Variation A — "Cinematic premium" (B2B reseller + training)
// Line Systems Oy: distributes pipe-relining materials & equipment to
// contractors across the Nordics, plus runs hands-on training courses.
// Webshop launching summer 2026.
//
// forceDesktop: portfolio thumbnails render this component at native 1440 width
// then CSS-scale it down. Without forceDesktop the page would detect the real
// (small) viewport and render the mobile layout inside a desktop-sized
// container — looking bizarre in the thumbnail.

function HomepageA({ accent = "#C9A572", density = "spacious", heroLayout = "video", forceDesktop = false }) {
  const realVp = useViewport();
  const vp = forceDesktop ? { width: 1440, isMobile: false, isTablet: false, isDesktop: true } : realVp;
  const pad = density === "dense" ? 64 : density === "spacious" ? 120 : 88;
  const sectionPadV = rv(vp, Math.round(pad * 0.55), Math.round(pad * 0.8), pad);
  const sectionPadH = rv(vp, 20, 36, 56);

  return (
    <div style={{ background: "#1a191e", color: "#EDE6D6", fontFamily: "'Inter', system-ui, sans-serif", overflow: "hidden" }}>
      {/* ───── NAV ───── */}
      <header style={{
        position: "absolute", top: 0, left: 0, right: 0, zIndex: 10,
        display: "flex", justifyContent: vp.isMobile ? "flex-end" : "space-between", alignItems: "center", gap: 16,
        padding: `${rv(vp, 20, 28, 32)}px ${sectionPadH}px`,
      }}>
        {/* On mobile the floating PortfolioBackBar at top-left provides brand
            identity + return-nav, so we drop the wordmark to free space for
            the Soita CTA without overlap. */}
        {!vp.isMobile && <Wordmark accent={accent} size={rv(vp, 26, 30, 32)} />}
        {!vp.isMobile && (
          <nav style={{
            display: "flex",
            gap: vp.isTablet ? 24 : 40,
            fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 500,
          }}>
            {(vp.isTablet ? ["Tuotteet", "Koulutus", "Yhteys"] : ["Tuotteet", "Menetelmä", "Koulutus", "Kumppanit", "Yhteys"]).map(x => (
              <a key={x} href="#" style={{ color: "#EDE6D6", textDecoration: "none", opacity: 0.85 }}>{x}</a>
            ))}
          </nav>
        )}
        <div style={{ display: "flex", gap: rv(vp, 12, 16, 20), alignItems: "center" }}>
          {!vp.isMobile && <LanguagePill accent={accent} active="FI" />}
          <a href="tel:+358503264439" style={{
            padding: "12px 20px", border: `1px solid ${accent}`, color: accent,
            fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", textDecoration: "none",
            minHeight: 44, display: "inline-flex", alignItems: "center",
          }}>Soita →</a>
        </div>
      </header>

      {/* ───── HERO ───── */}
      <section style={{ position: "relative", height: rv(vp, 640, 760, 880), width: "100%" }}>
        {heroLayout === "video" && (
          <HeroVideo videoSrc="https://ihcirdgmyzuzxyit.public.blob.vercel-storage.com/videos/polinvent_mainpage_teaser.mp4" useVideo={true} accent={accent} overlay={0.55} label="POLINVENT · INVERSION DEMO" />
        )}
        {heroLayout === "image" && (
          <CinemaPlate src="assets/van-bronze-front-glossy.jpg" focal="50% 55%" overlay={0.55} accent={accent} />
        )}
        {heroLayout === "logo" && (
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, #2a2218, #16151a 70%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ transform: "scale(4)" }}>
              <LSMark size={120} accent={accent} dark="#1a1a1c" />
            </div>
          </div>
        )}

        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: `0 ${sectionPadH}px ${rv(vp, 40, 60, 80)}px` }}>
          <div style={{ maxWidth: 1100 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: rv(vp, 20, 26, 32), fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: accent, flexWrap: "wrap" }}>
              <span style={{ width: 32, height: 1, background: accent }} />
              <span>Sukitustarvikkeet &nbsp;·&nbsp; Pipe relining materials &amp; equipment</span>
            </div>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(56px, 13vw, 132px)",
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
              margin: 0,
              color: "#F4EEDF",
            }}>
              Materiaalit, laitteet<br/>
              ja <span style={{ fontStyle: "italic", color: accent }}>osaaminen.</span>
            </h1>
            <p style={{ marginTop: rv(vp, 24, 30, 36), fontSize: rv(vp, 16, 16, 17), lineHeight: 1.6, maxWidth: 560, color: "#c9c2b6" }}>
              Line Systems toimittaa sukitusalan ammattilaisille materiaalit,
              laitteet ja koulutuksen — yhdestä paikasta. Sanikomin, Bodusin
              ja Suomen Sukitustarvikkeen tuotteet, suomalainen varasto,
              pohjoismainen toimitus.
            </p>
            <div style={{ marginTop: rv(vp, 28, 36, 44), display: "flex", gap: rv(vp, 14, 18, 20), alignItems: "center", flexWrap: "wrap" }}>
              <a href="tel:+358503264439" style={{
                padding: rv(vp, "16px 24px", "18px 30px", "20px 36px"),
                background: accent, color: "#0B0B0C",
                fontSize: 12, letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 600, textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: 12, minHeight: 48,
              }}>
                Soita Jonnelle <span style={{ fontSize: 18 }}>→</span>
              </a>
              <a href="#shop" style={{
                padding: "16px 0", color: "#EDE6D6",
                fontSize: 12, letterSpacing: "0.28em", textTransform: "uppercase", textDecoration: "none",
                borderBottom: "1px solid rgba(237,230,214,0.3)",
                minHeight: 48, display: "inline-flex", alignItems: "center",
              }}>
                Verkkokauppa avautuu →
              </a>
            </div>
          </div>

          {!vp.isMobile && (
            <div style={{ position: "absolute", right: sectionPadH, bottom: rv(vp, 40, 60, 80), textAlign: "right" }}>
              <div style={{ fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", color: "#9a948a", marginBottom: 6 }}>Est. 2026 — Jyväskylä, Finland · Nordics</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontStyle: "italic", color: accent }}>nº 001</div>
            </div>
          )}
        </div>

        {!vp.isMobile && (
          <div style={{ position: "absolute", left: sectionPadH, bottom: 36, fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", color: "#9a948a", display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ display: "inline-block", width: 1, height: 28, background: accent, animation: "ls-scrollline 2.4s ease-in-out infinite" }} />
            Selaa
          </div>
        )}
      </section>

      {/* ───── BRAND PLATE — the photographed 3D logo ─────
           Sits right under the hero so the brand identity reads first. */}
      <section aria-label="Line Systems -tunnus" style={{
        padding: `${rv(vp, 48, 64, 80)}px ${sectionPadH}px ${rv(vp, 32, 48, 64)}px`,
        background: "radial-gradient(ellipse at 50% 0%, rgba(201,165,114,0.08), transparent 65%)",
        borderBottom: "1px solid rgba(237,230,214,0.08)",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <LogoPlate accent={accent} eyebrow="EST. 2026 · JYVÄSKYLÄ" caption="Line Systems Oy" />
        </div>
      </section>

      {/* ───── INTRO STRIP — 3 PILLARS ───── */}
      <section style={{ padding: `${sectionPadV}px ${sectionPadH}px`, borderBottom: "1px solid rgba(237,230,214,0.08)" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: rv(vp, "1fr", "1fr", "1fr 2fr"),
          gap: rv(vp, 32, 56, 80),
          alignItems: "start",
        }}>
          <div style={{ fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: accent, paddingTop: vp.isMobile ? 0 : 16 }}>
            <span style={{ display: "inline-block", width: 24, height: 1, background: accent, marginRight: 16, verticalAlign: "middle" }} />
            Mitä teemme
          </div>
          <div>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
              fontSize: "clamp(28px, 5.5vw, 54px)",
              lineHeight: 1.15, margin: 0, color: "#F4EEDF", textWrap: "balance",
            }}>
              Kolme asiaa, joiden ympärille <em style={{ color: accent }}>kaikki rakentuu</em>:
              materiaalit, joihin urakoitsija voi luottaa, laitteet jotka
              kestävät työmaan, ja koulutus joka tekee niistä tuottavaa työtä.
            </p>
            <div style={{
              marginTop: rv(vp, 36, 44, 56),
              display: "grid",
              gridTemplateColumns: rv(vp, "1fr", "repeat(3, 1fr)", "repeat(3, 1fr)"),
              gap: rv(vp, 24, 32, 48),
            }}>
              {[
                ["Tarvikkeet", "Sukat, hartsit, kalibrointiletkut, jyrsinpäät — varastosta tai tilauksesta."],
                ["Laitteet", "Höyrykattilat, kompressorit, kamerat, robotit. Polinvent, Picote, iPEK."],
                ["Koulutus", "Sertifioidut kurssit ja työmaaopastus. Nopeammin tuottavaan työhön."],
              ].map(([h, b]) => (
                <div key={h}>
                  <div style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: accent, marginBottom: 14 }}>— {h}</div>
                  <div style={{ fontSize: 15, lineHeight: 1.6, color: "#c9c2b6" }}>{b}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── PRODUCTS / CATEGORIES ───── */}
      <section style={{ padding: `${sectionPadV}px ${sectionPadH}px`, borderBottom: "1px solid rgba(237,230,214,0.08)" }}>
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: vp.isMobile ? "flex-start" : "flex-end",
          marginBottom: rv(vp, 36, 48, 64),
          flexDirection: vp.isMobile ? "column" : "row",
          gap: vp.isMobile ? 24 : 32,
        }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: accent, marginBottom: 24 }}>
              <span style={{ display: "inline-block", width: 24, height: 1, background: accent, marginRight: 16, verticalAlign: "middle" }} />
              Tuotteet
            </div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
              fontSize: "clamp(40px, 9vw, 88px)",
              lineHeight: 0.95, margin: 0, color: "#F4EEDF", letterSpacing: "-0.01em",
            }}>
              Valikoima<br/><em style={{ color: accent }}>ammattilaiselle.</em>
            </h2>
          </div>
          <div style={{ maxWidth: 360, fontSize: 14, lineHeight: 1.65, color: "#9a948a" }}>
            Yli 300 nimikettä urakoitsijan arkeen — valmistajien alkuperäistuotteita,
            CE-merkittyjä ja sertifioituja, dokumentaatio mukana.
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: rv(vp, "1fr", "repeat(2, 1fr)", "repeat(4, 1fr)"),
          gap: rv(vp, 16, 20, 24),
        }}>
          {[
            { code: "01", title: "Sukat & sukkamateriaalit", count: "85 nimikettä", brands: "Sanikom · Bodus" },
            { code: "02", title: "Hartsit & kovetteet", count: "32 nimikettä", brands: "Sanikom EX-sarja" },
            { code: "03", title: "Höyrykovetus & inversiorummut", count: "14 yksikköä", brands: "Sanikom" },
            { code: "04", title: "Metroliner DN100–400", count: "12 mallia", brands: "Bodus" },
            { code: "05", title: "TV-kuvaus & raportointi", count: "22 nimikettä", brands: "Bodus" },
            { code: "06", title: "Painepesu & putkenavaus", count: "26 nimikettä", brands: "Bodus" },
            { code: "07", title: "Kalibrointiletkut", count: "40 kokoa", brands: "Sanikom · Bodus" },
            { code: "08", title: "R-Case & työkalut", count: "60+ nimikettä", brands: "Suomen Sukitustarvike" },
          ].map((p, i) => (
            <a key={i} href="#" style={{
              background: "#1f1e23", border: "1px solid rgba(237,230,214,0.08)", padding: rv(vp, 22, 26, 28),
              textDecoration: "none", color: "#EDE6D6", display: "flex", flexDirection: "column", justifyContent: "space-between",
              minHeight: 200, position: "relative",
              transition: "border-color 0.2s",
            }}>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: accent, letterSpacing: "0.16em", marginBottom: 16 }}>{p.code}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: rv(vp, 22, 24, 26), color: "#F4EEDF", lineHeight: 1.15, marginBottom: 12 }}>{p.title}</div>
              </div>
              <div>
                <div style={{ fontSize: 12, color: "#9a948a", marginBottom: 6 }}>{p.count}</div>
                {p.brands && <div style={{ fontSize: 11, color: accent, letterSpacing: "0.04em" }}>{p.brands}</div>}
              </div>
              <div style={{ position: "absolute", right: 22, bottom: 22, color: accent, fontSize: 16 }}>→</div>
            </a>
          ))}
        </div>
      </section>

      {/* ───── TRAINING ───── */}
      <section style={{ padding: `${sectionPadV}px ${sectionPadH}px`, borderBottom: "1px solid rgba(237,230,214,0.08)" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: rv(vp, "1fr", "1fr", "1fr 1fr"),
          gap: rv(vp, 32, 56, 80),
          alignItems: "stretch",
        }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: accent, marginBottom: 24 }}>
              <span style={{ display: "inline-block", width: 24, height: 1, background: accent, marginRight: 16, verticalAlign: "middle" }} />
              Koulutus
            </div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
              fontSize: "clamp(36px, 8vw, 76px)",
              lineHeight: 1, margin: 0, color: "#F4EEDF",
            }}>
              Hyvä tuote<br/>tarvitsee <em style={{ color: accent }}>hyvän tekijän.</em>
            </h2>
            <p style={{ marginTop: 28, fontSize: 16, lineHeight: 1.7, color: "#c9c2b6", maxWidth: 460 }}>
              Järjestämme käytännönläheisiä kursseja sukituksen menetelmistä —
              pohjustuksesta inversioon ja kovetukseen. Yksi-päiväisistä
              perehdytyksistä monipäiväisiin sertifiointikursseihin.
              Voidaan toteuttaa Jyväskylässä tai asiakkaan luona.
            </p>
            <div style={{ marginTop: 40 }}>
              {[
                ["Perehdytys", "1 pv", "Sanikomin tuotteet & työturva"],
                ["Sukituskurssi", "3 pv", "Inversiomenetelmä, kovetus, jälkitarkastus"],
                ["Metroliner-asennus", "2 pv", "Bodusin DN100–400 kotitalouskaivot"],
                ["Työmaakäynti", "0,5 pv", "Asiakkaan kohteessa, ongelmanratkaisu"],
              ].map(([h, d, b], i) => vp.isMobile ? (
                <div key={i} style={{ padding: "18px 0", borderTop: "1px solid rgba(237,230,214,0.12)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: "#F4EEDF" }}>{h}</div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: accent, letterSpacing: "0.12em", flexShrink: 0 }}>{d}</div>
                  </div>
                  <div style={{ marginTop: 6, fontSize: 13, color: "#9a948a" }}>{b}</div>
                </div>
              ) : (
                <div key={i} style={{
                  display: "grid", gridTemplateColumns: "1fr auto 2fr auto", gap: 24, alignItems: "center",
                  padding: "22px 0", borderTop: "1px solid rgba(237,230,214,0.12)",
                }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, color: "#F4EEDF" }}>{h}</div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: accent, letterSpacing: "0.12em" }}>{d}</div>
                  <div style={{ fontSize: 13, color: "#9a948a" }}>{b}</div>
                  <div style={{ color: accent, fontSize: 16 }}>→</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative", minHeight: rv(vp, 360, 540, 720), order: vp.isMobile ? -1 : 0 }}>
            <CinemaPlate src="assets/founder-hq-van.jpg" focal="45% 55%" overlay={0.2} accent={accent} kenBurns={false} />
            <div style={{ position: "absolute", left: rv(vp, 16, 24, 32), bottom: rv(vp, 16, 24, 32), right: rv(vp, 16, 24, 32), padding: rv(vp, 18, 22, 28), background: "rgba(26,25,30,0.85)", backdropFilter: "blur(8px)", borderLeft: `2px solid ${accent}` }}>
              <div style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: accent, marginBottom: 8 }}>Kouluttaja</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: rv(vp, 20, 24, 28), color: "#F4EEDF", lineHeight: 1.25 }}>
                Yli 12 vuotta kentällä — sama mies opettaa.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── PARTNERS ───── */}
      <section style={{ padding: `${sectionPadV}px 0`, borderBottom: "1px solid rgba(237,230,214,0.08)" }}>
        <div style={{ padding: `0 ${sectionPadH}px`, marginBottom: rv(vp, 36, 48, 56) }}>
          <div style={{ fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: accent, marginBottom: 24 }}>
            <span style={{ display: "inline-block", width: 24, height: 1, background: accent, marginRight: 16, verticalAlign: "middle" }} />
            Kumppanit
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
            fontSize: "clamp(36px, 8vw, 76px)",
            lineHeight: 1, margin: 0, color: "#F4EEDF",
          }}>
            Valmistajat <em style={{ color: accent }}>joihin luotamme.</em>
          </h2>
        </div>
        <div style={{
          padding: `0 ${sectionPadH}px`,
          display: "grid",
          gridTemplateColumns: rv(vp, "1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"),
          gap: 1, background: "rgba(237,230,214,0.08)", border: "1px solid rgba(237,230,214,0.08)",
          marginBottom: 32,
        }}>
          {[
            {
              name: "Sanikom",
              country: "SI · Slovenia",
              focus: "Inversiorummut, höyrykattilat, kyllästyspöydät, EX-sarjan epoksihartsit, silikaattihartsi 3P W01, päälinja- ja pistesukat.",
            },
            {
              name: "Bodus",
              country: "CH · Sveitsi",
              focus: "Metroliner® DN 100–400 kotitalouskaivojen sukitukseen, painepesu- ja TV-kuvauslaitteet, tiiviyskoetuslaitteet, kalustosaneerausvaunut.",
            },
            {
              name: "Suomen Sukitustarvike",
              country: "FI · Vantaa",
              focus: "Kotimainen tukku — sukitustarvikkeet, R-Case-työkalu, sertifiointipalvelut, 24/7 myymälä, samana päivänä työmaalle.",
            },
          ].map((p, i) => (
            <div key={i} style={{ background: "#1a191e", padding: rv(vp, 24, 30, 36), position: "relative" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#a8a59c", letterSpacing: "0.18em", marginBottom: 18 }}>{p.country}</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: rv(vp, 28, 32, 36), color: "#F4EEDF", marginBottom: 14, letterSpacing: "-0.01em" }}>{p.name}</div>
              <div style={{ fontSize: 13, lineHeight: 1.65, color: "#c9c2b6" }}>{p.focus}</div>
            </div>
          ))}
        </div>
        <PartnerMarquee accent={accent} items={["Virallinen jälleenmyyjä", "Authorized distributor", "Auktoriserad återförsäljare", "Autoriseret distributør", "Autorisert distributør"]} />
      </section>

      {/* ───── FOUNDER QUOTE ───── */}
      <section style={{ padding: `${sectionPadV}px ${sectionPadH}px`, borderBottom: "1px solid rgba(237,230,214,0.08)" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: rv(vp, "1fr", "1fr", "5fr 4fr"),
          gap: rv(vp, 32, 56, 80),
          alignItems: "center",
        }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: accent, marginBottom: 32 }}>
              <span style={{ display: "inline-block", width: 24, height: 1, background: accent, marginRight: 16, verticalAlign: "middle" }} />
              Tekijä
            </div>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: "italic",
              fontSize: "clamp(24px, 4.5vw, 44px)",
              lineHeight: 1.25, color: "#F4EEDF", margin: 0, textWrap: "balance",
            }}>
              "Yli kymmenen vuotta sukitusta kentällä opetti, mistä tarvikkeesta
              urakoitsija oikeasti välittää. Nyt myyn niitä — ja opetan,
              miten niitä käytetään. Soita, niin jutellaan."
            </p>
            <div style={{ marginTop: 40, display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{ width: 56, height: 1, background: accent }} />
              <div>
                <div style={{ fontSize: 14, color: "#F4EEDF", fontWeight: 600 }}>Jonne Parhiala</div>
                <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#9a948a", marginTop: 4 }}>Perustaja, Line Systems Oy</div>
              </div>
            </div>
            <div style={{ marginTop: rv(vp, 36, 44, 48), display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: rv(vp, 14, 18, 24) }}>
              {[["12+ v", "alalla"], ["3", "valmistajakumppania"], ["4", "pohjoismaata"]].map(([n, l], i) => (
                <div key={i} style={{ borderTop: `1px solid ${accent}`, paddingTop: 14 }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: rv(vp, 28, 36, 44), color: accent, lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9a948a", marginTop: 8, lineHeight: 1.4 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative", aspectRatio: "4/5", order: vp.isMobile ? -1 : 0 }}>
            <CinemaPlate src="assets/founder-portrait.jpg" focal="50% 30%" overlay={0.15} kenBurns={false} accent={accent} />
          </div>
        </div>
      </section>

      {/* ───── WEBSHOP TEASER — DEDICATED ───── */}
      <section id="shop" style={{ padding: `${sectionPadV}px ${sectionPadH}px`, position: "relative", overflow: "hidden", borderBottom: "1px solid rgba(237,230,214,0.08)" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 80% 50%, ${accent}15, transparent 60%)` }} />
        <div style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: rv(vp, "1fr", "1fr", "1fr 1fr"),
          gap: rv(vp, 36, 56, 80),
          alignItems: "center",
        }}>
          <div>
            <div style={{ display: "inline-block", padding: "8px 14px", border: `1px solid ${accent}`, color: accent, fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", marginBottom: 28 }}>
              Avautuu kesällä 2026
            </div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
              fontSize: "clamp(40px, 10vw, 96px)",
              lineHeight: 0.95, margin: 0, color: "#F4EEDF", letterSpacing: "-0.02em",
            }}>
              Verkkokauppa<br/><em style={{ color: accent }}>ammattilaisille.</em>
            </h2>
            <p style={{ marginTop: 28, fontSize: rv(vp, 16, 16, 17), lineHeight: 1.65, color: "#c9c2b6", maxWidth: 480 }}>
              Sukat, hartsit, kalvot, jyrsinpäät ja kalibrointiletkut suoraan
              tehdaspakkauksesta. Suomalaiset varastot, seuraavan päivän
              toimitus Suomeen ja 2–3 päivää muualle Pohjoismaihin.
            </p>
            <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: rv(vp, 14, 18, 24) }}>
              {[["300+", "nimikettä"], ["1–3 pv", "toimitus"], ["4 maata", "Pohjola"]].map(([n, l], i) => (
                <div key={i} style={{ borderTop: `1px solid ${accent}40`, paddingTop: 14 }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: rv(vp, 24, 30, 36), color: accent, lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9a948a", marginTop: 8, lineHeight: 1.4 }}>{l}</div>
                </div>
              ))}
            </div>
            <form style={{ marginTop: 40, display: "flex", flexWrap: "wrap", gap: 0, maxWidth: 460, borderBottom: `1px solid ${accent}` }} onSubmit={(e) => e.preventDefault()}>
              <input placeholder="firma@osoite.fi" inputMode="email" style={{ flex: "1 1 200px", background: "transparent", border: 0, outline: 0, color: "#F4EEDF", padding: "16px 0", fontSize: 16, letterSpacing: "0.04em", minWidth: 0 }} />
              <button style={{ background: "transparent", border: 0, color: accent, padding: "16px 0", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", cursor: "pointer", fontWeight: 600, minHeight: 44 }}>Ilmoita avauksesta →</button>
            </form>
            <div style={{ marginTop: 12, fontSize: 11, color: "#7d796f", letterSpacing: "0.04em", lineHeight: 1.5 }}>
              Ei spämmiä — vain lanseerausilmoitus &amp; ennakkohinnasto kumppaneille.
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ aspectRatio: "1/1", background: "#1f1e23", border: `1px solid ${accent}30`, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: `repeating-linear-gradient(45deg, transparent 0 30px, ${accent}08 30px 31px)` }} />
              <div style={{ position: "absolute", inset: rv(vp, 24, 32, 40), border: `1px dashed ${accent}40`, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: rv(vp, 18, 24, 28) }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                  <LSMark size={28} accent={accent} />
                  <div style={{ fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: accent }}>SKU 0001 · Sanikom</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 7vw, 64px)", color: "#F4EEDF", lineHeight: 1 }}>
                    Sanikom<br/>Sukka <em style={{ color: accent }}>DN150</em>
                  </div>
                  <div style={{ fontSize: 12, color: "#a8a59c", marginTop: 16, letterSpacing: "0.06em" }}>Ø 100–200 mm · 30 m rulla · CE-merkitty</div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 8 }}>
                  <div style={{ fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: "#9a948a" }}>Varastosta heti</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: rv(vp, 24, 28, 32), color: accent }}>—,—€</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── CONTACT — CALL FIRST ───── */}
      <section style={{ padding: `${sectionPadV}px ${sectionPadH}px` }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: rv(vp, "1fr", "1fr", "1fr 1fr"),
          gap: rv(vp, 36, 56, 80),
          alignItems: "center",
        }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: accent, marginBottom: 24 }}>
              <span style={{ display: "inline-block", width: 24, height: 1, background: accent, marginRight: 16, verticalAlign: "middle" }} />
              Yhteys
            </div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
              fontSize: "clamp(56px, 14vw, 132px)",
              lineHeight: 0.9, margin: 0, color: "#F4EEDF", letterSpacing: "-0.02em",
            }}>
              Soita.<br/><em style={{ color: accent }}>Vastataan.</em>
            </h2>
            <a href="tel:+358503264439" style={{
              display: "inline-block", marginTop: 32,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(36px, 8vw, 56px)",
              color: accent, textDecoration: "none", letterSpacing: "0.02em",
              minHeight: 56,
            }}>
              050 326 4439
            </a>
            <div style={{ marginTop: 14, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9a948a", lineHeight: 1.5 }}>
              Ma–Pe 7–18 · Soita, viestillä tai WhatsAppilla
            </div>
          </div>
          <div style={{
            borderLeft: vp.isDesktop ? `1px solid ${accent}30` : "none",
            paddingLeft: vp.isDesktop ? 56 : 0,
            paddingTop: vp.isDesktop ? 0 : 8,
            borderTop: vp.isDesktop ? "none" : `1px solid ${accent}30`,
          }}>
            {[
              ["Sähköposti", "jonne@linesystems.fi", "mailto:jonne@linesystems.fi", "Lähetä sähköpostia osoitteeseen jonne@linesystems.fi"],
              ["WhatsApp", "050 326 4439", "https://wa.me/358503264439", "Avaa WhatsApp-keskustelu numerolle 050 326 4439"],
              ["Toimipiste", "Vilkkutie 3 A 15, 40320 Jyväskylä", null, null],
              ["Toimitusalue", "Suomi · Ruotsi · Norja · Tanska", null, null],
              ["Y-tunnus", "3616448-8", null, null],
            ].map(([h, v, l, aria], i) => (
              <div key={i} style={{ padding: "20px 0", borderBottom: "1px solid rgba(237,230,214,0.12)" }}>
                <div style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "#a8a59c", marginBottom: 10 }}>{h}</div>
                {l ? (
                  <a href={l} aria-label={aria} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: rv(vp, 20, 24, 26), color: "#F4EEDF", textDecoration: "none", wordBreak: "break-word" }}>{v}</a>
                ) : (
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: rv(vp, 20, 24, 26), color: "#F4EEDF", wordBreak: "break-word" }}>{v}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FOOTER ───── */}
      <footer style={{
        padding: `${rv(vp, 32, 44, 56)}px ${sectionPadH}px`,
        background: "#16151a",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 16,
        borderTop: `1px solid ${accent}30`,
      }}>
        <Wordmark accent={accent} size={26} />
        <LanguagePill accent={accent} active="FI" />
        <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#a8a59c", flex: vp.isMobile ? "1 1 100%" : "0 1 auto", textAlign: vp.isMobile ? "left" : "right", marginTop: vp.isMobile ? 4 : 0 }}>
          © 2026 Line Systems Oy · Y 3616448-8 · Tietosuoja
        </div>
      </footer>
    </div>
  );
}

window.HomepageA = HomepageA;
