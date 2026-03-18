import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { IntroTile } from "@/components/sections/IntroTile";
import { StatusTile } from "@/components/sections/StatusTile";
import { JourneyTile } from "@/components/sections/JourneyTile";
import { FeaturedProjectTile } from "@/components/sections/FeaturedProjectTile";
import { TechStackTile } from "@/components/sections/TechStackTile";
import { MoreProjectsTile } from "@/components/sections/MoreProjectsTile";
import { ConnectTile } from "@/components/sections/ConnectTile";

export default function Home() {
  return (
    <main id="main" className="min-h-screen">
      <Navigation />
      <div className="bento-grid max-w-6xl mx-auto px-4 py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-8">
          <IntroTile />
        </div>
        <div className="md:col-span-4">
          <StatusTile />
        </div>
        <div className="md:col-span-4">
          <JourneyTile />
        </div>
        <div className="md:col-span-4">
          <FeaturedProjectTile />
        </div>
        <div className="md:col-span-4">
          <TechStackTile />
        </div>
        <div className="md:col-span-8">
          <MoreProjectsTile />
        </div>
        <div className="md:col-span-4">
          <ConnectTile />
        </div>
      </div>
      <Footer />
    </main>
  );
}
