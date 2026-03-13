import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    // This container takes the full height of the screen and centers its children
    <div className="flex items-center justify-center min-h-screen w-full bg-stone-50 ">
      <SignIn path="/sign-in" 
              forceRedirectUrl="/dashboard"
      />
    </div>
  );
}