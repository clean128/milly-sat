import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Bitcoin, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ringImage1 = "/ring_background.png";
const ringImage2 = "/ring_background2.png";

interface Dot {
  id: string;
  initialX: number;
  initialY: number;
  size: number;
  color: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

// Generate scattered background dots
const generateDots = () => {
  const colors = [
    "#00C8FF", // Light blue
    "#9333EA", // Purple
    "#3B82F6", // Blue
    "#EC4899", // Pink
    "#10B981", // Green
    "#F59E0B", // Yellow
    "#FF9999", // Coral
  ];

  const dots: Dot[] = [];
  const numDots = 25; // Fewer dots for a cleaner look
  const minSize = 6; // Much smaller dots
  const maxSize = 12; // Maximum size for small dots

  // Helper function to create a dot with bias towards edges
  const createDot = () => {
    // Create clusters near the corners and edges
    const positions = [
      // Top scattered
      { x: Math.random() * 30 + 10, y: Math.random() * 20 },
      { x: Math.random() * 30 + 50, y: Math.random() * 15 },
      { x: Math.random() * 30 + 80, y: Math.random() * 25 },
      // Right scattered
      { x: Math.random() * 20 + 85, y: Math.random() * 30 + 30 },
      { x: Math.random() * 15 + 90, y: Math.random() * 30 + 60 },
      // Bottom scattered
      { x: Math.random() * 30 + 70, y: Math.random() * 20 + 85 },
      { x: Math.random() * 30 + 40, y: Math.random() * 15 + 90 },
      // Left scattered
      { x: Math.random() * 20, y: Math.random() * 30 + 40 },
      { x: Math.random() * 15, y: Math.random() * 30 + 70 },
      // Center sparse
      { x: Math.random() * 40 + 30, y: Math.random() * 40 + 30 },
    ];

    // Add some truly random positions
    for (let i = 0; i < 15; i++) {
      positions.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
      });
    }

    return positions.map((pos, index) => ({
      id: `dot-${index}`,
      initialX: pos.x * (window.innerWidth / 100),
      initialY: pos.y * (window.innerHeight / 100),
      size: minSize + Math.random() * (maxSize - minSize),
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  };

  return createDot();
};

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState<"10M" | "100M">("10M");
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dots, setDots] = useState<Dot[]>([]);

  // Initialize dots after component mounts to access window dimensions
  useEffect(() => {
    setDots(generateDots());
  }, []);

  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="py-20 relative bg-white overflow-hidden"
    >
      {/* Background dots */}
      <div className="fixed inset-0 pointer-events-none">
        {dots.map((dot) => {
          const dx = mousePosition.x - dot.initialX;
          const dy = mousePosition.y - dot.initialY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 200; // Smaller effect radius for smaller dots

          let x = dot.initialX;
          let y = dot.initialY;

          if (distance < maxDistance) {
            const force = (1 - distance / maxDistance) * 50; // Gentler force
            const angle = Math.atan2(dy, dx);
            x = dot.initialX - Math.cos(angle) * force;
            y = dot.initialY - Math.sin(angle) * force;
          }

          return (
            <motion.div
              key={dot.id}
              className="fixed rounded-full"
              initial={{ x: dot.initialX, y: dot.initialY }}
              animate={{ x, y }}
              style={{
                width: dot.size,
                height: dot.size,
                backgroundColor: dot.color,
                opacity: 0.4,
                filter: "blur(1px)",
                mixBlendMode: "screen",
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
              }}
            />
          );
        })}
      </div>

