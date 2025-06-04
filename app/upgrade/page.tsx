import { describe } from "node:test";
import React from "react";
import BackBtn from "../components/BackBtn";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Checkout from "./Checkout";

export default function Upgradepage() {
  const prices = [
    {
      title: "🌱 Beginner Plan",
      description:
        "Get started on your mood journey with essential tools to help you track your emotional well-being day by day.",
      benefits: [
        "Daily mood tracking",
        "View mood history (last 7 days)",
        "Basic emotion tag",
        "Mobile-friendly interface",
      ],
      amount: 0.99,
      isPopuler: false,
      priceId: "price_1RW6vOQUbS6yR7totDsPv9Fk",
    },
    {
      title: "🚀 Pro Plan",
      description:
        "Unlock deeper insights and start building healthier habits with more customization and data analysis.",
      benefits: [
        "Full mood history access",
        "Add custom emotion tags",
        "Weekly mood reports",
        "Mood trend charts",
        "Journal entries for each day",
      ],
      amount: 4.99,
      isPopuler: true,
      priceId: "price_1RW6w3QUbS6yR7toZE11QuJa",
    },
    {
      title: "🌟 Advance Plan",
      description:
        "Go beyond mood tracking — use your data to discover patterns, improve productivity, and build emotional resilience.",
      benefits: [
        "AI mood insights & suggestions",
        "Daily habit tracker integration",
        "Set mood-related goals",
        "Personalized motivation tips",
        "Priority support",
        "Early access to new features",
      ],
      amount: 9.99,
      isPopuler: false,
      priceId: "price_1RW6wZQUbS6yR7toOEEucrqS",
    },
  ];
  return (
    <div className="flex flex-col p-5  ">
      <BackBtn />
      <p className="text-2xl font-bold mt-5">Upgrade Mood Tracker 🎯</p>
      <div className="h-screen flex flex-col gap-5 my-10  ">
        {prices.flatMap((price, idx) => {
          return (
            <div
              className={cn("border rounded-md p-5 space-y-5  )", {
                "ring-2 ring-green-500": price.isPopuler,
              })}
              key={idx}
            >
              <div className="flex items-center gap-5 ">
                <p className="text-[1.3rem] md:text-2xl font-bold text-purple-500">
                  {price.title}
                </p>
                <p className="text-[1rem] md:text-lg font-bold">
                  {price.amount}$/month
                </p>
              </div>
              <p>{price.description}</p>
              <div className="space-y-2">
                {price.benefits.flatMap((benefit, idx) => {
                  return (
                    <div className="flex gap-2 " key={idx}>
                      <CheckCircle2 color="#a855f7" />
                      <p className="text-sm">{benefit}</p>
                    </div>
                  );
                })}
              </div>
              <Checkout priceId={price.priceId} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
