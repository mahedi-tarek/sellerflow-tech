import Link from "next/link";
import { DashboardMockup } from "@/components/DashboardMockup";

const highlights = [
  {
    title: "Unified inbox",
    description:
      "Facebook Messenger, Instagram DMs, and WhatsApp in one thread view — with a Bangla AI assistant that drafts replies for you to confirm.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Order management",
    description:
      "Create orders manually or from conversations. Track every order from pending to delivered, synced with live inventory.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "One-click courier",
    description:
      "Book pickups with Bangladeshi couriers like Steadfast directly from an order. Tracking updates sync back automatically.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    title: "COD verification",
    description:
      "SMS and WhatsApp confirmation flows catch fake COD orders before you ship — reducing return losses and courier fees.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Inventory control",
    description:
      "Real-time stock reservations tied to orders prevent overselling across Facebook, Instagram, WhatsApp, and your web store.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
];

const stats = [
  { value: "3 channels", label: "One inbox" },
  { value: "Steadfast+", label: "Courier integrations" },
  { value: "Bangla AI", label: "Draft replies" },
  { value: "UK SaaS", label: "HAVELY STORE LTD" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--brand-light)_0%,_transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Built for Bangladesh f-commerce sellers
              </p>
              <h1 className="animate-fade-up animate-delay-1 font-display mt-6 text-4xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
                Run inbox, orders, and delivery from one dashboard
              </h1>
              <p className="animate-fade-up animate-delay-2 mt-6 max-w-lg text-lg leading-relaxed text-muted">
                SellerFlow replaces your scattered tools with a single platform for
                Facebook, Instagram, WhatsApp, and store orders — with courier
                booking, COD verification, and inventory built in.
              </p>
              <div className="animate-fade-up animate-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                >
                  Book a demo
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center justify-center rounded-lg border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-brand/30 hover:bg-brand-light/30"
                >
                  See all features
                </Link>
              </div>
            </div>

            <div className="animate-fade-up animate-delay-2 lg:pl-4">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-10 sm:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="font-display text-2xl font-semibold text-brand">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature highlights */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Everything your shop needs to operate daily
            </h2>
            <p className="mt-4 text-lg text-muted">
              From the first DM to the courier pickup — SellerFlow handles the
              workflow so you can focus on selling.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl border border-border bg-surface p-6 transition-all hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-light text-brand">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
            >
              View full feature breakdown
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-border bg-brand-light/30 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <h2 className="font-display text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            How SellerFlow works with your channels
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
            Each seller connects their own Facebook Page, Instagram account, and
            WhatsApp Business number. SellerFlow operates on their behalf — with
            their permission — to manage conversations and orders.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Connect your channels",
                body: "Link your Facebook Page, Instagram professional account, and WhatsApp Business number through Meta's official authorization flow.",
              },
              {
                step: "2",
                title: "Manage from one inbox",
                body: "Reply to customers across channels. AI drafts Bangla replies — you confirm anything involving price, stock, or payment.",
              },
              {
                step: "3",
                title: "Ship with confidence",
                body: "Verify COD orders, book couriers in one click, and track delivery — with inventory reserved the moment an order is confirmed.",
              },
            ].map((item) => (
              <div key={item.step} className="relative rounded-xl bg-surface p-6 shadow-sm ring-1 ring-border">
                <span className="font-display text-4xl font-bold text-brand/20">
                  {item.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="rounded-2xl bg-brand px-8 py-12 text-center text-white sm:px-16 sm:py-16">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Ready to simplify your f-commerce operations?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-brand-light/90">
              Book a demo to see SellerFlow with your own workflow — inbox,
              orders, courier booking, and COD verification in action.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-light"
            >
              Get started — book a demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
