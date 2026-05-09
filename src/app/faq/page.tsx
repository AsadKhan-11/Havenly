import type { Metadata } from "next";
import { FAQPage } from "./FAQPage";

export const metadata: Metadata = {
  title: "FAQ | Havenly Premium Real Estate",
  description:
    "Answers to frequently asked questions about Havenly's luxury real estate services, acquisition process, off-market access, and global market expertise.",
};

export default function Page() {
  return <FAQPage />;
}
