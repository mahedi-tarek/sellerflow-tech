import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact SellerFlow and HAVELY STORE LTD — book a demo, get support, or reach our team at info@sellerflow.tech.",
};

export default function ContactPage() {
  return (
    <div className="pb-20">
      <section className="border-b border-border bg-brand-light/20 py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Contact
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Book a demo, ask about pricing, or get in touch with our team.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold">
              Get in touch
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Whether you&apos;re a solo f-commerce seller or a team managing
              multiple pages, we&apos;d love to show you SellerFlow. Demos typically
              take 30 minutes and cover inbox, orders, courier booking, and COD
              verification.
            </p>

            <dl className="mt-10 space-y-6">
              <div>
                <dt className="text-sm font-semibold text-foreground">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-brand underline underline-offset-2 hover:text-brand-dark"
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-foreground">
                  Privacy requests
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${siteConfig.privacyEmail}`}
                    className="text-brand underline underline-offset-2 hover:text-brand-dark"
                  >
                    {siteConfig.privacyEmail}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-foreground">
                  Registered company
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted">
                  {siteConfig.company.legalName}
                  <br />
                  Company type: {siteConfig.company.companyType}
                  <br />
                  Company number: {siteConfig.company.number}
                  <br />
                  Companies House submission number: {siteConfig.company.submissionNumber}
                  <br />
                  {siteConfig.company.address}
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-xl border border-border bg-surface p-8 shadow-sm">
            <h2 className="text-lg font-semibold">Book a demo</h2>
            <p className="mt-2 text-sm text-muted">
              Send us an email with your shop name, sales channels (Facebook,
              Instagram, WhatsApp, Shopify, etc.), and approximate order volume.
              We&apos;ll reply within one business day.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${siteConfig.email}?subject=SellerFlow%20Demo%20Request&body=Shop%20name%3A%0AChannels%3A%0AApprox.%20orders%20per%20day%3A%0APhone%20number%3A`}
                className="flex w-full items-center justify-center rounded-lg bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Email us to book a demo
              </a>
              <p className="text-center text-xs text-muted">
                Or copy:{" "}
                <span className="font-mono text-foreground">
                  {siteConfig.email}
                </span>
              </p>
            </div>

            <div className="mt-10 border-t border-border pt-8">
              <h3 className="text-sm font-semibold text-foreground">
                What to expect
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex gap-2">
                  <span className="text-brand">→</span>
                  Live walkthrough of unified inbox and AI draft replies
                </li>
                <li className="flex gap-2">
                  <span className="text-brand">→</span>
                  Order creation, COD verification, and courier booking flow
                </li>
                <li className="flex gap-2">
                  <span className="text-brand">→</span>
                  Q&amp;A about Meta channel connection and onboarding
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
