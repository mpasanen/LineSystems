/* global React */
// Shared brand primitives for Line Systems Oy.
// Reused across the three homepage variations.

const { useState, useEffect, useRef } = React;

// ─── Logo mark ──────────────────────────────────────────────────────────────
// Recreated from the founder's reference photos: a tall dark blade on the
// left, a shorter gold triangle on the right, sharing a baseline.
function LSMark({ size = 40, accent = "#C9A572", dark = "#0B0B0C", mono = false }) {
  const a = mono ? "currentColor" : dark;
  const b = mono ? "currentColor" : accent;
  return (
    <svg viewBox="0 0 100 110" width={size} height={size * 1.1} aria-label="Line Systems" style={{ display: "block", overflow: "visible" }}>
      <polygon points="42,4 56,74 30,92 24,58" fill={a} />
      <polygon points="50,48 92,92 46,92" fill={b} />
    </svg>
  );
}

function Wordmark({ accent = "#C9A572", color = "#EDE6D6", size = 36, mono = false, tracking = "0.34em" }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, color }}>
      <LSMark size={size} accent={accent} mono={mono} dark={mono ? "currentColor" : "#0B0B0C"} />
      <div style={{
        fontFamily: "'Cormorant Garamond', 'Cormorant', serif",
        fontWeight: 300,
        letterSpacing: tracking,
        fontSize: size * 0.40,
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        lineHeight: 1,
      }}>Line Systems</div>
    </div>
  );
}

