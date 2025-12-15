"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import ThemeToggle from "../theme-toggle";
import { ChevronDown, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed z-10 top-6 inset-x-4 h-14 xs:h-16 border dark:shadow-slate-900/50 max-w-screen-xl mx-auto rounded-full transition-all duration-300 ${
        isScrolled
          ? "bg-background shadow-lg dark:shadow-slate-900/50 scale-[0.98]"
          : "bg-background"
      } ${
        isHovered ? "bg-background shadow-gray-300" : ""
      } dark:border-slate-700/70`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Logo />

        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <ThemeToggle />
          </motion.div>

          <Button className="hidden xs:inline-flex group relative overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles size={16} />
              Get Started
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
