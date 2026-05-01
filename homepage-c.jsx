/* global React, CinemaPlate, Wordmark, LSMark, ReliningAnimation, PartnerMarquee, StatTicker, HeroVideo, LanguagePill, useViewport, rv, LogoPlate */

// Variation C — "Editorial calm" (B2B reseller + training)
function HomepageC({ accent = "#C9A572", density = "spacious", heroLayout = "video", forceDesktop = false }) {
  const realVp = useViewport();
  const vp = forceDesktop ? { width: 1440, isMobile: false, isTablet: false, isDesktop: true } : realVp;
  const pad = density === "dense" ? 80 : density === "spacious" ? 144 : 112;
  const sectionPadV = rv(vp, Math.round(pad * 0.5), Math.round(pad * 0.75), pad);
  const sectionPadH = rv(vp, 22, 40, 64);
  const serif = "'Cormorant Garamond', 'Cormorant', serif";
  const sans = "'Inter', system-ui, sans-serif";
  // The light editorial sections (#F2EEE4) need a darker bronze for body and
  // small-text accents to clear 4.5:1 contrast. The bright accent (#C9A572)
  // stays for borders, dividers, and the dark founder section where it pairs
  // with #1A1916 on the other side of the chip.
  const inkAccent = "#7a5d28";

  return (
    <div style={{ background: "#F2EEE4", color: "#1A1916", fontFamily: sans, overflow: "hidden" }}>
      <header style={{
        display: "grid",
        gridTemplateColumns: vp.isDesktop ? "1fr auto 1fr" : "1fr auto",
        alignItems: "center", gap: 16,
        padding: `${rv(vp, 18, 26, 36)}px ${sectionPadH}px`, borderBottom: "1px solid rgba(26,25,22,0.12)",
      }}>
        {!vp.isMobile && <Wordmark accent={accent} color="#1A1916" size={rv(vp, 26, 28, 30)} mono={false} />}
        {vp.isMobile && <span />}
        {vp.isDesktop && (
          <nav style={{ display: "flex", gap: 36, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 500, justifyContent: "center" }}>
            {["Tuotteet", "Menetelmä", "Koulutus", "Kumppanit", "Yhteys"].map(x => (
              <a key={x} href="#" style={{ color: "#1A1916", textDecoration: "none" }}>{x}</a>
            ))}
          </nav>
        )}
        <div style={{ display: "flex", gap: rv(vp, 8, 12, 16), alignItems: "center", justifyContent: "flex-end" }}>
          {!vp.isMobile && <LanguagePill accent={inkAccent} color="#1A1916" inactiveColor="#5e5a52" active="FI" />}
          <a href="tel:+358503264439" style={{
            padding: "12px 18px", border: `1px solid ${accent}`, color: "#1A1916",
            fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", textDecoration: "none",
            minHeight: 44, display: "inline-flex", alignItems: "center",
          }}>Soita →</a>
        </div>
      </header>

      <section style={{ padding: `${sectionPadV}px ${sectionPadH}px ${Math.round(sectionPadV * 0.6)}px`, textAlign: "center" }}>
        <div style={{ fontFamily: sans, fontSize: 11, color: inkAccent, letterSpacing: "0.32em", textTransform: "uppercase", marginBottom: rv(vp, 24, 30, 36) }}>
          Esittely · Volume One
        </div>
        <h1 style={{
          fontFamily: serif, fontWeight: 300,
          fontSize: "clamp(56px, 16vw, 168px)",
          lineHeight: 0.94, letterSpacing: "-0.02em",
          margin: "0 auto", maxWidth: 1300, color: "#1A1916", textWrap: "balance",
        }}>
          Materiaalit ja menetelmä,<br/>
          joiden ympärillä <em style={{ color: inkAccent }}>työ kasvaa.</em>
        </h1>
        <p style={{
          marginTop: rv(vp, 32, 40, 48),
          fontFamily: serif, fontStyle: "italic",
          fontSize: "clamp(18px, 3.5vw, 24px)",
          lineHeight: 1.5, color: "#5e5a52", maxWidth: 700,
          margin: `${rv(vp, 32, 40, 48)}px auto 0`,
        }}>
          Line Systems on pohjoismainen sukitustarvikkeiden ja -laitteiden
          jälleenmyyjä — ja kouluttaa urakoitsijat käyttämään niitä hyvin.
        </p>
        <div style={{ marginTop: rv(vp, 36, 48, 56), display: "flex", gap: rv(vp, 14, 16, 18), justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
          <a href="tel:+358503264439" style={{
            padding: rv(vp, "16px 24px", "18px 30px", "18px 32px"),
            background: "#1A1916", color: "#F2EEE4", fontSize: 11, letterSpacing: "0.24em",
            textTransform: "uppercase", fontWeight: 600, textDecoration: "none",
            minHeight: 48, display: "inline-flex", alignItems: "center",
          }}>
            Soita Jonnelle →
          </a>
          <a href="#shop" style={{
            fontSize: 12, letterSpacing: "0.24em", textTransform: "uppercase",
            color: "#1A1916", textDecoration: "none", borderBottom: `1px solid ${accent}`,
            padding: "12px 0", minHeight: 44, display: "inline-flex", alignItems: "center",
          }}>
            Verkkokauppa avautuu
          </a>
        </div>
      </section>

      {/* HERO PLATE */}
      <section style={{ padding: `0 ${sectionPadH}px 0`, marginBottom: sectionPadV }}>
        <div style={{ position: "relative", height: rv(vp, 360, 480, 640), overflow: "hidden", background: "#1a191e" }}>
          {heroLayout === "video"
            ? <HeroVideo videoSrc="https://ihcirdgmyzuzxyit.public.blob.vercel-storage.com/videos/polinvent_mainpage_teaser.mp4" useVideo={true} accent={accent} overlay={0.3} label="POLINVENT · DEMO" />
            : heroLayout === "image"
            ? <CinemaPlate src="assets/founder-hq-van.jpg" focal="45% 55%" overlay={0.25} accent={accent} />
            : <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, #2a2218, #16151a 70%)", display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ transform: "scale(4)" }}><LSMark size={120} accent={accent} dark="#1a1a1c" /></div></div>}
          <div style={{ position: "absolute", left: rv(vp, 16, 24, 32), bottom: rv(vp, 16, 24, 32), fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#F2EEE4", letterSpacing: "0.18em" }}>
            PLATE 001 — INVERSION (POLINVENT)
          </div>
        </div>
      </section>

      {/* PROSE — what we do */}
      <section style={{ padding: `0 ${sectionPadH}px ${sectionPadV}px`, maxWidth: 980, margin: "0 auto" }}>
        <div style={{ fontFamily: sans, fontSize: 11, color: inkAccent, letterSpacing: "0.32em", textTransform: "uppercase", marginBottom: rv(vp, 24, 28, 32), textAlign: "center" }}>Mitä teemme</div>
        <p style={{
          fontFamily: serif, fontWeight: 300,
          fontSize: "clamp(20px, 4.5vw, 36px)",
          lineHeight: 1.45, color: "#1A1916", margin: 0, textWrap: "balance",
        }}>
          Sukitusalan urakoitsija tarvitsee kolme asiaa: <em style={{ color: inkAccent }}>tarvikkeet
          jotka eivät petä</em>, laitteet jotka kestävät arjen, ja koulutuksen joka
          tekee menetelmästä tuottavaa työtä.
          <br/><br/>
          Line Systems toimittaa kaikki kolme. Sanikomin oma kemia ja
          inversiokalusto, Bodusin Metroliner-järjestelmä DN100–400, ja
          Suomen Sukitustarvikkeen kotimainen tuki — saman kentällä
          oppineen ihmisen kautta.
        </p>
      </section>

      {/* BRAND PLATE — editorial brand statement before product capítulos */}
      <section aria-label="Line Systems -tunnus" style={{
        padding: `${rv(vp, 48, 72, 96)}px ${sectionPadH}px`,
        textAlign: "center", maxWidth: 1100, margin: "0 auto",
      }}>
        <div style={{ fontFamily: sans, fontSize: 11, color: inkAccent, letterSpacing: "0.32em", textTransform: "uppercase", marginBottom: 24 }}>Tunnus · Identity Plate</div>
        <LogoPlate accent={accent} framed={true} glow={true} />
        <div style={{ marginTop: 28, fontFamily: serif, fontStyle: "italic", fontSize: "clamp(18px, 3vw, 22px)", color: "#3a3833", maxWidth: 600, margin: "28px auto 0", lineHeight: 1.5 }}>
          Geometrinen, ajaton, pronssin sävyinen. Sama tunnus laitteissa,
          autoissa ja työvaatteissa — yhtenäinen kentällä.
        </div>
      </section>

      {/* PRODUCTS — editorial */}
      <section style={{ padding: `${sectionPadV}px ${sectionPadH}px`, background: "#EAE4D5", borderTop: "1px solid rgba(26,25,22,0.12)", borderBottom: "1px solid rgba(26,25,22,0.12)" }}>
        <div style={{ textAlign: "center", marginBottom: rv(vp, 48, 64, 80) }}>
          <div style={{ fontFamily: sans, fontSize: 11, color: inkAccent, letterSpacing: "0.32em", textTransform: "uppercase", marginBottom: 24 }}>Valikoima</div>
          <h2 style={{
            fontFamily: serif, fontWeight: 300,
            fontSize: "clamp(40px, 10vw, 96px)",
            lineHeight: 1, margin: 0, color: "#1A1916",
          }}>
            Yli kolmesataa nimikettä — <em style={{ color: inkAccent }}>kuratoidusti.</em>
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: rv(vp, "1fr", "repeat(2, 1fr)", "repeat(2, 1fr)"),
          gap: rv(vp, 36, 48, 64),
          maxWidth: 1200, margin: "0 auto",
        }}>
          {[
            ["Sukat & sukkamateriaalit", "Sanikom · Bodus", "Inversio- ja vetosukat DN50–DN500. CE-merkityt, jäljitettävät erät — Sanikomin omaa valmistusta ja Bodusin Metroliner-järjestelmä."],
            ["EX-sarjan epoksihartsit", "Sanikom", "EX1-2, EX2-2, EX4-2, EXR-2 ja EXRR-2 — eri potlife't ja lujuudet. Lisäksi silikaattihartsi 3P W01 Express pistekorjauksiin."],
            ["Inversiorummut & höyry", "Sanikom", "Komposiittirummun edelläkävijä. Höyrykattilat, kyllästyspöydät (manuaali / sähkö), ketjuvetoiset rullat."],
            ["Metroliner DN100–400", "Bodus", "DIBt-sertifioitu kotitalouskaivon sukitusjärjestelmä — kalibrointirullat, inversiolaitteet, ajoneuvokalusto."],
            ["TV-kuvaus & tiiviyskoetus", "Bodus", "Mobiilit CCTV-järjestelmät, raportointiohjelmistot, putkien ja kaivojen tiiviyskoetuslaitteet."],
            ["R-Case & työkalut", "Suomen Sukitustarvike", "Kotimainen tukku — R-Case-työkalu, hengityssuojaimet, mittarit, päivittäiset varusteet 24/7 myymälästä."],
          ].map(([h, brand, body], i) => (
            <article key={i} style={{ borderTop: `1px solid ${accent}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "20px 0 24px", gap: 12 }}>
                <div style={{ fontFamily: serif, fontStyle: "italic", fontSize: 18, color: inkAccent }}>Capítulo {i + 1}</div>
                <div style={{ fontFamily: sans, fontSize: 10, color: "#5e5a52", letterSpacing: "0.18em", textTransform: "uppercase" }}>{brand}</div>
              </div>
              <h3 style={{
                fontFamily: serif, fontWeight: 300,
                fontSize: "clamp(28px, 6vw, 44px)",
                lineHeight: 1.05, color: "#1A1916", margin: 0, letterSpacing: "-0.01em",
              }}>
                {h}
              </h3>
              <p style={{ marginTop: 18, fontSize: rv(vp, 16, 16, 15), lineHeight: 1.7, color: "#3a3833" }}>{body}</p>
              <a href="#" style={{
                display: "inline-block", marginTop: 18,
                fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase",
                color: inkAccent, textDecoration: "none", borderBottom: `1px solid ${accent}`,
                padding: "10px 0", minHeight: 40,
              }}>
                Selaa →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* TRAINING */}
      <section style={{ padding: `${sectionPadV}px ${sectionPadH}px`, maxWidth: 1280, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: rv(vp, "1fr", "1fr", "1fr 1fr"),
          gap: rv(vp, 32, 56, 80),
          alignItems: "center",
        }}>
          <div>
            <div style={{ fontFamily: sans, fontSize: 11, color: inkAccent, letterSpacing: "0.32em", textTransform: "uppercase", marginBottom: 28 }}>Koulutus</div>
            <h2 style={{
              fontFamily: serif, fontWeight: 300,
              fontSize: "clamp(40px, 9vw, 84px)",
              lineHeight: 1, margin: 0, color: "#1A1916",
            }}>
              Hyvä tarvike<br/>
              <em style={{ color: inkAccent }}>tarvitsee hyvän tekijän.</em>
            </h2>
            <p style={{
              marginTop: 28, fontFamily: serif, fontStyle: "italic",
              fontSize: "clamp(18px, 3.5vw, 22px)",
              lineHeight: 1.55, color: "#3a3833",
            }}>
              Yhden päivän perehdytyksistä monipäiväisiin sertifiointikursseihin —
              kentällä opetellut menetelmät, ei luentosaleista kopioidut.
            </p>
          </div>
          <div>
            {[
              ["Perehdytys", "1 pv", "Sanikomin tuotteet & turva"],
              ["Sukituskurssi", "3 pv", "Inversio, kovetus, jälkitarkastus"],
              ["Metroliner-asennus", "2 pv", "Bodus DN100–400 kotitalouskaivot"],
              ["Työmaakäynti", "0,5 pv", "Asiakkaan kohteessa"],
            ].map(([h, d, b], i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "1fr auto", gap: rv(vp, 14, 18, 20), alignItems: "baseline",
                padding: rv(vp, "20px 0", "22px 0", "24px 0"), borderTop: `1px solid ${accent}40`,
              }}>
                <div>
                  <div style={{ fontFamily: serif, fontSize: rv(vp, 22, 25, 28), color: "#1A1916" }}>{h}</div>
                  <div style={{ fontSize: 13, color: "#5e5a52", marginTop: 4 }}>{b}</div>
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: inkAccent, letterSpacing: "0.12em" }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section style={{ padding: `${sectionPadV}px ${sectionPadH}px`, background: "#1A1916", color: "#F2EEE4" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: rv(vp, "1fr", "1fr", "5fr 4fr"),
          gap: rv(vp, 32, 56, 80), alignItems: "center",
          maxWidth: 1280, margin: "0 auto",
        }}>
          <div>
            <div style={{ fontFamily: sans, fontSize: 11, color: accent, letterSpacing: "0.32em", textTransform: "uppercase", marginBottom: 32 }}>Tekijä</div>
            <p style={{
              fontFamily: serif, fontWeight: 300, fontStyle: "italic",
              fontSize: "clamp(22px, 5vw, 42px)",
              lineHeight: 1.3, margin: 0, color: "#F2EEE4", textWrap: "balance",
            }}>
              "Tein sukitusta yli kymmenen vuotta. Tiedän mistä tarvikkeesta
              urakoitsija oikeasti välittää — ja miksi. Soita, niin jutellaan."
            </p>
            <div style={{ marginTop: 36, display: "flex", alignItems: "center", gap: 18 }}>
              <div style={{ width: 40, height: 1, background: accent }} />
              <div>
                <div style={{ fontSize: 13, color: "#F2EEE4", fontWeight: 600 }}>Jonne Parhiala</div>
                <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#a8a59c", marginTop: 4 }}>Perustaja</div>
              </div>
            </div>
          </div>
          <div style={{ position: "relative", aspectRatio: "4/5", order: vp.isMobile ? -1 : 0 }}>
            <CinemaPlate src="assets/founder-portrait.jpg" focal="50% 30%" overlay={0.1} kenBurns={false} accent={accent} />
          </div>
        </div>
      </section>

      {/* WEBSHOP TEASER */}
      <section id="shop" style={{ padding: `${sectionPadV}px ${sectionPadH}px`, textAlign: "center", maxWidth: 980, margin: "0 auto" }}>
        <div style={{ fontFamily: sans, fontSize: 11, color: inkAccent, letterSpacing: "0.32em", textTransform: "uppercase", marginBottom: 28 }}>Verkkokauppa</div>
        <h2 style={{
          fontFamily: serif, fontWeight: 300,
          fontSize: "clamp(48px, 12vw, 108px)",
          lineHeight: 0.95, margin: 0, color: "#1A1916", textWrap: "balance",
        }}>
          Avautuu <em style={{ color: inkAccent }}>kesällä 2026.</em>
        </h2>
        <p style={{
          marginTop: 28, fontFamily: serif, fontStyle: "italic",
          fontSize: "clamp(18px, 3.5vw, 22px)",
          color: "#3a3833", lineHeight: 1.5, maxWidth: 640,
          margin: `28px auto 0`,
        }}>
          Suomalainen verkkokauppa, koko Pohjola toimitusalueena.
          Liity ennakkolistalle.
        </p>
        <form style={{
          marginTop: 44, display: "flex", flexWrap: "wrap",
          maxWidth: 480, margin: "44px auto 0",
          borderBottom: `1px solid ${accent}`,
        }} onSubmit={(e) => e.preventDefault()}>
          <input placeholder="firma@osoite.fi" inputMode="email" style={{ flex: "1 1 200px", background: "transparent", border: 0, outline: 0, padding: "16px 0", fontSize: 16, color: "#1A1916", minWidth: 0 }} />
          <button style={{ background: "transparent", border: 0, color: inkAccent, padding: "16px 0 16px 16px", fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", fontWeight: 600, cursor: "pointer", minHeight: 48 }}>Liity →</button>
        </form>
      </section>

      {/* CONTACT */}
      <section style={{ padding: `${sectionPadV}px ${sectionPadH}px`, borderTop: `1px solid ${accent}40` }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: rv(vp, "1fr", "1fr", "1fr 1fr"),
          gap: rv(vp, 32, 56, 80),
          maxWidth: 1280, margin: "0 auto", alignItems: "center",
        }}>
          <div>
            <div style={{ fontFamily: sans, fontSize: 11, color: inkAccent, letterSpacing: "0.32em", textTransform: "uppercase", marginBottom: 28 }}>Yhteys</div>
            <h2 style={{
              fontFamily: serif, fontWeight: 300,
              fontSize: "clamp(64px, 16vw, 132px)",
              lineHeight: 0.92, margin: 0, color: "#1A1916", letterSpacing: "-0.02em",
            }}>
              Soita.
            </h2>
            <a href="tel:+358503264439" style={{
              display: "inline-block", marginTop: 28,
              fontFamily: serif,
              fontSize: "clamp(36px, 9vw, 56px)",
              color: inkAccent, textDecoration: "none",
              minHeight: 56,
            }}>
              050 326 4439
            </a>
            <div style={{ marginTop: 14, fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", color: "#5e5a52", lineHeight: 1.5 }}>
              Ma–Pe 7–18 · WhatsApp
            </div>
          </div>
          <div>
            {[
              ["Sähköposti", "jonne@linesystems.fi"],
              ["Toimipiste", "Vilkkutie 3 A 15, 40320 Jyväskylä"],
              ["Toimitus", "FI · SE · NO · DK"],
              ["Y-tunnus", "3616448-8"],
            ].map(([k, v], i) => (
              <div key={i} style={{
                padding: "20px 0", borderTop: `1px solid ${accent}40`,
                display: "grid",
                gridTemplateColumns: rv(vp, "1fr", "1fr 2fr", "1fr 2fr"),
                gap: rv(vp, 6, 24, 24),
              }}>
                <div style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "#5e5a52" }}>{k}</div>
                <div style={{ fontFamily: serif, fontSize: rv(vp, 18, 20, 22), color: "#1A1916", wordBreak: "break-word" }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{
        padding: `${rv(vp, 28, 32, 40)}px ${sectionPadH}px`,
        borderTop: `1px solid ${accent}40`,
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16,
      }}>
        <Wordmark accent={accent} color="#1A1916" size={24} />
        <LanguagePill accent={inkAccent} color="#1A1916" inactiveColor="#5e5a52" active="FI" />
        <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#5e5a52", flex: vp.isMobile ? "1 1 100%" : "0 1 auto", textAlign: vp.isMobile ? "left" : "right" }}>© 2026 Line Systems Oy</div>
      </footer>
    </div>
  );
}

window.HomepageC = HomepageC;
