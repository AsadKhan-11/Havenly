import type { Metadata } from "next";
import { PrivacyContent } from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Havenly Premium Real Estate",
  description:
    "Havenly's privacy policy outlining how we collect, use, and protect your personal information across our luxury real estate services.",
};

export default function Page() {
  return <PrivacyContent />;
}

