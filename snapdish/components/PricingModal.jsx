"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import PricingSection from "./PricingSection"; // Kept for your reference
import { PricingTable } from "@clerk/nextjs";

export default function PricingModal({ subscriptionTier = "free", children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Fixes hydration issues by ensuring IDs are only generated on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Only allow opening if user is on free plan
  const canOpen = subscriptionTier === "free";

  // If we haven't reached the client yet, render a non-interactive version
  // of the trigger to match the server-side HTML exactly.
  if (!mounted) {
    return <div className="inline-block">{children}</div>;
  }

  return (
    <Dialog open={isOpen} onOpenChange={canOpen ? setIsOpen : undefined}>
      <DialogTrigger asChild disabled={!canOpen}>
        {children}
      </DialogTrigger>

      <DialogContent className="p-8 pt-4 sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Title is required for accessibility/Radix standards */}
        <DialogTitle className="sr-only">Pricing Plans</DialogTitle>
        <div>
          {/* Note: Clerk's <PricingTable/> requires Billing to be enabled 
            in your Clerk Dashboard to render without errors.
          */}
          <PricingTable />
        </div>
      </DialogContent>
    </Dialog>
  );
}