import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import ButtonBase from "@mui/material/ButtonBase";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import { glassCard, glassCardHover, GlassCard, TopGlow, textGradient, glowBorder } from "@/components/glass";
import { Section, SectionLabel, SectionTitle } from "@/components/Section";
import FadeIn from "@/components/FadeIn";

const ContactCard = styled(GlassCard)(({ theme: { breakpoints: { up } } }) => ({
  ...glowBorder,
  padding: 24,
  [up('sm')]: { padding: 40 },
  [up('md')]: { padding: 64 },
}));

const ContentGrid = styled(Box)(({ theme: { breakpoints: { up } } }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 40,
  alignItems: "center",
  position: "relative",
  zIndex: 1,
  [up('md')]: { gridTemplateColumns: "1fr 1fr" },
}));

const GradientSpan = styled('span')({
  ...textGradient,
});

const ContactTitle = styled(SectionTitle)({
  marginBottom: 16,
});

const Subtitle = styled(Typography)({
  color: "hsl(215, 20%, 65%)",
  fontWeight: 500,
  fontSize: "1.125rem",
});

const ActionLink = styled(Link)({
  ...glassCard,
  ...glassCardHover,
  borderRadius: "12px",
  padding: "16px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  textDecoration: "none",
  color: "inherit",
  minHeight: 44,
  "&:hover [data-arrow]": { color: "hsl(199, 89%, 60%)" },
});

const ActionButton = styled(ButtonBase)({
  ...glassCard,
  ...glassCardHover,
  borderRadius: "12px",
  padding: "16px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  textAlign: "left",
  cursor: "pointer",
  width: "100%",
  font: "inherit",
  color: "inherit",
  minHeight: 44,
});

const ActionLabel = styled(Typography)({
  fontSize: "0.75rem",
  fontFamily: "'JetBrains Mono', monospace",
  color: "hsl(215, 20%, 65%)",
  marginBottom: 4,
});

const ActionValue = styled(Typography)(({ theme: { breakpoints: { up } } }) => ({
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 600,
  fontSize: "0.875rem",
  color: "hsl(210, 40%, 98%)",
  wordBreak: "break-all",
  [up('sm')]: { fontSize: "1rem", wordBreak: "normal" },
}));

const MailIcon = styled(MailOutlineIcon)({
  fontSize: 20,
  color: "hsl(199, 89%, 60%)",
});

const ArrowIcon = styled(ArrowOutwardIcon)({
  fontSize: 18,
  color: "hsl(215, 20%, 65%)",
  transition: "color 0.3s",
});

const CopyIcon = styled(ContentCopyOutlinedIcon)({
  fontSize: 20,
  color: "hsl(234, 89%, 74%)",
});

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "douglasrosso10@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact">
      <FadeIn y={30} duration={0.7}>
        <ContactCard>
          <TopGlow />

          <ContentGrid>
            <Box>
              <SectionLabel>// contato</SectionLabel>
              <ContactTitle variant="h2">
                Vamos criar
                <br />
                algo <GradientSpan>incrível</GradientSpan>
              </ContactTitle>
              <Subtitle>
                Aberto a oportunidades, consultoria e projetos que desafiem o status quo.
              </Subtitle>
            </Box>

            <Stack spacing={2}>
              <ActionLink href={`mailto:${email}`}>
                <Stack direction="row" alignItems="center" spacing={1.5}>
                  <MailIcon />
                  <Box>
                    <ActionLabel>Email</ActionLabel>
                    <ActionValue>{email}</ActionValue>
                  </Box>
                </Stack>
                <ArrowIcon data-arrow="" />
              </ActionLink>

              <ActionButton disableRipple onClick={handleCopy}>
                <Stack direction="row" alignItems="center" spacing={1.5}>
                  <CopyIcon />
                  <Box>
                    <ActionLabel>Copiar email</ActionLabel>
                    <ActionValue>{copied ? "Copiado! ✓" : "Clique para copiar"}</ActionValue>
                  </Box>
                </Stack>
              </ActionButton>
            </Stack>
          </ContentGrid>
        </ContactCard>
      </FadeIn>
    </Section>
  );
};

export default ContactSection;
