import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/web/contact-form";
import { socialLinks } from "@/data/credentials";
import { Mail, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact George Zorakis — full-stack web developer in Heraklion, Crete. Send a message via the contact form or reach out by email and phone.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact — George Zorakis",
    description:
      "Get in touch with George Zorakis — full-stack web developer in Heraklion, Crete.",
    url: "/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — George Zorakis",
    description:
      "Get in touch with George Zorakis — full-stack web developer in Heraklion, Crete.",
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto w-full p-4">
      <h1 className="sr-only">Contact</h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        <Card className="order-2 md:order-1">
          <CardHeader>
            <CardTitle className="text-lg">CONTACT INFO</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <Link
                  href="mailto:georgezorakis@gmail.com"
                  aria-label="Email George"
                >
                  <div className="bg-accent-foreground/10 p-4 rounded-md">
                    <Mail
                      aria-hidden="true"
                      size={40}
                      strokeWidth={1}
                      className="hover:scale-105 transition-transform"
                    />
                  </div>
                </Link>
                <div>
                  <h2 className="text-sm font-semibold text-accent-foreground">
                    MAIL ME
                  </h2>
                  <p className="">gzorakes@gmail.com</p>
                  <p className="">georgezorakis@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <Link href="tel:+306946695251" aria-label="Call George">
                  <div className="bg-accent-foreground/10 p-4 rounded-md">
                    <Phone
                      aria-hidden="true"
                      size={40}
                      strokeWidth={1}
                      className="hover:scale-105 transition-transform"
                    />
                  </div>
                </Link>
                <div>
                  <h2 className="text-sm font-semibold text-accent-foreground">
                    CONTACT ME
                  </h2>
                  <p className="">+30 6946 695 251</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="bg-accent-foreground/10 p-4 rounded-md">
                  <MapPin size={40} strokeWidth={1} aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-accent-foreground">
                    LOCATION
                  </h2>
                  <p className="">Heraklion, Crete, Greece</p>
                </div>
              </div>
            </div>
          </CardContent>

          <CardHeader className="mt-10">
            <CardTitle className="text-lg">SOCIAL INFO</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex gap-6 pb-5">
              {socialLinks.map((social) => (
                <li key={social.href}>
                  <Link
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-accent-foreground/10 p-4 rounded-md"
                  >
                    <Image
                      src={social.icon}
                      width={40}
                      height={40}
                      alt={social.alt}
                      className={social.className}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="xl:col-span-2 order-1">
          <CardHeader>
            <CardTitle className="text-4xl font-semibold text-accent-foreground">
              <h2>Let&apos;s work together</h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="h-full">
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
