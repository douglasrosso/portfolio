import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import ButtonBase from "@mui/material/ButtonBase";

const Nav = styled('nav', { shouldForwardProp: (p) => p !== 'scrolled' })<{ scrolled?: boolean }>(({ scrolled, theme: { breakpoints: { up } } }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  paddingLeft: 16,
  paddingRight: 16,
  paddingTop: 12,
  paddingBottom: 12,
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  [up('sm')]: { paddingLeft: 24, paddingRight: 24 },
  [up('md')]: { paddingLeft: 48, paddingRight: 48 },
  ...(scrolled && {
    background: "hsla(222, 47%, 11%, 0.7)",
    backdropFilter: "blur(20px) saturate(1.5)",
    WebkitBackdropFilter: "blur(20px) saturate(1.5)",
    borderBottom: "1px solid hsla(0, 0%, 100%, 0.06)",
  }),
}));

const Logo = styled(Link)({
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 700,
  fontSize: "1.1rem",
  color: "hsla(210, 40%, 98%, 0.9)",
  textDecoration: "none",
  letterSpacing: "-0.02em",
  transition: "color 0.3s",
  flexShrink: 0,
  "&:hover": { color: "hsl(199, 89%, 60%)" },
});

const NavPill = styled(Stack)(({ theme: { breakpoints: { up } } }) => ({
  background: "hsla(0, 0%, 100%, 0.04)",
  border: "1px solid hsla(0, 0%, 100%, 0.08)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  borderRadius: "12px",
  padding: 8,
  gap: 4,
  display: "none",
  [up('sm')]: { display: "flex" },
}));

const NavItem = styled(Link)<{ active?: string }>(({ active }) => ({
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.8rem",
  fontWeight: 500,
  color: active === "true" ? "hsl(199, 89%, 60%)" : "hsla(215, 20%, 65%, 0.7)",
  textDecoration: "none",
  paddingLeft: 16,
  paddingRight: 16,
  paddingTop: 6.4,
  paddingBottom: 6.4,
  borderRadius: "8px",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  whiteSpace: "nowrap",
  ...(active === "true" && { background: "hsla(199, 89%, 60%, 0.1)" }),
  "&:hover": {
    color: "hsla(210, 40%, 98%, 0.9)",
    background: "hsla(0, 0%, 100%, 0.06)",
  },
}));

const HamburgerBtn = styled(ButtonBase)(({ theme: { breakpoints: { up } } }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 5,
  width: 40,
  height: 40,
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 8,
  borderRadius: "8px",
  transition: "background 0.3s",
  "&:hover": { background: "hsla(0, 0%, 100%, 0.06)" },
  [up('sm')]: { display: "none" },
}));

const HamburgerLine = styled('span', { shouldForwardProp: (p) => p !== 'open' })<{ open?: boolean }>(({ open }) => ({
  display: "block",
  width: 20,
  height: 2,
  borderRadius: 1,
  background: "hsla(210, 40%, 98%, 0.8)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  transformOrigin: "center",
  "&:first-of-type": open ? { transform: "translateY(7px) rotate(45deg)" } : {},
  "&:nth-of-type(2)": open ? { opacity: 0, transform: "scaleX(0)" } : {},
  "&:last-of-type": open ? { transform: "translateY(-7px) rotate(-45deg)" } : {},
}));

const MobileMenu = styled(Box, { shouldForwardProp: (p) => p !== 'open' })<{ open?: boolean }>(({ open, theme: { breakpoints: { up } } }) => ({
  display: open ? "flex" : "none",
  flexDirection: "column",
  gap: 4,
  position: "absolute",
  top: "100%",
  left: 16,
  right: 16,
  background: "hsla(222, 47%, 11%, 0.95)",
  backdropFilter: "blur(20px) saturate(1.5)",
  WebkitBackdropFilter: "blur(20px) saturate(1.5)",
  border: "1px solid hsla(0, 0%, 100%, 0.08)",
  borderRadius: "12px",
  padding: 12,
  [up('sm')]: { display: "none" },
}));

const MobileNavItem = styled(Link)<{ active?: string }>(({ active }) => ({
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.9rem",
  fontWeight: 500,
  color: active === "true" ? "hsl(199, 89%, 60%)" : "hsla(215, 20%, 65%, 0.8)",
  textDecoration: "none",
  padding: "12px 16px",
  borderRadius: "8px",
  transition: "all 0.2s",
  minHeight: 44,
  display: "flex",
  alignItems: "center",
  ...(active === "true" && { background: "hsla(199, 89%, 60%, 0.1)" }),
  "&:hover": {
    color: "hsla(210, 40%, 98%, 0.9)",
    background: "hsla(0, 0%, 100%, 0.06)",
  },
}));

const NavInner = styled(Stack)({
  maxWidth: 1280,
  marginLeft: "auto",
  marginRight: "auto",
});

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Projetos", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Experiência", href: "#experience" },
  { label: "Contato", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const atBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50;
      if (atBottom) {
        setActiveSection("contact");
        return;
      }

      const sections = ["hero", "projects", "stack", "experience", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Nav
      scrolled={scrolled || mobileOpen}
    >
      <NavInner direction="row" alignItems="center" justifyContent="space-between">
        <Logo
          href="#hero"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleClick(e, "#hero")}
        >
          {"<DMR />"}
        </Logo>

        <NavPill direction="row" spacing={0.5}>
          {navLinks.map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              active={activeSection === link.href.replace("#", "") ? "true" : undefined}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleClick(e, link.href)}
            >
              {link.label}
            </NavItem>
          ))}
        </NavPill>

        <HamburgerBtn disableRipple onClick={() => setMobileOpen((v) => !v)} aria-label="Menu">
          <HamburgerLine open={mobileOpen} />
          <HamburgerLine open={mobileOpen} />
          <HamburgerLine open={mobileOpen} />
        </HamburgerBtn>
      </NavInner>

      <MobileMenu open={mobileOpen}>
        {navLinks.map((link) => (
          <MobileNavItem
            key={link.href}
            href={link.href}
            active={activeSection === link.href.replace("#", "") ? "true" : undefined}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleClick(e, link.href)}
          >
            {link.label}
          </MobileNavItem>
        ))}
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
