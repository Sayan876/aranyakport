
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Package } from "lucide-react";

import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur-md transition-colors duration-300 dark:border-neutral-800 dark:bg-[#171717]/95">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-neutral-950">
            <Package size={25} strokeWidth={2} />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
              ARANYAK
            </h1>
            <p className="text-[10px] font-semibold tracking-[2.5px] text-neutral-500 dark:text-neutral-400">
              COURIER SERVICE
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-600 transition-colors duration-200 hover:text-yellow-600 dark:text-neutral-300 dark:hover:text-yellow-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-neutral-800 transition-colors hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-800 md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isOpen ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                transition={{ duration: 0.18 }}
              >
                {isOpen ? <X size={25} /> : <Menu size={25} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Animated Mobile Navigation */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.2 },
            }}
            className="overflow-hidden border-t border-neutral-200 bg-white shadow-lg dark:border-neutral-800 dark:bg-[#171717] md:hidden"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: {
                    staggerChildren: 0.06,
                    delayChildren: 0.08,
                  },
                },
                closed: {
                  transition: {
                    staggerChildren: 0.03,
                    staggerDirection: -1,
                  },
                },
              }}
              className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  variants={{
                    open: {
                      opacity: 1,
                      y: 0,
                    },
                    closed: {
                      opacity: 0,
                      y: -8,
                    },
                  }}
                  transition={{ duration: 0.2 }}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-yellow-50 hover:text-yellow-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-yellow-400"
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
