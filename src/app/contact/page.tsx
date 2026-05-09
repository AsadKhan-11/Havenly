import type { Metadata } from "next";
import { ContactPage } from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | Havenly Premium Real Estate",
  description:
    "Get in touch with Havenly's luxury real estate advisors. Schedule a private consultation for your next extraordinary residence.",
};

export default function Page() {
  return <ContactPage />;
}
