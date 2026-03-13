"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Cookie, Refrigerator, Sparkles } from "lucide-react";
import Link from "next/link";
import { Show, SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
import PricingModal from "./PricingModal";
import Image from "next/image";
import { Badge } from "./ui/badge";
import UserDropdown from "./UserDropdown";
import HowToCookModal from "./HowToCookModal";

export default function Header() {
  const { user, isLoaded } = useUser();
  const [mounted, setMounted] = useState(false);

  // Fixes the Hydration Mismatch error by ensuring client-side rendering matches server-side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent rendering until both Clerk and the component are fully ready
  if (!isLoaded || !mounted) {
    return <div className="h-16" />; 
  }

  // Helper to get subscription tier safely from Clerk's publicMetadata
  const subscriptionTier = user?.publicMetadata?.subscriptionTier || "free";

  return (
    <header className="fixed top-0 w-full border-b border-stone-200 bg-stone-50/80 backdrop-blur-md z-50 supports-backdrop-filter:bg-stone-50/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href={user ? "/dashboard" : "/"}
          className="flex items-center gap-2 group"
        >
          <Image
            src="/new.png"
            alt="SnapDish Logo"
            width={60}
            height={60}
            className="w-16"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-600">
          <Link
            href="/recipes"
            className="hover:text-orange-600 transition-colors flex gap-1.5 items-center"
          >
            <Cookie className="w-4 h-4" />
            My Recipes
          </Link>
          <Link
            href="/pantry"
            className="hover:text-orange-600 transition-colors flex gap-1.5 items-center"
          >
            <Refrigerator className="w-4 h-4" />
            My Pantry
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          {/* Authenticated State */}
          <Show when="signed-in">
          <HowToCookModal/>
            <div className="flex items-center gap-4">
              <PricingModal subscriptionTier={subscriptionTier}>
                <Badge
                  variant="outline"
                  className={`flex h-8 px-3 gap-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    subscriptionTier === "pro"
                      ? "bg-linear-to-r from-orange-600 to-amber-500 text-white border-none shadow-sm"
                      : "bg-stone-200/50 text-stone-600 border-stone-200 hover:bg-stone-300/50 hover:border-stone-300"
                  }`}
                >
                  <Sparkles
                    className={`h-3 w-3 ${
                      subscriptionTier === "pro" ? "text-white fill-white/20" : "text-stone-500"
                    }`}
                  />
                  <span>
                    {subscriptionTier === "pro" ? "Pro Chef" : "Free Plan"}
                  </span>
                </Badge>
              </PricingModal>
              <UserDropdown />
            </div>
          </Show>

          {/* Unauthenticated State */}
          <Show when="signed-out">
            <div className="flex items-center space-x-4">
              <SignInButton fallbackRedirectUrl="/dashboard">
                <Button
                  variant="ghost"
                  className="text-stone-600 hover:text-orange-600 hover:bg-orange-50 font-medium"
                >
                  Sign In
                </Button>
              </SignInButton>
              
              <SignUpButton fallbackRedirectUrl="/dashboard">
                <Button variant="primary" className="rounded-full px-6">
                  Get Started
                </Button>
              </SignUpButton>
            </div>
          </Show>
        </div>
      </nav>
    </header>
  );
}