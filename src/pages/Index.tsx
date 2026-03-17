import LiquidBlobs from "@/components/LiquidBlobs";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const PageRoot = styled(Box)({
  minHeight: "100vh",
  backgroundColor: "hsl(222, 47%, 11%)",
  position: "relative",
});

const Index = () => (
  <PageRoot>
    <LiquidBlobs />
    <Navbar />
    <HeroSection />
    <ProjectsSection />
    <TechStackSection />
    <ExperienceSection />
    <ContactSection />
    <Footer />
    <ScrollToTop />
  </PageRoot>
);

export default Index;
