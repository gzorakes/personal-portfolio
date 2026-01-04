import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="max-w-3xl mx-auto p-4 flex flex-col gap-6 items-center justify-center mt-auto">
        <Link href="/">
          <Image
            src="/logo-light.svg"
            width={160}
            height={52}
            loading="eager"
            alt="George Zorakis's logo"
            className="dark:invert"
          />
        </Link>
        <nav>
          <ul className="flex items-center gap-10">
            {navItems.map((link) => {
              return (
                <li key={link.href}>
                  <Link
                    className="text-sm text-muted-foreground hover:text-foreground/80"
                    href={link.href}
                  >
                    {link.name.toUpperCase()}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} George Zorakis. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
