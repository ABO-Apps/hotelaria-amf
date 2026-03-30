import { motion } from "motion/react";
import { Plane, Star, MapPin, Compass, Map } from "lucide-react";

export function AnimatedBackground() {
  const elements = [
    { Icon: Plane, x: "10%", y: "15%", delay: 0, duration: 45 },
    { Icon: Star, x: "85%", y: "20%", delay: 2, duration: 35 },
    { Icon: MapPin, x: "20%", y: "60%", delay: 4, duration: 40 },
    { Icon: Compass, x: "75%", y: "70%", delay: 1, duration: 50 },
    { Icon: Map, x: "50%", y: "40%", delay: 3, duration: 45 },
    { Icon: Star, x: "30%", y: "85%", delay: 5, duration: 38 },
    { Icon: Plane, x: "90%", y: "50%", delay: 2.5, duration: 42 },
    { Icon: MapPin, x: "65%", y: "25%", delay: 4.5, duration: 48 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-[0.04]">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: element.x,
            top: element.y,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
        >
          <element.Icon className="w-12 h-12 md:w-16 md:h-16 text-[#d8aa2b]" />
        </motion.div>
      ))}
      
      {/* Passport stamp style elements */}
      <motion.div
        className="absolute left-[15%] top-[30%] w-20 h-20 border-2 border-[#d8aa2b] rounded-full opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute right-[25%] bottom-[35%] w-24 h-24 border-2 border-[#d8aa2b] rounded-full opacity-20"
        animate={{ rotate: -360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
