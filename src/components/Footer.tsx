import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const FooterRoot = styled('footer')(({ theme: { breakpoints: { up } } }) => ({
  padding: "24px 20px",
  maxWidth: 1280,
  marginLeft: "auto",
  marginRight: "auto",
  borderTop: "1px solid hsla(0, 0%, 100%, 0.06)",
  [up('sm')]: { padding: "24px 24px" },
  [up('md')]: { padding: "24px 64px" },
  [up('lg')]: { padding: "24px 96px" },
}));

const FooterText = styled(Typography)({
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "0.75rem",
  color: "hsla(215, 20%, 65%, 0.4)",
});

const Footer = () => (
  <FooterRoot>
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
      alignItems="center"
      spacing={1}
    >
      <FooterText>© 2026 - Douglas Rosso</FooterText>
      <FooterText>built with precision & ☕</FooterText>
    </Stack>
  </FooterRoot>
);

export default Footer;
