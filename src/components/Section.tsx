import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Section = styled('section')(({ theme: { breakpoints: { up } } }) => ({
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 16,
  paddingBottom: 64,
  maxWidth: 1280,
  marginLeft: "auto",
  marginRight: "auto",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  [up('sm')]: { paddingLeft: 24, paddingRight: 24, paddingTop: 24, paddingBottom: 80 },
  [up('md')]: { paddingLeft: 64, paddingRight: 64, paddingTop: 32, paddingBottom: 96 },
  [up('lg')]: { paddingLeft: 96, paddingRight: 96 },
}));

export const SectionLabel = styled(Typography)(({ theme: { breakpoints: { up } } }) => ({
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "0.7rem",
  color: "hsl(199, 89%, 60%)",
  textTransform: "uppercase",
  letterSpacing: "0.2em",
  marginBottom: 8,
  [up('sm')]: { fontSize: "0.75rem", marginBottom: 12 },
}));

export const SectionTitle = styled(Typography)(({ theme: { breakpoints: { up } } }) => ({
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "1.75rem",
  fontWeight: 700,
  letterSpacing: "-0.02em",
  color: "hsl(210, 40%, 98%)",
  [up('sm')]: { fontSize: "2.25rem" },
  [up('md')]: { fontSize: "3rem" },
}));
