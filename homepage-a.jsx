/* global React, CinemaPlate, Wordmark, LSMark, ReliningAnimation, PartnerMarquee, StatTicker, HeroVideo, LanguagePill */

// Variation A — "Cinematic premium" (B2B reseller + training)
// Line Systems Oy: distributes pipe-relining materials & equipment to
// contractors across the Nordics, plus runs hands-on training courses.
// Webshop launching summer 2026.

function HomepageA({ accent = "#C9A572", density = "spacious", heroLayout = "video" }) {
  const pad = density === "dense" ? 64 : density === "spacious" ? 120 : 88;

  return (
    <div style={{ background: "#0B0B0C", color: "#EDE6D6", fontFamily: "'Inter', system-ui, sans-serif", overflow: "hidden" }}>
      {/* ───── NAV ───── */}
      <header style={{
        position: "absolute", top: 0, left: 0, right: 0, zIndex: 10,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "32px 56px",
      }}>
        <Wordmark accent={accent} size={32} />
        <nav style={{ display: "flex", gap: 40, fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 500 }}>
          {["Tuotteet", "Menetelmä", "Koulutus", "Kumppanit", "Yhteys"].map(x => (
            <a key={x} href="#" style={{ color: "#EDE6D6", textDecoration: "none", opacity: 0.85 }}>{x}</a>
          ))}
        </nav>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <LanguagePill accent={accent} active="FI" />
          <a href="tel:+358503264439" style={{
            padding: "10px 20px", border: `1px solid ${accent}`, color: accent,
            fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", textDecoration: "none",
          }}>Soita →</a>
        </div>
      </header>

      {/* ───── HERO ───── */}
      <section style={{ position: "relative", height: 880, width: "100%" }}>
        {heroLayout === "video" && (
          <HeroVideo videoSrc="https://ihcirdgmyzuzxyit.public.blob.vercel-storage.com/videos/polinvent_mainpage_teaser.mp4" useVideo={true} accent={accent} overlay={0.55} label="POLINVENT · INVERSION DEMO" />
        )}
        {heroLayout === "image" && (
          <CinemaPlate src="assets/van-bronze-front-glossy.jpg" focal="50% 55%" overlay={0.55} accent={accent} />
        )}
        {heroLayout === "logo" && (
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, #1a1612, #050505 70%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ transform: "scale(4)" }}>
              <LSMark size={120} accent={accent} dark="#1a1a1c" />
            </div>
          </div>
        )}

        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 56px 80px" }}>
          <div style={{ maxWidth: 1100 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32, fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: accent }}>
              <span style={{ width: 32, height: 1, background: accent }} />
              Sukitustarvikkeet &nbsp;·&nbsp; Pipe relining materials &amp; equipment
            </div>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: 132,
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
              margin: 0,
              color: "#F4EEDF",
            }}>
              Materiaalit, laitteet<br/>
              ja <span style={{ fontStyle: "italic", color: accent }}>osaaminen.</span>
            </h1>
            <p style={{ marginTop: 36, fontSize: 17, lineHeight: 1.6, maxWidth: 560, color: "#c9c2b6" }}>
              Line Systems toimittaa sukitusalan ammattilaisille materiaalit,
              laitteet ja koulutuksen — yhdestä paikasta. Polinventin ja muiden
              maailman johtavien valmistajien tuotteet, suomalainen varasto,
              pohjoismainen toimitus.
            </p>
            <div style={{ marginTop: 44, display: "flex", gap: 20, alignItems: "center" }}>
              <a href="tel:+358503264439" style={{
                padding: "20px 36px", background: accent, color: "#0B0B0C",
                fontSize: 12, letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 600, textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: 12,
              }}>
                Soita Jonnelle <span style={{ fontSize: 18 }}>→</span>
              </a>
              <a href="#shop" style={{
                padding: "20px 24px", color: "#EDE6D6",
                fontSize: 12, letterSpacing: "0.28em", textTransform: "uppercase", textDecoration: "none",
                borderBottom: "1px solid rgba(237,230,214,0.3)",
              }}>
                Verkkokauppa avautuu →
              </a>
            </div>
          </div>

          <div style={{ position: "absolute", right: 56, bottom: 80, textAlign: "right" }}>
            <div style={{ fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", color: "#9a948a", marginBottom: 6 }}>Est. 2026 — Jyväskylä, Finland · Nordics</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontStyle: "italic", color: accent }}>nº 001</div>
          </div>
        </div>

        <div style={{ position: "absolute", left: 56, bottom: 36, fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", color: "#9a948a", display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ display: "inline-block", width: 1, height: 28, background: accent, animation: "ls-scrollline 2.4s ease-in-out infinite" }} />
          Selaa
        </div>
      </section>

      {/* ───── INTRO STRIP — 3 PILLARS ───── */}
      <section style={{ padding: `${pad}px 56px`, borderBottom: "1px solid rgba(237,230,214,0.08)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: accent, paddingTop: 16 }}>
            <span style={{ display: "inline-block", width: 24, height: 1, background: accent, marginRight: 16, verticalAlign: "middle" }} />
            Mitä teemme
          </div>
          <div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 54, lineHeight: 1.15, margin: 0, color: "#F4EEDF", textWrap: "balance" }}>
              Kolme asiaa, joiden ympärille <em style={{ color: accent }}>kaikki rakentuu</em>:
              materiaalit, joihin urakoitsija voi luottaa, laitteet jotka
              kestävät työmaan, ja koulutus joka tekee niistä tuottavaa työtä.
            </p>
            <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48 }}>
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
      <section style={{ padding: `${pad}px 56px`, borderBottom: "1px solid rgba(237,230,214,0.08)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: accent, marginBottom: 24 }}>
              <span style={{ display: "inline-block", width: 24, height: 1, background: accent, marginRight: 16, verticalAlign: "middle" }} />
              Tuotteet
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 88, lineHeight: 0.95, margin: 0, color: "#F4EEDF", letterSpacing: "-0.01em" }}>
              Valikoima<br/><em style={{ color: accent }}>ammattilaiselle.</em>
            </h2>
          </div>
          <div style={{ maxWidth: 360, fontSize: 14, lineHeight: 1.65, color: "#9a948a" }}>
            Yli 300 nimikettä urakoitsijan arkeen — valmistajien alkuperäistuotteita,
            CE-merkittyjä ja sertifioituja, dokumentaatio mukana.
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {[
            { code: "01", title: "Sukat & sukkamateriaalit", count: "85 nimikettä", brands: "Brawoliner · Polinvent" },
            { code: "02", title: "Hartsit & kovetteet", count: "32 nimikettä", brands: "Polinvent · Resinit" },
            { code: "03", title: "Höyry- ja UV-kovetus", count: "14 yksikköä", brands: "Polinvent · Lateral" },
            { code: "04", title: "Kamerat & TV-kuvaus", count: "22 nimikettä", brands: "iPEK · Rovion" },
            { code: "05", title: "Robotit & jyrsintä", count: "18 nimikettä", brands: "Picote Solutions" },
            { code: "06", title: "Pesurit & kompressorit", count: "26 nimikettä", brands: "" },
            { code: "07", title: "Kalibrointiletkut", count: "40 kokoa", brands: "Brawoliner · Polinvent" },
            { code: "08", title: "Suojavarusteet & työkalut", count: "60+ nimikettä", brands: "" },
          ].map((p, i) => (
            <a key={i} href="#" style={{
              background: "#0F0F11", border: "1px solid rgba(237,230,214,0.08)", padding: 28,
              textDecoration: "none", color: "#EDE6D6", display: "flex", flexDirection: "column", justifyContent: "space-between",
              minHeight: 220, position: "relative",
              transition: "border-color 0.2s",
            }}>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: accent, letterSpacing: "0.16em", marginBottom: 18 }}>{p.code}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, color: "#F4EEDF", lineHeight: 1.15, marginBottom: 12 }}>{p.title}</div>
              </div>
              <div>
                <div style={{ fontSize: 12, color: "#9a948a", marginBottom: 6 }}>{p.count}</div>
                {p.brands && <div style={{ fontSize: 11, color: accent, letterSpacing: "0.04em" }}>{p.brands}</div>}
              </div>
              <div style={{ position: "absolute", right: 24, bottom: 24, color: accent, fontSize: 16 }}>→</div>
            </a>
          ))}
        </div>
      </section>

      {/* ───── TRAINING ───── */}
      <section style={{ padding: `${pad}px 56px`, borderBottom: "1px solid rgba(237,230,214,0.08)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "stretch" }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: accent, marginBottom: 24 }}>
              <span style={{ display: "inline-block", width: 24, height: 1, background: accent, marginRight: 16, verticalAlign: "middle" }} />
              Koulutus
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 76, lineHeight: 1, margin: 0, color: "#F4EEDF" }}>
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
                ["Perehdytys", "1 pv", "Polinventin tuotteet & työturva"],
                ["Sukituskurssi", "3 pv", "Inversiomenetelmä, kovetus, jälkitarkastus"],
                ["Robottityöt", "2 pv", "Picote-jyrsintä ja haaroitusten avaus"],
                ["Työmaakäynti", "0,5 pv", "Asiakkaan kohteessa, ongelmanratkaisu"],
              ].map(([h, d, b], i) => (
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
          <div style={{ position: "relative", minHeight: 720 }}>
            <CinemaPlate src="assets/founder-hq-van.jpg" focal="45% 55%" overlay={0.2} accent={accent} kenBurns={false} />
            <div style={{ position: "absolute", left: 32, bottom: 32, right: 32, padding: 28, background: "rgba(11,11,12,0.85)", backdropFilter: "blur(8px)", borderLeft: `2px solid ${accent}` }}>
              <div style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: accent, marginBottom: 8 }}>Kouluttaja</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, color: "#F4EEDF", lineHeight: 1.25 }}>
                Yli 12 vuotta kentällä — sama mies opettaa.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── PARTNERS ───── */}
      <section style={{ padding: `${pad}px 0`, borderBottom: "1px solid rgba(237,230,214,0.08)" }}>
        <div style={{ padding: "0 56px", marginBottom: 56 }}>
          <div style={{ fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: accent, marginBottom: 24 }}>
            <span style={{ display: "inline-block", width: 24, height: 1, background: accent, marginRight: 16, verticalAlign: "middle" }} />
            Kumppanit
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 76, lineHeight: 1, margin: 0, color: "#F4EEDF" }}>
            Valmistajat <em style={{ color: accent }}>joihin luotamme.</em>
          </h2>
        </div>
        <div style={{ padding: "0 56px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "rgba(237,230,214,0.08)", border: "1px solid rgba(237,230,214,0.08)", marginBottom: 32 }}>
          {[
            { name: "Polinvent", country: "HU", focus: "Sukat, hartsit, kovetus" },
            { name: "Picote Solutions", country: "FI", focus: "Robotit, jyrsintä" },
            { name: "Brawoliner", country: "DE", focus: "Sukkamateriaalit" },
            { name: "iPEK", country: "AT", focus: "TV-kuvaus, kamerat" },
            { name: "Lateral Repairs", country: "UK", focus: "Pistekorjaus" },
            { name: "Rovion", country: "FI", focus: "Kameralaitteet" },
          ].map((p, i) => (
            <div key={i} style={{ background: "#0B0B0C", padding: 32, position: "relative" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#9a948a", letterSpacing: "0.18em", marginBottom: 20 }}>{p.country}</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, color: "#F4EEDF", marginBottom: 10 }}>{p.name}</div>
              <div style={{ fontSize: 12, color: "#9a948a" }}>{p.focus}</div>
            </div>
          ))}
        </div>
        <PartnerMarquee accent={accent} items={["Virallinen jälleenmyyjä", "Authorized distributor", "Auktoriserad återförsäljare", "Autoriseret distributør", "Autorisert distributør"]} />
      </section>

      {/* ───── FOUNDER QUOTE ───── */}
      <section style={{ padding: `${pad}px 56px`, borderBottom: "1px solid rgba(237,230,214,0.08)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "5fr 4fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: accent, marginBottom: 32 }}>
              <span style={{ display: "inline-block", width: 24, height: 1, background: accent, marginRight: 16, verticalAlign: "middle" }} />
              Tekijä
            </div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: "italic", fontSize: 44, lineHeight: 1.25, color: "#F4EEDF", margin: 0, textWrap: "balance" }}>
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
            <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {[["12+ v", "alalla"], ["6", "valmistajakumppania"], ["4", "pohjoismaata"]].map(([n, l], i) => (
                <div key={i} style={{ borderTop: `1px solid ${accent}`, paddingTop: 14 }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 44, color: accent, lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#9a948a", marginTop: 8 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative", aspectRatio: "4/5" }}>
            <CinemaPlate src="assets/founder-portrait.jpg" focal="50% 30%" overlay={0.15} kenBurns={false} accent={accent} />
          </div>
        </div>
      </section>

      {/* ───── WEBSHOP TEASER — DEDICATED ───── */}
      <section id="shop" style={{ padding: `${pad}px 56px`, position: "relative", overflow: "hidden", borderBottom: "1px solid rgba(237,230,214,0.08)" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 80% 50%, ${accent}15, transparent 60%)` }} />
        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-block", padding: "6px 14px", border: `1px solid ${accent}`, color: accent, fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", marginBottom: 28 }}>
              Avautuu kesällä 2026
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 96, lineHeight: 0.95, margin: 0, color: "#F4EEDF", letterSpacing: "-0.02em" }}>
              Verkkokauppa<br/><em style={{ color: accent }}>ammattilaisille.</em>
            </h2>
            <p style={{ marginTop: 28, fontSize: 17, lineHeight: 1.65, color: "#c9c2b6", maxWidth: 480 }}>
              Sukat, hartsit, kalvot, jyrsinpäät ja kalibrointiletkut suoraan
              tehdaspakkauksesta. Suomalaiset varastot, seuraavan päivän
              toimitus Suomeen ja 2–3 päivää muualle Pohjoismaihin.
            </p>
            <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {[["300+", "nimikettä"], ["1–3 pv", "toimitus"], ["4 maata", "Pohjola"]].map(([n, l], i) => (
                <div key={i} style={{ borderTop: `1px solid ${accent}40`, paddingTop: 14 }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, color: accent, lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#9a948a", marginTop: 8 }}>{l}</div>
                </div>
              ))}
            </div>
            <form style={{ marginTop: 44, display: "flex", gap: 0, maxWidth: 460, borderBottom: `1px solid ${accent}` }}>
              <input placeholder="firma@osoite.fi" style={{ flex: 1, background: "transparent", border: 0, outline: 0, color: "#F4EEDF", padding: "16px 0", fontSize: 15, letterSpacing: "0.04em" }} />
              <button style={{ background: "transparent", border: 0, color: accent, padding: "16px 0", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", cursor: "pointer", fontWeight: 600 }}>Ilmoita avauksesta →</button>
            </form>
            <div style={{ marginTop: 12, fontSize: 11, color: "#7d796f", letterSpacing: "0.04em" }}>
              Ei spämmiä — vain lanseerausilmoitus &amp; ennakkohinnasto kumppaneille.
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ aspectRatio: "1/1", background: "#0F0F11", border: `1px solid ${accent}30`, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: `repeating-linear-gradient(45deg, transparent 0 30px, ${accent}08 30px 31px)` }} />
              <div style={{ position: "absolute", inset: 40, border: `1px dashed ${accent}40`, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 28 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <LSMark size={28} accent={accent} />
                  <div style={{ fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", color: accent }}>SKU 0001 · Polinvent</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 64, color: "#F4EEDF", lineHeight: 1 }}>
                    Polinvent<br/>Sukka <em style={{ color: accent }}>DN150</em>
                  </div>
                  <div style={{ fontSize: 12, color: "#9a948a", marginTop: 16, letterSpacing: "0.06em" }}>Ø 100–200 mm · 30 m rulla · CE-merkitty</div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <div style={{ fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", color: "#9a948a" }}>Varastosta heti</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, color: accent }}>—,—€</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── CONTACT — CALL FIRST ───── */}
      <section style={{ padding: `${pad}px 56px` }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: accent, marginBottom: 24 }}>
              <span style={{ display: "inline-block", width: 24, height: 1, background: accent, marginRight: 16, verticalAlign: "middle" }} />
              Yhteys
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 132, lineHeight: 0.9, margin: 0, color: "#F4EEDF", letterSpacing: "-0.02em" }}>
              Soita.<br/><em style={{ color: accent }}>Vastataan.</em>
            </h2>
            <a href="tel:+358503264439" style={{ display: "inline-block", marginTop: 36, fontFamily: "'Cormorant Garamond', serif", fontSize: 56, color: accent, textDecoration: "none", letterSpacing: "0.02em" }}>
              050 326 4439
            </a>
            <div style={{ marginTop: 16, fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9a948a" }}>
              Ma–Pe 7–18 · Soita, viestillä tai WhatsAppilla
            </div>
          </div>
          <div style={{ borderLeft: `1px solid ${accent}30`, paddingLeft: 56 }}>
            {[
              ["Sähköposti", "jonne@linesystems.fi", "mailto:jonne@linesystems.fi"],
              ["WhatsApp", "050 326 4439", "https://wa.me/358503264439"],
              ["Toimipiste", "Vilkkutie 3 A 15, 40320 Jyväskylä", null],
              ["Toimitusalue", "Suomi · Ruotsi · Norja · Tanska", null],
              ["Y-tunnus", "3616448-8", null],
            ].map(([h, v, l], i) => (
              <div key={i} style={{ padding: "24px 0", borderBottom: "1px solid rgba(237,230,214,0.12)" }}>
                <div style={{ fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: "#9a948a", marginBottom: 10 }}>{h}</div>
                {l ? (
                  <a href={l} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, color: "#F4EEDF", textDecoration: "none" }}>{v}</a>
                ) : (
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, color: "#F4EEDF" }}>{v}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FOOTER ───── */}
      <footer style={{ padding: "56px", background: "#08080A", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: `1px solid ${accent}30` }}>
        <Wordmark accent={accent} size={28} />
        <LanguagePill accent={accent} active="FI" />
        <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#5e5a52" }}>
          © 2026 Line Systems Oy · Y 3616448-8 · Tietosuoja
        </div>
      </footer>
    </div>
  );
}

window.HomepageA = HomepageA;
