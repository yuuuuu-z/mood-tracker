"use client";

import { Button } from "@/components/ui/button";
import { checkout } from "@/lib/action/stripe";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { loadStripe } from "@stripe/stripe-js";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";

export default function Checkout({ priceId }: { priceId: string }) {
  const { user } = useUser();
  const email = user?.emailAddresses[0]?.emailAddress as string;
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setLoading(true);
      const data = JSON.parse(await checkout(email, priceId, location.origin + "/success"));

      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
      );
      const res = await stripe?.redirectToCheckout({
        sessionId: data.id,
      });
      setLoading(false);
    } catch (error) {

    }
  };
  return (
    <Button
      onClick={handleCheckout}
      className="w-full bg-purple-500 font-bold text-lg"
    >
      Get Started{" "}
      <LoaderCircle
        className={cn(" animate-spin", loading ? "block" : "hidden")}
      />
    </Button>
  );
}
