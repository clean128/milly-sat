import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-gray-900 text-white pt-16 pb-8"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <motion.div variants={itemVariants} className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 hover:text-millysat transition-all duration-300 transform hover:scale-105">
              MillySat
            </h2>
            <p className="text-gray-400 max-w-md mb-6">
              Redefining luxury with Bitcoin-secured rings that combine elegant
              design with cutting-edge security technology.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-gray-400 hover:text-millysat transition-colors duration-300"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-gray-400 hover:text-millysat transition-colors duration-300"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-gray-400 hover:text-millysat transition-colors duration-300"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 hover:text-millysat transition-all duration-300">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <motion.li
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href="#"
                  className="text-gray-400 hover:text-millysat transition-colors duration-300 inline-block"
                >
                  About Us
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href="#products"
                  className="text-gray-400 hover:text-millysat transition-colors duration-300 inline-block"
                >
                  Products
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href="#security"
                  className="text-gray-400 hover:text-millysat transition-colors duration-300 inline-block"
                >
                  Security
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href="#presale"
                  className="text-gray-400 hover:text-millysat transition-colors duration-300 inline-block"
                >
                  Pre-Sale
                </a>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 hover:text-millysat transition-all duration-300">
              Contact
            </h3>
            <ul className="space-y-2">
              <motion.li
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href="mailto:info@millysat.com"
                  className="text-gray-400 hover:text-millysat transition-colors duration-300 inline-block"
                >
                  info@millysat.com
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href="#"
                  className="text-gray-400 hover:text-millysat transition-colors duration-300 inline-block"
                >
                  Support Center
                </a>
              </motion.li>
              <li>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="inline-block px-4 py-2 bg-millysat text-white rounded-md font-medium hover:bg-millysat/90 transition-all duration-300 mt-2 hover:shadow-lg"
                >
                  Contact Us
                </motion.a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MillySat. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <motion.a
              whileHover={{ y: -2 }}
              href="#"
              className="text-gray-500 hover:text-gray-400 text-sm transition-colors duration-300"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="#"
              className="text-gray-500 hover:text-gray-400 text-sm transition-colors duration-300"
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
