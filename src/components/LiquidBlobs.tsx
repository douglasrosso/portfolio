import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const BlobContainer = styled(Box)({
  position: "fixed",
  inset: 0,
  overflow: "hidden",
  pointerEvents: "none",
  zIndex: -1,
});

const GridOverlay = styled(Box)({
  position: "absolute",
  inset: 0,
  backgroundImage:
    "linear-gradient(hsla(0, 0%, 100%, 0.03) 1px, transparent 1px), linear-gradient(90deg, hsla(0, 0%, 100%, 0.03) 1px, transparent 1px)",
  backgroundSize: "60px 60px",
  maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
  WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
});

const Blob = styled(Box)({
  position: "absolute",
  borderRadius: "50%",
});

const BlobCyan1 = styled(Blob)(({ theme: { breakpoints: { up } } }) => ({
  background: "radial-gradient(circle, hsla(var(--glow-cyan), 0.25), transparent 70%)",
  width: 350,
  height: 350,
  top: -200,
  left: -100,
  animation: "blob-drift 25s ease-in-out infinite",
  [up('md')]: { width: 700, height: 700 },
}));

const BlobIndigo = styled(Blob)(({ theme: { breakpoints: { up } } }) => ({
  background: "radial-gradient(circle, hsla(var(--glow-indigo), 0.2), transparent 70%)",
  width: 300,
  height: 300,
  top: "20%",
  right: -150,
  animation: "blob-drift-2 30s ease-in-out infinite",
  [up('md')]: { width: 600, height: 600 },
}));

const BlobEmerald = styled(Blob)(({ theme: { breakpoints: { up } } }) => ({
  background: "radial-gradient(circle, hsla(var(--glow-emerald), 0.15), transparent 70%)",
  width: 250,
  height: 250,
  bottom: "10%",
  left: "20%",
  animation: "blob-drift-3 35s ease-in-out infinite",
  [up('md')]: { width: 500, height: 500 },
}));

const BlobCyan2 = styled(Blob)(({ theme: { breakpoints: { up } } }) => ({
  background: "radial-gradient(circle, hsla(var(--glow-cyan), 0.25), transparent 70%)",
  width: 200,
  height: 200,
  bottom: -100,
  right: "10%",
  animation: "blob-drift 25s ease-in-out infinite",
  opacity: 0.4,
  [up('md')]: { width: 400, height: 400 },
}));

const TopFade = styled(Box)({
  position: "absolute",
  inset: 0,
  bottom: "auto",
  height: 160,
  background: "linear-gradient(to bottom, hsl(222, 47%, 11%), transparent)",
});

const LiquidBlobs = () => (
  <BlobContainer>
    <GridOverlay />
    <BlobCyan1 />
    <BlobIndigo />
    <BlobEmerald />
    <BlobCyan2 />
    <TopFade />
  </BlobContainer>
);

export default LiquidBlobs;
