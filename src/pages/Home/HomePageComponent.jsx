import HeroSection from "../../sections/home/HeroSection";
import FeaturesSection from "../../sections/home/FeaturesSection";
import CTASection from "../../sections/home/CTASection";
import ShowcaseSection from "../../sections/home/ShowcaseSection";

const HomePageComponent = () => {
  return (
    <main className="relative w-full">
      
      {/* 1. HERO SECTION (Sticks to top) 
          - min-h-screen: Important so the hero is fully visible before scrolling starts.
          - -z-10: Keeps it behind the overlay.
      */}
      <div className="sticky top-0 h-screen w-full -z-10 flex flex-col justify-center overflow-hidden">
        <HeroSection />
      </div>

      {/* 2. OVERLAY CONTENT (Slides over Hero)
          - bg-[rgb(var(--bg-light))]: Keeps the background consistent (removed dark mode override).
          - rounded-t-[2.5rem]: Creates the card effect.
          - shadow-[...]: Adds depth so it looks like it's physically sliding over.
      */}
      <div 
        className="
          relative z-10 
          bg-[rgb(var(--bg-light))] 
          rounded-t-[2.5rem] 
          shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] 
          border-t border-black/5
          overflow-hidden
        "
      >
        
        {/* Spacer to push content down from the curved edge */}
        <div className="pt-12 pb-12 flex flex-col gap-12 md:gap-20">
          <FeaturesSection />
          <ShowcaseSection />
          <CTASection />
        </div>

      </div>
    </main>
  );
};

export default HomePageComponent;