/* global React */
// Shared brand primitives for Line Systems Oy.
// Reused across the three homepage variations.

const {
  useState,
  useEffect,
  useRef
} = React;

// ─── Viewport hook ──────────────────────────────────────────────────────────
// Buckets: mobile <768, tablet 768–1023, desktop ≥1024. Components branch
// styles on these flags rather than CSS classes (React inline styles win
// specificity, so JS-driven branching is cleaner than !important overrides).
const BP = {
  mobile: 768,
  tablet: 1024
};
function useViewport() {
  const get = () => {
    const w = typeof window !== "undefined" ? window.innerWidth : 1280;
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-vp-w", String(w));
    }
    return {
      width: w,
      isMobile: w < BP.mobile,
      isTablet: w >= BP.mobile && w < BP.tablet,
      isDesktop: w >= BP.tablet
    };
  };
  const [vp, setVp] = useState(get);
  useEffect(() => {
    let raf = 0;
    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setVp(get()));
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);
  return vp;
}

// pickResponsive — pick a value by viewport bucket. Pass either positional
// (mobile, tablet, desktop) or a partial object. Tablet falls back to desktop
// if not provided; mobile falls back to tablet (then desktop).
function rv(vp, mobile, tablet, desktop) {
  if (typeof mobile === "object" && mobile !== null) {
    const o = mobile;
    if (vp.isMobile) return o.mobile ?? o.tablet ?? o.desktop;
    if (vp.isTablet) return o.tablet ?? o.desktop ?? o.mobile;
    return o.desktop ?? o.tablet ?? o.mobile;
  }
  if (vp.isMobile) return mobile;
  if (vp.isTablet) return tablet ?? desktop;
  return desktop ?? tablet ?? mobile;
}

// ─── Logo mark ──────────────────────────────────────────────────────────────
// Recreated from the founder's reference photos: a tall dark blade on the
// left, a shorter gold triangle on the right, sharing a baseline.
function LSMark({
  size = 40,
  accent = "#C9A572",
  dark = "#0B0B0C",
  mono = false
}) {
  const a = mono ? "currentColor" : dark;
  const b = mono ? "currentColor" : accent;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 110",
    width: size,
    height: size * 1.1,
    "aria-label": "Line Systems",
    style: {
      display: "block",
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "42,4 56,74 30,92 24,58",
    fill: a
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "50,48 92,92 46,92",
    fill: b
  }));
}
function Wordmark({
  accent = "#C9A572",
  color = "#EDE6D6",
  size = 36,
  mono = false,
  tracking = "0.34em"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      color
    }
  }, /*#__PURE__*/React.createElement(LSMark, {
    size: size,
    accent: accent,
    mono: mono,
    dark: mono ? "currentColor" : "#0B0B0C"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Cormorant Garamond', 'Cormorant', serif",
      fontWeight: 300,
      letterSpacing: tracking,
      fontSize: size * 0.40,
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      lineHeight: 1
    }
  }, "Line Systems"));
}

