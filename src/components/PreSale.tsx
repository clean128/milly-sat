import { useRef, useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { cn } from "@/lib/utils";
import { Check, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: { scale: 0.98 },
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

const PreSale = () => {
  const { connected, publicKey } = useWallet();
  const [selectedRing, setSelectedRing] = useState<"10M" | "100M">("10M");
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const handlePreSaleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!connected) {
      toast.error("Please connect your wallet to participate in the pre-sale");
      return;
    }

    toast.success(
      `Successfully registered for the ${
        selectedRing === "10M" ? "10M Sats" : "100M Sats"
      } ring pre-sale!`
    );
  };

  return (
    <section
      id="presale"
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Decorative elements with animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-0 w-72 h-72 bg-millysat/5 rounded-full -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-0 right-0 w-80 h-80 bg-millysat/5 rounded-full translate-x-1/3 translate-y-1/3"
      />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-millysat uppercase border border-millysat rounded-full mb-4"
          >
            Limited Availability
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Join Our Exclusive Pre-Sale
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Be among the first to own a MillySat ring. Reserve your piece now
            before manufacturing begins.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100 p-8"
        >
          <form onSubmit={handlePreSaleSubmit}>
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">
                Select Your Ring
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => setSelectedRing("10M")}
                  className={cn(
                    "border rounded-lg p-4 cursor-pointer transition-all",
                    selectedRing === "10M"
                      ? "border-millysat bg-millysat/5 shadow-sm"
                      : "border-gray-200 hover:border-millysat/50"
                  )}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">10M Sats Ring</h3>
                    <AnimatePresence>
                      {selectedRing === "10M" && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 25,
                          }}
                        >
                          <Check size={18} className="text-millysat" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    0.1 BTC secured in an elegant design
                  </p>
                  <p className="font-medium text-millysat">
                    Limited to 100 pieces
                  </p>
                </motion.div>

                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                  transition={{ delay: 0.1 }}
                  onClick={() => setSelectedRing("100M")}
                  className={cn(
                    "border rounded-lg p-4 cursor-pointer transition-all",
                    selectedRing === "100M"
                      ? "border-millysat bg-millysat/5 shadow-sm"
                      : "border-gray-200 hover:border-millysat/50"
                  )}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">100M Sats Ring (1 BTC)</h3>
                    <AnimatePresence>
                      {selectedRing === "100M" && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 25,
                          }}
                        >
                          <Check size={18} className="text-millysat" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Full Bitcoin in our premium design
                  </p>
                  <p className="font-medium text-millysat">
                    Limited to 21 pieces only
                  </p>
                </motion.div>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">
                Connect Your Wallet
              </label>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="border border-gray-200 rounded-lg p-6 bg-gray-50"
              >
                {connected ? (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex items-center mb-2">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500 }}
                      >
                        <Check size={18} className="text-green-500 mr-2" />
                      </motion.div>
                      <p className="font-medium">Wallet Connected</p>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      {publicKey?.toString()}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex items-center mb-2">
                      <motion.div
                        animate={{
                          rotate: [0, 10, -10, 10, 0],
                          transition: {
                            duration: 0.5,
                            repeat: Infinity,
                            repeatDelay: 3,
                          },
                        }}
                      >
                        <AlertCircle
                          size={18}
                          className="text-amber-500 mr-2"
                        />
                      </motion.div>
                      <p className="font-medium">Wallet Not Connected</p>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Please connect your Solana wallet to participate in the
                      pre-sale
                    </p>
                    <WalletMultiButton className="!bg-millysat hover:!bg-millysat/90 !transition-all !rounded-md !py-2 !h-10" />
                  </motion.div>
                )}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 border-t border-gray-100"
            >
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  By reserving, you agree to our terms and conditions.
                </p>
                <motion.button
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  type="submit"
                  className={cn(
                    "px-8 py-3 font-medium rounded-md text-white shadow-md transition-all",
                    connected
                      ? "bg-millysat hover:bg-millysat/90 hover:shadow-lg"
                      : "bg-gray-400 cursor-not-allowed"
                  )}
                  disabled={!connected}
                >
                  Reserve Your Ring
                </motion.button>
              </div>
            </motion.div>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center max-w-xl mx-auto"
        >
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
            className="text-lg font-semibold mb-3"
          >
            Pre-Sale Timeline
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.2 }}
            className="text-muted-foreground mb-6"
          >
            Our pre-sale is open for a limited time. Manufacturing will begin
            once all pieces are reserved. Expected delivery: Q4 2023.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.4 }}
            className="inline-flex items-center text-millysat"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="text-sm font-medium hover:underline"
            >
              View Detailed Timeline
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PreSale;
