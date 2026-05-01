/* global React, Wordmark, LSMark, LanguagePill, HomepageA, HomepageB, HomepageC, useViewport, rv */

// Portfolio landing — three thumbnails, click to open the full version.
// Uses hash routing (#a, #b, #c) handled by the host page.

const VARIATIONS = [{
  id: "a",
  letter: "A",
  title: "Cinematic Premium",
  eyebrow: "Full-bleed video · Cormorant display · jewelry-bronze",
  blurb: "Polinventin rauhallisuus, mutta viimeistellympi. Iso typografia, pronssi käytetty kuin koru.",
  height: 5400,
  component: () => HomepageA
}, {
  id: "b",
  letter: "B",
  title: "Industrial Precision",
  eyebrow: "Engineering doc · data tables · monospace detail",
  blurb: "Insinöörilehden estetiikka — datataulukot, mittakaaviot, projektirekisteri. Tekninen selkeys.",
  height: 5200,
  component: () => HomepageB
}, {
  id: "c",
  letter: "C",
  title: "Editorial Calm",
  eyebrow: "Long-form magazine · numbered chapters · serif rhythm",
  blurb: "Pitkän muodon \"lehti\" — luvut I–V, anfangit, päiväkirjamainen referenssilista.",
  height: 6000,
  component: () => HomepageC
}];
function PortfolioPage({
  accent = "#C9A572",
  density = "spacious",
  onSelect
}) {
  const vp = useViewport();
  const hPad = rv(vp, 20, 36, 56);
  const heroPadTop = rv(vp, 60, 80, 100);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "#1a191e",
      color: "#EDE6D6",
      fontFamily: "'Inter', system-ui, sans-serif",
      overflowX: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "fixed",
      inset: 0,
      pointerEvents: "none",
      zIndex: 0,
      background: `radial-gradient(ellipse at 80% -10%, ${accent}10, transparent 50%), radial-gradient(ellipse at 0% 110%, ${accent}08, transparent 55%)`
    }
  }), /*#__PURE__*/React.createElement("header", {
    style: {
      position: "relative",
      zIndex: 2,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 16,
      padding: `${rv(vp, 20, 28, 32)}px ${hPad}px`
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    accent: accent,
    size: rv(vp, 26, 30, 32)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: rv(vp, 12, 18, 24),
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
      fontSize: 12,
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
      zIndex: 1,
      padding: `${heroPadTop}px ${hPad}px ${rv(vp, 32, 48, 60)}px`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "0.32em",
      textTransform: "uppercase",
      color: accent,
      marginBottom: rv(vp, 20, 24, 28),
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 32,
      height: 1,
      background: accent
    }
  }), /*#__PURE__*/React.createElement("span", null, "Verkkosivuehdotus \xA0\xB7\xA0 Three directions for review")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 300,
      fontSize: "clamp(56px, 12vw, 124px)",
      lineHeight: 0.95,
      letterSpacing: "-0.02em",
      margin: 0,
      color: "#F4EEDF"
    }
  }, "Kolme suuntaa.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: accent
    }
  }, "Yksi tarina.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: rv(vp, 24, 30, 36),
      fontSize: rv(vp, 16, 16, 17),
      lineHeight: 1.65,
      color: "#c9c2b6",
      maxWidth: 640
    }
  }, "Klikkaa pikkukuvaa avataksesi koko sivu. Jokainen variaatio kantaa saman br\xE4ndin \u2014 vain rytmi, typografia ja s\xE4vy vaihtuu. Valitse, mik\xE4 tuntuu oikealta \u2014 tai sekoita parhaat palaset.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: rv(vp, 32, 44, 56),
      display: "flex",
      gap: rv(vp, 10, 24, 32),
      alignItems: "center",
      flexWrap: "wrap",
      fontSize: 11,
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      color: "#a8a59c"
    }
  }, /*#__PURE__*/React.createElement("span", null, VARIATIONS.length, " variaatiota"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 1,
      background: `${accent}80`
    }
  }), /*#__PURE__*/React.createElement("span", null, "FI \xB7 EN \xB7 SV \xB7 DA \xB7 NO"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 1,
      background: `${accent}80`
    }
  }), /*#__PURE__*/React.createElement("span", null, "Est. 2026 \xB7 Jyv\xE4skyl\xE4"))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      zIndex: 1,
      padding: `${rv(vp, 24, 32, 40)}px ${hPad}px ${rv(vp, 80, 100, 120)}px`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: rv(vp, "1fr", "1fr", "repeat(3, 1fr)"),
      gap: rv(vp, 40, 36, 32)
    }
  }, VARIATIONS.map((v, i) => /*#__PURE__*/React.createElement(PortfolioCard, {
    key: v.id,
    variation: v,
    accent: accent,
    density: density,
    onSelect: onSelect,
    index: i
  })))), /*#__PURE__*/React.createElement("footer", {
    style: {
      position: "relative",
      zIndex: 1,
      padding: `${rv(vp, 28, 34, 40)}px ${hPad}px`,
      borderTop: `1px solid ${accent}30`,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 16,
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "#a8a59c"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 200px",
      minWidth: 0,
      lineHeight: 1.7
    }
  }, "\xA9 2026 Line Systems Oy \xB7 Y 3616448-8 \xB7 Vilkkutie 3 A 15, 40320 Jyv\xE4skyl\xE4"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+358503264439",
    style: {
      color: accent,
      textDecoration: "none",
      minHeight: 32,
      display: "inline-flex",
      alignItems: "center"
    }
  }, "050 326 4439")));
}
function PortfolioCard({
  variation,
  accent,
  density,
  onSelect,
  index
}) {
  const [hover, setHover] = React.useState(false);
  const frameRef = React.useRef(null);
  const [scale, setScale] = React.useState(0.32);
  // Top slice height in source pixels — captures hero + first content section.
  const SLICE = 1820;
  const Comp = variation.component();

  // Match scale to the actual rendered column width so the preview always fills
  // the card without overflow regardless of viewport.
  React.useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / 1440);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("a", {
    href: `#${variation.id}`,
    onClick: e => {
      e.preventDefault();
      onSelect && onSelect(variation.id);
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "block",
      textDecoration: "none",
      color: "inherit",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: frameRef,
    style: {
      position: "relative",
      overflow: "hidden",
      width: "100%",
      aspectRatio: `1440 / ${SLICE}`,
      background: "#1f1e23",
      border: `1px solid ${hover ? accent : "rgba(237,230,214,0.10)"}`,
      boxShadow: hover ? `0 30px 80px rgba(0,0,0,0.55), 0 0 0 1px ${accent}40` : "0 12px 40px rgba(0,0,0,0.35)",
      transform: hover ? "translateY(-6px)" : "translateY(0)",
      transition: "border-color 0.35s, box-shadow 0.35s, transform 0.35s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    inert: "",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: 1440,
      height: SLICE,
      transform: `scale(${scale})`,
      transformOrigin: "top left",
      pointerEvents: "none"
    }
  }, Comp ? /*#__PURE__*/React.createElement(Comp, {
    accent: accent,
    density: density,
    heroLayout: "image",
    forceDesktop: true
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 2,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: 22,
      background: `linear-gradient(180deg, rgba(26,25,30,0.0) 60%, rgba(26,25,30,0.85) 100%)`,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "6px 12px",
      background: "rgba(26,25,30,0.78)",
      backdropFilter: "blur(6px)",
      border: `1px solid ${accent}60`,
      color: accent,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.24em"
    }
  }, "VARIATION \xB7 ", variation.letter), /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: hover ? 1 : 0,
      transform: hover ? "translateY(0)" : "translateY(-8px)",
      transition: "opacity 0.3s, transform 0.3s",
      padding: "8px 14px",
      background: accent,
      color: "#0B0B0C",
      fontSize: 10,
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      fontWeight: 700
    }
  }, "Avaa \u2192")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 16,
      marginBottom: 10,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontStyle: "italic",
      fontSize: "clamp(40px, 10vw, 56px)",
      color: accent,
      lineHeight: 1
    }
  }, variation.letter), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 300,
      fontSize: "clamp(26px, 5.5vw, 36px)",
      color: "#F4EEDF",
      letterSpacing: "-0.01em"
    }
  }, variation.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "#9a948a",
      marginBottom: 14,
      lineHeight: 1.5
    }
  }, variation.eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.65,
      color: "#c9c2b6"
    }
  }, variation.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontSize: 12,
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      color: hover ? accent : "#EDE6D6",
      transition: "color 0.25s",
      minHeight: 44
    }
  }, "Katso koko sivu", /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 1,
      background: hover ? accent : "#EDE6D6",
      transform: hover ? "scaleX(1.4)" : "scaleX(1)",
      transformOrigin: "left",
      transition: "transform 0.3s, background 0.25s"
    }
  }))));
}

