import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { GlassHoverCard, TopGlow, textGradient, glassCard } from "@/components/glass";
import { Section, SectionLabel, SectionTitle } from "@/components/Section";
import FadeIn from "@/components/FadeIn";

const GradientSpan = styled('span')({
  ...textGradient,
});

const SectionHeader = styled(Box)(({ theme: { breakpoints: { up } } }) => ({
  marginBottom: 32,
  [up('md')]: { marginBottom: 56 },
}));

const Timeline = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 15,
  position: "relative",
});

const TimelineConnector = styled(Box)({
  position: "absolute",
  left: 19,
  top: 40,
  bottom: 40,
  width: 1,
  background: "linear-gradient(to bottom, hsla(199, 89%, 60%, 0.3), hsla(234, 89%, 74%, 0.15), transparent)",
});

const TimelineEntry = styled(Stack)({
  position: "relative",
});

const TimelineNode = styled(Box)({
  width: 40,
  height: 40,
  borderRadius: "50%",
  ...glassCard,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  position: "relative",
  zIndex: 1,
});

const NodeDot = styled(Box)({
  width: 10,
  height: 10,
  borderRadius: "50%",
  background: "linear-gradient(135deg, hsl(var(--glow-cyan)), hsl(var(--glow-indigo)))",
  boxShadow: "0 0 12px hsla(199, 89%, 60%, 0.4)",
});

const NodeDotMuted = styled(Box)({
  width: 8,
  height: 8,
  borderRadius: "50%",
  background: "hsla(215, 20%, 65%, 0.3)",
});

const EntryCard = styled(GlassHoverCard)(({ theme: { breakpoints: { up } } }) => ({
  padding: 24,
  position: "relative",
  overflow: "hidden",
  flex: 1,
  [up('sm')]: { padding: 28 },
  [up('md')]: { padding: 32 },
}));

const EntryContent = styled(Box)({
  position: "relative",
  zIndex: 1,
});

const EntryHeader = styled(Stack)(({ theme: { breakpoints: { up } } }) => ({
  marginBottom: 20,
  gap: 4,
  [up('sm')]: { flexDirection: "row", alignItems: "baseline", justifyContent: "space-between", gap: 16 },
}));

const CompanyName = styled(Typography)({
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "1.25rem",
  fontWeight: 700,
  color: "hsl(210, 40%, 98%)",
});

const RolePeriod = styled(Stack)({
  gap: 4,
});

const RoleTitle = styled(Typography)({
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "0.8rem",
  fontWeight: 500,
  color: "hsl(199, 89%, 60%)",
});

const Period = styled(Typography)({
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "0.7rem",
  color: "hsla(215, 20%, 65%, 0.5)",
  letterSpacing: "0.05em",
});

const Description = styled(Typography)({
  fontSize: "0.9rem",
  color: "hsl(215, 20%, 65%)",
  fontWeight: 500,
  lineHeight: 1.7,
  marginBottom: 20,
});

const TagsWrap = styled(Stack)({
  flexWrap: "wrap",
  gap: 6,
});

const Tag = styled('span')({
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "0.7rem",
  color: "hsla(199, 89%, 60%, 0.8)",
  padding: "4px 10px",
  borderRadius: 6,
  background: "hsla(199, 89%, 60%, 0.06)",
  border: "1px solid hsla(199, 89%, 60%, 0.1)",
  whiteSpace: "nowrap",
  letterSpacing: "0.02em",
});

const EducationEntry = styled(Stack)({
  position: "relative",
});

const EducationContent = styled(Box)({
  flex: 1,
  paddingTop: 8,
  paddingBottom: 8,
});

const EducationLabel = styled(Typography)({
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "0.7rem",
  color: "hsla(215, 20%, 65%, 0.4)",
  textTransform: "uppercase",
  letterSpacing: "0.15em",
  marginBottom: 4,
});

const EducationText = styled(Typography)({
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "0.95rem",
  fontWeight: 600,
  color: "hsla(210, 40%, 98%, 0.8)",
});

const EducationSub = styled(Typography)({
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "0.75rem",
  color: "hsla(215, 20%, 65%, 0.5)",
  marginTop: 2,
});

const experiences = [
  {
    company: "Useall Software",
    role: "Desenvolvedor Backend",
    period: "Abr/2026 – Atual",
    description: "Desenvolvimento e manutenção de APIs e serviços backend para sistemas do setor elétrico, com foco em integrações, performance e confiabilidade.",
    tags: ["C# .NET", "APIs REST", "Oracle", "PostgreSQL"],
    featured: true,
  },
  {
    company: "Witt Tecnologia",
    role: "Desenvolvedor Frontend",
    period: "Jul/2025 – Abr/2026",
    description: "Atuação na manutenção e evolução do Design System utilizado pelas squads, garantindo consistência visual, qualidade e documentação dos componentes compartilhados.",
    tags: ["Design System", "React", "Storybook", "Testes", "CI/CD", "Monorepo", "Code Review", "Design Tokens"],
    featured: false,
  },
  {
    company: "Useall Software",
    role: "Desenvolvedor",
    period: "Out/2022 – Jul/2025",
    description: "Desenvolvimento e manutenção de funcionalidades para sistemas web do setor elétrico — desde telas com React até APIs e integrações com Oracle e PostgreSQL.",
    tags: ["React", "CI/CD", "Ext JS", "APIs REST", "Oracle", "PostgreSQL"],
    featured: false,
  },
];

const ExperienceSection = () => (
  <Section id="experience">
    <FadeIn>
      <SectionHeader>
        <SectionLabel>// experiência</SectionLabel>
        <SectionTitle variant="h2">
          Trajetória <GradientSpan>Profissional</GradientSpan>
        </SectionTitle>
      </SectionHeader>
    </FadeIn>

    <Timeline>
      <TimelineConnector />

      {experiences.map((exp, i) => (
        <FadeIn key={exp.company} delay={i * 0.15}>
          <TimelineEntry direction="row" spacing={2.5}>
            <TimelineNode>
              {exp.featured ? <NodeDot /> : <NodeDotMuted />}
            </TimelineNode>
            <EntryCard>
              {exp.featured && <TopGlow />}
              <EntryContent>
                <EntryHeader>
                  <Box>
                    <CompanyName>{exp.company}</CompanyName>
                    <RoleTitle>{exp.role}</RoleTitle>
                  </Box>
                  <RolePeriod>
                    <Period>{exp.period}</Period>
                  </RolePeriod>
                </EntryHeader>
                <Description>{exp.description}</Description>
                <TagsWrap direction="row">
                  {exp.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </TagsWrap>
              </EntryContent>
            </EntryCard>
          </TimelineEntry>
        </FadeIn>
      ))}

      <FadeIn delay={0.3}>
        <EducationEntry direction="row" spacing={2.5}>
          <TimelineNode>
            <NodeDotMuted />
          </TimelineNode>
          <EducationContent>
            <EducationLabel>formação</EducationLabel>
            <EducationText>Bacharelado em Ciência da Computação</EducationText>
            <EducationSub>UNESC – Universidade do Extremo Sul Catarinense</EducationSub>
          </EducationContent>
        </EducationEntry>
      </FadeIn>
    </Timeline>
  </Section>
);

export default ExperienceSection;