// ─── Animated CIPP-relining diagram ─────────────────────────────────────────
// Synthesized "moving image" — a host pipe with the bronze inversion liner
// progressing through it. Used as a process motif on multiple variations.
function ReliningAnimation({
  height = 220,
  accent = "#C9A572",
  paused = false
}) {
  const [t, setT] = useState(0);
  useEffect(() => {
    if (paused) return;
    let raf;
    const start = performance.now();
    const loop = now => {
      setT((now - start) / 5200 % 1);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  // Liner head position 0 → 1 along the pipe.
  const pipeX1 = 40,
    pipeX2 = 760,
    y = height / 2;
  const headX = pipeX1 + (pipeX2 - pipeX1) * t;
  const trailX = pipeX1;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 800 ${height}`,
    width: "100%",
    height: height,
    preserveAspectRatio: "xMidYMid meet",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "hostpipe",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1c1c1e"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.5",
    stopColor: "#2a2a2d"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#101012"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "liner",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: accent,
    stopOpacity: "0.55"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.5",
    stopColor: accent
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: accent,
    stopOpacity: "0.55"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "glow",
    cx: "0.5",
    cy: "0.5",
    r: "0.5"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: accent,
    stopOpacity: "0.7"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: accent,
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("g", {
    opacity: "0.18",
    stroke: "#5a5a5f",
    strokeWidth: "1"
  }, Array.from({
    length: 16
  }).map((_, i) => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: i * 55,
    y1: 0,
    x2: i * 55 - 30,
    y2: height
  }))), /*#__PURE__*/React.createElement("rect", {
    x: pipeX1,
    y: y - 34,
    width: pipeX2 - pipeX1,
    height: 68,
    rx: 6,
    fill: "url(#hostpipe)",
    stroke: "#3a3a3d",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("g", {
    stroke: "#0a0a0a",
    strokeWidth: "1.2",
    opacity: "0.7",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M180 -34 q-4 30 6 50 q-8 14 0 30 M340 -34 q6 24 -4 50 q4 18 -2 32 M520 -34 q-2 22 8 48",
    transform: `translate(0 ${y})`
  })), /*#__PURE__*/React.createElement("rect", {
    x: pipeX1 + 4,
    y: y - 26,
    width: pipeX2 - pipeX1 - 8,
    height: 52,
    rx: 3,
    fill: "#050506"
  }), /*#__PURE__*/React.createElement("rect", {
    x: trailX + 4,
    y: y - 22,
    width: Math.max(0, headX - trailX - 4),
    height: 44,
    rx: 3,
    fill: "url(#liner)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: trailX + 4,
    y: y - 20,
    width: Math.max(0, headX - trailX - 4),
    height: 6,
    rx: 2,
    fill: accent,
    opacity: "0.45"
  }), /*#__PURE__*/React.createElement("g", {
    transform: `translate(${headX} ${y})`
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "0",
    cy: "0",
    rx: "60",
    ry: "28",
    fill: "url(#glow)"
  }), /*#__PURE__*/React.createElement("path", {
    d: `M -8 -22 Q 22 0 -8 22 Z`,
    fill: accent
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "-2",
    cy: "0",
    r: "3",
    fill: "#fff",
    opacity: "0.9"
  })), /*#__PURE__*/React.createElement("rect", {
    x: pipeX1 - 14,
    y: y - 40,
    width: 14,
    height: 80,
    fill: "#0d0d0f",
    stroke: "#2a2a2d"
  }), /*#__PURE__*/React.createElement("rect", {
    x: pipeX2,
    y: y - 40,
    width: 14,
    height: 80,
    fill: "#0d0d0f",
    stroke: "#2a2a2d"
  }), /*#__PURE__*/React.createElement("g", {
    transform: `translate(${pipeX1} ${height - 18})`
  }, [0, 0.25, 0.5, 0.75, 1].map((p, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: p * (pipeX2 - pipeX1),
    cy: "0",
    r: "2",
    fill: t > p - 0.02 ? accent : "#3a3a3d"
  }))));
}

// ─── Looping "video" placeholder ────────────────────────────────────────────
// Subtle Ken-Burns + light pass over a still — stands in for real video the
// founder will shoot. Plays continuously like a hero loop.
function CinemaPlate({
  src,
  height = "100%",
  overlay = 0.45,
  focal = "50% 50%",
  kenBurns = true,
  lightSweep = true,
  accent = "#C9A572"
}) {
  // Build an image-set so browsers that support WebP grab the smaller variant.
  // Falls back to the JPG via the second tuple — older Safari and Firefox <89
  // just use `url(...)` after the image-set call, but every browser we care
  // about has supported image-set since 2021.
  const webp = src.replace(/\.(jpe?g|png)$/i, ".webp");
  const bgImage = webp !== src ? `image-set(url("${webp}") type("image/webp"), url("${src}") type("image/jpeg"))` : `url("${src}")`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height,
      overflow: "hidden",
      background: "#000"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "-6%",
      backgroundImage: bgImage,
      backgroundSize: "cover",
      backgroundPosition: focal,
      animation: kenBurns ? "ls-kb 22s ease-in-out infinite alternate" : "none",
      filter: "saturate(0.92) contrast(1.05)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: `radial-gradient(ellipse at 50% 60%, rgba(0,0,0,0) 35%, rgba(0,0,0,${overlay + 0.15}) 100%), linear-gradient(180deg, rgba(0,0,0,${overlay * 0.6}) 0%, rgba(0,0,0,${overlay * 0.2}) 30%, rgba(0,0,0,${overlay}) 100%)`
    }
  }), lightSweep && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      width: "30%",
      background: `linear-gradient(100deg, transparent 30%, ${accent}15 50%, transparent 70%)`,
      animation: "ls-sweep 9s linear infinite",
      mixBlendMode: "screen",
      pointerEvents: "none"
    }
  }));
}

// ─── Marquee of supplier / partner brands (text-only, on-brand) ─────────────
function PartnerMarquee({
  items,
  accent = "#C9A572",
  color = "#9a948a",
  speed = 38
}) {
  const row = /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 64,
      alignItems: "center",
      paddingRight: 64,
      flexShrink: 0
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 400,
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      fontSize: 22,
      color,
      whiteSpace: "nowrap",
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      background: accent,
      transform: "rotate(45deg)"
    }
  }), it)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden",
      width: "100%",
      maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      animation: `ls-marquee ${speed}s linear infinite`,
      width: "max-content"
    }
  }, row, row, row));
}

// ─── Number ticker ──────────────────────────────────────────────────────────
function StatTicker({
  value,
  suffix = "",
  duration = 1800
}) {
  const [n, setN] = useState(0);
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      const start = performance.now();
      const tick = now => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setN(Math.round(value * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      obs.disconnect();
    }, {
      threshold: 0.4
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value, duration]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, n.toLocaleString("fi-FI"), suffix);
}

// ─── Hero Video — looping pipe-relining footage placeholder ─────────────────
// Stands in for real video the founder will supply. Uses a Ken-Burns image
// + a synthetic camera-POV "pipe" overlay that scrolls through, simulating
// the inspection-camera footage Polinvent uses on their hero.
function HeroVideo({
  src = "assets/van-bronze-front-glossy.jpg",
  videoSrc = "https://ihcirdgmyzuzxyit.public.blob.vercel-storage.com/videos/polinvent_mainpage_teaser.mp4",
  accent = "#C9A572",
  overlay = 0.55,
  label = "PIPE INSPECTION · LIVE FOOTAGE",
  showPipeOverlay = false,
  useVideo = true
}) {
  const [t, setT] = useState(0);
  useEffect(() => {
    let raf;
    const start = performance.now();
    const loop = now => {
      setT((now - start) / 8000 % 1);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      background: "#000"
    }
  }, useVideo && videoSrc ? /*#__PURE__*/React.createElement("video", {
    src: videoSrc
    // Poster paints immediately as the LCP element; the actual MP4 is
    // 7+ MB so without a poster the user stares at black for 5–7 s and
    // Lighthouse blames us for the LCP score.
    ,
    poster: src,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "metadata",
    "aria-label": label
    // Decorative B-roll with no dialogue. The empty captions track is
    // there to satisfy the a11y audit ("video provides a track") — when
    // there's no spoken content there's nothing to caption.
    ,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "saturate(0.95) contrast(1.05) brightness(0.85)"
    }
  }, /*#__PURE__*/React.createElement("track", {
    kind: "captions",
    srcLang: "fi",
    label: "Suomi (ei puhetta)"
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "-6%",
      backgroundImage: `url("${src}")`,
      backgroundSize: "cover",
      backgroundPosition: "50% 50%",
      animation: "ls-kb 22s ease-in-out infinite alternate",
      filter: "saturate(0.92) contrast(1.08) brightness(0.85)"
    }
  }), showPipeOverlay && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1600 900",
    preserveAspectRatio: "xMidYMid slice",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      mixBlendMode: "screen",
      opacity: 0.32
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
    id: "pipeRing",
    cx: "0.5",
    cy: "0.5",
    r: "0.5"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0.4",
    stopColor: "#000",
    stopOpacity: "0"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.85",
    stopColor: accent,
    stopOpacity: "0.5"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: accent,
    stopOpacity: "0"
  }))), Array.from({
    length: 8
  }).map((_, i) => {
    const phase = (t + i / 8) % 1;
    const r = 60 + phase * 800;
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: "800",
      cy: "450",
      r: r,
      fill: "none",
      stroke: accent,
      strokeWidth: 1.5,
      opacity: 1 - phase
    });
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "800",
    cy: "450",
    r: "800",
    fill: "url(#pipeRing)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: `radial-gradient(ellipse at 50% 60%, rgba(0,0,0,0) 30%, rgba(0,0,0,${overlay + 0.2}) 100%), linear-gradient(180deg, rgba(0,0,0,${overlay * 0.5}) 0%, rgba(0,0,0,${overlay * 0.15}) 30%, rgba(0,0,0,${overlay}) 100%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      width: "30%",
      background: `linear-gradient(100deg, transparent 30%, ${accent}18 50%, transparent 70%)`,
      animation: "ls-sweep 9s linear infinite",
      mixBlendMode: "screen",
      pointerEvents: "none"
    }
  }));
}

