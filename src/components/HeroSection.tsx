import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TerminalIcon from "@mui/icons-material/Terminal";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { glassCard, glassPill, glassCardHover, GlassCard, textGradient, glowBorder, statusDot, terminalCursor } from "@/components/glass";
import profilePhoto from "@/assets/profile-photo.png";

const GlassDivider = styled(Box)({
  height: 1,
  background: "linear-gradient(to right, transparent, hsla(199, 89%, 60%, 0.2), transparent)",
  marginBottom: 24,
});

const HeroRoot = styled('section')(({ theme: { breakpoints: { up } } }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  padding: "72px 20px 64px",
  position: "relative",
  zIndex: 0,
  overflow: "hidden",
  [up('sm')]: { padding: "72px 24px 64px" },
  [up('md')]: { padding: "80px 64px" },
  [up('lg')]: { padding: "80px 96px" },

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    backgroundImage: `url(${profilePhoto})`,
    backgroundSize: 'cover',
    backgroundPosition: 'left center',
    backgroundRepeat: 'no-repeat',
    filter: 'grayscale(30%) contrast(90%) brightness(70%)',
    transform: 'scale(1.03)',
    willChange: 'transform',
    zIndex: -1,
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(180deg, rgba(6,10,18,0.55), rgba(6,10,18,0.75))',
    zIndex: -1,
  },

  [up('lg')]: {
    '&::before': {
      backgroundPosition: '30% center',
      transform: 'scale(1.04)',
    },
  },
}));

const HeroGrid = styled(Box)(({ theme: { breakpoints: { up } } }) => ({
  maxWidth: 1280,
  marginLeft: "auto",
  marginRight: "auto",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 32,
  alignItems: "center",
  [up('sm')]: { gap: 40 },
  [up('md')]: { gap: 48 },
  [up('lg')]: { gridTemplateColumns: "3fr 2fr" },
}));

const StatusRow = styled(Stack)({
  marginBottom: 24,
});

const StatusDot = styled(Box)({
  ...statusDot,
});

const StatusText = styled(Typography)({
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "0.875rem",
  color: "hsl(215, 20%, 65%)",
  letterSpacing: "0.05em",
});

const NameRow = styled(Stack)({
  marginBottom: 24,
});

const HeroName = styled(Typography)(({ theme: { breakpoints: { up } } }) => ({
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "2.25rem",
  fontWeight: 700,
  lineHeight: 0.95,
  marginBottom: 16,
  letterSpacing: "-0.02em",
  color: "hsl(210, 40%, 98%)",
  [up('sm')]: { fontSize: "2rem", marginBottom: 24 },
  [up('md')]: { fontSize: "3.5rem" },
  [up('lg')]: { fontSize: "4.5rem" },
}));

const GradientSpan = styled('span')({
  ...textGradient,
});

const RoleRow = styled(Stack)({
  marginBottom: 24,
});

const TerminalIconStyled = styled(TerminalIcon)({
  fontSize: 16,
  color: "hsl(199, 89%, 60%)",
});

const RoleText = styled(Typography)({
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "0.875rem",
  color: "hsl(215, 20%, 65%)",
});

const RolePrefix = styled('span')({
  color: "hsl(199, 89%, 60%)",
});

const Cursor = styled('span')({
  ...terminalCursor,
});

const Description = styled(Typography)(({ theme: { breakpoints: { up } } }) => ({
  fontSize: "1rem",
  color: "hsl(215, 20%, 65%)",
  fontWeight: 500,
  maxWidth: 520,
  lineHeight: 1.7,
  marginBottom: 24,
  [up('sm')]: { fontSize: "1.125rem", marginBottom: 32 },
  [up('md')]: { fontSize: "1.25rem" },
}));

const HighlightText = styled('span')({
  color: "hsl(210, 40%, 98%)",
});

const ButtonRow = styled(Stack)({
  marginBottom: 32,
});

const PrimaryButton = styled(Button)(({ theme: { breakpoints: { up } } }) => ({
  padding: "12px 24px",
  borderRadius: "12px",
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 600,
  textTransform: "none",
  fontSize: "0.875rem",
  minHeight: 44,
  background: "hsl(199, 89%, 60%)",
  color: "hsl(222, 47%, 11%)",
  [up('sm')]: { padding: "14px 28px", fontSize: "0.95rem" },
  "&:hover": {
    background: "linear-gradient(to right, hsl(199, 89%, 60%), hsl(234, 89%, 74%))",
    boxShadow: "0 0 40px hsla(199, 89%, 60%, 0.35)",
  },
}));

const SecondaryButton = styled(Button)(({ theme: { breakpoints: { up } } }) => ({
  ...glassCard,
  ...glassCardHover,
  padding: "12px 24px",
  borderRadius: "12px",
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 600,
  textTransform: "none",
  fontSize: "0.875rem",
  minHeight: 44,
  color: "hsl(210, 40%, 98%)",
  [up('sm')]: { padding: "14px 28px", fontSize: "0.95rem" },
}));

const LocationIcon = styled(LocationOnOutlinedIcon)({
  fontSize: 14,
  color: "hsl(215, 20%, 65%)",
});

const LocationText = styled(Typography)({
  fontSize: "0.875rem",
  color: "hsl(215, 20%, 65%)",
});

