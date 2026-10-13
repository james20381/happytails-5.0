"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";
import Image from "next/image";

const links = [
    { title: "Home", url: "/" },
    { title: "Pricing", url: "/pricing" },
    { title: "About", url: "/about" },
    { title: "Reviews", url: "/reviews" },
    { title: "Contact", url: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-secondary/95 fixed top-0 left-0 z-50 w-full shadow-sm">
            <nav className="mx-auto flex max-w-[110rem] items-center justify-between px-6 h-[5.6rem]">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-bold w-30 lg:w-50"
                    onClick={() => setIsOpen(false)}
                >
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={200}
                        height={100}
                        className="w-full h-auto"
                    />
                </Link>

                {/* Desktop navigation */}
                <div className="hidden items-center gap-8 lg:flex">
                    {links.map((link) => (
                        <Link
                            key={link.title}
                            href={link.url}
                            className="transition-opacity text-muted-foreground hover:opacity-60 font-sans uppercase font-semibold"
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>

                {/* Desktop button */}
                <Button
                    size="lg"
                    className="items-center rounded-full font-sans hidden lg:flex text-primary-foreground"
                >
                    Book a Stay
                    <ChevronRight />
                </Button>

                {/* Mobile hamburger */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    className="relative z-50 lg:hidden cursor-pointer"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X size={28} strokeWidth={2} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu size={28} strokeWidth={2} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </nav>
            {/* Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-40 bg-black/30 lg:hidden"
                    />
                )}
            </AnimatePresence>
            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="flex lg:hidden border-t bg-background z-50"
                    >
                        <div className="flex flex-col px-6 py-6">
                            {links.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.url}
                                    onClick={() => setIsOpen(false)}
                                    className="border-b py-4 text-lg font-sans font-light uppercase text-muted-foreground"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}