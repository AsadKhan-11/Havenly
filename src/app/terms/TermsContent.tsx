"use client";

import { LegalPage } from "@/components/LegalPage";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: [
      "By accessing or using the Havenly website, mobile application, or any of our luxury real estate advisory services (collectively, the \"Services\"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Services.",
      "These Terms constitute a legally binding agreement between you and Havenly Real Estate Holdings, LLC (\"Havenly,\" \"we,\" \"us,\" or \"our\"). We reserve the right to modify these Terms at any time, and your continued use of the Services following any changes constitutes acceptance of the revised Terms.",
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility",
    content: [
      "Our Services are available to individuals who are at least 18 years of age and possess the legal capacity to enter into binding contracts. By using our Services, you represent and warrant that you meet these eligibility requirements.",
      "Certain services, including property transactions and financial advisory consultations, may have additional eligibility requirements as determined by applicable laws and regulations in the relevant jurisdiction.",
    ],
  },
  {
    id: "services-description",
    title: "Description of Services",
    content: [
      "Havenly provides luxury real estate advisory, brokerage, and concierge services. Our Services include, but are not limited to: property search and curation, private viewings, market analysis, negotiation support, transaction coordination, and post-acquisition lifestyle services.",
      "All property listings, market data, and valuations provided through our Services are for informational purposes and should not be construed as financial, legal, or investment advice. We recommend consulting with qualified professionals before making any property investment decisions.",
      "We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time without prior notice. We shall not be liable for any modification, suspension, or discontinuation of the Services.",
    ],
  },
  {
    id: "user-accounts",
    title: "User Accounts",
    content: [
      "Certain features of our Services may require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
      "You agree to provide accurate, current, and complete information when creating your account and to update such information as necessary. We reserve the right to suspend or terminate accounts that contain inaccurate or fraudulent information.",
      "You must notify us immediately of any unauthorized use of your account or any other breach of security. Havenly shall not be liable for any loss or damage arising from your failure to protect your account credentials.",
    ],
  },
  {
    id: "property-listings",
    title: "Property Listings & Information",
    content: [
      "While we strive to ensure the accuracy of all property listings and information on our platform, we do not guarantee the completeness, reliability, or accuracy of such information. Property details, including pricing, availability, dimensions, and features, are subject to change without notice.",
      "Photographs, virtual tours, and other media representations of properties may not reflect current conditions. We strongly recommend in-person viewings before making any purchase decisions.",
      "Off-market and exclusive listings are shared under strict confidentiality. You agree not to disclose, share, or distribute any off-market property information received through our Services without our prior written consent.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: [
      "All content on the Havenly platform, including but not limited to text, graphics, logos, images, photographs, video content, data compilations, and software, is the property of Havenly or our content partners and is protected by international copyright, trademark, and other intellectual property laws.",
      "You may not reproduce, distribute, modify, create derivative works from, publicly display, or commercially exploit any content from our Services without our express written permission.",
      "The Havenly name, logo, and all related product and service names, designs, and slogans are trademarks of Havenly Real Estate Holdings, LLC. You may not use these marks without our prior written consent.",
    ],
  },
  {
    id: "confidentiality",
    title: "Confidentiality & Discretion",
    content: [
      "Confidentiality is a cornerstone of our business. All information exchanged between you and Havenly during the course of our advisory relationship — including financial details, property preferences, and transaction specifics — is treated as strictly confidential.",
      "You agree to maintain the confidentiality of any proprietary market intelligence, off-market property information, or privileged access provided to you through our Services. Breach of this confidentiality may result in termination of services and legal action.",
    ],
  },
  {
    id: "fees-payments",
    title: "Fees & Payments",
    content: [
      "Fee structures for our services vary by market, transaction type, and engagement scope. All applicable fees will be disclosed and agreed upon in writing before any services commence.",
      "In standard purchase transactions, our advisory fees are typically paid by the seller at closing. For buyer-representation-only engagements, retainer-based advisory, or specialized services, fees will be clearly outlined in a separate engagement agreement.",
      "All payments are due in accordance with the terms specified in your engagement agreement. Late payments may incur interest charges as permitted by applicable law.",
    ],
  },
  {
    id: "limitation-liability",
    title: "Limitation of Liability",
    content: [
      "To the fullest extent permitted by applicable law, Havenly and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of our Services.",
      "Our total aggregate liability for any claims arising from these Terms or your use of the Services shall not exceed the total fees paid by you to Havenly in the twelve months preceding the claim.",
      "Some jurisdictions do not allow the exclusion or limitation of certain damages. In such jurisdictions, our liability shall be limited to the greatest extent permitted by applicable law.",
    ],
  },
  {
    id: "dispute-resolution",
    title: "Dispute Resolution",
    content: [
      "Any disputes arising from or relating to these Terms or our Services shall first be resolved through good-faith negotiation between the parties. If negotiation fails, disputes shall be submitted to binding arbitration in accordance with the rules of the American Arbitration Association.",
      "The arbitration shall be conducted in New York, New York, and the language of the arbitration shall be English. The arbitrator's decision shall be final and binding on both parties.",
      "Notwithstanding the foregoing, either party may seek injunctive or equitable relief in any court of competent jurisdiction to protect its intellectual property rights or confidential information.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: [
      "These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of laws principles.",
      "For international transactions, applicable local laws and regulations shall supplement these Terms. In the event of a conflict, the provisions most favorable to the protection of client interests shall prevail.",
    ],
  },
  {
    id: "contact",
    title: "Contact Information",
    content: [
      "For questions regarding these Terms of Service, please contact our legal department at legal@havenly.com or write to: Havenly Real Estate Holdings, LLC, One Vanderbilt Avenue, New York, NY 10017.",
      "For service-related inquiries, please reach out to our client services team at inquiries@havenly.com or call +1 (212) 555-0198.",
    ],
  },
];

export function TermsContent() {
  return (
    <LegalPage
      title="Terms of Service"
      subtitle="These terms govern your use of Havenly's platform and luxury real estate advisory services."
      lastUpdated="May 1, 2026"
      sections={sections}
    />
  );
}
