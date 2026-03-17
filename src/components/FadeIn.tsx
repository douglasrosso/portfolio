import { motion, type HTMLMotionProps } from "framer-motion";

interface FadeInProps extends Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "viewport"> {
  y?: number;
  delay?: number;
  duration?: number;
}

const FadeIn = ({ y = 20, delay = 0, duration = 0.6, children, ...rest }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration }}
    {...rest}
  >
    {children}
  </motion.div>
);

export default FadeIn;
