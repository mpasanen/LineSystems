// Line Systems geometric mark — recreated from brand photos as SVG.
// Two shapes: tall dark "sail" diamond on the left, lower gold triangle on the right.
// They share a base baseline.
const LSMark = ({ size = 64, dark = "currentColor", gold = "currentColor", mono = false, ...rest }) => {
  const d = mono ? "currentColor" : dark;
  const g = mono ? "currentColor" : gold;
  return (
    <svg viewBox="0 0 120 130" width={size} height={size * (130 / 120)} fill="none" {...rest}>
      {/* Tall sail / parallelogram diamond — left */}
      <path d="M 52 4 L 70 64 L 50 124 L 32 64 Z" fill={d} />
      {/* Right triangle — sits on shared baseline */}
      <path d="M 60 60 L 116 124 L 54 124 Z" fill={g} />
    </svg>
  );
};

const LSWordmark = ({ height = 18, color = "currentColor", letterSpacing = "0.32em" }) => (
  <span style={{
    fontFamily: '"Cormorant Garamond", "Times New Roman", serif',
    fontWeight: 300,
    fontSize: height,
    letterSpacing,
    color,
    textTransform: "uppercase",
    lineHeight: 1,
    whiteSpace: "nowrap",
  }}>LINE SYSTEMS</span>
);

const LSLockup = ({ size = 56, color, gold, vertical = false, mono = false, gap = 14 }) => (
  <div style={{
    display: "inline-flex",
    flexDirection: vertical ? "column" : "row",
    alignItems: "center",
    gap,
  }}>
    <LSMark size={size} dark={color || "#EDE7DA"} gold={gold || "#B8945A"} mono={mono} />
    <LSWordmark height={vertical ? size * 0.22 : size * 0.32} color={color || "#EDE7DA"} />
  </div>
);

Object.assign(window, { LSMark, LSWordmark, LSLockup });