// Floating "back to portfolio" pill shown when a homepage is open.
// Compact on mobile (just "← A") so it doesn't collide with the homepage's
// own top-right Soita CTA — we have ~375px of width to share.
function PortfolioBackBar({
  accent = "#C9A572",
  letter,
  title,
  onBack
}) {
  const vp = useViewport();
  if (vp.isMobile) {
    return /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onBack && onBack();
      },
      style: {
        position: "fixed",
        top: 12,
        left: 12,
        zIndex: 1000,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 10px",
        background: "rgba(26,25,30,0.85)",
        backdropFilter: "blur(14px)",
        border: `1px solid ${accent}40`,
        borderRadius: 999,
        fontFamily: "'Inter', system-ui, sans-serif",
        color: "#EDE6D6",
        textDecoration: "none",
        fontSize: 11,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        fontWeight: 600,
        minHeight: 36,
        minWidth: 64
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: accent
      }
    }, "\u2190"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10,
        letterSpacing: "0.24em",
        color: accent,
        padding: "2px 6px",
        border: `1px solid ${accent}60`,
        borderRadius: 3
      }
    }, letter));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      top: 12,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "10px 16px 10px 14px",
      background: "rgba(26,25,30,0.85)",
      backdropFilter: "blur(14px)",
      border: `1px solid ${accent}40`,
      borderRadius: 999,
      fontFamily: "'Inter', system-ui, sans-serif",
      maxWidth: "calc(100vw - 24px)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onBack && onBack();
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      color: "#EDE6D6",
      textDecoration: "none",
      fontSize: 11,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      fontWeight: 600,
      minHeight: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: accent
    }
  }, "\u2190"), "Portfolio"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 16,
      background: "rgba(237,230,214,0.18)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.24em",
      color: accent,
      padding: "3px 8px",
      border: `1px solid ${accent}60`,
      borderRadius: 4,
      flexShrink: 0
    }
  }, letter), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: "0.06em",
      color: "#c9c2b6",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, title)));
}
Object.assign(window, {
  PortfolioPage,
  PortfolioBackBar,
  PORTFOLIO_VARIATIONS: VARIATIONS
});