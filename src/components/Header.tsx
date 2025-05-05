import { useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { connected } = useWallet();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out py-4 px-6 md:px-12",
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm translate-y-0"
          : "bg-transparent -translate-y-1",
        "animate-fade-in"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-foreground tracking-tight">
            MillySat
          </h1>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {["Products", "Security", "Pre-Sale"].map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium relative group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-millysat">
                {item}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-millysat transition-all duration-300 group-hover:w-full rounded-full"></span>
              <span className="absolute inset-0 bg-millysat/5 rounded-lg scale-0 transition-transform duration-300 group-hover:scale-100"></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <div
            className={cn(
              "transition-all duration-300 transform hover:scale-105 animate-scale-in",
              connected ? "text-millysat" : "text-foreground"
            )}
          >
            <WalletMultiButton className="hover:opacity-90 transition-opacity duration-300 shadow-lg hover:shadow-xl hover:shadow-millysat/20" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
