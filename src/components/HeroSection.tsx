import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Smooth parallax effect using Framer Motion
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.3,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeInUpVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      y: -2,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Background Images with Parallax */}
      <motion.div
        className="absolute inset-0 flex z-0"
        style={{ y: backgroundY }}
      >
        <motion.div
          variants={backgroundVariants}
          initial="hidden"
          animate="visible"
          className="w-1/2 h-full bg-[url('/ring_background.png')] bg-cover bg-center"
        />
        <motion.div
          variants={backgroundVariants}
          initial="hidden"
          animate="visible"
          className="w-1/2 h-full bg-[url('/ring_background2.png')] bg-cover bg-center"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-white/80 z-10" />

      <motion.div
        className="container relative z-20 px-4 mx-auto text-center max-w-5xl pt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={fadeInUpVariants}
          className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-millysat uppercase border border-millysat rounded-full"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
        >
          Luxury meets Bitcoin security
        </motion.div>

        <motion.h1
          variants={titleVariants}
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
        >
          Elegance and Security
          <motion.span className="block mt-2" variants={titleVariants}>
            in Perfect <span className="text-millysat">Harmony</span>
          </motion.span>
        </motion.h1>

        <motion.p
          variants={fadeInUpVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
        >
          MillySat crafts luxury rings that not only captivate with their beauty
          but also secure your Bitcoin with unparalleled protection.
        </motion.p>

        <motion.div
          variants={fadeInUpVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-32"
        >
          <motion.a
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            href="#products"
            className="px-8 py-3 font-medium rounded-md bg-millysat text-white transition-all shadow-lg hover:shadow-xl"
          >
            Discover Our Rings
          </motion.a>
          <motion.a
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            href="#presale"
            className="px-8 py-3 font-medium rounded-md bg-transparent border-2 border-millysat text-millysat hover:bg-millysat/5 transition-all"
          >
            Join Pre-Sale
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: [0, 10, 0],
            transition: {
              opacity: { duration: 0.5, delay: 1.5 },
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            },
          }}
          className={cn(
            "flex flex-col items-center justify-center text-sm text-muted-foreground hover:text-millysat transition-colors"
          )}
        >
          <span className="mb-2">Scroll to explore</span>
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
