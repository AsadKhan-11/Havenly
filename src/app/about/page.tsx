import type { Metadata } from "next";
import { AboutPage } from "./AboutPage";

export const metadata: Metadata = {
  title: "About Us | Havenly Premium Real Estate",
  description:
    "Discover the story behind Havenly — a global authority in luxury real estate. Our team, values, heritage, and commitment to curating the world's finest properties.",
};

export default function Page() {
  return <AboutPage />;
}
