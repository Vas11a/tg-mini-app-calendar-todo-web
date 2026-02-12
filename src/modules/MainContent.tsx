import { motion, AnimatePresence } from "framer-motion";
import CalendarModule from "./calendar/CalendarModule";
import DayModule from "./day/DayModule";
import SettingsModule from "./settings/SettingsModule";
import type { IPage } from "../types";

const MainContent = ({ page }: { page: IPage }) => {
  return (
    <div style={{ perspective: 1200 }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ rotateY: -90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: 90, opacity: 0 }}
          transition={{
            duration: 0.25,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {page === "calendar" && <CalendarModule />}
          {page === "todo" && <DayModule />}
          {page === "settings" && <SettingsModule />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MainContent;
