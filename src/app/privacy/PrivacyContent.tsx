"use client";

import { LegalPage } from "@/components/LegalPage";

const sections = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: [
      "At Havenly, we collect information that you voluntarily provide when using our services, including your name, email address, phone number, mailing address, and financial information relevant to property transactions.",
      "We may also collect information automatically when you visit our website, such as your IP address, browser type, device information, pages visited, and referring URLs. This data helps us improve our digital experience and tailor our services to your preferences.",
      "When you schedule a private viewing or consultation, we may collect additional details about your property preferences, investment horizon, and lifestyle requirements to provide a fully personalized advisory experience.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How We Use Your Information",
    content: [
      "We use your personal information to provide, maintain, and improve our luxury real estate services. This includes facilitating property searches, scheduling viewings, processing transactions, and communicating with you about properties that match your criteria.",
      "Your information enables us to personalize your experience, curate property recommendations, and provide market intelligence relevant to your investment interests. We may use your contact details to send you updates about new listings, market trends, and exclusive events.",
      "We also use aggregated, anonymized data for internal analytics, business planning, and service optimization. This data cannot be used to identify individual users.",
    ],
  },
  {
    id: "information-sharing",
    title: "Information Sharing & Disclosure",
    content: [
      "Havenly operates with the highest standards of discretion. We do not sell, rent, or trade your personal information to third parties for their marketing purposes under any circumstances.",
      "We may share your information with trusted service providers who assist us in operating our business, such as legal counsel, financial institutions, property inspectors, and technology partners. These parties are contractually obligated to protect your information and use it solely for the services they provide to us.",
      "We may disclose your information when required by law, to comply with legal processes, to protect the rights and safety of Havenly and our clients, or in connection with a merger, acquisition, or sale of assets.",
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    content: [
      "We implement industry-leading security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption of data in transit and at rest, secure server infrastructure, and regular security audits.",
      "Access to personal information is restricted to authorized Havenly personnel who require it to perform their duties. All team members undergo comprehensive confidentiality training and are bound by strict non-disclosure agreements.",
      "While we employ robust security measures, no method of electronic transmission or storage is completely secure. We continuously monitor and update our security practices to address emerging threats.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies & Tracking Technologies",
    content: [
      "Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. Essential cookies are required for the website to function properly, while analytics and preference cookies help us understand how visitors interact with our site.",
      "You can manage your cookie preferences through your browser settings. Please note that disabling certain cookies may affect the functionality of our website and limit your ability to use some features.",
      "We may use third-party analytics services, such as Google Analytics, which collect anonymized data about website usage. These services have their own privacy policies governing their use of such information.",
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights & Choices",
    content: [
      "You have the right to access, correct, update, or request deletion of your personal information at any time. You may also object to or restrict the processing of your data, and request a portable copy of your information.",
      "To exercise any of these rights, please contact our privacy team at privacy@havenly.com. We will respond to your request within 30 days in accordance with applicable data protection laws.",
      "You may opt out of receiving marketing communications at any time by clicking the unsubscribe link in our emails or contacting us directly. Please note that even after opting out, you may still receive transactional communications related to active property engagements.",
    ],
  },
  {
    id: "international-transfers",
    title: "International Data Transfers",
    content: [
      "As a global luxury real estate firm operating across multiple jurisdictions, your information may be transferred to and processed in countries other than your country of residence. We ensure that all international data transfers comply with applicable data protection regulations.",
      "When transferring data across borders, we use appropriate safeguards such as Standard Contractual Clauses, data processing agreements, and compliance with frameworks recognized by relevant regulatory authorities.",
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: [
      "We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. The retention period may vary depending on the nature of the information and the purpose of processing.",
      "When personal information is no longer required, we securely delete or anonymize it. Transaction-related records are typically retained for a minimum of seven years in accordance with legal and regulatory obligations.",
    ],
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    content: [
      "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected information from a child, we will take steps to delete such information promptly.",
    ],
  },
  {
    id: "policy-updates",
    title: "Policy Updates",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on our website and, where appropriate, by direct communication.",
      "We encourage you to review this policy periodically to stay informed about how we protect your information. Your continued use of our services after any changes constitutes acceptance of the updated policy.",
    ],
  },
  {
    id: "contact-us",
    title: "Contact Us",
    content: [
      "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our privacy team at privacy@havenly.com or write to us at: Havenly Real Estate, One Vanderbilt Avenue, New York, NY 10017.",
      "For EU-based inquiries, you may also contact our European Data Protection Officer at dpo@havenly.com.",
    ],
  },
];

export function PrivacyContent() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="Your privacy is fundamental to our relationship. This policy explains how we collect, use, and safeguard your personal information."
      lastUpdated="May 1, 2026"
      sections={sections}
    />
  );
}
