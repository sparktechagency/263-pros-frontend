"use client";
import React, { useEffect } from "react";
import SubscriptionCard from "./components/SubscriptionCard";
import BuySubscriptionModal from "./components/BuySubscriptionModal";
import {  userSubscription } from "@/constants/subscription";
import { SubscriptionPackage, UserSubscription } from "./components/subscriptionType";
import { myFetch } from "../../../../../helpers/myFetch";

const Subscription = () => {  
    const [isOpen, setIsOpen] = React.useState(false); 
    const [mySubscription, setMySubscription] = React.useState<UserSubscription>({} as UserSubscription);
    useEffect(()=>{
        const fetchUserSubscription = async () => {
            const subscription = await myFetch("/subscription/details",{
              cache: "no-cache",
            })
            setMySubscription(subscription.data as UserSubscription)
        }
        fetchUserSubscription()
    },[])

    
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-8">
        <h1 className="lg:text-2xl text-xl font-medium text-[#1A1A1A]">
          Subscription
        </h1>
        <button className="px-6 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-[#044a57] transition-colors" onClick={() => setIsOpen(true)}>
          Buy Package
        </button>
      </div>

      <SubscriptionCard subscription={mySubscription?.package} mySubscription={true} /> 
      <BuySubscriptionModal open={isOpen} setOpen={setIsOpen} />
    </div>
  );
};

export default Subscription;