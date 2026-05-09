import type { Metadata } from "next";
import { TermsContent } from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service | Havenly Premium Real Estate",
  description:
    "Havenly's terms of service governing the use of our luxury real estate platform, advisory services, and property transactions.",
};

export default function Page() {
  return <TermsContent />;
}

