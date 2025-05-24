import { useOutlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";

export default function AnimatedOutlet() {
  const outlet = useOutlet();
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {outlet}
      </motion.div>
    </AnimatePresence>
  );
}
