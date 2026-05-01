/* global React, CinemaPlate, Wordmark, LSMark, ReliningAnimation, PartnerMarquee, StatTicker, HeroVideo, LanguagePill, useViewport, rv */

// Variation A — "Cinematic premium" (B2B reseller + training)
// Line Systems Oy: distributes pipe-relining materials & equipment to
// contractors across the Nordics, plus runs hands-on training courses.
// Webshop launching summer 2026.
//
// forceDesktop: portfolio thumbnails render this component at native 1440 width
// then CSS-scale it down. Without forceDesktop the page would detect the real
// (small) viewport and render the mobile layout inside a desktop-sized
// container — looking bizarre in the thumbnail.

function HomepageA({
  accent = "#C9A572",
  density = "spacious",
  heroLayout = "video",
  forceDesktop = false
}) {
  const realVp = useViewport();
  const vp = forceDesktop ? {
    width: 1440,
    isMobile: false,
    isTablet: false,
    isDesktop: true
  } : realVp;
  const pad = density === "dense" ? 64 : density === "spacious" ? 120 : 88;
  const sectionPadV = rv(vp, Math.round(pad * 0.55), Math.round(pad * 0.8), pad);
  const sectionPadH = rv(vp, 20, 36, 56);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#1a191e",
      color: "#EDE6D6",
      fontFamily: "'Inter', system-ui, sans-serif",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      display: "flex",
      justifyContent: vp.isMobile ? "flex-end" : "space-between",
      alignItems: "center",
      gap: 16,
      padding: `${rv(vp, 20, 28, 32)}px ${sectionPadH}px`
    }
  }, !vp.isMobile && /*#__PURE__*/React.createElement(Wordmark, {
    accent: accent,
    size: rv(vp, 26, 30, 32)
  }), !vp.isMobile && /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: vp.isTablet ? 24 : 40,
      fontSize: 12,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      fontWeight: 500
    }
  }, (vp.isTablet ? ["Tuotteet", "Koulutus", "Yhteys"] : ["Tuotteet", "Menetelmä", "Koulutus", "Kumppanit", "Yhteys"]).map(x => /*#__PURE__*/React.createElement("a", {
    key: x,
    href: "#",
    style: {
      color: "#EDE6D6",
      textDecoration: "none",
      opacity: 0.85
    }
  }, x))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: rv(vp, 12, 16, 20),
      alignItems: "center"
    }
  }, !vp.isMobile && /*#__PURE__*/React.createElement(LanguagePill, {
    accent: accent,
    active: "FI"
  }), /*#__PURE__*/React.createElement("a", {
    href: "tel:+358503264439",
    style: {
      padding: "12px 20px",
      border: `1px solid ${accent}`,
      color: accent,
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      textDecoration: "none",
      minHeight: 44,
      display: "inline-flex",
      alignItems: "center"
    }
  }, "Soita \u2192"))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      height: rv(vp, 640, 760, 880),
      width: "100%"
    }
  }, heroLayout === "video" && /*#__PURE__*/React.createElement(HeroVideo, {
    videoSrc: "https://ihcirdgmyzuzxyit.public.blob.vercel-storage.com/videos/polinvent_mainpage_teaser.mp4",
    useVideo: true,
    accent: accent,
    overlay: 0.55,
    label: "POLINVENT \xB7 INVERSION DEMO"
  }), heroLayout === "image" && /*#__PURE__*/React.createElement(CinemaPlate, {
    src: "assets/van-bronze-front-glossy.jpg",
    focal: "50% 55%",
    overlay: 0.55,
    accent: accent
  }), heroLayout === "logo" && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(circle at 50% 50%, #2a2218, #16151a 70%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: "scale(4)"
    }
  }, /*#__PURE__*/React.createElement(LSMark, {
    size: 120,
    accent: accent,
    dark: "#1a1a1c"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: `0 ${sectionPadH}px ${rv(vp, 40, 60, 80)}px`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      marginBottom: rv(vp, 20, 26, 32),
      fontSize: 11,
      letterSpacing: "0.32em",
      textTransform: "uppercase",
      color: accent,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 1,
      background: accent
    }
  }), /*#__PURE__*/React.createElement("span", null, "Sukitustarvikkeet \xA0\xB7\xA0 Pipe relining materials & equipment")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 300,
      fontSize: "clamp(56px, 13vw, 132px)",
      lineHeight: 0.92,
      letterSpacing: "-0.02em",
      margin: 0,
      color: "#F4EEDF"
    }
  }, "Materiaalit, laitteet", /*#__PURE__*/React.createElement("br", null), "ja ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: accent
    }
  }, "osaaminen.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: rv(vp, 24, 30, 36),
      fontSize: rv(vp, 16, 16, 17),
      lineHeight: 1.6,
      maxWidth: 560,
      color: "#c9c2b6"
    }
  }, "Line Systems toimittaa sukitusalan ammattilaisille materiaalit, laitteet ja koulutuksen \u2014 yhdest\xE4 paikasta. Sanikomin, Bodusin ja Suomen Sukitustarvikkeen tuotteet, suomalainen varasto, pohjoismainen toimitus."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: rv(vp, 28, 36, 44),
      display: "flex",
      gap: rv(vp, 14, 18, 20),
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+358503264439",
    style: {
      padding: rv(vp, "16px 24px", "18px 30px", "20px 36px"),
      background: accent,
      color: "#0B0B0C",
      fontSize: 12,
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      fontWeight: 600,
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      minHeight: 48
    }
  }, "Soita Jonnelle ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "#shop",
    style: {
      padding: "16px 0",
      color: "#EDE6D6",
      fontSize: 12,
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      textDecoration: "none",
      borderBottom: "1px solid rgba(237,230,214,0.3)",
      minHeight: 48,
      display: "inline-flex",
      alignItems: "center"
    }
  }, "Verkkokauppa avautuu \u2192"))), !vp.isMobile && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: sectionPadH,
      bottom: rv(vp, 40, 60, 80),
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: "0.32em",
      textTransform: "uppercase",
      color: "#9a948a",
      marginBottom: 6
    }
  }, "Est. 2026 \u2014 Jyv\xE4skyl\xE4, Finland \xB7 Nordics"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 28,
      fontStyle: "italic",
      color: accent
    }
  }, "n\xBA 001"))), !vp.isMobile && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: sectionPadH,
      bottom: 36,
      fontSize: 10,
      letterSpacing: "0.32em",
      textTransform: "uppercase",
      color: "#9a948a",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 1,
      height: 28,
      background: accent,
      animation: "ls-scrollline 2.4s ease-in-out infinite"
    }
  }), "Selaa")), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: `${sectionPadV}px ${sectionPadH}px`,
      borderBottom: "1px solid rgba(237,230,214,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: rv(vp, "1fr", "1fr", "1fr 2fr"),
      gap: rv(vp, 32, 56, 80),
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "0.32em",
      textTransform: "uppercase",
      color: accent,
      paddingTop: vp.isMobile ? 0 : 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 24,
      height: 1,
      background: accent,
      marginRight: 16,
      verticalAlign: "middle"
    }
  }), "Mit\xE4 teemme"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 300,
      fontSize: "clamp(28px, 5.5vw, 54px)",
      lineHeight: 1.15,
      margin: 0,
      color: "#F4EEDF",
      textWrap: "balance"
    }
  }, "Kolme asiaa, joiden ymp\xE4rille ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: accent
    }
  }, "kaikki rakentuu"), ": materiaalit, joihin urakoitsija voi luottaa, laitteet jotka kest\xE4v\xE4t ty\xF6maan, ja koulutus joka tekee niist\xE4 tuottavaa ty\xF6t\xE4."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: rv(vp, 36, 44, 56),
      display: "grid",
      gridTemplateColumns: rv(vp, "1fr", "repeat(3, 1fr)", "repeat(3, 1fr)"),
      gap: rv(vp, 24, 32, 48)
    }
  }, [["Tarvikkeet", "Sukat, hartsit, kalibrointiletkut, jyrsinpäät — varastosta tai tilauksesta."], ["Laitteet", "Höyrykattilat, kompressorit, kamerat, robotit. Polinvent, Picote, iPEK."], ["Koulutus", "Sertifioidut kurssit ja työmaaopastus. Nopeammin tuottavaan työhön."]].map(([h, b]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      color: accent,
      marginBottom: 14
    }
  }, "\u2014 ", h), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: "#c9c2b6"
    }
  }, b))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: `${sectionPadV}px ${sectionPadH}px`,
      borderBottom: "1px solid rgba(237,230,214,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: vp.isMobile ? "flex-start" : "flex-end",
      marginBottom: rv(vp, 36, 48, 64),
      flexDirection: vp.isMobile ? "column" : "row",
      gap: vp.isMobile ? 24 : 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "0.32em",
      textTransform: "uppercase",
      color: accent,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 24,
      height: 1,
      background: accent,
      marginRight: 16,
      verticalAlign: "middle"
    }
  }), "Tuotteet"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 300,
      fontSize: "clamp(40px, 9vw, 88px)",
      lineHeight: 0.95,
      margin: 0,
      color: "#F4EEDF",
      letterSpacing: "-0.01em"
    }
  }, "Valikoima", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      color: accent
    }
  }, "ammattilaiselle."))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 360,
      fontSize: 14,
      lineHeight: 1.65,
      color: "#9a948a"
    }
  }, "Yli 300 nimikett\xE4 urakoitsijan arkeen \u2014 valmistajien alkuper\xE4istuotteita, CE-merkittyj\xE4 ja sertifioituja, dokumentaatio mukana.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: rv(vp, "1fr", "repeat(2, 1fr)", "repeat(4, 1fr)"),
      gap: rv(vp, 16, 20, 24)
    }
  }, [{
    code: "01",
    title: "Sukat & sukkamateriaalit",
    count: "85 nimikettä",
    brands: "Sanikom · Bodus"
  }, {
    code: "02",
    title: "Hartsit & kovetteet",
    count: "32 nimikettä",
    brands: "Sanikom EX-sarja"
  }, {
    code: "03",
    title: "Höyrykovetus & inversiorummut",
    count: "14 yksikköä",
    brands: "Sanikom"
  }, {
    code: "04",
    title: "Metroliner DN100–400",
    count: "12 mallia",
    brands: "Bodus"
  }, {
    code: "05",
    title: "TV-kuvaus & raportointi",
    count: "22 nimikettä",
    brands: "Bodus"
  }, {
    code: "06",
    title: "Painepesu & putkenavaus",
    count: "26 nimikettä",
    brands: "Bodus"
  }, {
    code: "07",
    title: "Kalibrointiletkut",
    count: "40 kokoa",
    brands: "Sanikom · Bodus"
  }, {
    code: "08",
    title: "R-Case & työkalut",
    count: "60+ nimikettä",
    brands: "Suomen Sukitustarvike"
  }].map((p, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      background: "#1f1e23",
      border: "1px solid rgba(237,230,214,0.08)",
      padding: rv(vp, 22, 26, 28),
      textDecoration: "none",
      color: "#EDE6D6",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: 200,
      position: "relative",
      transition: "border-color 0.2s"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11,
      color: accent,
      letterSpacing: "0.16em",
      marginBottom: 16
    }
  }, p.code), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: rv(vp, 22, 24, 26),
      color: "#F4EEDF",
      lineHeight: 1.15,
      marginBottom: 12
    }
  }, p.title)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#9a948a",
      marginBottom: 6
    }
  }, p.count), p.brands && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: accent,
      letterSpacing: "0.04em"
    }
  }, p.brands)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 22,
      bottom: 22,
      color: accent,
      fontSize: 16
    }
  }, "\u2192"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: `${sectionPadV}px ${sectionPadH}px`,
      borderBottom: "1px solid rgba(237,230,214,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: rv(vp, "1fr", "1fr", "1fr 1fr"),
      gap: rv(vp, 32, 56, 80),
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "0.32em",
      textTransform: "uppercase",
      color: accent,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 24,
      height: 1,
      background: accent,
      marginRight: 16,
      verticalAlign: "middle"
    }
  }), "Koulutus"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 300,
      fontSize: "clamp(36px, 8vw, 76px)",
      lineHeight: 1,
      margin: 0,
      color: "#F4EEDF"
    }
  }, "Hyv\xE4 tuote", /*#__PURE__*/React.createElement("br", null), "tarvitsee ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: accent
    }
  }, "hyv\xE4n tekij\xE4n.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 28,
      fontSize: 16,
      lineHeight: 1.7,
      color: "#c9c2b6",
      maxWidth: 460
    }
  }, "J\xE4rjest\xE4mme k\xE4yt\xE4nn\xF6nl\xE4heisi\xE4 kursseja sukituksen menetelmist\xE4 \u2014 pohjustuksesta inversioon ja kovetukseen. Yksi-p\xE4iv\xE4isist\xE4 perehdytyksist\xE4 monip\xE4iv\xE4isiin sertifiointikursseihin. Voidaan toteuttaa Jyv\xE4skyl\xE4ss\xE4 tai asiakkaan luona."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, [["Perehdytys", "1 pv", "Sanikomin tuotteet & työturva"], ["Sukituskurssi", "3 pv", "Inversiomenetelmä, kovetus, jälkitarkastus"], ["Metroliner-asennus", "2 pv", "Bodusin DN100–400 kotitalouskaivot"], ["Työmaakäynti", "0,5 pv", "Asiakkaan kohteessa, ongelmanratkaisu"]].map(([h, d, b], i) => vp.isMobile ? /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "18px 0",
      borderTop: "1px solid rgba(237,230,214,0.12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 22,
      color: "#F4EEDF"
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 12,
      color: accent,
      letterSpacing: "0.12em",
      flexShrink: 0
    }
  }, d)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 13,
      color: "#9a948a"
    }
  }, b)) : /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto 2fr auto",
      gap: 24,
      alignItems: "center",
      padding: "22px 0",
      borderTop: "1px solid rgba(237,230,214,0.12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 24,
      color: "#F4EEDF"
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 12,
      color: accent,
      letterSpacing: "0.12em"
    }
  }, d), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#9a948a"
    }
  }, b), /*#__PURE__*/React.createElement("div", {
    style: {
      color: accent,
      fontSize: 16
    }
  }, "\u2192"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: rv(vp, 360, 540, 720),
      order: vp.isMobile ? -1 : 0
    }
  }, /*#__PURE__*/React.createElement(CinemaPlate, {
    src: "assets/founder-hq-van.jpg",
    focal: "45% 55%",
    overlay: 0.2,
    accent: accent,
    kenBurns: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: rv(vp, 16, 24, 32),
      bottom: rv(vp, 16, 24, 32),
      right: rv(vp, 16, 24, 32),
      padding: rv(vp, 18, 22, 28),
      background: "rgba(26,25,30,0.85)",
      backdropFilter: "blur(8px)",
      borderLeft: `2px solid ${accent}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      color: accent,
      marginBottom: 8
    }
  }, "Kouluttaja"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: rv(vp, 20, 24, 28),
      color: "#F4EEDF",
      lineHeight: 1.25
    }
  }, "Yli 12 vuotta kent\xE4ll\xE4 \u2014 sama mies opettaa."))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: `${sectionPadV}px 0`,
      borderBottom: "1px solid rgba(237,230,214,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `0 ${sectionPadH}px`,
      marginBottom: rv(vp, 36, 48, 56)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "0.32em",
      textTransform: "uppercase",
      color: accent,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 24,
      height: 1,
      background: accent,
      marginRight: 16,
      verticalAlign: "middle"
    }
  }), "Kumppanit"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 300,
      fontSize: "clamp(36px, 8vw, 76px)",
      lineHeight: 1,
      margin: 0,
      color: "#F4EEDF"
    }
  }, "Valmistajat ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: accent
    }
  }, "joihin luotamme."))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `0 ${sectionPadH}px`,
      display: "grid",
      gridTemplateColumns: rv(vp, "1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"),
      gap: 1,
      background: "rgba(237,230,214,0.08)",
      border: "1px solid rgba(237,230,214,0.08)",
      marginBottom: 32
    }
  }, [{
    name: "Sanikom",
    country: "SI · Slovenia",
    focus: "Inversiorummut, höyrykattilat, kyllästyspöydät, EX-sarjan epoksihartsit, silikaattihartsi 3P W01, päälinja- ja pistesukat."
  }, {
    name: "Bodus",
    country: "CH · Sveitsi",
    focus: "Metroliner® DN 100–400 kotitalouskaivojen sukitukseen, painepesu- ja TV-kuvauslaitteet, tiiviyskoetuslaitteet, kalustosaneerausvaunut."
  }, {
    name: "Suomen Sukitustarvike",
    country: "FI · Vantaa",
    focus: "Kotimainen tukku — sukitustarvikkeet, R-Case-työkalu, sertifiointipalvelut, 24/7 myymälä, samana päivänä työmaalle."
  }].map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "#1a191e",
      padding: rv(vp, 24, 30, 36),
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10,
      color: "#a8a59c",
      letterSpacing: "0.18em",
      marginBottom: 18
    }
  }, p.country), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: rv(vp, 28, 32, 36),
      color: "#F4EEDF",
      marginBottom: 14,
      letterSpacing: "-0.01em"
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.65,
      color: "#c9c2b6"
    }
  }, p.focus)))), /*#__PURE__*/React.createElement(PartnerMarquee, {
    accent: accent,
    items: ["Virallinen jälleenmyyjä", "Authorized distributor", "Auktoriserad återförsäljare", "Autoriseret distributør", "Autorisert distributør"]
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: `${sectionPadV}px ${sectionPadH}px`,
      borderBottom: "1px solid rgba(237,230,214,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: rv(vp, "1fr", "1fr", "5fr 4fr"),
      gap: rv(vp, 32, 56, 80),
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "0.32em",
      textTransform: "uppercase",
      color: accent,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 24,
      height: 1,
      background: accent,
      marginRight: 16,
      verticalAlign: "middle"
    }
  }), "Tekij\xE4"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 300,
      fontStyle: "italic",
      fontSize: "clamp(24px, 4.5vw, 44px)",
      lineHeight: 1.25,
      color: "#F4EEDF",
      margin: 0,
      textWrap: "balance"
    }
  }, "\"Yli kymmenen vuotta sukitusta kent\xE4ll\xE4 opetti, mist\xE4 tarvikkeesta urakoitsija oikeasti v\xE4litt\xE4\xE4. Nyt myyn niit\xE4 \u2014 ja opetan, miten niit\xE4 k\xE4ytet\xE4\xE4n. Soita, niin jutellaan.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: "flex",
      alignItems: "center",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 1,
      background: accent
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "#F4EEDF",
      fontWeight: 600
    }
  }, "Jonne Parhiala"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "#9a948a",
      marginTop: 4
    }
  }, "Perustaja, Line Systems Oy"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: rv(vp, 36, 44, 48),
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: rv(vp, 14, 18, 24)
    }
  }, [["12+ v", "alalla"], ["3", "valmistajakumppania"], ["4", "pohjoismaata"]].map(([n, l], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: `1px solid ${accent}`,
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: rv(vp, 28, 36, 44),
      color: accent,
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "#9a948a",
      marginTop: 8,
      lineHeight: 1.4
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "4/5",
      order: vp.isMobile ? -1 : 0
    }
  }, /*#__PURE__*/React.createElement(CinemaPlate, {
    src: "assets/founder-portrait.jpg",
    focal: "50% 30%",
    overlay: 0.15,
    kenBurns: false,
    accent: accent
  })))), /*#__PURE__*/React.createElement("section", {
    id: "shop",
    style: {
      padding: `${sectionPadV}px ${sectionPadH}px`,
      position: "relative",
      overflow: "hidden",
      borderBottom: "1px solid rgba(237,230,214,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: `radial-gradient(circle at 80% 50%, ${accent}15, transparent 60%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: rv(vp, "1fr", "1fr", "1fr 1fr"),
      gap: rv(vp, 36, 56, 80),
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-block",
      padding: "8px 14px",
      border: `1px solid ${accent}`,
      color: accent,
      fontSize: 10,
      letterSpacing: "0.32em",
      textTransform: "uppercase",
      marginBottom: 28
    }
  }, "Avautuu kes\xE4ll\xE4 2026"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 300,
      fontSize: "clamp(40px, 10vw, 96px)",
      lineHeight: 0.95,
      margin: 0,
      color: "#F4EEDF",
      letterSpacing: "-0.02em"
    }
  }, "Verkkokauppa", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      color: accent
    }
  }, "ammattilaisille.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 28,
      fontSize: rv(vp, 16, 16, 17),
      lineHeight: 1.65,
      color: "#c9c2b6",
      maxWidth: 480
    }
  }, "Sukat, hartsit, kalvot, jyrsinp\xE4\xE4t ja kalibrointiletkut suoraan tehdaspakkauksesta. Suomalaiset varastot, seuraavan p\xE4iv\xE4n toimitus Suomeen ja 2\u20133 p\xE4iv\xE4\xE4 muualle Pohjoismaihin."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: rv(vp, 14, 18, 24)
    }
  }, [["300+", "nimikettä"], ["1–3 pv", "toimitus"], ["4 maata", "Pohjola"]].map(([n, l], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: `1px solid ${accent}40`,
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: rv(vp, 24, 30, 36),
      color: accent,
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "#9a948a",
      marginTop: 8,
      lineHeight: 1.4
    }
  }, l)))), /*#__PURE__*/React.createElement("form", {
    style: {
      marginTop: 40,
      display: "flex",
      flexWrap: "wrap",
      gap: 0,
      maxWidth: 460,
      borderBottom: `1px solid ${accent}`
    },
    onSubmit: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "firma@osoite.fi",
    inputMode: "email",
    style: {
      flex: "1 1 200px",
      background: "transparent",
      border: 0,
      outline: 0,
      color: "#F4EEDF",
      padding: "16px 0",
      fontSize: 16,
      letterSpacing: "0.04em",
      minWidth: 0
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "transparent",
      border: 0,
      color: accent,
      padding: "16px 0",
      fontSize: 11,
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      cursor: "pointer",
      fontWeight: 600,
      minHeight: 44
    }
  }, "Ilmoita avauksesta \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontSize: 11,
      color: "#7d796f",
      letterSpacing: "0.04em",
      lineHeight: 1.5
    }
  }, "Ei sp\xE4mmi\xE4 \u2014 vain lanseerausilmoitus & ennakkohinnasto kumppaneille.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "1/1",
      background: "#1f1e23",
      border: `1px solid ${accent}30`,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: `repeating-linear-gradient(45deg, transparent 0 30px, ${accent}08 30px 31px)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: rv(vp, 24, 32, 40),
      border: `1px dashed ${accent}40`,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: rv(vp, 18, 24, 28)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(LSMark, {
    size: 28,
    accent: accent
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      color: accent
    }
  }, "SKU 0001 \xB7 Sanikom")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "clamp(32px, 7vw, 64px)",
      color: "#F4EEDF",
      lineHeight: 1
    }
  }, "Sanikom", /*#__PURE__*/React.createElement("br", null), "Sukka ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: accent
    }
  }, "DN150")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#a8a59c",
      marginTop: 16,
      letterSpacing: "0.06em"
    }
  }, "\xD8 100\u2013200 mm \xB7 30 m rulla \xB7 CE-merkitty")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexWrap: "wrap",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      color: "#9a948a"
    }
  }, "Varastosta heti"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: rv(vp, 24, 28, 32),
      color: accent
    }
  }, "\u2014,\u2014\u20AC"))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: `${sectionPadV}px ${sectionPadH}px`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: rv(vp, "1fr", "1fr", "1fr 1fr"),
      gap: rv(vp, 36, 56, 80),
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "0.32em",
      textTransform: "uppercase",
      color: accent,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 24,
      height: 1,
      background: accent,
      marginRight: 16,
      verticalAlign: "middle"
    }
  }), "Yhteys"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 300,
      fontSize: "clamp(56px, 14vw, 132px)",
      lineHeight: 0.9,
      margin: 0,
      color: "#F4EEDF",
      letterSpacing: "-0.02em"
    }
  }, "Soita.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      color: accent
    }
  }, "Vastataan.")), /*#__PURE__*/React.createElement("a", {
    href: "tel:+358503264439",
    style: {
      display: "inline-block",
      marginTop: 32,
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "clamp(36px, 8vw, 56px)",
      color: accent,
      textDecoration: "none",
      letterSpacing: "0.02em",
      minHeight: 56
    }
  }, "050 326 4439"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontSize: 12,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "#9a948a",
      lineHeight: 1.5
    }
  }, "Ma\u2013Pe 7\u201318 \xB7 Soita, viestill\xE4 tai WhatsAppilla")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: vp.isDesktop ? `1px solid ${accent}30` : "none",
      paddingLeft: vp.isDesktop ? 56 : 0,
      paddingTop: vp.isDesktop ? 0 : 8,
      borderTop: vp.isDesktop ? "none" : `1px solid ${accent}30`
    }
  }, [["Sähköposti", "jonne@linesystems.fi", "mailto:jonne@linesystems.fi", "Lähetä sähköpostia osoitteeseen jonne@linesystems.fi"], ["WhatsApp", "050 326 4439", "https://wa.me/358503264439", "Avaa WhatsApp-keskustelu numerolle 050 326 4439"], ["Toimipiste", "Vilkkutie 3 A 15, 40320 Jyväskylä", null, null], ["Toimitusalue", "Suomi · Ruotsi · Norja · Tanska", null, null], ["Y-tunnus", "3616448-8", null, null]].map(([h, v, l, aria], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "20px 0",
      borderBottom: "1px solid rgba(237,230,214,0.12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      color: "#a8a59c",
      marginBottom: 10
    }
  }, h), l ? /*#__PURE__*/React.createElement("a", {
    href: l,
    "aria-label": aria,
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: rv(vp, 20, 24, 26),
      color: "#F4EEDF",
      textDecoration: "none",
      wordBreak: "break-word"
    }
  }, v) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: rv(vp, 20, 24, 26),
      color: "#F4EEDF",
      wordBreak: "break-word"
    }
  }, v)))))), /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: `${rv(vp, 32, 44, 56)}px ${sectionPadH}px`,
      background: "#16151a",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 16,
      borderTop: `1px solid ${accent}30`
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    accent: accent,
    size: 26
  }), /*#__PURE__*/React.createElement(LanguagePill, {
    accent: accent,
    active: "FI"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "#a8a59c",
      flex: vp.isMobile ? "1 1 100%" : "0 1 auto",
      textAlign: vp.isMobile ? "left" : "right",
      marginTop: vp.isMobile ? 4 : 0
    }
  }, "\xA9 2026 Line Systems Oy \xB7 Y 3616448-8 \xB7 Tietosuoja")));
}
window.HomepageA = HomepageA;