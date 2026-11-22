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

// FitU Apex founding cohort: prelaunch sales page at /apex/cohort.
// Anything left as null or "#" shows a "coming soon" placeholder on the page instead.
export const cohort = {
  /** Price of one founding seat, e.g. "$197". null shows "Price announced soon". */
  seatPrice: null as string | null,
  /** What the price compares to, e.g. "$297 after launch". null hides the line. */
  compareAt: null as string | null,
  /** Total founding seats, e.g. 50. null hides the seat counter. */
  seatsTotal: null as number | null,
  /** Seats still open. Update by hand as seats sell. */
  seatsLeft: null as number | null,
  /**
   * Stripe Payment Link for one seat (https://buy.stripe.com/...).
   * While it's "#", the buy buttons become "Reserve my seat" forms that go to the Cohort sheet.
   * In Stripe, set the link's "After payment" redirect to https://fitutoo.com/apex/cohort/welcome
   */
  stripePaymentLink: "#",
  /** e.g. "January 5, 2027". null shows "Start date announced soon". */
  startDate: null as string | null,
  /** e.g. "8 weeks". */
  length: null as string | null,
  /** Last day to buy a founding seat, e.g. "December 31, 2026". null hides it. */
  enrollmentDeadline: null as string | null,
};

// What a founding seat includes. DRAFT: confirm or edit each line before going live.
export const cohortIncluded = [
  { icon: "🔓", title: "Early access to Apex", text: "Get into the app before public launch and set up your Performance Score from Day 1." },
  { icon: "⭐", title: "Pro+ for the whole cohort", text: "All five AI agents, analytics, meal plans, grocery lists and Shop at Kroger while the cohort runs." },
  { icon: "👥", title: "Private founding Pod", text: "A coach-led group of founding members who train, check in and push each other." },
  { icon: "🎥", title: "Live group coaching", text: "Regular live calls to set targets, review progress and answer questions." },
  { icon: "🤝", title: "1-on-1 kickoff session", text: "A video session with a coach to set your goals and build your first plan." },
  { icon: "🏷️", title: "Founding member pricing", text: "Keep a founding rate on your plan after launch, for as long as you stay a member." },
  { icon: "🛠️", title: "Shape what we build", text: "Direct line to the team. Founding feedback decides what ships next." },
  { icon: "🏅", title: "Founding member badge", text: "Permanent recognition in the app as one of the first members of Apex." },
];

// Real quotes from beta testers or early members for the cohort page. Hidden while empty. Never use made-up ones.
export const cohortTestimonials: Testimonial[] = [];
