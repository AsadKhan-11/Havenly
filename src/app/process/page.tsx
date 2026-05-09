import type { Metadata } from "next";
import { ProcessPage } from "./ProcessPage";

export const metadata: Metadata = {
  title: "Our Process | Havenly Premium Real Estate",
  description:
    "Discover Havenly's bespoke property acquisition process — from initial consultation through seamless closing. Six refined phases designed for discerning clients.",
};

export default function Page() {
  return <ProcessPage />;
}