// ─── Animated CIPP-relining diagram ─────────────────────────────────────────
// Synthesized "moving image" — a host pipe with the bronze inversion liner
// progressing through it. Used as a process motif on multiple variations.
function ReliningAnimation({ height = 220, accent = "#C9A572", paused = false }) {
  const [t, setT] = useState(0);
  useEffect(() => {
    if (paused) return;
    let raf;
    const start = performance.now();
    const loop = (now) => {
      setT(((now - start) / 5200) % 1);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  // Liner head position 0 → 1 along the pipe.
  const pipeX1 = 40, pipeX2 = 760, y = height / 2;
  const headX = pipeX1 + (pipeX2 - pipeX1) * t;
  const trailX = pipeX1;

  return (
    <svg viewBox={`0 0 800 ${height}`} width="100%" height={height} preserveAspectRatio="xMidYMid meet" style={{ display: "block" }}>
      <defs>
        <linearGradient id="hostpipe" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#1c1c1e" />
          <stop offset="0.5" stopColor="#2a2a2d" />
          <stop offset="1" stopColor="#101012" />
        </linearGradient>
        <linearGradient id="liner" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor={accent} stopOpacity="0.55" />
          <stop offset="0.5" stopColor={accent} />
          <stop offset="1" stopColor={accent} stopOpacity="0.55" />
        </linearGradient>
        <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={accent} stopOpacity="0.7" />
          <stop offset="1" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Soil hatching */}
      <g opacity="0.18" stroke="#5a5a5f" strokeWidth="1">
        {Array.from({ length: 16 }).map((_, i) => (
          <line key={i} x1={i * 55} y1={0} x2={i * 55 - 30} y2={height} />
        ))}
      </g>

      {/* Host pipe (cracked/old) */}
      <rect x={pipeX1} y={y - 34} width={pipeX2 - pipeX1} height={68} rx={6} fill="url(#hostpipe)" stroke="#3a3a3d" strokeWidth="1" />
      {/* Cracks */}
      <g stroke="#0a0a0a" strokeWidth="1.2" opacity="0.7" fill="none">
        <path d="M180 -34 q-4 30 6 50 q-8 14 0 30 M340 -34 q6 24 -4 50 q4 18 -2 32 M520 -34 q-2 22 8 48" transform={`translate(0 ${y})`} />
      </g>

      {/* Inner darkness */}
      <rect x={pipeX1 + 4} y={y - 26} width={pipeX2 - pipeX1 - 8} height={52} rx={3} fill="#050506" />

      {/* New liner placed behind head */}
      <rect x={trailX + 4} y={y - 22} width={Math.max(0, headX - trailX - 4)} height={44} rx={3} fill="url(#liner)" />
      {/* Liner shine */}
      <rect x={trailX + 4} y={y - 20} width={Math.max(0, headX - trailX - 4)} height={6} rx={2} fill={accent} opacity="0.45" />

      {/* Inversion head */}
      <g transform={`translate(${headX} ${y})`}>
        <ellipse cx="0" cy="0" rx="60" ry="28" fill="url(#glow)" />
        <path d={`M -8 -22 Q 22 0 -8 22 Z`} fill={accent} />
        <circle cx="-2" cy="0" r="3" fill="#fff" opacity="0.9" />
      </g>

      {/* End caps */}
      <rect x={pipeX1 - 14} y={y - 40} width={14} height={80} fill="#0d0d0f" stroke="#2a2a2d" />
      <rect x={pipeX2} y={y - 40} width={14} height={80} fill="#0d0d0f" stroke="#2a2a2d" />

      {/* Progress dots */}
      <g transform={`translate(${pipeX1} ${height - 18})`}>
        {[0, 0.25, 0.5, 0.75, 1].map((p, i) => (
          <circle key={i} cx={p * (pipeX2 - pipeX1)} cy="0" r="2" fill={t > p - 0.02 ? accent : "#3a3a3d"} />
        ))}
      </g>
    </svg>
  );
}

// ─── Looping "video" placeholder ────────────────────────────────────────────
// Subtle Ken-Burns + light pass over a still — stands in for real video the
// founder will shoot. Plays continuously like a hero loop.
function CinemaPlate({ src, height = "100%", overlay = 0.45, focal = "50% 50%", kenBurns = true, lightSweep = true, accent = "#C9A572" }) {
  return (
    <div style={{ position: "relative", width: "100%", height, overflow: "hidden", background: "#000" }}>
      <div style={{
        position: "absolute", inset: "-6%",
        backgroundImage: `url("${src}")`,
        backgroundSize: "cover",
        backgroundPosition: focal,
        animation: kenBurns ? "ls-kb 22s ease-in-out infinite alternate" : "none",
        filter: "saturate(0.92) contrast(1.05)",
      }} />
      {/* Vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse at 50% 60%, rgba(0,0,0,0) 35%, rgba(0,0,0,${overlay + 0.15}) 100%), linear-gradient(180deg, rgba(0,0,0,${overlay * 0.6}) 0%, rgba(0,0,0,${overlay * 0.2}) 30%, rgba(0,0,0,${overlay}) 100%)`,
      }} />
      {/* Light sweep */}
      {lightSweep && (
        <div style={{
          position: "absolute", top: 0, bottom: 0, width: "30%",
          background: `linear-gradient(100deg, transparent 30%, ${accent}15 50%, transparent 70%)`,
          animation: "ls-sweep 9s linear infinite",
          mixBlendMode: "screen",
          pointerEvents: "none",
        }} />
      )}
    </div>
  );
}

// ─── Marquee of supplier / partner brands (text-only, on-brand) ─────────────
function PartnerMarquee({ items, accent = "#C9A572", color = "#9a948a", speed = 38 }) {
  const row = (
    <div style={{ display: "flex", gap: 64, alignItems: "center", paddingRight: 64, flexShrink: 0 }}>
      {items.map((it, i) => (
        <div key={i} style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 400,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          fontSize: 22,
          color,
          whiteSpace: "nowrap",
          display: "flex", alignItems: "center", gap: 16,
        }}>
          <span style={{ width: 6, height: 6, background: accent, transform: "rotate(45deg)" }} />
          {it}
        </div>
      ))}
    </div>
  );
  return (
    <div style={{ overflow: "hidden", width: "100%", maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)" }}>
      <div style={{ display: "flex", animation: `ls-marquee ${speed}s linear infinite`, width: "max-content" }}>
        {row}{row}{row}
      </div>
    </div>
  );
}

// ─── Number ticker ──────────────────────────────────────────────────────────
function StatTicker({ value, suffix = "", duration = 1800 }) {
  const [n, setN] = useState(0);
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setN(Math.round(value * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      obs.disconnect();
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value, duration]);
  return <span ref={ref}>{n.toLocaleString("fi-FI")}{suffix}</span>;
}

// ─── Hero Video — looping pipe-relining footage placeholder ─────────────────
// Stands in for real video the founder will supply. Uses a Ken-Burns image
// + a synthetic camera-POV "pipe" overlay that scrolls through, simulating
// the inspection-camera footage Polinvent uses on their hero.
function HeroVideo({ src = "assets/van-bronze-front-glossy.jpg", videoSrc = "https://ihcirdgmyzuzxyit.public.blob.vercel-storage.com/videos/polinvent_mainpage_teaser.mp4", accent = "#C9A572", overlay = 0.55, label = "PIPE INSPECTION · LIVE FOOTAGE", showPipeOverlay = false, useVideo = true }) {
  const [t, setT] = useState(0);
  useEffect(() => {
    let raf;
    const start = performance.now();
    const loop = (now) => {
      setT(((now - start) / 8000) % 1);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", background: "#000" }}>
      {useVideo && videoSrc ? (
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", filter: "saturate(0.95) contrast(1.05) brightness(0.85)",
          }}
        />
      ) : (
        <div style={{
          position: "absolute", inset: "-6%",
          backgroundImage: `url("${src}")`,
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
          animation: "ls-kb 22s ease-in-out infinite alternate",
          filter: "saturate(0.92) contrast(1.08) brightness(0.85)",
        }} />
      )}

      {/* Inspection-camera pipe POV overlay (synthetic "video") */}
      {showPipeOverlay && (
        <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", mixBlendMode: "screen", opacity: 0.32 }}>
          <defs>
            <radialGradient id="pipeRing" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0.4" stopColor="#000" stopOpacity="0" />
              <stop offset="0.85" stopColor={accent} stopOpacity="0.5" />
              <stop offset="1" stopColor={accent} stopOpacity="0" />
            </radialGradient>
          </defs>
          {Array.from({ length: 8 }).map((_, i) => {
            const phase = (t + i / 8) % 1;
            const r = 60 + phase * 800;
            return (
              <circle key={i} cx="800" cy="450" r={r} fill="none" stroke={accent} strokeWidth={1.5} opacity={1 - phase} />
            );
          })}
          <circle cx="800" cy="450" r="800" fill="url(#pipeRing)" />
        </svg>
      )}

      {/* Vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse at 50% 60%, rgba(0,0,0,0) 30%, rgba(0,0,0,${overlay + 0.2}) 100%), linear-gradient(180deg, rgba(0,0,0,${overlay * 0.5}) 0%, rgba(0,0,0,${overlay * 0.15}) 30%, rgba(0,0,0,${overlay}) 100%)`,
      }} />

      {/* Light sweep */}
      <div style={{
        position: "absolute", top: 0, bottom: 0, width: "30%",
        background: `linear-gradient(100deg, transparent 30%, ${accent}18 50%, transparent 70%)`,
        animation: "ls-sweep 9s linear infinite",
        mixBlendMode: "screen",
        pointerEvents: "none",
      }} />

    </div>
  );
}

// ─── Language pill ──────────────────────────────────────────────────────────
function LanguagePill({ accent = "#C9A572", color = "#EDE6D6", active = "FI" }) {
  const langs = ["FI", "EN", "SV", "DA", "NO"];
  return (
    <div style={{ display: "flex", gap: 6, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.12em" }}>
      {langs.map((l, i) => (
        <span key={l} style={{
          padding: "4px 7px",
          color: l === active ? accent : color,
          opacity: l === active ? 1 : 0.55,
          borderBottom: l === active ? `1px solid ${accent}` : "1px solid transparent",
        }}>{l}</span>
      ))}
    </div>
  );
}

// Expose to other Babel scripts.
Object.assign(window, { LSMark, Wordmark, ReliningAnimation, CinemaPlate, PartnerMarquee, StatTicker, HeroVideo, LanguagePill });
