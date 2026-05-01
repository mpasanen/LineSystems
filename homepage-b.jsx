/* global React, CinemaPlate, Wordmark, LSMark, ReliningAnimation, PartnerMarquee, StatTicker, HeroVideo, LanguagePill */

// Variation B — "Industrial precision" (B2B reseller + training)
function HomepageB({ accent = "#C9A572", density = "spacious", heroLayout = "video" }) {
  const pad = density === "dense" ? 56 : density === "spacious" ? 104 : 80;
  const sans = "'Inter', system-ui, sans-serif";
  const mono = "'JetBrains Mono', ui-monospace, monospace";

  return (
    <div style={{ background: "#0E0E10", color: "#E6E4DF", fontFamily: sans, overflow: "hidden" }}>
      <header style={{
        position: "sticky", top: 0, zIndex: 10, background: "rgba(14,14,16,0.85)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(230,228,223,0.08)",
        display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "center", gap: 48,
        padding: "20px 48px",
      }}>
        <Wordmark accent={accent} size={28} tracking="0.28em" />
        <nav style={{ display: "flex", gap: 36, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500, justifyContent: "center" }}>
          {[["Tuotteet", "01"], ["Menetelmä", "02"], ["Koulutus", "03"], ["Kumppanit", "04"], ["Yritys", "05"], ["Yhteys", "06"]].map(([x, n]) => (
            <a key={x} href="#" style={{ color: "#E6E4DF", textDecoration: "none", display: "flex", gap: 8, alignItems: "baseline" }}>
              <span style={{ color: accent, fontFamily: mono, fontSize: 10 }}>{n}</span>{x}
            </a>
          ))}
        </nav>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <LanguagePill accent={accent} active="FI" />
          <a href="tel:+358503264439" style={{
            padding: "12px 22px", background: accent, color: "#0E0E10",
            fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", fontWeight: 700,
          }}>Soita →</a>
        </div>
      </header>

      {/* HERO */}
      <section style={{ display: "grid", gridTemplateColumns: "5fr 7fr", minHeight: 760, borderBottom: "1px solid rgba(230,228,223,0.08)" }}>
        <div style={{ padding: "72px 56px 56px", display: "flex", flexDirection: "column", justifyContent: "space-between", borderRight: "1px solid rgba(230,228,223,0.08)" }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 11, color: accent, letterSpacing: "0.12em", marginBottom: 32 }}>
              LSO/2026 — RESELLER · TRAINING · NORDICS
            </div>
            <h1 style={{
              fontFamily: sans, fontWeight: 300, fontSize: 92, lineHeight: 0.95, letterSpacing: "-0.035em",
              margin: 0, color: "#F4F1E8",
            }}>
              Sukitusalan<br/>
              <span style={{ color: accent, fontWeight: 500 }}>tukku.</span>
            </h1>
            <p style={{ marginTop: 36, fontSize: 16, lineHeight: 1.6, color: "#a8a59c", maxWidth: 420 }}>
              Polinventin, Picoten, Brawolinerin ja iPEKin tuotteet —
              valikoimasta varastoon, koulutuksiin ja työmaalle.
            </p>
          </div>

          <div style={{ marginTop: 56 }}>
            {[
              ["Tuotteita varastossa", "300+ nimikettä"],
              ["Toimitusalue", "FI · SE · NO · DK"],
              ["Toimitusaika FI", "1–2 työpäivää"],
              ["Verkkokauppa", "Kesä 2026"],
              ["Koulutus", "1–3 pv kurssit"],
            ].map(([k, v], i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "200px 1fr",
                padding: "14px 0", borderTop: "1px solid rgba(230,228,223,0.08)",
                fontFamily: mono, fontSize: 12,
              }}>
                <div style={{ color: "#7d796f", letterSpacing: "0.06em" }}>{k}</div>
                <div style={{ color: "#F4F1E8" }}>{v}</div>
              </div>
            ))}
            <div style={{ marginTop: 32, display: "flex", gap: 16 }}>
              <a href="tel:+358503264439" style={{
                padding: "16px 28px", background: accent, color: "#0E0E10",
                fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none",
              }}>Soita →</a>
              <a href="#shop" style={{
                padding: "16px 28px", border: "1px solid rgba(230,228,223,0.25)", color: "#E6E4DF",
                fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none",
              }}>Verkkokauppa</a>
            </div>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          {heroLayout === "video"
            ? <HeroVideo videoSrc="https://ihcirdgmyzuzxyit.public.blob.vercel-storage.com/videos/polinvent_mainpage_teaser.mp4" useVideo={true} accent={accent} overlay={0.25} label="POLINVENT · DEMO" />
            : heroLayout === "image"
            ? <CinemaPlate src="assets/van-bronze-side.jpg" focal="50% 55%" overlay={0.25} accent={accent} />
            : <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, #1a1612, #050505 70%)", display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ transform: "scale(4)" }}><LSMark size={120} accent={accent} dark="#1a1a1c" /></div></div>}
          <div style={{
            position: "absolute", right: 24, top: 24, padding: 20, minWidth: 240,
            background: "rgba(14,14,16,0.85)", backdropFilter: "blur(8px)", border: `1px solid ${accent}40`,
          }}>
            <div style={{ fontFamily: mono, fontSize: 10, color: accent, letterSpacing: "0.18em", marginBottom: 10 }}>STOCK · LIVE</div>
            <div style={{ fontSize: 13, color: "#F4F1E8", marginBottom: 14 }}>Polinvent DN100 · 30 m</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, fontFamily: mono, fontSize: 11, color: "#a8a59c" }}>
              <div>SKU</div><div style={{ color: "#F4F1E8", textAlign: "right" }}>P-100-30</div>
              <div>STOCK</div><div style={{ color: accent, textAlign: "right" }}>14 rullaa</div>
              <div>SHIP</div><div style={{ color: "#F4F1E8", textAlign: "right" }}>FI 1–2 pv</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section style={{ padding: `${pad}px 56px`, borderBottom: "1px solid rgba(230,228,223,0.08)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: 64, marginBottom: 56 }}>
          <div style={{ fontFamily: mono, fontSize: 11, color: accent, letterSpacing: "0.18em" }}>CATALOG</div>
          <h2 style={{ fontFamily: sans, fontWeight: 300, fontSize: 64, lineHeight: 1.0, letterSpacing: "-0.025em", margin: 0, color: "#F4F1E8" }}>
            300+ nimikettä,<br/>
            <span style={{ color: "#7d796f" }}>kahdeksassa kategoriassa.</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "rgba(230,228,223,0.08)", border: "1px solid rgba(230,228,223,0.08)" }}>
          {[
            { code: "C.01", title: "Sukat", n: "85", brands: "Polinvent · Brawoliner" },
            { code: "C.02", title: "Hartsit", n: "32", brands: "Polinvent · Resinit" },
            { code: "C.03", title: "Höyrykovetus", n: "14", brands: "Polinvent" },
            { code: "C.04", title: "UV-kovetus", n: "8", brands: "Lateral" },
            { code: "C.05", title: "TV-kuvaus", n: "22", brands: "iPEK · Rovion" },
            { code: "C.06", title: "Robotit", n: "18", brands: "Picote" },
            { code: "C.07", title: "Kalibrointiletkut", n: "40", brands: "Brawoliner" },
            { code: "C.08", title: "Työkalut & PPE", n: "60+", brands: "" },
          ].map((s, i) => (
            <a key={i} href="#" style={{ background: "#0E0E10", padding: 32, position: "relative", textDecoration: "none", color: "#F4F1E8" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 24 }}>
                <div style={{ fontFamily: mono, fontSize: 11, color: accent, letterSpacing: "0.18em" }}>{s.code}</div>
                <div style={{ fontFamily: mono, fontSize: 11, color: "#7d796f" }}>{s.n} SKUs</div>
              </div>
              <div style={{ fontSize: 28, fontWeight: 400, color: "#F4F1E8", letterSpacing: "-0.02em", marginBottom: 14 }}>{s.title}</div>
              {s.brands && <div style={{ fontSize: 11, color: "#a8a59c" }}>{s.brands}</div>}
              <div style={{ position: "absolute", right: 24, bottom: 24, color: accent, fontSize: 18 }}>→</div>
            </a>
          ))}
        </div>
      </section>

      {/* METHOD ANIMATION */}
      <section style={{ padding: `${pad}px 56px`, borderBottom: "1px solid rgba(230,228,223,0.08)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: 64, marginBottom: 56 }}>
          <div style={{ fontFamily: mono, fontSize: 11, color: accent, letterSpacing: "0.18em" }}>METHOD</div>
          <h2 style={{ fontFamily: sans, fontWeight: 300, fontSize: 64, lineHeight: 1.0, letterSpacing: "-0.025em", margin: 0, color: "#F4F1E8" }}>
            Cured-In-Place Pipe.<br/>
            <span style={{ color: "#7d796f" }}>Tuotteet ja koulutus, jotka tekevät siitä tuottavaa.</span>
          </h2>
        </div>
        <div style={{ background: "#08080A", border: "1px solid rgba(230,228,223,0.08)", padding: 32, position: "relative" }}>
          <div style={{ position: "absolute", top: 16, right: 20, fontFamily: mono, fontSize: 10, color: accent, letterSpacing: "0.18em" }}>FIG. — INVERSION</div>
          <ReliningAnimation height={260} accent={accent} />
        </div>
      </section>

      {/* TRAINING */}
      <section style={{ padding: `${pad}px 56px`, borderBottom: "1px solid rgba(230,228,223,0.08)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: 64, marginBottom: 56 }}>
          <div style={{ fontFamily: mono, fontSize: 11, color: accent, letterSpacing: "0.18em" }}>TRAINING</div>
          <h2 style={{ fontFamily: sans, fontWeight: 300, fontSize: 64, lineHeight: 1.0, letterSpacing: "-0.025em", margin: 0, color: "#F4F1E8" }}>
            Koulutuskalenteri.
          </h2>
        </div>
        <div style={{ border: "1px solid rgba(230,228,223,0.08)" }}>
          {[
            ["T.01", "Polinvent perehdytys", "1 pv", "Tampere", "12.06.26", "vapaa"],
            ["T.02", "Sukituskurssi (sertifiointi)", "3 pv", "Tampere", "18–20.06.26", "3 paikkaa"],
            ["T.03", "Picote-robotti", "2 pv", "Tampere", "08–09.07.26", "5 paikkaa"],
            ["T.04", "Työmaakäynti, asiakas", "0,5 pv", "Sopimuksen mukaan", "—", "tarjous"],
          ].map((r, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "100px 2fr 100px 1fr 1fr 100px 32px",
              padding: "20px 24px", borderTop: i === 0 ? "none" : "1px solid rgba(230,228,223,0.08)",
              fontFamily: mono, fontSize: 12, alignItems: "center", color: "#a8a59c",
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
      <section style={{ padding: `${pad}px 56px`, borderBottom: "1px solid rgba(230,228,223,0.08)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: 64, marginBottom: 56 }}>
          <div style={{ fontFamily: mono, fontSize: 11, color: accent, letterSpacing: "0.18em" }}>PARTNERS</div>
          <h2 style={{ fontFamily: sans, fontWeight: 300, fontSize: 64, lineHeight: 1.0, letterSpacing: "-0.025em", margin: 0, color: "#F4F1E8" }}>
            Valmistajat.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "rgba(230,228,223,0.08)", border: "1px solid rgba(230,228,223,0.08)" }}>
          {[
            ["Polinvent", "HU", "Sukat, hartsit, kovetus"],
            ["Picote Solutions", "FI", "Robotit, jyrsintä"],
            ["Brawoliner", "DE", "Sukkamateriaalit"],
            ["iPEK", "AT", "TV-kuvaus"],
            ["Lateral Repairs", "UK", "Pistekorjaus"],
            ["Rovion", "FI", "Kameralaitteet"],
          ].map(([n, c, f], i) => (
            <div key={i} style={{ background: "#0E0E10", padding: 28 }}>
              <div style={{ fontFamily: mono, fontSize: 10, color: "#7d796f", letterSpacing: "0.18em", marginBottom: 12 }}>{c}</div>
              <div style={{ fontSize: 22, color: "#F4F1E8", marginBottom: 8, letterSpacing: "-0.02em" }}>{n}</div>
              <div style={{ fontSize: 12, color: "#a8a59c" }}>{f}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WEBSHOP TEASER */}
      <section id="shop" style={{ padding: `${pad}px 56px`, borderBottom: "1px solid rgba(230,228,223,0.08)" }}>
        <div style={{ background: "#08080A", border: `1px solid ${accent}40`, padding: 56, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 11, color: accent, letterSpacing: "0.18em", marginBottom: 24 }}>
              [SOON] · WEBSHOP — KESÄ 2026
            </div>
            <h2 style={{ fontFamily: sans, fontWeight: 300, fontSize: 56, lineHeight: 1.0, letterSpacing: "-0.025em", margin: 0, color: "#F4F1E8" }}>
              Tilaa suoraan,<br/>
              <span style={{ color: accent }}>seuraavaksi päiväksi.</span>
            </h2>
            <p style={{ marginTop: 24, fontSize: 15, lineHeight: 1.65, color: "#a8a59c", maxWidth: 460 }}>
              Suomalainen verkkokauppa — varasto, laskutus ja toimitus
              automaattisesti. Toimitukset koko Pohjolaan.
            </p>
          </div>
          <form style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <label style={{ fontFamily: mono, fontSize: 11, color: "#7d796f", letterSpacing: "0.18em" }}>NOTIFY ON LAUNCH →</label>
            <div style={{ display: "flex", border: `1px solid ${accent}` }}>
              <input placeholder="firma@osoite.fi" style={{ flex: 1, background: "transparent", border: 0, outline: 0, color: "#F4F1E8", padding: "16px 18px", fontFamily: mono, fontSize: 13 }} />
              <button style={{ background: accent, color: "#0E0E10", border: 0, padding: "0 28px", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, cursor: "pointer" }}>Liity →</button>
            </div>
          </form>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: `${pad}px 56px` }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 11, color: accent, letterSpacing: "0.18em", marginBottom: 24 }}>CONTACT</div>
            <h2 style={{ fontFamily: sans, fontWeight: 300, fontSize: 88, lineHeight: 1.0, letterSpacing: "-0.025em", margin: 0, color: "#F4F1E8" }}>
              Soita.<br/>
              <span style={{ color: accent }}>Vastataan.</span>
            </h2>
            <a href="tel:+358503264439" style={{ display: "inline-block", marginTop: 32, fontFamily: mono, fontSize: 36, color: accent, textDecoration: "none", letterSpacing: "0.04em" }}>
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
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "16px 0", borderTop: "1px solid rgba(230,228,223,0.08)" }}>
                <div style={{ color: "#7d796f", letterSpacing: "0.18em" }}>{k}</div>
                <div style={{ color: "#F4F1E8", textAlign: "right" }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ padding: "40px 56px", background: "#08080A", borderTop: `1px solid ${accent}30`, display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: mono, fontSize: 11 }}>
        <Wordmark accent={accent} size={24} />
        <LanguagePill accent={accent} active="FI" />
        <div style={{ color: "#7d796f", letterSpacing: "0.06em" }}>© 2026 Line Systems Oy · Y 3616448-8</div>
      </footer>
    </div>
  );
}

window.HomepageB = HomepageB;
