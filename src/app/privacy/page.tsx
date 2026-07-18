import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "SellerFlow Privacy Policy — how CloudVerge Ltd collects, uses, retains, and deletes data for sellers and their customers.",
};

const lastUpdated = "19 July 2026";

export default function PrivacyPage() {
  return (
    <div className="pb-20">
      <section className="border-b border-border bg-brand-light/20 py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-muted">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      <article className="prose-legal mx-auto max-w-3xl px-5 py-16 lg:px-8">
        <p>
          This Privacy Policy describes how{" "}
          <strong>{siteConfig.company.legalName}</strong> (&quot;CloudVerge,&quot;
          &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, stores,
          and protects personal data when you use <strong>SellerFlow</strong> (
          {siteConfig.url}), our multi-tenant SaaS platform for f-commerce sellers.
        </p>
        <p>
          CloudVerge is the data controller for seller account data. For customer
          message and contact data accessed through Meta&apos;s APIs on a
          seller&apos;s behalf, the seller is the data controller and CloudVerge
          acts as a data processor, processing data only as instructed by the
          seller through the SellerFlow platform.
        </p>

        <h2>1. Who this policy applies to</h2>
        <ul>
          <li>
            <strong>Sellers</strong> — business users who register for and operate
            a SellerFlow account (f-commerce merchants in Bangladesh and elsewhere).
          </li>
          <li>
            <strong>Seller customers</strong> — individuals who message or order
            from a seller through Facebook Messenger, Instagram, WhatsApp, or
            other channels connected to SellerFlow by that seller.
          </li>
          <li>
            <strong>Website visitors</strong> — individuals who browse{" "}
            {siteConfig.domain}.
          </li>
        </ul>

        <h2>2. Data we collect</h2>

        <h3>2.1 Seller account data</h3>
        <p>When you register for SellerFlow, we collect:</p>
        <ul>
          <li>Name, email address, phone number, and business/shop name</li>
          <li>Account credentials (passwords stored as salted hashes)</li>
          <li>Billing and subscription information</li>
          <li>Team member names and roles (if you add staff to your account)</li>
          <li>Product catalog, inventory, pricing, and order records you enter</li>
          <li>Courier booking and tracking data you create through the platform</li>
          <li>Support communications and feedback you send to us</li>
        </ul>

        <h3>2.2 Data accessed via Meta platforms (on each seller&apos;s behalf)</h3>
        <p>
          When a seller connects their Facebook Page, Instagram professional
          account, or WhatsApp Business number to SellerFlow, we access data
          through Meta&apos;s official APIs with the seller&apos;s explicit
          authorization. This may include:
        </p>
        <ul>
          <li>
            Message content and metadata (sender name, timestamp, message text,
            media attachments) from Messenger, Instagram Direct, and WhatsApp
            Business conversations
          </li>
          <li>
            Customer contact information available through those channels (e.g.,
            phone numbers, profile names, profile identifiers)
          </li>
          <li>
            Page and account identifiers, webhook events, and delivery/read
            receipts necessary to operate the unified inbox
          </li>
        </ul>
        <p>
          We access this data <strong>only for the connected seller</strong> and
          only to power that seller&apos;s inbox, order workflow, and related
          SellerFlow features. We do not combine customer data across unrelated
          sellers for advertising or profiling.
        </p>

        <h3>2.3 Website data</h3>
        <p>
          When you visit {siteConfig.domain}, we may collect standard server logs
          (IP address, browser type, pages visited, referring URL) and cookies
          essential for site functionality. We do not use third-party advertising
          trackers on this marketing site.
        </p>

        <h2>3. How we use data</h2>
        <p>We use collected data solely to:</p>
        <ul>
          <li>
            Provide and operate the SellerFlow platform (unified inbox, order
            management, courier booking, COD verification, inventory, accounting)
          </li>
          <li>
            Generate AI-drafted reply suggestions in Bangla or English for the
            seller to review and send — the AI does not autonomously finalize
            orders or send price/stock/payment messages without seller confirmation
          </li>
          <li>Process subscription billing and communicate about your account</li>
          <li>Provide customer support and respond to your requests</li>
          <li>
            Operate the seller blacklist feature using aggregated, evidence-based
            fraud indicators (never publishing raw customer identifying information
            publicly)
          </li>
          <li>Improve platform reliability, security, and performance</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p>
          <strong>We never sell personal data.</strong> We do not use seller or
          customer data for advertising, audience building, or any purpose outside
          operating SellerFlow for the connected seller.
        </p>

        <h2>4. Legal bases for processing (UK GDPR)</h2>
        <ul>
          <li>
            <strong>Contract</strong> — processing necessary to provide SellerFlow
            to registered sellers
          </li>
          <li>
            <strong>Legitimate interests</strong> — platform security, fraud
            prevention (seller blacklist), and service improvement, balanced against
            individual rights
          </li>
          <li>
            <strong>Consent</strong> — Meta platform connections require seller
            authorization through Meta&apos;s OAuth flow; COD verification messages
            are sent based on seller-configured workflows
          </li>
          <li>
            <strong>Legal obligation</strong> — where required by applicable law
          </li>
        </ul>

        <h2>5. Data sharing</h2>
        <p>We share data only in these circumstances:</p>
        <ul>
          <li>
            <strong>Service providers</strong> — cloud hosting, payment processing,
            SMS/WhatsApp delivery, and courier API partners, under data processing
            agreements
          </li>
          <li>
            <strong>Meta platforms</strong> — sending messages and retrieving
            conversation data through official APIs on the seller&apos;s behalf
          </li>
          <li>
            <strong>Legal requirements</strong> — when required by law, court order,
            or regulatory authority
          </li>
        </ul>
        <p>We do not share customer message data with other sellers.</p>

        <h2>6. Data retention</h2>
        <ul>
          <li>
            <strong>Seller account data</strong> — retained for the duration of your
            subscription and up to 90 days after account closure, unless a longer
            period is required by law or you request earlier deletion
          </li>
          <li>
            <strong>Message and conversation data</strong> — retained while your
            account is active and Meta channel connections remain authorized;
            deleted within 90 days of disconnection or account closure
          </li>
          <li>
            <strong>Order and transaction records</strong> — retained for up to 7
            years where required for tax, accounting, or legal compliance
          </li>
          <li>
            <strong>Server logs</strong> — retained for up to 12 months
          </li>
        </ul>

        <h2>7. Data security</h2>
        <p>
          We implement industry-standard technical and organizational measures
          including encryption in transit (TLS), encrypted storage for sensitive
          fields, access controls, audit logging, and regular security reviews.
          No method of transmission over the Internet is 100% secure; we
          continuously work to protect your data.
        </p>

        <h2>8. International transfers</h2>
        <p>
          SellerFlow infrastructure may process data in the UK, EU, and other
          jurisdictions where our service providers operate. Where data is
          transferred outside the UK, we use appropriate safeguards such as
          Standard Contractual Clauses.
        </p>

        <h2>9. Your rights</h2>
        <p>
          Under UK GDPR and applicable data protection law, you may have the right
          to:
        </p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to or restrict certain processing</li>
          <li>Data portability (where applicable)</li>
          <li>Withdraw consent where processing is consent-based</li>
          <li>Lodge a complaint with the UK Information Commissioner&apos;s Office (ICO)</li>
        </ul>

        <h3>For sellers</h3>
        <p>
          To exercise your rights regarding your SellerFlow account data, email{" "}
          <a href={`mailto:${siteConfig.privacyEmail}`}>
            {siteConfig.privacyEmail}
          </a>{" "}
          with your account email and request. We will respond within 30 days.
        </p>

        <h3>For seller customers</h3>
        <p>
          If you are a customer of a SellerFlow seller and wish to request access
          to or deletion of your data, please contact the seller directly in the
          first instance — they are the data controller for your conversation and
          order data. You may also contact us at{" "}
          <a href={`mailto:${siteConfig.privacyEmail}`}>
            {siteConfig.privacyEmail}
          </a>{" "}
          and we will forward your request to the relevant seller or process it on
          their behalf where appropriate. We will respond within 30 days.
        </p>

        <h3>Meta platform data deletion</h3>
        <p>
          When a seller disconnects their Meta accounts or deletes their SellerFlow
          account, we delete associated message and contact data retrieved through
          Meta APIs within 90 days, in accordance with Meta Platform Terms and our
          data retention policy above.
        </p>

        <h2>10. Cookies</h2>
        <p>
          The SellerFlow marketing website uses only essential cookies required for
          basic site operation. The SellerFlow application may use session cookies
          for authentication. We do not use advertising or cross-site tracking
          cookies.
        </p>

        <h2>11. Children</h2>
        <p>
          SellerFlow is a business platform not directed at individuals under 18.
          We do not knowingly collect personal data from children.
        </p>

        <h2>12. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Material changes
          will be posted on this page with an updated &quot;Last updated&quot; date.
          Continued use of SellerFlow after changes constitutes acceptance of the
          revised policy.
        </p>

        <h2>13. Contact us</h2>
        <p>
          For privacy questions, data subject requests, or complaints:
        </p>
        <ul>
          <li>
            Email:{" "}
            <a href={`mailto:${siteConfig.privacyEmail}`}>
              {siteConfig.privacyEmail}
            </a>
          </li>
          <li>
            General contact:{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </li>
          <li>
            Postal: {siteConfig.company.legalName},{" "}
            {siteConfig.company.address}
          </li>
        </ul>

        <p className="mt-10 text-sm">
          See also our{" "}
          <Link href="/terms" className="text-brand underline">
            Terms of Service
          </Link>
          .
        </p>
      </article>
    </div>
  );
}