const InfoCard = styled(GlassCard)(({ theme: { breakpoints: { up } } }) => ({
  ...glowBorder,
  padding: 24,
  animation: "float-anim 6s ease-in-out infinite",
  [up('sm')]: { padding: 32 },
}));

const StatsGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 24,
  marginBottom: 32,
});

const StatCell = styled(Box)({
  textAlign: "center",
});

const StatValue = styled(Typography)(({ theme: { breakpoints: { up } } }) => ({
  ...textGradient,
  fontSize: "1.25rem",
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 700,
  [up('sm')]: { fontSize: "1.5rem" },
  [up('md')]: { fontSize: "1.875rem" },
}));

const StatLabel = styled(Typography)({
  fontSize: "0.75rem",
  fontFamily: "'JetBrains Mono', monospace",
  color: "hsl(215, 20%, 65%)",
  marginTop: 4,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
});

const CodeBlock = styled(Box)({
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "0.75rem",
  color: "hsl(215, 20%, 65%)",
  "& > *": { marginBottom: 6 },
});

const CodeLine = styled(Box)({
  paddingLeft: 16,
});

const CodeKeyword = styled('span')({
  color: "hsl(199, 89%, 60%)",
});

const CodeIdent = styled('span')({
  color: "hsl(210, 40%, 98%)",
});

const CodeProp = styled('span')({
  color: "hsl(234, 89%, 74%)",
});

const CodeString = styled('span')({
  color: "hsl(142, 71%, 65%)",
});

const SocialRow = styled(Stack)({
  marginTop: 24,
  paddingTop: 24,
  borderTop: "1px solid hsla(210, 40%, 98%, 0.05)",
});

const SocialButton = styled(IconButton)({
  ...glassPill,
  borderRadius: "8px",
  padding: 10,
  color: "hsl(215, 20%, 65%)",
  transition: "all 0.3s",
  "&:hover": {
    color: "hsl(199, 89%, 60%)",
    borderColor: "hsla(199, 89%, 60%, 0.3)",
    transform: "scale(1.1)",
  },
}) as unknown as typeof IconButton;

const HeroSection = () => (
  <HeroRoot id="hero">
    <HeroGrid>
      <Box>
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <StatusRow direction="row" alignItems="center" spacing={1.5}>
            <StatusDot />
            <StatusText>Disponível para projetos</StatusText>
          </StatusRow>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <NameRow direction="row" alignItems="center" spacing={1.5}>
            <HeroName variant="h1">
              Douglas
              <br />
              <GradientSpan>Rosso</GradientSpan>
            </HeroName>
          </NameRow>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.25 }}>
          <RoleRow direction="row" alignItems="center" spacing={1}>
            <TerminalIconStyled />
            <RoleText>
              <RolePrefix>~</RolePrefix> engenheiro de software pleno
              <Cursor />
            </RoleText>
          </RoleRow>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.35 }}>
          <Description>
            Arquiteto de sistemas distribuídos e interfaces que pessoas realmente
            querem usar. <HighlightText>3+ anos</HighlightText> transformando
            complexidade em elegância.
          </Description>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
          <ButtonRow direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <PrimaryButton href="#projects" variant="contained">Ver Projetos</PrimaryButton>
            <SecondaryButton href="#contact">Contato</SecondaryButton>
          </ButtonRow>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <LocationIcon />
            <LocationText>Santa Catarina, Brasil</LocationText>
          </Stack>
        </motion.div>
      </Box>

      <motion.div initial={{ opacity: 0, x: 50, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
        <InfoCard>
          <StatsGrid>
            {[
              { value: "3+", label: "Anos exp." },
              { value: "15+", label: "Tech stack" },
            ].map((stat) => (
              <StatCell key={stat.label}>
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </StatCell>
            ))}
          </StatsGrid>

          <GlassDivider />

          <CodeBlock>
            <Box>
              <CodeKeyword>const</CodeKeyword>{" "}
              <CodeIdent>engineer</CodeIdent> = {"{"}
            </Box>
            <CodeLine>
              <CodeProp>focus</CodeProp>:{" "}
              <CodeString>"distributed systems"</CodeString>,
            </CodeLine>
            <CodeLine>
              <CodeProp>passion</CodeProp>:{" "}
              <CodeString>"clean architecture"</CodeString>,
            </CodeLine>
            <CodeLine>
              <CodeProp>status</CodeProp>:{" "}
              <CodeString>"building"</CodeString>
              <Cursor />
            </CodeLine>
            <Box>{"}"}</Box>
          </CodeBlock>

          <SocialRow direction="row" spacing={1.5}>
            {[
              { icon: <GitHubIcon />, href: "https://github.com/douglasrosso", label: "GitHub" },
              { icon: <LinkedInIcon />, href: "https://www.linkedin.com/in/douglas-martignago-rosso", label: "LinkedIn" },
              { icon: <MailOutlineIcon />, href: "mailto:douglasrosso10@gmail.com", label: "Email" },
            ].map(({ icon, href, label }) => (
              <SocialButton target="_blank" rel="noopener noreferrer" key={label} href={href} aria-label={label} size="small">
                {icon}
              </SocialButton>
            ))}
          </SocialRow>
        </InfoCard>
      </motion.div>
    </HeroGrid>
  </HeroRoot>
);

export default HeroSection;
