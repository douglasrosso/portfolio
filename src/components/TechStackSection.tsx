import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { GlassHoverCard, textGradientWarm } from "@/components/glass";
import { Section, SectionLabel, SectionTitle } from "@/components/Section";
import FadeIn from "@/components/FadeIn";

const StackCard = styled(GlassHoverCard)(({ theme: { breakpoints: { up } } }) => ({
  padding: 20,
  height: "100%",
  [up('sm')]: { padding: 24 },
  "&:hover [data-icon]": { opacity: 0.8 },
}));

const StackIcon = styled(Box)({
  fontSize: "1.5rem",
  marginBottom: 12,
  opacity: 0.4,
  transition: "opacity 0.3s",
  display: "flex",
});

const CategoryLabel = styled(Typography)({
  fontSize: "0.75rem",
  fontFamily: "'JetBrains Mono', monospace",
  fontWeight: 600,
  color: "hsl(199, 89%, 60%)",
  marginBottom: 16,
  textTransform: "uppercase",
  letterSpacing: "0.15em",
});

const StackItem = styled(Stack)({
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "0.875rem",
  color: "hsl(215, 20%, 65%)",
  cursor: "default",
  transition: "color 0.3s",
  "&:hover": { color: "hsl(210, 40%, 98%)" },
});

const ItemDot = styled(Box)({
  width: 4,
  height: 4,
  borderRadius: "50%",
  backgroundColor: "hsla(199, 89%, 60%, 0.3)",
  flexShrink: 0,
});

const StackGrid = styled(Box)(({ theme: { breakpoints: { up } } }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 12,
  [up('sm')]: { gridTemplateColumns: "1fr 1fr", gap: 16 },
  [up('md')]: { gridTemplateColumns: "repeat(3, 1fr)" },
  [up('lg')]: { gridTemplateColumns: "repeat(5, 1fr)" },
}));

const GradientWarmSpan = styled('span')({
  ...textGradientWarm,
});

const SectionHeader = styled(Box)(({ theme: { breakpoints: { up } } }) => ({
  marginBottom: 32,
  [up('md')]: { marginBottom: 56 },
}));

const stacks = [
  { category: "Frontend", items: ["React", "Next.js", "MUI", "Styled Components", "Storybook", "Ext JS"], icon: <WebOutlinedIcon /> },
  { category: "Backend", items: ["Node.js", "C# .NET", "Java Spring Boot", "TypeScript", "REST"], icon: <DnsOutlinedIcon /> },
  { category: "Data", items: ["PostgreSQL", "MongoDB", "MySQL", "Oracle"], icon: <StorageOutlinedIcon /> },
  { category: "DevOps", items: ["Docker", "CI/CD", "Scrum", "Kanban"], icon: <RocketLaunchOutlinedIcon /> },
  { category: "Quality", items: ["TDD", "Unit Tests", "E2E", "MVVM", "SaaS"], icon: <VerifiedOutlinedIcon /> },
];

const TechStackSection = () => (
  <Section id="stack">
    <FadeIn>
      <SectionHeader>
        <SectionLabel>// stack</SectionLabel>
        <SectionTitle variant="h2">
          Arsenal <GradientWarmSpan>Técnico</GradientWarmSpan>
        </SectionTitle>
      </SectionHeader>
    </FadeIn>

    <StackGrid>
      {stacks.map((stack, i) => (
        <FadeIn
          key={stack.category}
          delay={i * 0.08}
          duration={0.5}
        >
          <StackCard>
            <StackIcon data-icon="">{stack.icon}</StackIcon>
            <CategoryLabel>{stack.category}</CategoryLabel>
            <Stack spacing={1}>
              {stack.items.map((item) => (
                <StackItem key={item} direction="row" alignItems="center" spacing={1}>
                  <ItemDot />
                  <Typography component="span">{item}</Typography>
                </StackItem>
              ))}
            </Stack>
          </StackCard>
        </FadeIn>
      ))}
    </StackGrid>
  </Section>
);

export default TechStackSection;
