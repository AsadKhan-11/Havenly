/* ─── Shared Property Data ─── */

export interface Property {
  id: number;
  slug: string;
  title: string;
  location: string;
  address: string;
  price: string;
  priceNum: number;
  image: string;
  gallery: string[];
  beds: number;
  baths: number;
  sqft: string;
  type: "Villa" | "Penthouse" | "Estate";
  status: string;
  yearBuilt: number;
  lotSize: string;
  parking: string;
  description: string;
  longDescription: string[];
  features: string[];
  highlights: { label: string; value: string }[];
  agent: { name: string; title: string; phone: string; email: string };
}

export const properties: Property[] = [
  {
    id: 1,
    slug: "the-obsidian-villa",
    title: "The Obsidian Villa",
    location: "Beverly Hills, CA",
    address: "1247 Trousdale Place, Beverly Hills, CA 90210",
    price: "$24,500,000",
    priceNum: 24500000,
    image: "/exterior.png",
    gallery: ["/exterior.png", "/interior.png", "/property-penthouse.png", "/property-villa.png"],
    beds: 6,
    baths: 8,
    sqft: "12,400",
    type: "Villa",
    status: "For Sale",
    yearBuilt: 2023,
    lotSize: "1.2 Acres",
    parking: "6-Car Garage",
    description:
      "A masterwork of contemporary architecture set behind gates in the exclusive Trousdale Estates. Floor-to-ceiling glass walls frame panoramic city-to-ocean vistas across every room.",
    longDescription: [
      "Nestled behind private gates in the coveted Trousdale Estates, The Obsidian Villa represents the pinnacle of modern architectural achievement. Designed by an internationally acclaimed architect, this 12,400-square-foot residence commands sweeping panoramic views from downtown Los Angeles to the Pacific Ocean.",
      "The home features an open-concept living plan defined by soaring ceilings, museum-quality walls, and floor-to-ceiling glass that dissolves the boundary between interior and exterior spaces. The chef's kitchen is outfitted with Gaggenau appliances, custom walnut cabinetry, and a 14-foot island clad in Calacatta marble.",
      "The primary suite occupies its own wing and includes a fireplace, dual walk-in closets with custom millwork, and a spa-inspired bathroom featuring a freestanding soaking tub with city views. Additional amenities include a climate-controlled wine cellar, a private screening room, an infinity-edge pool and spa, and a fully equipped guest house.",
    ],
    features: ["Infinity Pool", "Home Theater", "Wine Cellar", "Guest House", "Smart Home Automation", "Private Gym", "Outdoor Kitchen", "Fire Pit Lounge"],
    highlights: [
      { label: "Architecture", value: "Contemporary Modern" },
      { label: "Views", value: "City-to-Ocean Panoramic" },
      { label: "Pool", value: "85ft Infinity Edge" },
      { label: "Ceiling Height", value: "14ft Throughout" },
    ],
    agent: { name: "Victoria Ashworth", title: "Senior Director", phone: "+1 (310) 555-0147", email: "v.ashworth@havenly.com" },
  },
  {
    id: 2,
    slug: "aurora-penthouse",
    title: "Aurora Penthouse",
    location: "Manhattan, NY",
    address: "217 West 57th Street, Penthouse, New York, NY 10019",
    price: "$18,200,000",
    priceNum: 18200000,
    image: "/property-penthouse.png",
    gallery: ["/property-penthouse.png", "/interior.png", "/hero.png", "/exterior.png"],
    beds: 4,
    baths: 5,
    sqft: "6,800",
    type: "Penthouse",
    status: "For Sale",
    yearBuilt: 2022,
    lotSize: "N/A",
    parking: "2 Dedicated Spaces",
    description:
      "Crowning one of Billionaire's Row's most coveted towers, this full-floor penthouse offers unobstructed views of Central Park and the Manhattan skyline from every room.",
    longDescription: [
      "Rising above Manhattan's Billionaire's Row, the Aurora Penthouse is a full-floor residence offering an unprecedented 6,800 square feet of living space with 360-degree views of Central Park, the Hudson River, and the city's iconic skyline.",
      "Accessed via a private keyed elevator, the residence opens to a grand gallery with 12-foot ceilings and custom Italian marble floors. The great room features a 30-foot wall of glass framing Central Park in its entirety, complemented by a gas fireplace with a hand-carved limestone surround.",
      "The gourmet kitchen showcases Miele and Sub-Zero appliances, book-matched marble countertops, and a temperature-controlled wine wall. The primary suite includes a dressing room, a marble-clad five-fixture bath, and a private terrace overlooking the park. Building amenities include 24/7 white-glove concierge, a residents-only restaurant, a 75-foot lap pool, and a private motor court.",
    ],
    features: ["Private Elevator", "Terrace", "Smart Home", "Concierge", "Wine Wall", "Fireplace", "Marble Floors", "Park Views"],
    highlights: [
      { label: "Floor", value: "78th — Full Floor" },
      { label: "Views", value: "360° Central Park" },
      { label: "Ceilings", value: "12ft Custom" },
      { label: "Terrace", value: "1,200 sqft Private" },
    ],
    agent: { name: "James Pemberton", title: "Managing Director", phone: "+1 (212) 555-0198", email: "j.pemberton@havenly.com" },
  },
  {
    id: 3,
    slug: "aegean-estate",
    title: "Aegean Estate",
    location: "Mykonos, Greece",
    address: "Agios Lazaros, Mykonos 846 00, Greece",
    price: "€15,000,000",
    priceNum: 15000000,
    image: "/property-villa.png",
    gallery: ["/property-villa.png", "/exterior.png", "/interior.png", "/hero.png"],
    beds: 8,
    baths: 10,
    sqft: "18,200",
    type: "Estate",
    status: "For Sale",
    yearBuilt: 2021,
    lotSize: "3.4 Acres",
    parking: "4-Car Covered",
    description:
      "A clifftop sanctuary overlooking the Aegean Sea with its own private beach access. Traditional Cycladic architecture meets ultra-modern luxury in this breathtaking compound.",
    longDescription: [
      "Perched on a dramatic clifftop along the southwestern coast of Mykonos, the Aegean Estate is a sprawling 18,200-square-foot compound that marries the timeless beauty of Cycladic architecture with cutting-edge modern luxury. The property commands uninterrupted sunset views over the Aegean Sea.",
      "The estate comprises a main villa and two guest pavilions, connected by sculpted stone pathways winding through Mediterranean gardens. The main residence features open-plan living areas with hand-troweled plaster walls, reclaimed oak beams, and custom Venetian plaster finishes. The infinity pool appears to merge seamlessly with the sea below.",
      "A private path leads to a secluded beach cove accessible only from the property. Additional amenities include a helipad, professional kitchen, outdoor cinema terrace, and fully appointed staff quarters with separate entrance. The estate offers total privacy while remaining minutes from Mykonos Town.",
    ],
    features: ["Private Beach", "Helipad", "Infinity Pool", "Staff Quarters", "Outdoor Cinema", "Wine Cellar", "Mediterranean Gardens", "Sunset Terrace"],
    highlights: [
      { label: "Coastline", value: "180m Private Frontage" },
      { label: "Pool", value: "25m Infinity Edge" },
      { label: "Structures", value: "Main Villa + 2 Pavilions" },
      { label: "Beach", value: "Private Cove Access" },
    ],
    agent: { name: "Elena Konstantinou", title: "European Division Director", phone: "+30 2289 055 012", email: "e.konstantinou@havenly.com" },
  },
  {
    id: 4,
    slug: "skyline-manor",
    title: "Skyline Manor",
    location: "Dubai, UAE",
    address: "Frond N, Palm Jumeirah, Dubai, UAE",
    price: "$32,000,000",
    priceNum: 32000000,
    image: "/hero.png",
    gallery: ["/hero.png", "/exterior.png", "/property-mansion.png", "/interior.png"],
    beds: 7,
    baths: 9,
    sqft: "22,000",
    type: "Villa",
    status: "For Sale",
    yearBuilt: 2024,
    lotSize: "2.1 Acres",
    parking: "8-Car Underground",
    description:
      "An ultra-premium villa on the Palm Jumeirah with direct beach frontage and uninterrupted views of the Dubai Marina skyline. Designed by a Pritzker Prize-winning architect.",
    longDescription: [
      "Skyline Manor is a 22,000-square-foot architectural statement occupying a prime tip position on the Palm Jumeirah. Designed by a Pritzker Prize-winning architect, the residence was conceived as a sculptural dialogue between water, light, and living space.",
      "The home features triple-height living spaces, a cantilevered infinity pool extending over the shoreline, and an interior material palette of Pietra Grey marble, brushed bronze, and engineered white oak. The primary suite spans an entire floor with a private rooftop terrace, outdoor shower, and unobstructed views of the Atlantis and Dubai Marina skyline.",
      "Ground-floor amenities include a professional-grade spa with hammam and cold plunge, a state-of-the-art cinema, a glass-enclosed gymnasium, and a private dock accommodating yachts up to 80 feet. An eight-car underground garage features a car turntable and climate-controlled storage. Complete smart-home integration by Crestron allows full control from anywhere in the world.",
    ],
    features: ["Beach Access", "Private Dock", "Gym & Spa", "Cinema", "Hammam", "Rooftop Terrace", "Smart Home", "Car Turntable"],
    highlights: [
      { label: "Beach", value: "Direct 60m Frontage" },
      { label: "Dock", value: "Up to 80ft Yacht" },
      { label: "Garage", value: "8-Car w/ Turntable" },
      { label: "Architect", value: "Pritzker Laureate" },
    ],
    agent: { name: "Rashid Al-Mansouri", title: "Middle East Division Director", phone: "+971 4 555 0234", email: "r.almansouri@havenly.com" },
  },
  {
    id: 5,
    slug: "chateau-lumiere",
    title: "Château Lumière",
    location: "Monaco",
    address: "Avenue Princesse Grace, Monte Carlo, MC 98000",
    price: "€28,500,000",
    priceNum: 28500000,
    image: "/property-mansion.png",
    gallery: ["/property-mansion.png", "/interior.png", "/property-penthouse.png", "/exterior.png"],
    beds: 5,
    baths: 7,
    sqft: "9,600",
    type: "Estate",
    status: "For Sale",
    yearBuilt: 1924,
    lotSize: "0.8 Acres",
    parking: "3-Car Secured",
    description:
      "A rare offering in the heart of Monte Carlo, this meticulously restored residence combines Belle Époque grandeur with state-of-the-art amenities and harbor views.",
    longDescription: [
      "Château Lumière is a once-in-a-generation offering — a meticulously restored Belle Époque residence on the prestigious Avenue Princesse Grace with commanding views of Port Hercule and the Mediterranean. Originally built in 1924 for a European industrialist, the property has undergone a five-year, no-expense-spared restoration.",
      "Every detail honors the building's heritage while incorporating the finest modern comforts. Original marble fireplaces, ornate ceiling moldings, and herringbone parquet floors have been painstakingly restored. The kitchen features La Cornue ranges, Dornbracht fittings, and custom cabinetry by a renowned Parisian atelier.",
      "The formal garden terrace offers over 2,000 square feet of outdoor entertaining space with panoramic harbor views — ideal for the Monaco Grand Prix. The lower level houses a temperature-controlled wine cellar accommodating 2,000 bottles, a tasting room, and a private wellness suite. The property includes three secured parking spaces — an extraordinary rarity in Monaco.",
    ],
    features: ["Harbor Views", "Wine Cellar", "Garden Terrace", "Valet", "Restored Heritage", "Wellness Suite", "Grand Prix Views", "Tasting Room"],
    highlights: [
      { label: "Heritage", value: "1924 Belle Époque" },
      { label: "Restoration", value: "5-Year Museum Grade" },
      { label: "Wine Cellar", value: "2,000 Bottles" },
      { label: "Terrace", value: "2,000 sqft Harbor View" },
    ],
    agent: { name: "Sophie Beaumont", title: "European Estates Director", phone: "+377 93 55 01 47", email: "s.beaumont@havenly.com" },
  },
  {
    id: 6,
    slug: "the-glass-pavilion",
    title: "The Glass Pavilion",
    location: "Los Angeles, CA",
    address: "8901 Sunset Boulevard, West Hollywood, CA 90069",
    price: "$19,750,000",
    priceNum: 19750000,
    image: "/interior.png",
    gallery: ["/interior.png", "/exterior.png", "/property-villa.png", "/hero.png"],
    beds: 5,
    baths: 6,
    sqft: "11,200",
    type: "Villa",
    status: "For Sale",
    yearBuilt: 2022,
    lotSize: "0.9 Acres",
    parking: "4-Car Garage",
    description:
      "A seamless indoor-outdoor living experience defined by walls of glass, polished concrete, and natural light. Perched above the Sunset Strip with sweeping canyon views.",
    longDescription: [
      "The Glass Pavilion redefines the concept of California indoor-outdoor living. Sited on nearly an acre above the Sunset Strip, the home is a study in transparency — virtually every wall is glass, creating an immersive connection to the surrounding canyon landscape and city views beyond.",
      "The 11,200-square-foot residence features polished concrete floors, white oak millwork, and a curated palette of natural materials. The living pavilion opens fully to a 2,500-square-foot terrace via 40-foot retractable glass walls. The chef's kitchen is anchored by a monolithic marble island and outfitted with Wolf and Sub-Zero appliances.",
      "The rooftop deck offers 360-degree views and includes an outdoor kitchen, fire feature, and plunge pool. Below, a gallery-quality art corridor leads to the primary suite, which features a meditation garden, soaking tub, and frameless glass shower overlooking the canyon. A separate studio pavilion is ideal for a home office or creative workspace.",
    ],
    features: ["Rooftop Deck", "Infinity Pool", "Art Gallery", "Smart Home", "Retractable Glass Walls", "Meditation Garden", "Studio Pavilion", "Outdoor Kitchen"],
    highlights: [
      { label: "Glass Walls", value: "40ft Retractable" },
      { label: "Terrace", value: "2,500 sqft" },
      { label: "Views", value: "Canyon + City 360°" },
      { label: "Design", value: "Museum-Quality Finishes" },
    ],
    agent: { name: "Victoria Ashworth", title: "Senior Director", phone: "+1 (310) 555-0147", email: "v.ashworth@havenly.com" },
  },
  {
    id: 7,
    slug: "sovereign-tower-residence",
    title: "Sovereign Tower Residence",
    location: "London, UK",
    address: "One Hyde Park, Knightsbridge, London SW1X 7LJ",
    price: "£22,000,000",
    priceNum: 22000000,
    image: "/property-penthouse.png",
    gallery: ["/property-penthouse.png", "/interior.png", "/property-mansion.png", "/exterior.png"],
    beds: 4,
    baths: 5,
    sqft: "7,400",
    type: "Penthouse",
    status: "For Sale",
    yearBuilt: 2020,
    lotSize: "N/A",
    parking: "2 Secured Spaces",
    description:
      "Occupying the top two floors of a landmark Mayfair development, this penthouse offers double-height living spaces and 360-degree views across London's iconic skyline.",
    longDescription: [
      "The Sovereign Tower Residence occupies the crowning two floors of one of Knightsbridge's most prestigious new developments. With 7,400 square feet of meticulously designed living space, the residence offers unparalleled views of Hyde Park, the London Eye, and the Houses of Parliament.",
      "A private lift opens directly into a double-height reception hall with floor-to-ceiling windows and a dramatic floating staircase connecting the two levels. The main living space features a custom-designed fireplace, silk wallcoverings, and book-matched marble throughout. The kitchen by Bulthaup includes a Gaggenau appliance suite and a walk-in pantry.",
      "The upper level is dedicated entirely to the private quarters, comprising a master suite with his-and-hers dressing rooms, three additional en-suite bedrooms, and a private library. Building amenities include a 24-hour concierge by Quintessentially, a private spa, cinema, and squash court. The building's security has been designed to diplomatic standards.",
    ],
    features: ["Private Lift", "Terrace Garden", "Concierge", "Valet Parking", "Diplomatic Security", "Private Spa", "Cinema", "Squash Court"],
    highlights: [
      { label: "Floors", value: "Duplex — Top 2 Levels" },
      { label: "Views", value: "Hyde Park Panoramic" },
      { label: "Security", value: "Diplomatic Standard" },
      { label: "Concierge", value: "Quintessentially 24/7" },
    ],
    agent: { name: "Charles Worthington", title: "London Division Director", phone: "+44 20 7555 0123", email: "c.worthington@havenly.com" },
  },
  {
    id: 8,
    slug: "villa-sereno",
    title: "Villa Sereno",
    location: "Lake Como, Italy",
    address: "Via Regina, 22010 Laglio, Lake Como, Italy",
    price: "€35,000,000",
    priceNum: 35000000,
    image: "/property-villa.png",
    gallery: ["/property-villa.png", "/property-mansion.png", "/interior.png", "/exterior.png"],
    beds: 9,
    baths: 12,
    sqft: "24,000",
    type: "Estate",
    status: "For Sale",
    yearBuilt: 1780,
    lotSize: "5.2 Acres",
    parking: "6-Car Covered",
    description:
      "A historic lakefront estate with meticulously maintained formal gardens, private dock, and guest villas. Centuries of Italian craftsmanship meet contemporary comfort.",
    longDescription: [
      "Villa Sereno is a landmark lakefront estate on the western shore of Lake Como, in the same exclusive enclave favored by international royalty and Hollywood luminaries. Originally constructed in 1780 for a Milanese noble family, the property has been painstakingly maintained and sensitively modernized over the centuries.",
      "The 24,000-square-foot main villa retains its original frescoed ceilings, Venetian terrazzo floors, and carved marble fireplaces, while incorporating invisible modern comforts including radiant heating, Lutron lighting, and a Sonos-integrated sound system. The formal gardens, designed in the Italian Renaissance tradition, cascade down to the lake in a series of terraces planted with centuries-old cypress and wisteria.",
      "The estate includes two self-contained guest villas, a caretaker's cottage, a private dock accommodating vessels up to 40 feet, and a boathouse with a restored vintage Riva. A professional-grade kitchen, a vaulted wine cellar housing over 3,000 bottles, and a newly constructed spa pavilion with indoor pool complete this incomparable offering.",
    ],
    features: ["Lakefront", "Private Dock", "Guest Villas", "Tennis Court", "Frescoed Ceilings", "Wine Cellar", "Spa Pavilion", "Boathouse"],
    highlights: [
      { label: "Heritage", value: "Built 1780" },
      { label: "Lake Frontage", value: "120m Private" },
      { label: "Wine Cellar", value: "3,000+ Bottles" },
      { label: "Grounds", value: "5.2 Acres Formal Gardens" },
    ],
    agent: { name: "Elena Konstantinou", title: "European Division Director", phone: "+39 031 555 0189", email: "e.konstantinou@havenly.com" },
  },
  {
    id: 9,
    slug: "harbor-edge-loft",
    title: "Harbor Edge Loft",
    location: "Sydney, Australia",
    address: "Tower 3, International Towers, Barangaroo, NSW 2000",
    price: "A$16,800,000",
    priceNum: 16800000,
    image: "/exterior.png",
    gallery: ["/exterior.png", "/property-penthouse.png", "/interior.png", "/hero.png"],
    beds: 3,
    baths: 4,
    sqft: "5,200",
    type: "Penthouse",
    status: "For Sale",
    yearBuilt: 2023,
    lotSize: "N/A",
    parking: "3 Secured Spaces",
    description:
      "A sophisticated harbor-view residence in the exclusive Barangaroo precinct, with expansive terraces and premium finishes throughout. Unmatched proximity to the Opera House.",
    longDescription: [
      "Harbor Edge Loft is a rare sub-penthouse offering in the most sought-after tower within Sydney's transformative Barangaroo waterfront precinct. The 5,200-square-foot residence offers direct, unobstructed views of the Sydney Harbour Bridge, Opera House, and the sparkling harbour waters.",
      "Designed by a Pritzker Prize-nominated firm, the interiors feature engineered European oak floors, full-height Venetian plaster walls, and a bespoke kitchen by Poliform with Miele appliances and Pietra Grey marble surfaces. The open-plan living and dining area flows onto a 900-square-foot wrap-around terrace — perfect for harbour-side entertaining.",
      "The master suite includes a walk-in wardrobe, a marble-clad ensuite with freestanding bath, and a private balcony facing the Opera House. Building amenities include a residents-only harbor-level pool, private dining room, wine lockers, concierge, and direct access to Barangaroo's waterfront promenade, dining precinct, and Crown Sydney.",
    ],
    features: ["Harbor Views", "Terrace", "Concierge", "Wine Storage", "Harbor Pool", "Private Dining", "Crown Access", "Wrap-Around Terrace"],
    highlights: [
      { label: "Views", value: "Opera House + Bridge" },
      { label: "Terrace", value: "900 sqft Wrap-Around" },
      { label: "Building", value: "Pritzker-Nominated Design" },
      { label: "Location", value: "Barangaroo Waterfront" },
    ],
    agent: { name: "Oliver Chen", title: "Asia-Pacific Director", phone: "+61 2 5555 0147", email: "o.chen@havenly.com" },
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getPropertyById(id: number): Property | undefined {
  return properties.find((p) => p.id === id);
}
