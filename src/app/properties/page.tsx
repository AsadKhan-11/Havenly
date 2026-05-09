import type { Metadata } from "next";
import { PropertiesPage } from "./PropertiesPage";

export const metadata: Metadata = {
  title: "Properties | Havenly Premium Real Estate",
  description:
    "Explore our exclusive collection of luxury properties spanning the world's most prestigious addresses. Villas, penthouses, estates, and architectural masterpieces.",
};

export default function Page() {
  return <PropertiesPage />;
}