      <div className="container relative mx-auto px-4 max-w-6xl z-20">
        <div className="text-center mb-16">
          <span
            className={cn(
              "inline-block px-3 py-1 text-xs font-medium tracking-wider text-millysat uppercase border border-millysat rounded-full mb-4",
              isVisible ? "animate-fade-in" : "opacity-0"
            )}
          >
            Luxury Collection
          </span>
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold mb-6",
              isVisible
                ? "animate-fade-in [animation-delay:200ms]"
                : "opacity-0"
            )}
          >
            Exclusive Bitcoin Rings
          </h2>
          <p
            className={cn(
              "text-lg text-muted-foreground max-w-3xl mx-auto",
              isVisible
                ? "animate-fade-in [animation-delay:400ms]"
                : "opacity-0"
            )}
          >
            Seamlessly blending exquisite craftsmanship with cutting-edge
            technology, our rings offer a sophisticated way to secure your
            Bitcoin.
          </p>
        </div>

        {/* Product Tabs */}
        <div
          className={cn(
            "flex justify-center mb-12",
            isVisible ? "animate-fade-in [animation-delay:600ms]" : "opacity-0"
          )}
        >
          <div className="inline-flex p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => setActiveTab("10M")}
              className={cn(
                "px-6 py-2 text-sm font-medium rounded-md transition-all",
                activeTab === "10M"
                  ? "bg-white shadow-sm text-millysat"
                  : "text-gray-600 hover:text-millysat"
              )}
            >
              10M Sats Ring
            </button>
            <button
              onClick={() => setActiveTab("100M")}
              className={cn(
                "px-6 py-2 text-sm font-medium rounded-md transition-all",
                activeTab === "100M"
                  ? "bg-white shadow-sm text-millysat"
                  : "text-gray-600 hover:text-millysat"
              )}
            >
              100M Sats Ring (1 BTC)
            </button>
          </div>
        </div>

        {/* Product Display */}
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
            isVisible ? "animate-fade-in [animation-delay:800ms]" : "opacity-0"
          )}
        >
          {/* Ring Image */}
          <motion.div className="flex justify-center" variants={fadeInUp}>
            <div className="relative">
              <motion.div
                className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-millysat/10 to-gray-50 flex items-center justify-center shadow-lg"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, 0],
                  boxShadow: [
                    "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    "0 10px 15px -3px rgb(0 0 0 / 0.2)",
                    "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                  ],
                }}
                transition={{
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    className="relative w-48 h-48 md:w-64 md:h-64"
                    initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotateY: 0,
                      filter: [
                        "brightness(1)",
                        "brightness(1.2)",
                        "brightness(1)",
                      ],
                    }}
                    exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      filter: {
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                      },
                    }}
                  >
                    <motion.img
                      src={activeTab === "10M" ? ringImage1 : ringImage2}
                      alt={
                        activeTab === "10M" ? "10M Sats Ring" : "100M Sats Ring"
                      }
                      className="w-full h-full object-contain"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        rotate: {
                          duration: 20,
                          ease: "linear",
                          repeat: Infinity,
                        },
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      animate={{
                        background: [
                          "radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 100%)",
                          "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                  </motion.div>
                </AnimatePresence>
              </motion.div>
              <motion.div
                className="absolute top-0 right-0 bg-millysat text-white text-xs font-bold px-3 py-1 rounded-full shadow-md"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                {activeTab === "10M" ? "10M SATS" : "100M SATS"}
              </motion.div>
            </div>
          </motion.div>

          {/* Ring Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              {activeTab === "10M"
                ? "10M Sats Elite Ring"
                : "100M Sats Premium Ring (1 BTC)"}
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 bg-millysat/10 rounded-full">
                  <Bitcoin size={20} className="text-millysat" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Secured Bitcoin</h4>
                  <p className="text-muted-foreground">
                    {activeTab === "10M"
                      ? "Securely stores 10 million satoshis (0.1 BTC) within an elegant design."
                      : "Luxuriously secures a full Bitcoin (100 million satoshis) in our premium design."}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 bg-millysat/10 rounded-full">
                  <Shield size={20} className="text-millysat" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Multisig Security</h4>
                  <p className="text-muted-foreground">
                    Enhanced with multisignature technology requiring approval
                    from you and a trusted party, ensuring your Bitcoin remains
                    secure even if the ring is lost or stolen.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mt-8">
                <p className="font-medium mb-2">Limited Edition</p>
                <p className="text-sm text-muted-foreground mb-4">
                  {activeTab === "10M"
                    ? "Only 5000 pieces will ever be crafted. Reserve yours in our exclusive pre-sale."
                    : "Ultra-limited to just 1000 pieces worldwide. Pre-order to secure this rare collectible."}
                </p>

                <a
                  href="#presale"
                  className="w-full flex justify-center py-3 px-4 bg-millysat text-white rounded-md font-medium hover:bg-millysat/90 transition-all shadow-sm"
                >
                  Reserve Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
