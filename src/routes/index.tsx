import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { Ingryd } from "@/components/portfolio/Ingryd";
import { CaseStudies } from "@/components/portfolio/CaseStudies";
import { HowIBuild } from "@/components/portfolio/HowIBuild";
import { OffTheClock } from "@/components/portfolio/OffTheClock";
import { Footer } from "@/components/portfolio/Footer";

const TITLE = "Anukriti — Engineer building products, and Ingryd";
const DESCRIPTION =
  "Fintech software engineer moving into product. Building Ingryd, a skin health intelligence app. Case studies, stack, and life off the clock.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <Ingryd />
        <CaseStudies />
        <HowIBuild />
        <OffTheClock />
      </main>
      <Footer />
    </div>
  );
}
