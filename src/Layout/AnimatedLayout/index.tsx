import { useOutlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Pages } from "../../pages";
import { useEffect, useRef, useState } from "react";

const PagesOrder = [Pages.main, Pages.shop, Pages.rating, Pages.discount];

export default function AnimatedOutlet() {
  const outlet = useOutlet();
  const location = useLocation();
  const ref = useRef(location.pathname);
  const currentPageOrder = PagesOrder.indexOf(location.pathname);

  const [direction, setDirection] = useState<number | string>("right");
  useEffect(() => {
    const nextPageOrder = PagesOrder.indexOf(ref.current);
    if (currentPageOrder > nextPageOrder) {
      setDirection("left");
    } else {
      setDirection("right");
    }

    ref.current = location.pathname;
  }, [location.pathname]);

  const originalConsoleLog = console.log;
  console.log = (...args) => {
    if (typeof args[0] === "string" && args[0].startsWith("[Telegram.WebView] > postEvent")) {
      // игнорируем эти логи
      return;
    }
    originalConsoleLog(...args);
  };

  console.log("ref", ref);
  const variants = {
    initial: () => {
      return {
        x: direction === "left" ? 300 : -300,
        opacity: 0,
      };
    },
    animate: { x: 0, opacity: 1,  },
  };

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          custom={currentPageOrder}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {outlet}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
