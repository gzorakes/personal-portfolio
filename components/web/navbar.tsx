"use client";

import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="mb-10 w-full">
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo-light.svg"
            width={160}
            height={52}
            alt="George Zorakis's logo"
            className="dark:invert"
          />
        </Link>

        <nav>
          <ul className="hidden md:flex items-center gap-10">
            {navItems.map((link) => {
              const isActive =
                pathname === link.href ||
                (pathname.startsWith(link.href) && link.href !== "/");
              return (
                <li key={link.href}>
                  <Link
                    className={cn(
                      "transition-colors duration-300 hover:text-foreground/80",
                      isActive
                        ? buttonVariants({
                            className: "text-md",
                            variant: "secondary",
                          })
                        : "text-foreground/60"
                    )}
                    aria-current={isActive ? "page" : undefined}
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/contact"
            className={cn(buttonVariants(), "hidden md:block")}
          >
            LET&apos;S TALK
          </Link>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="bg-secondary rounded-md mt-4 p-4 md:hidden">
          <ul className="flex flex-col gap-6">
            {navItems.map((link) => {
              const isActive =
                pathname === link.href ||
                (pathname.startsWith(link.href) && link.href !== "/");
              return (
                <li key={link.href}>
                  <Link
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "transition-colors duration-300 hover:text-foreground/80 block",
                      isActive
                        ? "bg-accent rounded-md p-2"
                        : "text-foreground/60"
                    )}
                    aria-current={isActive ? "page" : undefined}
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
