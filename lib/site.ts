// Everything you are likely to edit lives here: links, prices, spots, testimonials.

export const site = {
  name: "FitU",
  domain: "fitutoo.com",
  tagline: "Health and wellness opportunities for anyone who desires a better life.",
  contactEmail: "rreviews4u@gmail.com",
  benefitCorpUrl: "https://fitubenefitcorp.org",
};

// Links that live outside this site. Replace the "#" placeholders when you have them.
export const links = {
  skoolAcademy: "#", // FitU Too Wellness Academy on Skool
  apexApp: "#", // App Store / web app link once FitU Apex is live
  instagram: "#",
  facebook: "#",
};

export const elite = {
  price: "$3,500",
  paymentPlans: true,
  // Set to the real number of open spots, or null to hide the scarcity line.
  spotsLeft: 5 as number | null,
};

export type Testimonial = { name: string; role?: string; quote: string; photo?: string };

// Add real client testimonials here. The testimonial section stays hidden while this list is empty.
export const testimonials: Testimonial[] = [];

export type ApparelBrand = { name: string; blurb: string; url: string; image?: string };

export const apparelBrands: ApparelBrand[] = [
  { name: "Approximit Fit", blurb: "Training wear built to move with you.", url: "#", image: "/images/pink-fit.jpg" },
  { name: "Z1G", blurb: "Street-ready athletic style.", url: "#" },
  { name: "Yak Fitness", blurb: "Gear for the long haul.", url: "#" },
];

export const nav = [
  { href: "/apex", label: "Apex App" },
  { href: "/elite", label: "Elite Training" },
  { href: "/academy", label: "Academy" },
  { href: "/apparel", label: "Apparel" },
];
