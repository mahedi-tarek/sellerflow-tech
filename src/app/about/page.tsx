import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About SellerFlow and CloudVerge Ltd — the UK-registered company operating SellerFlow for Bangladesh f-commerce sellers.",
};

export default function AboutPage() {
  return (
    <div className="pb-20">
      <section className="border-b border-border bg-brand-light/20 py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            About SellerFlow
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            SellerFlow is operated by CloudVerge Ltd, a UK-registered technology
            company building SaaS tools for Bangladesh&apos;s f-commerce ecosystem.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
        <section>
          <h2 className="font-display text-2xl font-semibold">What we do</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Bangladesh has one of the world&apos;s most vibrant f-commerce markets.
            Millions of sellers run their businesses through Facebook pages,
            Instagram shops, WhatsApp groups, and messaging apps — often juggling
            five or six disconnected tools to manage messages, orders, inventory,
            and courier bookings.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            SellerFlow replaces that fragmented stack with one multi-tenant SaaS
            platform. Each seller gets their own workspace with a unified inbox,
            order pipeline, courier integrations, COD verification, inventory
            control, and basic accounting — purpose-built for how f-commerce
            actually works in Bangladesh.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            Relationship to Meta platforms
          </h2>
          <div className="mt-4 rounded-xl border border-brand/25 bg-brand-light/30 p-6">
            <p className="leading-relaxed text-brand-dark">
              SellerFlow uses the Facebook Messenger Platform, Instagram API, and
              WhatsApp Business Platform, with permission from each connected
              seller, to let sellers manage their own customer conversations and
              orders in one dashboard.
            </p>
          </div>
          <p className="mt-4 leading-relaxed text-muted">
            SellerFlow is a Tech Provider — not a consumer-facing app. Each
            seller individually authorizes SellerFlow to access their Facebook
            Page, Instagram professional account, and WhatsApp Business number
            through Meta&apos;s official OAuth and Business verification flows.
            Message and contact data accessed through these APIs is used solely to
            power that seller&apos;s own inbox and order workflow within SellerFlow.
            We do not use seller customer data for advertising, profiling, or any
            purpose outside the seller&apos;s operational dashboard.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">
            About CloudVerge Ltd
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            SellerFlow is a product of{" "}
            <strong className="text-foreground">{siteConfig.company.name}</strong>,
            incorporated in England and Wales. CloudVerge develops and operates
            SellerFlow as a subscription SaaS platform serving business customers
            (f-commerce sellers) in Bangladesh and beyond.
          </p>

          <dl className="mt-8 space-y-4 rounded-xl border border-border bg-surface p-6">
            <div>
              <dt className="text-sm font-semibold text-foreground">
                Legal name
              </dt>
              <dd className="mt-1 text-sm text-muted">
                {siteConfig.company.legalName}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-foreground">
                Companies House number
              </dt>
              <dd className="mt-1 text-sm text-muted">
                <a
                  href={siteConfig.company.companiesHouseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand underline underline-offset-2 hover:text-brand-dark"
                >
                  {siteConfig.company.number}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-foreground">
                Registered office
              </dt>
              <dd className="mt-1 text-sm text-muted">
                {siteConfig.company.address}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-foreground">
                Incorporated
              </dt>
              <dd className="mt-1 text-sm text-muted">
                {siteConfig.company.incorporated}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-foreground">
                Contact
              </dt>
              <dd className="mt-1 text-sm text-muted">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-brand underline underline-offset-2 hover:text-brand-dark"
                >
                  {siteConfig.email}
                </a>
              </dd>
            </div>
          </dl>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">Our approach</h2>
          <p className="mt-4 leading-relaxed text-muted">
            We build for operators, not marketers. SellerFlow&apos;s AI assistant
            drafts replies in Bangla but never acts autonomously on pricing, stock,
            or payments. Our shared blacklist protects sellers from COD fraud
            without publishing raw customer identities. And every integration —
            Meta messaging, courier APIs, store sync — exists to serve the
            seller&apos;s own business, not to monetize their customer data.
          </p>
        </section>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            Contact us
          </Link>
          <Link
            href="/features"
            className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-brand-light/30"
          >
            View features
          </Link>
        </div>
      </div>
    </div>
  );
}
