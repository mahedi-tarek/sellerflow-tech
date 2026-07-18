import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features",
  description:
    "SellerFlow features for Bangladesh f-commerce: unified inbox, order management, courier booking, COD verification, inventory, accounting, and seller blacklist.",
};

const features = [
  {
    id: "inbox",
    title: "Unified inbox",
    subtitle: "Facebook, Instagram, and WhatsApp in one place",
    description:
      "Stop switching between apps. SellerFlow pulls Messenger, Instagram DMs, and WhatsApp Business messages into a single inbox so your team sees every customer conversation in context.",
    details: [
      "Thread view grouped by customer across all connected channels",
      "Bangla-language AI assistant drafts replies based on your product catalog and policies",
      "Human or rule-based confirmation required before any reply that mentions price, stock levels, or payment terms — the AI never finalizes orders on its own",
      "Quick-reply templates for common questions (size, delivery time, return policy)",
      "Unread counts and assignment so multiple staff can share the workload",
    ],
    note: "Powered by Meta's Graph API, Instagram API, and WhatsApp Business Platform — each seller connects their own accounts with explicit permission.",
  },
  {
    id: "orders",
    title: "Order management",
    subtitle: "From DM to delivered — tracked end to end",
    description:
      "Create orders manually or pull details directly from a conversation. Every order moves through clear statuses so you always know what's pending, packed, or out for delivery.",
    details: [
      "Manual order entry and AI-assisted order creation from chat context",
      "Status pipeline: pending → confirmed → packed → handed to courier → delivered (or returned/cancelled)",
      "Customer details, items, and delivery address captured in one record",
      "Order history linked to the original conversation thread",
      "Supports COD, prepaid, and partial-payment workflows common in Bangladesh f-commerce",
    ],
  },
  {
    id: "courier",
    title: "One-click courier booking",
    subtitle: "Steadfast and other BD couriers integrated",
    description:
      "Book a pickup without leaving the order screen. SellerFlow sends consignment details to your courier partner and pulls tracking updates back into the order automatically.",
    details: [
      "Integration with Bangladeshi courier services including Steadfast",
      "Generate consignment IDs and shipping labels from confirmed orders",
      "Automatic tracking status sync (picked up, in transit, delivered, returned)",
      "Bulk booking for high-volume sellers processing dozens of parcels daily",
      "Delivery charge estimates based on zone and weight",
    ],
  },
  {
    id: "cod",
    title: "COD verification",
    subtitle: "Confirm before you ship — reduce fake orders",
    description:
      "Cash on Delivery is the backbone of Bangladesh e-commerce, but fake or non-serious orders cost you courier fees and inventory. SellerFlow runs an SMS and WhatsApp confirmation flow before a COD order ships.",
    details: [
      "Automated confirmation message sent to the customer's phone number",
      "Customer must confirm intent before the order moves to 'ready to ship'",
      "Configurable timeout — unconfirmed orders are flagged for review or cancellation",
      "Verification log attached to each order for dispute resolution",
      "Works alongside the seller blacklist to catch repeat offenders early",
    ],
  },
  {
    id: "inventory",
    title: "Inventory & stock control",
    subtitle: "Real-time reservations — no overselling",
    description:
      "When you sell on Facebook, Instagram, WhatsApp, and a Shopify store simultaneously, stock counts drift apart fast. SellerFlow ties inventory to orders with real-time reservations.",
    details: [
      "Stock levels updated the moment an order is confirmed",
      "Reservations hold inventory while COD verification is pending",
      "Low-stock alerts before you run out mid-campaign",
      "Variant-level tracking (size, color, SKU)",
      "Sync with Shopify and WooCommerce product catalogs",
    ],
  },
  {
    id: "accounting",
    title: "Simple accounting",
    subtitle: "Sales, payouts, and basic bookkeeping",
    description:
      "You shouldn't need a separate spreadsheet for daily sales. SellerFlow gives sellers a clear view of revenue, courier costs, and outstanding COD collections.",
    details: [
      "Daily and monthly sales summaries by channel",
      "Courier charge tracking per order",
      "COD collection status (collected, pending, returned)",
      "Exportable reports for your accountant or tax filing",
      "Payout reconciliation when selling through payment gateways",
    ],
  },
  {
    id: "blacklist",
    title: "Seller blacklist",
    subtitle: "Shared fraud protection with fair dispute rights",
    description:
      "Repeat COD abusers hurt every seller in the ecosystem. SellerFlow operates an evidence-based shared blacklist — but customers flagged can dispute and appeal, and raw identifying information is never published.",
    details: [
      "Aggregated reporting: 'reported by N shops' — never exposes personal customer data publicly",
      "Evidence-based flagging tied to verified fraudulent or abusive COD behavior",
      "Dispute and appeal process for flagged customers with review by CloudVerge",
      "Sellers see a risk indicator on incoming orders from flagged numbers",
      "Designed to comply with privacy principles — protection without public shaming",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="pb-20">
      <section className="border-b border-border bg-brand-light/20 py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Features
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            SellerFlow is built around the daily workflow of Bangladeshi f-commerce
            sellers — from the first customer message to the courier pickup and
            beyond.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        {features.map((feature, index) => (
          <section
            key={feature.id}
            id={feature.id}
            className={`py-16 ${index > 0 ? "border-t border-border" : ""}`}
          >
            <div className="grid gap-10 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <p className="text-sm font-semibold uppercase tracking-wider text-brand">
                  {feature.subtitle}
                </p>
                <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight">
                  {feature.title}
                </h2>
                <p className="mt-4 text-muted leading-relaxed">
                  {feature.description}
                </p>
                {feature.note && (
                  <p className="mt-4 rounded-lg border border-brand/20 bg-brand-light/40 p-4 text-sm text-brand-dark">
                    {feature.note}
                  </p>
                )}
              </div>
              <div className="lg:col-span-3">
                <ul className="space-y-3">
                  {feature.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="rounded-2xl border border-border bg-surface p-8 text-center sm:p-12">
          <h2 className="font-display text-2xl font-semibold">
            See SellerFlow in action
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted">
            We&apos;ll walk you through inbox, orders, courier booking, and COD
            verification with your own workflow.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            Book a demo
          </Link>
        </div>
      </section>
    </div>
  );
}
