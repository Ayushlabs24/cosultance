import LegalLayout from "@/components/legal-layout";
import Link from "next/link";

interface SitemapSection {
  title: string;
  links: { name: string; href: string }[];
}

const sitemapData: SitemapSection[] = [
  {
    title: "Main",
    links: [
        { name: "Home", href: "/" },
        { name: "Contact Us", href: "/#contact" }, // Assuming contact is a section or page
        { name: "About Us", href: "/#about" }, // Placeholder if separate page exists
    ]
  },
  {
    title: "Business Startup",
    links: [
      { name: "Ideation to IPO", href: "/ideation-to-ipo" },
    ]
  },
  {
    title: "Registrations",
    links: [
      { name: "Private Limited Company", href: "/pvt-ltd-registration" },
      { name: "GST Registration", href: "/gst-registration" },
      { name: "FSSAI Registration", href: "/fssai-registration" },
      { name: "Trademark Registration", href: "/trademark-registration" },
      { name: "Copyright Registration", href: "/copyright-registration" },
      { name: "Patent Registration", href: "/patent-registration" },
    ]
  },
  {
    title: "Filings & Compliance",
    links: [
      { name: "GST Filing", href: "/gst-return-filing" },
      { name: "TDS Filing", href: "/tds-filing" },
      { name: "Income Tax Filing", href: "/income-tax-filing" },
      { name: "MCA Filing", href: "/mca-filing" },
    ]
  },
  {
    title: "Other Services",
    links: [
      { name: "IPR Services", href: "/ipr-services" },
      { name: "Valuation Services", href: "/valuation-services" },
      { name: "Legal Drafting", href: "/legal-drafting" },
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Refund Policy", href: "/refund-policy" },
    ]
  }
];

export default function SitemapPage() {
  return (
    <LegalLayout title="Sitemap" lastUpdated="January 14, 2026">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sitemapData.map((section, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              {section.title}
            </h3>
            <ul className="list-none pl-0 space-y-2">
              {section.links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-[#0EA5E9] dark:hover:text-[#0EA5E9] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </LegalLayout>
  );
}