// ─── Language pill ──────────────────────────────────────────────────────────
// `inactiveColor` opt-in lets light-themed callers pass an explicit color that
// already passes contrast — we used to fade the active color via opacity but
// alpha-blended text fails Lighthouse contrast on cream backgrounds.
function LanguagePill({
  accent = "#C9A572",
  color = "#EDE6D6",
  inactiveColor,
  active = "FI"
}) {
  const langs = ["FI", "EN", "SV", "DA", "NO"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.12em"
    }
  }, langs.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: l,
    "aria-current": l === active ? "true" : undefined,
    style: {
      padding: "4px 7px",
      color: l === active ? accent : inactiveColor || color,
      opacity: l === active || inactiveColor ? 1 : 0.7,
      borderBottom: l === active ? `1px solid ${accent}` : "1px solid transparent"
    }
  }, l)));
}

// ─── Logo Plate — the photographed/3D-rendered hero logo ───────────────────
// Used as a brand-statement section in each homepage. Loads the WebP
// variant first via <picture> + <source> and falls back to the JPG.
// `framed` mode adds a hairline bronze frame and corner brackets that play
// nicely with the editorial typography around it.
function LogoPlate({
  src = "assets/logo-3d-hero",
  alt = "Line Systems — pronssin sävyinen logo, kohokuvioitu 3D-renderöinti",
  accent = "#C9A572",
  framed = true,
  height,
  glow = true,
  caption,
  eyebrow
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%"
    }
  }, framed && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      zIndex: 2,
      border: `1px solid ${accent}40`
    }
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: "absolute",
      [i < 2 ? "top" : "bottom"]: -1,
      [i % 2 === 0 ? "left" : "right"]: -1,
      width: 18,
      height: 18,
      borderTop: i < 2 ? `2px solid ${accent}` : "none",
      borderBottom: i >= 2 ? `2px solid ${accent}` : "none",
      borderLeft: i % 2 === 0 ? `2px solid ${accent}` : "none",
      borderRight: i % 2 === 1 ? `2px solid ${accent}` : "none"
    }
  }))), /*#__PURE__*/React.createElement("picture", null, /*#__PURE__*/React.createElement("source", {
    srcSet: `${src}.webp`,
    type: "image/webp"
  }), /*#__PURE__*/React.createElement("img", {
    src: `${src}.jpg`,
    alt: alt,
    width: 1536,
    height: 1024,
    loading: "lazy",
    decoding: "async",
    style: {
      display: "block",
      width: "100%",
      height: height || "auto",
      aspectRatio: "1536 / 1024",
      objectFit: "cover",
      animation: glow ? "ls-glow 6s ease-in-out infinite" : "none"
    }
  })), (eyebrow || caption) && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 3,
      padding: "20px 24px",
      background: "linear-gradient(180deg, transparent 0%, rgba(11,11,12,0.85) 100%)"
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      color: accent,
      marginBottom: 6
    }
  }, eyebrow), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 22,
      color: "#F4EEDF",
      lineHeight: 1.2
    }
  }, caption)));
}

// ─── Logo Lockup — the new 3D logo at small size for headers/footers ────────
function LogoLockup({
  size = 44,
  color = "#EDE6D6",
  accent = "#C9A572",
  showText = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      color
    }
  }, /*#__PURE__*/React.createElement("picture", null, /*#__PURE__*/React.createElement("source", {
    srcSet: "assets/logo-3d-hero.webp",
    type: "image/webp"
  }), /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-3d-hero.jpg",
    alt: "Line Systems",
    width: size * 1.5,
    height: size,
    style: {
      display: "block",
      width: size * 1.5,
      height: size,
      objectFit: "cover",
      objectPosition: "50% 35%",
      border: `1px solid ${accent}30`
    }
  })), showText && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Cormorant Garamond', 'Cormorant', serif",
      fontWeight: 300,
      letterSpacing: "0.34em",
      fontSize: size * 0.4,
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      lineHeight: 1
    }
  }, "Line Systems"));
}

// Expose to other Babel scripts.
Object.assign(window, {
  LSMark,
  Wordmark,
  ReliningAnimation,
  CinemaPlate,
  PartnerMarquee,
  StatTicker,
  HeroVideo,
  LanguagePill,
  useViewport,
  rv,
  LogoPlate,
  LogoLockup
});