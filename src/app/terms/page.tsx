import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "SellerFlow Terms of Service — acceptable use, seller responsibilities, liability, and termination for CloudVerge Ltd's SaaS platform.",
};

const lastUpdated = "19 July 2026";

export default function TermsPage() {
  return (
    <div className="pb-20">
      <section className="border-b border-border bg-brand-light/20 py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-muted">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <article className="prose-legal mx-auto max-w-3xl px-5 py-16 lg:px-8">
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and use
          of <strong>SellerFlow</strong> ({siteConfig.url}), a software-as-a-service
          platform operated by <strong>{siteConfig.company.legalName}</strong>{" "}
          (&quot;CloudVerge,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;), registered in England and Wales (company number{" "}
          {siteConfig.company.number}).
        </p>
        <p>
          By registering for, accessing, or using SellerFlow, you agree to these
          Terms. If you do not agree, do not use the service.
        </p>

        <h2>1. Definitions</h2>
        <ul>
          <li>
            <strong>Platform</strong> — the SellerFlow web application, APIs, and
            related services provided by CloudVerge.
          </li>
          <li>
            <strong>Seller</strong> or <strong>you</strong> — the business entity
            or individual who registers for and uses SellerFlow.
          </li>
          <li>
            <strong>Customer data</strong> — message content, contact information,
            and order details belonging to your customers, accessed through SellerFlow
            or entered by you.
          </li>
          <li>
            <strong>Connected channels</strong> — Facebook Pages, Instagram
            accounts, WhatsApp Business numbers, and e-commerce stores you link to
            SellerFlow.
          </li>
        </ul>

        <h2>2. The service</h2>
        <p>
          SellerFlow provides f-commerce sellers with tools including a unified
          messaging inbox, order management, courier booking integrations, COD
          verification, inventory control, basic accounting, and a shared seller
          blacklist. Features may vary by subscription plan.
        </p>
        <p>
          SellerFlow uses the Facebook Messenger Platform, Instagram API, and
          WhatsApp Business Platform to access messaging data on your behalf, only
          after you authorize each connection through Meta&apos;s official flows.
        </p>

        <h2>3. Account registration</h2>
        <ul>
          <li>You must provide accurate, complete registration information.</li>
          <li>
            You are responsible for maintaining the confidentiality of your account
            credentials and for all activity under your account.
          </li>
          <li>
            You must be at least 18 years old and legally able to enter into a
            binding contract.
          </li>
          <li>
            One account may have multiple team members; you are responsible for
            their actions within your workspace.
          </li>
          <li>
            Notify us immediately at{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> if you
            suspect unauthorized access.
          </li>
        </ul>

        <h2>4. Subscription and payment</h2>
        <ul>
          <li>
            SellerFlow is offered on a subscription basis. Pricing, billing cycles,
            and plan features are described at signup or in your order form.
          </li>
          <li>
            Fees are billed in advance unless otherwise agreed. All fees are
            non-refundable except where required by law or explicitly stated in
            your plan.
          </li>
          <li>
            We may change pricing with at least 30 days&apos; notice. Continued
            use after a price change constitutes acceptance.
          </li>
          <li>
            Failure to pay may result in suspension or termination of your account.
          </li>
        </ul>

        <h2>5. Seller responsibilities</h2>
        <p>As a SellerFlow user, you agree to:</p>
        <ul>
          <li>
            Comply with all applicable laws, including consumer protection,
            e-commerce, data protection, and telecommunications regulations in
            Bangladesh and any jurisdiction where you operate
          </li>
          <li>
            Comply with Meta Platform Terms, WhatsApp Business Policy, Instagram
            Platform Policy, and any applicable Shopify or WooCommerce terms for
            connected channels
          </li>
          <li>
            Obtain any necessary consents from your customers before sending
            marketing messages, COD verification SMS, or WhatsApp notifications
          </li>
          <li>
            Review and confirm AI-drafted replies before sending — especially any
            message involving price, stock availability, or payment terms
          </li>
          <li>
            Maintain accurate product, inventory, and pricing information in your
            SellerFlow account
          </li>
          <li>
            Use the seller blacklist feature responsibly, submitting evidence-based
            reports and respecting the dispute and appeal process
          </li>
          <li>
            Not use SellerFlow to send spam, harassment, fraudulent orders, or
            illegal content
          </li>
        </ul>

        <h2>6. Acceptable use</h2>
        <p>You must not:</p>
        <ul>
          <li>
            Reverse engineer, decompile, or attempt to extract source code from
            SellerFlow
          </li>
          <li>
            Use the platform to transmit malware, phishing content, or unlawful
            material
          </li>
          <li>
            Interfere with or disrupt the platform, other users, or connected
            third-party services
          </li>
          <li>
            Access another seller&apos;s account or data without authorization
          </li>
          <li>
            Resell, sublicense, or white-label SellerFlow without written agreement
            from CloudVerge
          </li>
          <li>
            Use automated scraping or bulk data extraction beyond normal platform
            API usage
          </li>
          <li>
            Misrepresent your identity, business, or affiliation with CloudVerge
            or Meta
          </li>
        </ul>

        <h2>7. Customer data and privacy</h2>
        <p>
          You are the data controller for your customers&apos; personal data
          processed through SellerFlow. CloudVerge acts as a data processor on your
          behalf. Our processing is governed by our{" "}
          <Link href="/privacy" className="text-brand underline">
            Privacy Policy
          </Link>{" "}
          and, where applicable, a Data Processing Agreement.
        </p>
        <p>You represent that:</p>
        <ul>
          <li>
            You have a lawful basis to collect and process your customers&apos; data
            through SellerFlow
          </li>
          <li>
            You will respond to customer data subject requests and inform customers
            about how their data is used
          </li>
          <li>
            You will not instruct us to process customer data in violation of
            applicable law
          </li>
        </ul>

        <h2>8. Intellectual property</h2>
        <ul>
          <li>
            SellerFlow, its software, design, documentation, and branding are
            owned by CloudVerge. These Terms grant you a limited, non-exclusive,
            non-transferable license to use the platform during your subscription.
          </li>
          <li>
            You retain ownership of your business data, product catalog, and
            customer content. You grant CloudVerge a license to process this data
            solely to provide the service.
          </li>
          <li>
            Feedback you provide may be used by CloudVerge to improve the platform
            without obligation to you.
          </li>
        </ul>

        <h2>9. Third-party services</h2>
        <p>
          SellerFlow integrates with third-party services including Meta platforms,
          courier providers (e.g., Steadfast), SMS gateways, and e-commerce
          platforms. Your use of those services is subject to their respective
          terms. CloudVerge is not responsible for third-party service availability,
          changes, or policies.
        </p>

        <h2>10. AI-assisted features</h2>
        <p>
          SellerFlow&apos;s AI assistant generates draft replies and may assist with
          order creation. AI outputs may contain errors. You are solely responsible
          for reviewing and approving all AI-generated content before it is sent to
          customers or used to finalize business decisions. The AI does not
          autonomously confirm orders, set prices, or modify inventory without your
          explicit action.
        </p>

        <h2>11. Seller blacklist</h2>
        <p>
          The shared blacklist feature allows sellers to report customers with
          evidence of fraudulent or abusive COD behavior. CloudVerge moderates
          reports and provides a dispute process. Blacklist data is presented in
          aggregated form and must not be used to publicly identify individuals.
          Misuse of the blacklist feature may result in account suspension.
        </p>

        <h2>12. Availability and support</h2>
        <p>
          We aim for high availability but do not guarantee uninterrupted access.
          Scheduled maintenance will be communicated in advance where possible.
          Support is available via email at{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> during
          business hours (GMT/BST).
        </p>

        <h2>13. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by applicable law:
        </p>
        <ul>
          <li>
            SellerFlow is provided &quot;as is&quot; and &quot;as available&quot;
            without warranties of any kind, express or implied, including
            merchantability, fitness for a particular purpose, or non-infringement
          </li>
          <li>
            CloudVerge shall not be liable for indirect, incidental, special,
            consequential, or punitive damages, including lost profits, lost data,
            or business interruption
          </li>
          <li>
            CloudVerge&apos;s total aggregate liability for any claims arising from
            these Terms or your use of SellerFlow shall not exceed the fees paid by
            you to CloudVerge in the 12 months preceding the claim
          </li>
          <li>
            Nothing in these Terms excludes liability for death or personal injury
            caused by negligence, fraud, or any liability that cannot be excluded
            under applicable law
          </li>
        </ul>

        <h2>14. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless CloudVerge, its directors,
          employees, and agents from claims, damages, and expenses (including
          reasonable legal fees) arising from your use of SellerFlow, your customer
          data, your violation of these Terms, or your violation of any third-party
          rights or applicable law.
        </p>

        <h2>15. Termination</h2>
        <ul>
          <li>
            You may cancel your subscription at any time through your account
            settings or by emailing{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </li>
          <li>
            We may suspend or terminate your account immediately if you breach these
            Terms, fail to pay, or if continued service poses legal or security
            risk.
          </li>
          <li>
            Upon termination, your access to the platform ceases. We will delete or
            return your data in accordance with our Privacy Policy, subject to legal
            retention requirements.
          </li>
          <li>
            Sections that by their nature should survive termination (including
            liability, indemnification, and intellectual property) will survive.
          </li>
        </ul>

        <h2>16. Changes to terms</h2>
        <p>
          We may modify these Terms with at least 30 days&apos; notice via email or
          in-app notification. Material changes will be posted on this page. Your
          continued use after the effective date constitutes acceptance. If you
          disagree with changes, you may cancel before they take effect.
        </p>

        <h2>17. Governing law and disputes</h2>
        <p>
          These Terms are governed by the laws of England and Wales. Any dispute
          shall be subject to the exclusive jurisdiction of the courts of England
          and Wales, without prejudice to mandatory consumer protection rights in
          your jurisdiction.
        </p>

        <h2>18. General</h2>
        <ul>
          <li>
            These Terms, together with the Privacy Policy and any order form,
            constitute the entire agreement between you and CloudVerge.
          </li>
          <li>
            If any provision is found unenforceable, the remaining provisions
            remain in effect.
          </li>
          <li>
            Our failure to enforce any right does not waive that right.
          </li>
          <li>
            You may not assign these Terms without our consent. We may assign our
            rights in connection with a merger, acquisition, or sale of assets.
          </li>
        </ul>

        <h2>19. Contact</h2>
        <p>
          Questions about these Terms:
        </p>
        <ul>
          <li>
            Email:{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </li>
          <li>
            {siteConfig.company.legalName}, {siteConfig.company.address}
          </li>
        </ul>

        <p className="mt-10 text-sm">
          See also our{" "}
          <Link href="/privacy" className="text-brand underline">
            Privacy Policy
          </Link>
          .
        </p>
      </article>
    </div>
  );
}
