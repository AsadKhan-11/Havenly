import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { properties, getPropertyBySlug } from "@/lib/properties";
import { PropertyDetail } from "./PropertyDetail";

export async function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return { title: "Property Not Found | Havenly" };

  return {
    title: `${property.title} — ${property.location} | Havenly`,
    description: property.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  return <PropertyDetail property={property} />;
}
