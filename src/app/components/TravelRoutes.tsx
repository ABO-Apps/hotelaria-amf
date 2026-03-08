import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface Route {
  id: number;
  startX: string;
  startY: string;
  endX: string;
  endY: string;
  controlX1: string;
  controlY1: string;
  controlX2: string;
  controlY2: string;
  city1: string;
  city2: string;
}

export function TravelRoutes() {
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const routes: Route[] = [
    {
      id: 1,
      startX: "10%",
      startY: "20%",
      endX: "85%",
      endY: "35%",
      controlX1: "30%",
      controlY1: "10%",
      controlX2: "65%",
      controlY2: "45%",
      city1: "Brasil",
      city2: "Europa",
    },
    {
      id: 2,
      startX: "15%",
      startY: "45%",
      endX: "75%",
      endY: "55%",
      controlX1: "35%",
      controlY1: "35%",
      controlX2: "55%",
      controlY2: "65%",
      city1: "América do Sul",
      city2: "Ásia",
    },
    {
      id: 3,
      startX: "25%",
      startY: "70%",
      endX: "80%",
      endY: "25%",
      controlX1: "40%",
      controlY1: "85%",
      controlX2: "65%",
      controlY2: "10%",
      city1: "América Latina",
      city2: "América do Norte",
    },
    {
      id: 4,
      startX: "20%",
      startY: "85%",
      endX: "70%",
      endY: "75%",
      controlX1: "35%",
      controlY1: "75%",
      controlX2: "55%",
      controlY2: "85%",
      city1: "Brasil",
      city2: "Oceania",
    },
    {
      id: 5,
      startX: "5%",
      startY: "50%",
      endX: "90%",
      endY: "45%",
      controlX1: "25%",
      controlY1: "40%",
      controlX2: "70%",
      controlY2: "55%",
      city1: "Sul",
      city2: "Norte",
    },
  ];

  // Create scroll-based animations for each route
  const routeProgress1 = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const routeProgress2 = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);
  const routeProgress3 = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const routeProgress4 = useTransform(scrollYProgress, [0.45, 0.65], [0, 1]);
  const routeProgress5 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  const progressMap = [routeProgress1, routeProgress2, routeProgress3, routeProgress4, routeProgress5];

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradient for the routes */}
          <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f4d03f" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#ffd700" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#f4d03f" stopOpacity="0.3" />
          </linearGradient>

          {/* Animated dashed pattern */}
          <pattern id="dashedPattern" patternUnits="userSpaceOnUse" width="20" height="2">
            <line x1="0" y1="1" x2="10" y2="1" stroke="#f4d03f" strokeWidth="1" />
          </pattern>
        </defs>

        {routes.map((route, index) => {
          const progress = progressMap[index];
          const pathId = `route-${route.id}`;

          return (
            <g key={route.id}>
              {/* The route path */}
              <motion.path
                id={pathId}
                d={`M ${route.startX} ${route.startY} C ${route.controlX1} ${route.controlY1}, ${route.controlX2} ${route.controlY2}, ${route.endX} ${route.endY}`}
                fill="none"
                stroke="url(#routeGradient)"
                strokeWidth={isMobile ? "1" : "1.5"}
                strokeDasharray="10 5"
                initial={{ pathLength: 0, opacity: 0 }}
                style={{
                  pathLength: progress,
                  opacity: useTransform(progress, [0, 0.1, 0.9, 1], [0, 0.6, 0.6, 0.4]),
                }}
              />

              {/* Start destination dot */}
              <motion.circle
                cx={route.startX}
                cy={route.startY}
                r={isMobile ? "3" : "4"}
                fill="#f4d03f"
                initial={{ scale: 0, opacity: 0 }}
                style={{
                  scale: useTransform(progress, [0, 0.2], [0, 1]),
                  opacity: useTransform(progress, [0, 0.2], [0, 1]),
                }}
              />

              {/* Start destination ring */}
              <motion.circle
                cx={route.startX}
                cy={route.startY}
                r={isMobile ? "6" : "8"}
                fill="none"
                stroke="#f4d03f"
                strokeWidth="1"
                initial={{ scale: 0, opacity: 0 }}
                style={{
                  scale: useTransform(progress, [0, 0.2, 0.4], [0, 1, 1.5]),
                  opacity: useTransform(progress, [0, 0.2, 0.4], [0, 0.5, 0]),
                }}
              />

              {/* End destination dot */}
              <motion.circle
                cx={route.endX}
                cy={route.endY}
                r={isMobile ? "3" : "4"}
                fill="#ffd700"
                initial={{ scale: 0, opacity: 0 }}
                style={{
                  scale: useTransform(progress, [0.8, 1], [0, 1]),
                  opacity: useTransform(progress, [0.8, 1], [0, 1]),
                }}
              />

              {/* End destination ring */}
              <motion.circle
                cx={route.endX}
                cy={route.endY}
                r={isMobile ? "6" : "8"}
                fill="none"
                stroke="#ffd700"
                strokeWidth="1"
                initial={{ scale: 0, opacity: 0 }}
                style={{
                  scale: useTransform(progress, [0.8, 1, 1.2], [0, 1, 1.5]),
                  opacity: useTransform(progress, [0.8, 1, 1.2], [0, 0.5, 0]),
                }}
              />

              {/* Animated plane icon along the route */}
              <motion.g
                initial={{ opacity: 0 }}
                style={{
                  opacity: useTransform(progress, [0.1, 0.2, 0.8, 0.9], [0, 1, 1, 0]),
                }}
              >
                <motion.path
                  d="M -6 0 L 0 -2 L 6 0 L 4 2 L 2 2 L 0 4 L -2 2 L -4 2 Z"
                  fill="#f4d03f"
                  style={{
                    offsetPath: `path("M ${route.startX} ${route.startY} C ${route.controlX1} ${route.controlY1}, ${route.controlX2} ${route.controlY2}, ${route.endX} ${route.endY}")`,
                    offsetDistance: useTransform(progress, [0, 1], ["0%", "100%"]),
                  }}
                />
              </motion.g>
            </g>
          );
        })}
      </svg>

      {/* City labels that appear with routes */}
      <div className="absolute inset-0">
        {routes.map((route, index) => {
          const progress = progressMap[index];
          
          return (
            <div key={`labels-${route.id}`}>
              {!isMobile && (
                <>
                  {/* Start city label */}
                  <motion.div
                    className="absolute text-xs font-serif text-[#1a4d2e] bg-[#f4d03f]/90 px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap"
                    style={{
                      left: route.startX,
                      top: route.startY,
                      x: "-50%",
                      y: "20px",
                      opacity: useTransform(progress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]),
                    }}
                  >
                    {route.city1}
                  </motion.div>

                  {/* End city label */}
                  <motion.div
                    className="absolute text-xs font-serif text-[#1a4d2e] bg-[#ffd700]/90 px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap"
                    style={{
                      left: route.endX,
                      top: route.endY,
                      x: "-50%",
                      y: "-30px",
                      opacity: useTransform(progress, [0, 0.8, 1], [0, 0, 1]),
                    }}
                  >
                    {route.city2}
                  </motion.div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}