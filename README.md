#  SnapDish | AI-Powered Smart Recipe Engine

**SnapDish** is a full-stack, AI-integrated culinary platform that transforms how users discover and create recipes. By combining **TheMealDB API**, **Strapi CMS**, and **Google Gemini AI**, SnapDish offers an "Infinite Cookbook" experience—generating recipes for any dish not found in the database and providing intelligent recommendations based on visual pantry scans.

---

##  Project Links

* **Live Website:** [View SnapDish Live](https://snap-dish.vercel.app/)
* **Video Preview:** [Watch Project Demo](https://drive.google.com/file/d/1VEPK9VuezhUBdL3cq7bYk6nbsGKaPDvy/view?usp=drive_link)

---

##  Core Features

* **Visual Pantry Scanner:** Snap a photo of your ingredients. **Gemini AI Vision** analyzes the image, identifies the items, and populates your digital pantry instantly.
* **AI Ingredient Matching:** Get personalized recipe suggestions based specifically on the items currently in your "Pantry" section.
* **Infinite Recipe Generation:** When a dish isn't in **TheMealDB**, **Gemini AI** constructs a professional-grade recipe, including steps, tips, and nutritional data.
* **Secure Authentication:** Managed by **Clerk**, providing seamless Social Login (Google/GitHub) and secure user session management.
* **Tiered Subscription Logic:** * **Free:** 5 AI Visual Scans per day and standard recipe access.
    * **Paid (Pro):** Unlimited AI Pantry Scans, priority recipe generation, and exclusive smart recommendations.
* **Fully Responsive:** Cinematic UI built for mobile-first cooking environments (iPad/Phone) and desktop planning.

---

##  Tech Stack

* **Core Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
* **Deployment:** [Vercel](https://vercel.com/) (Edge Functions & Optimized Hosting)
* **Authentication:** [Clerk](https://clerk.com/) (Identity, User Profiles & Session Management)
* **AI Engine:** **Google Generative AI (Gemini Pro Vision)**
* **CMS:** [Strapi](https://strapi.io/) (Headless CMS for curated content)
* **Database:** [Neon DB](https://neon.tech/) (Serverless PostgreSQL)
* **External API:** [TheMealDB](https://www.themealdb.com/)
* **Styling:** **Tailwind CSS** & **Shadcn UI**

---

##  Getting Started

### 1. Installation

```bash
# Clone the repository
git clone [https://github.com/yourusername/snapdish.git](https://github.com/yourusername/snapdish.git)

# Install dependencies
npm install @clerk/nextjs @google/generative-ai @strapi/strapi lucide-react shadcn-ui
