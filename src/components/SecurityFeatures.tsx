import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Shield, Lock, Key, Fingerprint } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isVisible: boolean;
  delayMultiplier: number;
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.98,
  },
};

const buttonVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: { scale: 0.95 },
};

const Feature = ({
  icon,
  title,
  description,
  isVisible,
  delayMultiplier,
}: FeatureProps) => (
  <motion.div
    variants={cardVariants}
    initial="hidden"
    animate={isVisible ? "visible" : "hidden"}
    whileHover="hover"
    whileTap="tap"
    transition={{ delay: delayMultiplier * 0.1 }}
    className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
  >
    <motion.div
      className="p-3 bg-millysat/10 rounded-full inline-block mb-4"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-millysat">{icon}</div>
    </motion.div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);

const SecurityFeatures = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="security" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-millysat uppercase border border-millysat rounded-full mb-4"
          >
            Uncompromising Protection
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Industry-Leading Security
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Our rings incorporate sophisticated technology that keeps your
            Bitcoin safe through multi-layered security protocols and innovative
            design.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Feature
            icon={<Shield size={24} />}
            title="Multisignature Protection"
            description="Requires verification from both you and a trusted party for any transaction, ensuring your Bitcoin remains secure even if your ring is compromised."
            isVisible={isInView}
            delayMultiplier={1}
          />

          <Feature
            icon={<Lock size={24} />}
            title="Tamper-Proof Design"
            description="Any attempt to physically access the embedded hardware wallet triggers protective measures to safeguard your assets."
            isVisible={isInView}
            delayMultiplier={2}
          />

          <Feature
            icon={<Key size={24} />}
            title="Private Key Security"
            description="Your private keys never leave the secure element of the ring, protected by military-grade encryption."
            isVisible={isInView}
            delayMultiplier={3}
          />

          <Feature
            icon={<Fingerprint size={24} />}
            title="Biometric Authentication"
            description="Optional biometric verification adds an additional layer of security for accessing your Bitcoin."
            isVisible={isInView}
            delayMultiplier={4}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 p-8 bg-white rounded-xl shadow-lg border border-gray-100 relative overflow-hidden"
        >
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-millysat/5 rounded-full translate-x-1/4 -translate-y-1/4"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="relative z-10">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-xl font-bold mb-4"
            >
              The MillySat Security Promise
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-muted-foreground mb-6"
            >
              Your Bitcoin's security is our highest priority. Our rings are
              designed with a redundant security architecture that ensures your
              assets remain under your control at all times. The multisignature
              technology provides peace of mind that even in the unlikely event
              your ring is lost or stolen, your Bitcoin remains safe and
              inaccessible to unauthorized parties.
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
              <motion.a
                href="#presale"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="px-6 py-2 bg-millysat text-white rounded-md font-medium shadow-sm"
              >
                Secure Your Ring
              </motion.a>
              <motion.a
                href="#"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="px-6 py-2 text-millysat hover:bg-millysat/10 rounded-md font-medium transition-all"
              >
                Learn More About Security
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityFeatures;
