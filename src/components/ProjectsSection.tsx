import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { glassPill, GlassHoverCard, TopGlow, textGradient } from "@/components/glass";
import { Section, SectionLabel, SectionTitle } from "@/components/Section";
import MonoLabel from "@/components/MonoLabel";
import FadeIn from "@/components/FadeIn";

const TagPill = styled(Box)({
  ...glassPill,
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 4,
  paddingBottom: 4,
  borderRadius: "6px",
  fontSize: "0.75rem",
  fontFamily: "'JetBrains Mono', monospace",
  color: "hsla(210, 40%, 98%, 0.6)",
});

const ProjectCard = styled(GlassHoverCard)(({ theme: { breakpoints: { up } } }) => ({
  padding: 20,
  position: "relative",
  overflow: "hidden",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  [up('sm')]: { padding: 24 },
  [up('md')]: { padding: 28 },
}));

const ProjectTitle = styled(Typography)(({ theme: { breakpoints: { up } } }) => ({
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "1.125rem",
  fontWeight: 600,
  color: "hsl(210, 40%, 98%)",
  marginBottom: 8,
  transition: "color 0.3s",
  display: "flex",
  alignItems: "center",
  gap: 8,
  [up('sm')]: { fontSize: "1.25rem", marginBottom: 12 },
  [up('md')]: { fontSize: "1.5rem" },
}));

const FeaturedBadge = styled(Box)({
  ...glassPill,
  padding: "2px 8px",
  borderRadius: "4px",
  fontSize: "10px",
  fontFamily: "'JetBrains Mono', monospace",
  color: "hsl(199, 89%, 60%)",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
});

const ProjectsGrid = styled(Box)(({ theme: { breakpoints: { up } } }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 12,
  gridAutoRows: "auto",
  [up('sm')]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 16,
  },
  [up('md')]: { gridTemplateColumns: "repeat(3, 1fr)" },
}));

const GradientSpan = styled('span')({
  ...textGradient,
});

const SectionHeader = styled(Stack)(({ theme: { breakpoints: { up } } }) => ({
  marginBottom: 32,
  [up('md')]: { marginBottom: 56 },
}));

const IconAction = styled(OpenInNewIcon)({
  fontSize: 16,
  color: "hsl(215, 20%, 65%)",
  cursor: "pointer",
  "&:hover": { color: "hsl(199, 89%, 60%)" },
});

const ProjectLink = styled(Link)({
  display: "inline-flex",
  alignItems: "center",
});

const CardContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  position: "relative",
  zIndex: 1,
});

const CardHeader = styled(Stack)({
  marginBottom: 16,
});

const ProjectDescription = styled(Typography)({
  color: "hsl(215, 20%, 65%)",
  fontWeight: 500,
  lineHeight: 1.625,
  fontSize: "0.875rem",
  marginBottom: "auto",
});

const CardFooter = styled(Box)({
  marginTop: 24,
  paddingTop: 16,
  borderTop: "1px solid hsla(210, 40%, 98%, 0.05)",
});

const MetricsLabel = styled(MonoLabel)({
  color: "hsla(199, 89%, 60%, 0.7)",
  marginBottom: 12,
});

const GridCell = styled(Box)(({ theme: { breakpoints: { up } } }) => ({
  [up('md')]: {
    "&[data-featured]": {
      gridColumn: "span 3",
      gridRow: "span 2",
    },
  },
}));

const projects = [
  {
    title: "Fin8",
    description:
      "Aplicação de gerenciamento de finanças pessoais com dashboard interativo, controle de receitas e despesas recorrentes, gestão de dívidas, categorias personalizáveis, geração de relatórios em PDF, lembretes e tema escuro. Autenticação e persistência via Supabase; deploy na Vercel.",
    tags: ["React", "TypeScript", "MUI", "Supabase", "React Query"],
    metrics: "Aplicação web responsiva · Deploy na Vercel",
    featured: true,
  },
];

const ProjectsSection = () => (
  <Section id="projects">
    <FadeIn>
      <SectionHeader
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Box>
          <SectionLabel>// projetos</SectionLabel>
          <SectionTitle variant="h2">
            Trabalhos
            <br />
            <GradientSpan>Selecionados</GradientSpan>
          </SectionTitle>
        </Box>
      </SectionHeader>
    </FadeIn>

    <ProjectsGrid>
      {projects.map((project, i) => (
        <GridCell
          key={project.title}
          data-featured={project.featured ? "" : undefined}
        >
          <FadeIn
            y={30}
            delay={i * 0.1}
            style={{ height: "100%" }}
          >
            <ProjectCard>
              {project.featured && <TopGlow />}

              <CardContent>
                <CardHeader
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <Box>
                    {project.featured && (
                      <FeaturedBadge>Featured</FeaturedBadge>
                    )}
                  </Box>
                  <Stack direction="row" spacing={1}>
                    <ProjectLink
                      href="https://fineight.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none"
                    >
                      <IconAction />
                    </ProjectLink>
                  </Stack>
                </CardHeader>

                <ProjectTitle variant="h3">
                  {project.title}
                </ProjectTitle>

                <ProjectDescription>
                  {project.description}
                </ProjectDescription>

                <CardFooter>
                  <MetricsLabel>
                    {project.metrics}
                  </MetricsLabel>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {project.tags.map((tag) => (
                      <TagPill key={tag}>{tag}</TagPill>
                    ))}
                  </Stack>
                </CardFooter>
              </CardContent>
            </ProjectCard>
          </FadeIn>
        </GridCell>
      ))}
    </ProjectsGrid>
  </Section>
);

export default ProjectsSection;
