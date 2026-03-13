import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/Header";
// Note: In Core 3, some themes moved to @clerk/themes. 
// If @clerk/ui/themes fails, try: import { neobrutalism } from "@clerk/themes";
import { neobrutalism } from "@clerk/ui/themes";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SnapDish - AI Recipes Platform",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        theme: neobrutalism, // In Core 3, baseTheme is often just called 'theme'
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="py-8 px-4 border-t">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/new.png"
                  alt="Servd Logo"
                  width={48}
                  height={48}
                  className="w-14"
                />
              </div>

              <p className="text-stone-500 text-sm">
                All CopyRights Reserved
              </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}