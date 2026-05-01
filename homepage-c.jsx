/* global React, CinemaPlate, Wordmark, LSMark, ReliningAnimation, PartnerMarquee, StatTicker, HeroVideo, LanguagePill */

// Variation C — "Editorial calm" (B2B reseller + training)
function HomepageC({ accent = "#C9A572", density = "spacious", heroLayout = "video" }) {
  const pad = density === "dense" ? 80 : density === "spacious" ? 144 : 112;
  const serif = "'Cormorant Garamond', 'Cormorant', serif";
  const sans = "'Inter', system-ui, sans-serif";

  return (
    <div style={{ background: "#F2EEE4", color: "#1A1916", fontFamily: sans, overflow: "hidden" }}>
      <header style={{
        display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center",
        padding: "36px 64px", borderBottom: "1px solid rgba(26,25,22,0.12)",
      }}>
        <Wordmark accent={accent} color="#1A1916" size={30} mono={false} />
        <nav style={{ display: "flex", gap: 36, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 500, justifyContent: "center" }}>
          {["Tuotteet", "Menetelmä", "Koulutus", "Kumppanit", "Yhteys"].map(x => (
            <a key={x} href="#" style={{ color: "#1A1916", textDecoration: "none" }}>{x}</a>
          ))}
        </nav>
        <div style={{ display: "flex", gap: 16, alignItems: "center", justifyContent: "flex-end" }}>
          <LanguagePill accent={accent} color="#1A1916" active="FI" />
          <a href="tel:+358503264439" style={{ padding: "10px 18px", border: `1px solid ${accent}`, color: "#1A1916", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", textDecoration: "none" }}>Soita →</a>
        </div>
      </header>

      <section style={{ padding: `${pad}px 64px ${pad * 0.6}px`, textAlign: "center" }}>
        <div style={{ fontFamily: sans, fontSize: 11, color: accent, letterSpacing: "0.32em", textTransform: "uppercase", marginBottom: 36 }}>
          Esittely · Volume One
        </div>
        <h1 style={{
          fontFamily: serif, fontWeight: 300, fontSize: 168, lineHeight: 0.94, letterSpacing: "-0.02em",
          margin: "0 auto", maxWidth: 1300, color: "#1A1916", textWrap: "balance",
        }}>
          Materiaalit ja menetelmä,<br/>
          joiden ympärillä <em style={{ color: accent }}>työ kasvaa.</em>
        </h1>
        <p style={{ marginTop: 48, fontFamily: serif, fontStyle: "italic", fontSize: 24, lineHeight: 1.5, color: "#5e5a52", maxWidth: 700, margin: "48px auto 0" }}>
          Line Systems on pohjoismainen sukitustarvikkeiden ja -laitteiden
          jälleenmyyjä — ja kouluttaa urakoitsijat käyttämään niitä hyvin.
        </p>
        <div style={{ marginTop: 56, display: "flex", gap: 18, justifyContent: "center", alignItems: "center" }}>
          <a href="tel:+358503264439" style={{ padding: "18px 32px", background: "#1A1916", color: "#F2EEE4", fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", fontWeight: 600, textDecoration: "none" }}>
            Soita Jonnelle →
          </a>
          <a href="#shop" style={{ fontSize: 12, letterSpacing: "0.24em", textTransform: "uppercase", color: "#1A1916", textDecoration: "none", borderBottom: `1px solid ${accent}` }}>
            Verkkokauppa avautuu
          </a>
        </div>
      </section>

      {/* HERO PLATE */}
      <section style={{ padding: "0 64px 0", marginBottom: pad }}>
        <div style={{ position: "relative", height: 640, overflow: "hidden", background: "#0B0B0C" }}>
          {heroLayout === "video"
            ? <HeroVideo videoSrc="https://ihcirdgmyzuzxyit.public.blob.vercel-storage.com/videos/polinvent_mainpage_teaser.mp4" useVideo={true} accent={accent} overlay={0.3} label="POLINVENT · DEMO" />
            : heroLayout === "image"
            ? <CinemaPlate src="assets/founder-hq-van.jpg" focal="45% 55%" overlay={0.25} accent={accent} />
            : <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, #1a1612, #050505 70%)", display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ transform: "scale(4)" }}><LSMark size={120} accent={accent} dark="#1a1a1c" /></div></div>}
          <div style={{ position: "absolute", left: 32, bottom: 32, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#F2EEE4", letterSpacing: "0.18em" }}>
            PLATE 001 — INVERSION (POLINVENT)
          </div>
        </div>
      </section>

      {/* PROSE — what we do */}
      <section style={{ padding: `0 64px ${pad}px`, maxWidth: 980, margin: "0 auto" }}>
        <div style={{ fontFamily: sans, fontSize: 11, color: accent, letterSpacing: "0.32em", textTransform: "uppercase", marginBottom: 32, textAlign: "center" }}>Mitä teemme</div>
        <p style={{ fontFamily: serif, fontWeight: 300, fontSize: 36, lineHeight: 1.45, color: "#1A1916", margin: 0, textWrap: "balance" }}>
          Sukitusalan urakoitsija tarvitsee kolme asiaa: <em style={{ color: accent }}>tarvikkeet
          jotka eivät petä</em>, laitteet jotka kestävät arjen, ja koulutuksen joka
          tekee menetelmästä tuottavaa työtä.
          <br/><br/>
          Line Systems toimittaa kaikki kolme. Polinventin, Picoten, Brawolinerin
          ja iPEKin tuotteet suomalaisesta varastosta — ja saman kentällä
          oppineen ihmisen, joka on opiskellut työn parikymmentä vuotta.
        </p>
      </section>

      {/* PRODUCTS — editorial */}
      <section style={{ padding: `${pad}px 64px`, background: "#EAE4D5", borderTop: "1px solid rgba(26,25,22,0.12)", borderBottom: "1px solid rgba(26,25,22,0.12)" }}>
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <div style={{ fontFamily: sans, fontSize: 11, color: accent, letterSpacing: "0.32em", textTransform: "uppercase", marginBottom: 24 }}>Valikoima</div>
          <h2 style={{ fontFamily: serif, fontWeight: 300, fontSize: 96, lineHeight: 1, margin: 0, color: "#1A1916" }}>
            Yli kolmesataa nimikettä — <em style={{ color: accent }}>kuratoidusti.</em>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 64, maxWidth: 1200, margin: "0 auto" }}>
          {[
            ["Sukat & sukkamateriaalit", "Polinvent · Brawoliner", "Inversio- ja vetosukat halkaisijoille DN50–DN500. CE-merkityt, jäljitettävät erät."],
            ["Hartsit & kovetteet", "Polinvent · Resinit", "Epoksit ja styreenivapaat polyesterit, lyhyet ja pitkät potlife’it. Kylmissä keloissa varastosta."],
            ["Höyry- ja UV-kovetus", "Polinvent · Lateral Repairs", "Höyrykattilat, UV-junat, kalibrointiletkut. Yksiköt vuokraan tai myyntiin."],
            ["TV-kuvaus & raportointi", "iPEK · Rovion", "Putkikamerat, kruunut, ohjelmistot. Tuemme suomalaista raportointiketjua."],
            ["Robotit & jyrsintä", "Picote Solutions", "Suomalainen jyrsintekniikka — haaroitusten avaus, vanhojen sukkien purku."],
            ["Suojavarusteet & työkalut", "Mixed", "Hengityssuojaimet, suojavaatteet, mittarit. Päivittäisen työn perusvarusteet."],
          ].map(([h, brand, body], i) => (
            <article key={i} style={{ borderTop: `1px solid ${accent}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "20px 0 24px" }}>
                <div style={{ fontFamily: serif, fontStyle: "italic", fontSize: 18, color: accent }}>Capítulo {i + 1}</div>
                <div style={{ fontFamily: sans, fontSize: 10, color: "#5e5a52", letterSpacing: "0.18em", textTransform: "uppercase" }}>{brand}</div>
              </div>
              <h3 style={{ fontFamily: serif, fontWeight: 300, fontSize: 44, lineHeight: 1.05, color: "#1A1916", margin: 0, letterSpacing: "-0.01em" }}>
                {h}
              </h3>
              <p style={{ marginTop: 18, fontSize: 15, lineHeight: 1.7, color: "#3a3833" }}>{body}</p>
              <a href="#" style={{ display: "inline-block", marginTop: 18, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: accent, textDecoration: "none", borderBottom: `1px solid ${accent}` }}>
                Selaa →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* TRAINING */}
      <section style={{ padding: `${pad}px 64px`, maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ fontFamily: sans, fontSize: 11, color: accent, letterSpacing: "0.32em", textTransform: "uppercase", marginBottom: 28 }}>Koulutus</div>
            <h2 style={{ fontFamily: serif, fontWeight: 300, fontSize: 84, lineHeight: 1, margin: 0, color: "#1A1916" }}>
              Hyvä tarvike<br/>
              <em style={{ color: accent }}>tarvitsee hyvän tekijän.</em>
            </h2>
            <p style={{ marginTop: 28, fontFamily: serif, fontStyle: "italic", fontSize: 22, lineHeight: 1.55, color: "#3a3833" }}>
              Yhden päivän perehdytyksistä monipäiväisiin sertifiointikursseihin —
              kentällä opetellut menetelmät, ei luentosaleista kopioidut.
            </p>
          </div>
          <div>
            {[
              ["Perehdytys", "1 pv", "Polinventin tuotteet & turva"],
              ["Sukituskurssi", "3 pv", "Inversio, kovetus, jälkitarkastus"],
              ["Robottityöt", "2 pv", "Picote-jyrsintä, haaroitusten avaus"],
              ["Työmaakäynti", "0,5 pv", "Asiakkaan kohteessa"],
            ].map(([h, d, b], i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "1fr auto", gap: 20, alignItems: "baseline",
                padding: "24px 0", borderTop: `1px solid ${accent}40`,
              }}>
                <div>
                  <div style={{ fontFamily: serif, fontSize: 28, color: "#1A1916" }}>{h}</div>
                  <div style={{ fontSize: 13, color: "#5e5a52", marginTop: 4 }}>{b}</div>
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: accent, letterSpacing: "0.12em" }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section style={{ padding: `${pad}px 64px`, background: "#1A1916", color: "#F2EEE4" }}>
        <div style={{ display: "grid", gridTemplateColumns: "5fr 4fr", gap: 80, alignItems: "center", maxWidth: 1280, margin: "0 auto" }}>
          <div>
            <div style={{ fontFamily: sans, fontSize: 11, color: accent, letterSpacing: "0.32em", textTransform: "uppercase", marginBottom: 32 }}>Tekijä</div>
            <p style={{ fontFamily: serif, fontWeight: 300, fontStyle: "italic", fontSize: 42, lineHeight: 1.3, margin: 0, color: "#F2EEE4", textWrap: "balance" }}>
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
          <div style={{ position: "relative", aspectRatio: "4/5" }}>
            <CinemaPlate src="assets/founder-portrait.jpg" focal="50% 30%" overlay={0.1} kenBurns={false} accent={accent} />
          </div>
        </div>
      </section>

      {/* WEBSHOP TEASER */}
      <section id="shop" style={{ padding: `${pad}px 64px`, textAlign: "center", maxWidth: 980, margin: "0 auto" }}>
        <div style={{ fontFamily: sans, fontSize: 11, color: accent, letterSpacing: "0.32em", textTransform: "uppercase", marginBottom: 28 }}>Verkkokauppa</div>
        <h2 style={{ fontFamily: serif, fontWeight: 300, fontSize: 108, lineHeight: 0.95, margin: 0, color: "#1A1916", textWrap: "balance" }}>
          Avautuu <em style={{ color: accent }}>kesällä 2026.</em>
        </h2>
        <p style={{ marginTop: 28, fontFamily: serif, fontStyle: "italic", fontSize: 22, color: "#3a3833", lineHeight: 1.5, maxWidth: 640, margin: "28px auto 0" }}>
          Suomalainen verkkokauppa, koko Pohjola toimitusalueena.
          Liity ennakkolistalle.
        </p>
        <form style={{ marginTop: 44, display: "flex", maxWidth: 480, margin: "44px auto 0", borderBottom: `1px solid ${accent}` }}>
          <input placeholder="firma@osoite.fi" style={{ flex: 1, background: "transparent", border: 0, outline: 0, padding: "14px 0", fontSize: 16, color: "#1A1916" }} />
          <button style={{ background: "transparent", border: 0, color: accent, padding: "14px 0", fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", fontWeight: 600, cursor: "pointer" }}>Liity →</button>
        </form>
      </section>

      {/* CONTACT */}
      <section style={{ padding: `${pad}px 64px`, borderTop: `1px solid ${accent}40` }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, maxWidth: 1280, margin: "0 auto", alignItems: "center" }}>
          <div>
            <div style={{ fontFamily: sans, fontSize: 11, color: accent, letterSpacing: "0.32em", textTransform: "uppercase", marginBottom: 28 }}>Yhteys</div>
            <h2 style={{ fontFamily: serif, fontWeight: 300, fontSize: 132, lineHeight: 0.92, margin: 0, color: "#1A1916", letterSpacing: "-0.02em" }}>
              Soita.
            </h2>
            <a href="tel:+358503264439" style={{ display: "inline-block", marginTop: 28, fontFamily: serif, fontSize: 56, color: accent, textDecoration: "none" }}>
              050 326 4439
            </a>
            <div style={{ marginTop: 12, fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", color: "#5e5a52" }}>
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
              <div key={i} style={{ padding: "20px 0", borderTop: `1px solid ${accent}40`, display: "grid", gridTemplateColumns: "1fr 2fr", gap: 24 }}>
                <div style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "#5e5a52" }}>{k}</div>
                <div style={{ fontFamily: serif, fontSize: 22, color: "#1A1916" }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ padding: "40px 64px", borderTop: `1px solid ${accent}40`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Wordmark accent={accent} color="#1A1916" size={24} />
        <LanguagePill accent={accent} color="#1A1916" active="FI" />
        <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#5e5a52" }}>© 2026 Line Systems Oy</div>
      </footer>
    </div>
  );
}

window.HomepageC = HomepageC;
