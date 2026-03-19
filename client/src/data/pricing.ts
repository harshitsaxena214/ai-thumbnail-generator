import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
  {
    name: "Basic",
    price: 19,
    period: "month",
    features: [
      "50 AI-generated thumbnails / month",
      "Basic AI styles & templates",
      "Standard resolution exports",
      "No watermark",
      "Email support",
    ],
    mostPopular: false,
  },
  {
    name: "Pro",
    price: 49,
    period: "month",
    features: [
      "Unlimited AI Thumbnails",
      "Premium Templates",
      "4K Resolution",
      "A/B Testing Tools",
      "Priority Support",
      "Custom Fonts",
      "Brand Kit Analysis",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    price: 99,
    period: "month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "API access",
      "Dedicated support",
    ],
    mostPopular: false,
  },
];
