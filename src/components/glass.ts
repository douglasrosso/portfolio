import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const glassCard = {
  background: "hsla(0, 0%, 100%, 0.04)",
  border: "1px solid hsla(0, 0%, 100%, 0.08)",
  backdropFilter: "blur(20px) saturate(1.5)",
  WebkitBackdropFilter: "blur(20px) saturate(1.5)",
};

export const glassPill = {
  background: "hsla(0, 0%, 100%, 0.04)",
  border: "1px solid hsla(0, 0%, 100%, 0.08)",
  backdropFilter: "blur(12px)",
};

export const glassCardHover = {
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    background: "hsla(0, 0%, 100%, 0.08)",
    borderColor: "hsla(199, 89%, 60%, 0.25)",
    boxShadow: "inset 0 1px 0 hsla(0, 0%, 100%, 0.06), 0 0 60px -10px hsla(199, 89%, 60%, 0.15)",
    transform: "translateY(-2px)",
  },
};

export const GlassCard = styled(Box)({
  ...glassCard,
  borderRadius: "16px",
});

export const GlassHoverCard = styled(Box)({
  ...glassCard,
  ...glassCardHover,
  borderRadius: "16px",
});

export const TopGlow = styled(Box)({
  position: "absolute",
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",
  width: "66%",
  height: 1,
  background:
    "linear-gradient(to right, transparent, hsla(199, 89%, 60%, 0.5), transparent)",
});

export const textGradient = {
  background: "linear-gradient(135deg, hsl(var(--glow-cyan)), hsl(var(--glow-indigo)))",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const;

export const textGradientWarm = {
  background: "linear-gradient(135deg, hsl(var(--glow-cyan)), hsl(var(--glow-emerald)))",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const;

export const glowBorder = {
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: "-1px",
    borderRadius: "inherit",
    padding: "1px",
    background:
      "linear-gradient(var(--glow-angle, 0deg), hsla(var(--glow-cyan), 0.5), transparent 40%, transparent 60%, hsla(var(--glow-indigo), 0.5))",
    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
    animation: "glow-rotate 6s linear infinite",
    pointerEvents: "none",
  },
} as const;

export const statusDot = {
  width: 8,
  height: 8,
  borderRadius: "50%",
  background: "hsl(var(--glow-emerald))",
  boxShadow: "0 0 12px hsla(var(--glow-emerald), 0.6)",
  animation: "pulse-dot 2s ease-in-out infinite",
} as const;

export const terminalCursor = {
  display: "inline-block",
  width: "2px",
  height: "1.1em",
  background: "hsl(var(--glow-cyan))",
  animation: "blink-cursor 1s step-end infinite",
  verticalAlign: "text-bottom",
  marginLeft: "2px",
} as const;
