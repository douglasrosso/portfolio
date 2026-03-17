import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const FloatingButton = styled(ButtonBase)({
  width: 44,
  height: 44,
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "hsla(0, 0%, 100%, 0.06)",
  border: "1px solid hsla(0, 0%, 100%, 0.1)",
  backdropFilter: "blur(20px) saturate(1.5)",
  WebkitBackdropFilter: "blur(20px) saturate(1.5)",
  color: "hsla(210, 40%, 98%, 0.7)",
  cursor: "pointer",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    background: "hsla(199, 89%, 60%, 0.15)",
    borderColor: "hsla(199, 89%, 60%, 0.3)",
    color: "hsl(199, 89%, 60%)",
    transform: "translateY(-2px)",
    boxShadow: "0 0 30px -5px hsla(199, 89%, 60%, 0.2)",
  },
});

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25 }}
          style={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000 }}
        >
          <FloatingButton disableRipple onClick={scrollToTop}>
            <KeyboardArrowUpIcon fontSize="small" />
          </FloatingButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
