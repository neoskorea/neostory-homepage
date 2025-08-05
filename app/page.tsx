import HeroSection from "./components/HeroSection";
import WhyNeostorySection from "./components/WhyNeostorySection";
import HistorySection from "./components/HistorySection";
import IPShowcaseSection from "./components/IPShowcaseSection";
import EpubServiceSection from "./components/EpubServiceSection";
import BookPublishingSection from "./components/BookPublishingSection";
import PageConversionSection from "./components/PageConversionSection";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyNeostorySection />
      <HistorySection />
      <IPShowcaseSection />
      <EpubServiceSection />
      <BookPublishingSection />
      <PageConversionSection />
      <CTASection />
    </div>
  );
}