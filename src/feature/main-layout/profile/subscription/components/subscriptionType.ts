export interface SubscriptionPackage {
  _id: string;
  title: string;
  description: string;
  price: number;
  duration: "daily" | "weekly" | "monthly" | "yearly";
  paymentType: "daily" | "weekly" | "monthly" | "yearly";
  productId: string;
  paymentLink: string;
  user: string;
  packageType: "standardPlan" | "premiumPlan";
  status: "active" | "inactive";
  createdAt: string; // ISO date
  updatedAt: string; // ISO date
  __v: number;
}

export interface SubscriptionPackageInfo {
  _id: string;
  title: string;
  price: number;
  duration: "daily" | "weekly" | "monthly" | "yearly";
  packageType: "standardPlan" | "premiumPlan";
}

export interface UserSubscription {
  _id: string;

  user: string;

  subscriptionId: string; // Stripe subscription ID
  trxId: string;          // Stripe payment intent ID

  price: number;
  remaining: number;

  status: "active" | "inactive" | "expired" | "cancelled";

  currentPeriodStart: string; // ISO or Date string
  currentPeriodEnd: string;   // ISO or Date string

  createdAt: string;
  updatedAt: string;

  package: SubscriptionPackage;

  __v: number;
}
