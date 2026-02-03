import { SubscriptionPackage } from "./subscriptionType"
const planStyles = {
  "standardPlan": {
    bg: "bg-gradient-to-br from-[#FFF3C4] to-[#FFE9A0]",
    button: "!bg-[#F1C40F] hover:!bg-[#d4ac0d]",
    badge: "bg-[#343434]",
  },
  premiumPlan: {
    bg: "!bg-gradient-to-br !from-[#E6FAEC] !to-[#D2F5DC]",
    button: "!bg-[#22C55E] !hover:bg-[#16a34a]",
    badge: "!bg-[#1f2937]",
  },

  mySubscription: {
    bg: "bg-gradient-to-br from-[#D1E8FF] to-[#A9D1FF]",
    button: "bg-[#3B82F6] hover:bg-[#2563eb]",
    badge: "bg-[#1e40af]",
  },

};
const SubscriptionCard = ({
  subscription,
  mySubscription = false,
}: {
  subscription: SubscriptionPackage;
  mySubscription?: boolean;
}) => {

  if (!subscription) {
    return <SubscriptionSkeleton />;
  }
  
  const style = mySubscription ? planStyles.premiumPlan : subscription?.packageType === "premiumPlan" ? planStyles.premiumPlan : planStyles.standardPlan;
 
  

  return (
    <div
      className={`w-full sm:w-[300px] h-[420px] rounded-2xl p-6 flex flex-col items-center text-center shadow-lg transition-transform duration-300 hover:-translate-y-2 ${style?.bg}`}
    >
      {/* Plan Badge */}
      <span
        className={`text-white text-xs px-4 py-1.5 rounded-full mb-6 ${style?.badge}`}
      >
        {subscription?.title}
      </span>

      {/* Price */}
      <h2 className="text-4xl font-bold text-[#0f172a] mb-1">
        ${subscription?.price}
      </h2>
      <p className="text-sm text-gray-600 mb-6 capitalize">
        / {subscription?.duration}
      </p>

      {/* Description */}
      <p className="text-[#1f2937] text-sm leading-relaxed mb-8 px-2">
        {subscription?.description}
      </p>

      {/* Features */}
      <ul className="text-sm text-gray-700 space-y-2 mb-auto">
        <li>✔ Payment Type: {subscription?.paymentType}</li>
        <li>✔ Status: {subscription?.status}</li>
        <li>✔ Secure Checkout</li>
      </ul>

      {/* CTA */}
      <a
        href={subscription?.status === "active" || mySubscription ? subscription?.paymentLink : "#"}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full mt-6 px-6 py-3 rounded-xl !text-white text-sm font-semibold transition-colors ${
          style.button
        }`}
      >
        {mySubscription
          ? "Current Subscription"
          : "Subscribe Now"}
      </a>
    </div>
  );
};

export default SubscriptionCard 

const SubscriptionSkeleton = () => {
  return (
    <div className="w-full sm:w-[300px] h-[420px] rounded-2xl p-6 flex flex-col items-center text-center shadow-lg bg-gray-100 animate-pulse">
      
      {/* Badge */}
      <div className="h-6 w-28 bg-gray-300 rounded-full mb-6" />

      {/* Price */}
      <div className="h-10 w-24 bg-gray-300 rounded mb-2" />
      <div className="h-4 w-20 bg-gray-200 rounded mb-6" />

      {/* Description */}
      <div className="space-y-2 mb-8 w-full px-4">
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto" />
      </div>

      {/* Features */}
      <div className="space-y-3 w-full mb-auto px-6">
        <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto" />
        <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto" />
        <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto" />
      </div>

      {/* Button */}
      <div className="h-12 w-full bg-gray-300 rounded-xl mt-6" />
    </div>
  );
};