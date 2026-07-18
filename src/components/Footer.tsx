import Link from "next/link";
import { footerLegalLinks, navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-sm font-bold text-white">
                SF
              </span>
              <span className="font-display text-xl font-semibold">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              {siteConfig.tagline}
            </p>
            <p className="mt-6 text-sm text-muted">
              © {year} {siteConfig.company.name}. SellerFlow is a product of{" "}
              {siteConfig.company.name}, a UK-registered company.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Pages</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Legal</h3>
            <ul className="mt-4 space-y-2">
              {footerLegalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-brand"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
