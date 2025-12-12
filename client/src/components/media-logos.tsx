import abcLogo from "@assets/ABC-logo-1536x864_1764222296999.png";
import bloombergLogo from "@assets/blomberg-logo-768x144_1764222297000.png";
import cbsLogo from "@assets/CBS_2020_Blue.svg_-768x222_1764222297000.png";
import cnnLogo from "@assets/CNN-Logo.wine_-768x512_1764222297000.png";
import foxNewsLogo from "@assets/Fox_News-Logo.wine_-768x512_1764222297000.png";
import huffPostLogo from "@assets/HuffPost-Logo-2005-768x432_1764222297001.png";
import laTimesLogo from "@assets/Los-Angeles-Times-Logo-768x432_1764222297001.png";
import moneyLogo from "@assets/Money_2021-768x224_1764222297001.webp";
import msnbcLogo from "@assets/MSNBC_2015-2021_logo.svg_-768x125_1764222297001.png";
import nbcLogo from "@assets/NBC_1764222297002.webp";
import economistLogo from "@assets/The_Economist_Logo.svg_-2048x1034_1764222297002.png";
import nyTimesLogo from "@assets/The_New_York_Times_Logo.svg_-768x130_1764222297002.png";
import wsjLogo from "@assets/The-Wall-Street-Journal-Logo-768x432_1764222297003.png";
import usNewsLogo from "@assets/us-news-world-report-logo-png_seeklogo-254125-300x300_1764222297003.png";
import usaTodayLogo from "@assets/usa_today-logo_brandlogos.net_9jygb_1764222297003.png";

export function MediaLogos() {
  const mediaOutlets = [
    { name: "NBC", logo: nbcLogo },
    { name: "CBS", logo: cbsLogo },
    { name: "CNN", logo: cnnLogo },
    { name: "ABC", logo: abcLogo },
    { name: "Fox News", logo: foxNewsLogo },
    { name: "Bloomberg", logo: bloombergLogo },
    { name: "HuffPost", logo: huffPostLogo },
    { name: "LA Times", logo: laTimesLogo },
    { name: "Money", logo: moneyLogo },
    { name: "MSNBC", logo: msnbcLogo },
    { name: "The Economist", logo: economistLogo },
    { name: "NY Times", logo: nyTimesLogo },
    { name: "Wall Street Journal", logo: wsjLogo },
    { name: "US News", logo: usNewsLogo },
    { name: "USA Today", logo: usaTodayLogo },
  ];

  return (
    <section className="py-12 md:py-16 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Our business featured on
          </h2>
          <p className="text-lg text-muted-foreground">
            Major Media for Fighting Solar Fraud
          </p>
        </div>

        {/* Mobile: Auto-scrolling marquee */}
        <div className="md:hidden relative">
          <div className="flex animate-marquee">
            {/* First set of logos */}
            {mediaOutlets.map((outlet, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-32 h-20 mx-4 flex items-center justify-center bg-white rounded-md p-3"
                data-testid={`media-logo-mobile-${index}`}
              >
                <img
                  src={outlet.logo}
                  alt={outlet.name}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {mediaOutlets.map((outlet, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-32 h-20 mx-4 flex items-center justify-center bg-white rounded-md p-3"
              >
                <img
                  src={outlet.logo}
                  alt={outlet.name}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-6">
          {mediaOutlets.map((outlet, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 h-24 bg-white rounded-md border border-card-border hover-elevate transition-all"
              data-testid={`media-logo-${index}`}
            >
              <img
                src={outlet.logo}
                alt={outlet.name}
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
