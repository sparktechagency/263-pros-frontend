"use client";
import React from "react";
import SubscriptionCard from "./components/SubscriptionCard";
import BuySubscriptionModal from "./components/BuySubscriptionModal";
import {  userSubscription } from "@/constants/subscription";

const Subscription = () => {  
    const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-[28px] font-medium text-[#1A1A1A]">
          Subscription
        </h1>
        <button className="px-6 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-[#044a57] transition-colors" onClick={() => setIsOpen(true)}>
          Buy Package
        </button>
      </div>

      <SubscriptionCard subscription={userSubscription} /> 
      <BuySubscriptionModal open={isOpen} setOpen={setIsOpen} />
    </div>
  );
};

export default Subscription;