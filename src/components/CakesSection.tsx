import { useState } from "react";
import { MessageCircle, Cake, Sparkles, Star, Crown, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// Tier 1 images
import vanillaImg from "@/assets/cakes/vanilla-basic.jpg";
import pineappleImg from "@/assets/cakes/pineapple-basic.jpg";
import butterscotchImg from "@/assets/cakes/butterscotch-basic.jpg";
import blackforestImg from "@/assets/cakes/blackforest-basic.jpg";

// Tier 2 images
import redvelvetImg from "@/assets/cakes/redvelvet-premium.jpg";
import choctruffleImg from "@/assets/cakes/choctruffle-premium.jpg";
import oreoImg from "@/assets/cakes/oreo-premium.jpg";
import caramelImg from "@/assets/cakes/caramel-premium.jpg";
import rasmalaiImg from "@/assets/cakes/rasmalai-premium.jpg";

// Tier 3 images
import strawberryCheesecakeImg from "@/assets/cakes/strawberry-cheesecake-designer.jpg";
import kitkatImg from "@/assets/cakes/kitkat-designer.jpg";
import chocolateCheesecakeImg from "@/assets/cakes/chocolate-cheesecake-designer.jpg";
import chocoCrunchImg from "@/assets/cakes/chococrunch-designer.jpg";
import unicornImg from "@/assets/cakes/unicorn-designer.jpg";
import blueberryCheesecakeImg from "@/assets/cakes/blueberry-cheesecake-designer.jpg";

type CakeItem = {
  name: string;
  image: string;
  price: string;
  description: string;
  occasions: string[];
};

type CakeTier = {
  id: number;
  title: string;
  subtitle: string;
  priceRange: string;
  icon: typeof Cake;
  note: string;
  cakes: CakeItem[];
  badgeColor: string;
  headerBg: string;
};

const tiers: CakeTier[] = [
  {
    id: 1,
    title: "Everyday Delights",
    subtitle: "Best for small birthdays & quick treats",
    priceRange: "₹400 – ₹800",
    icon: Cake,
    note: "½ kg starts ~₹400–₹500 · 1 kg ~₹700–₹800",
    badgeColor: "bg-forest text-cream",
    headerBg: "bg-cream-dark",
    cakes: [
      { name: "Vanilla", image: vanillaImg, price: "½ kg: ₹400–₹500", description: "Classic vanilla sponge with creamy white icing, sprinkles & candles.", occasions: ["birthday", "anniversary"] },
      { name: "Pineapple", image: pineappleImg, price: "½ kg: ₹450–₹550", description: "Fresh pineapple cream cake with pineapple slice topping.", occasions: ["birthday"] },
      { name: "Butterscotch", image: butterscotchImg, price: "½ kg: ₹450–₹600", description: "Rich butterscotch with caramel drizzle and crunchy chips.", occasions: ["birthday", "anniversary"] },
      { name: "Black Forest", image: blackforestImg, price: "½ kg: ₹500–₹650", description: "Chocolate layers, whipped cream, cherries & chocolate shavings.", occasions: ["birthday", "anniversary"] },
    ],
  },
  {
    id: 2,
    title: "Premium Indulgences",
    subtitle: "Richer flavours & better presentation",
    priceRange: "₹800 – ₹1,200",
    icon: Star,
    note: "½ kg ~₹700–₹900 · 1 kg ~₹1,000–₹1,200",
    badgeColor: "bg-saffron text-cream",
    headerBg: "bg-primary",
    cakes: [
      { name: "Red Velvet", image: redvelvetImg, price: "½ kg: ₹700–₹900", description: "Signature red velvet with cream cheese frosting & drip finish.", occasions: ["anniversary", "birthday"] },
      { name: "Chocolate Truffle", image: choctruffleImg, price: "½ kg: ₹750–₹900", description: "Dark chocolate ganache drip with chocolate curls on top.", occasions: ["birthday", "anniversary"] },
      { name: "Oreo", image: oreoImg, price: "½ kg: ₹700–₹850", description: "Cookies & cream loaded with Oreo crumble and chocolate drip.", occasions: ["birthday"] },
      { name: "Caramel", image: caramelImg, price: "½ kg: ₹800–₹950", description: "Smooth caramel frosting with golden drip and toffee pieces.", occasions: ["anniversary"] },
      { name: "Rasmalai Fusion", image: rasmalaiImg, price: "½ kg: ₹850–₹1,000", description: "Indian fusion with saffron strands, pistachio & cardamom cream.", occasions: ["birthday", "anniversary"] },
    ],
  },
  {
    id: 3,
    title: "Designer & Exotic",
    subtitle: "Special occasions, Instagram-worthy",
    priceRange: "₹1,200 – ₹2,000",
    icon: Crown,
    note: "½–1 kg ~₹1,200+ · up to 1.5 kg ~₹2,000 for detailed work",
    badgeColor: "bg-gradient-gold text-maroon-dark",
    headerBg: "bg-gradient-to-br from-primary to-maroon-dark",
    cakes: [
      { name: "Strawberry Cheesecake", image: strawberryCheesecakeImg, price: "½ kg: ₹1,200–₹1,500", description: "Creamy strawberry cheesecake with fresh strawberries & pink drip glaze.", occasions: ["anniversary", "birthday"] },
      { name: "KitKat", image: kitkatImg, price: "½ kg: ₹1,200–₹1,400", description: "KitKat bars around the sides with M&Ms and chocolates on top.", occasions: ["birthday"] },
      { name: "Chocolate Cheesecake", image: chocolateCheesecakeImg, price: "½ kg: ₹1,300–₹1,600", description: "Rich chocolate cheesecake with dark ganache drip & chocolate shavings.", occasions: ["anniversary", "birthday"] },
      { name: "Choco Crunch", image: chocoCrunchImg, price: "½ kg: ₹1,300–₹1,500", description: "Crunchy chocolate wafer layers with ganache coating & cookie crumble.", occasions: ["birthday", "anniversary"] },
      { name: "Unicorn Theme", image: unicornImg, price: "1 kg: ₹1,800–₹2,000", description: "Fondant unicorn horn, pastel rainbow swirls – perfect for kids!", occasions: ["birthday"] },
      { name: "Blueberry Cheesecake", image: blueberryCheesecakeImg, price: "½ kg: ₹1,400–₹1,700", description: "Fresh blueberry compote drip over creamy cheesecake with berry topping.", occasions: ["anniversary", "birthday"] },
    ],
  },
];

const occasions = ["all", "birthday", "anniversary"];

const CakesSection = () => {
  const [activeTier, setActiveTier] = useState<number | null>(null);
  const [occasionFilter, setOccasionFilter] = useState("all");

  const getWhatsAppUrl = (cakeName: string, tierTitle: string) => {
    const message = `Hi, I want to order a ${cakeName} cake from the ${tierTitle} range. Please share availability and details.`;
    return `https://wa.me/919214381274?text=${encodeURIComponent(message)}`;
  };

  const filteredTiers = tiers.map((tier) => ({
    ...tier,
    cakes:
      occasionFilter === "all"
        ? tier.cakes
        : tier.cakes.filter((c) => c.occasions.includes(occasionFilter)),
  }));

  return (
    <section id="cakes" className="section-padding bg-gradient-warm">
      <div className="container-custom">
        {/* Hero / Intro */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-saffron font-semibold text-sm uppercase tracking-wider mb-4">
            🎂 Bakery Cakes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Our Delicious Cakes
            <span className="text-saffron"> – Pure Veg, Fresh & Customizable</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            From simple birthday treats to designer celebrations – starting at just ₹400.
            Eggless available. Min order ½ kg. WhatsApp us for custom orders!
          </p>
          <a
            href="https://wa.me/919214381274?text=Hi%2C%20I%20want%20to%20order%20a%20cake.%20Please%20share%20details."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-forest hover:bg-forest-light text-cream px-8 py-6 text-base">
              <MessageCircle className="w-5 h-5 mr-2" />
              Order via WhatsApp
            </Button>
          </a>
        </div>

        {/* Occasion Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="flex items-center gap-2 mr-2 text-muted-foreground text-sm">
            <Filter className="w-4 h-4" />
            <span>Filter:</span>
          </div>
          {occasions.map((occ) => (
            <button
              key={occ}
              onClick={() => setOccasionFilter(occ)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
                occasionFilter === occ
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card border border-border hover:border-primary/50"
              }`}
            >
              {occ === "all" ? "All Cakes" : occ}
            </button>
          ))}
        </div>

        {/* Tier Cards */}
        <div className="space-y-16">
          {filteredTiers.map((tier) => {
            const TierIcon = tier.icon;
            const isActive = activeTier === tier.id;
            if (tier.cakes.length === 0) return null;

            return (
              <div key={tier.id} className="scroll-mt-24">
                {/* Tier Header */}
                <div
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 cursor-pointer"
                  onClick={() => setActiveTier(isActive ? null : tier.id)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${tier.badgeColor}`}>
                      <TierIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">
                        {tier.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{tier.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold text-saffron">{tier.priceRange}</span>
                  </div>
                </div>

                {/* Cake Carousel (desktop) + Grid (mobile) */}
                {/* Desktop carousel */}
                <div className="hidden md:block">
                  <Carousel
                    opts={{ align: "start", loop: true }}
                    className="w-full"
                  >
                    <CarouselContent className="-ml-4">
                      {tier.cakes.map((cake, idx) => (
                        <CarouselItem key={idx} className="pl-4 basis-1/2 lg:basis-1/3 xl:basis-1/4">
                          <CakeCard cake={cake} tierTitle={tier.title} getWhatsAppUrl={getWhatsAppUrl} />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="-left-4 bg-card border-border" />
                    <CarouselNext className="-right-4 bg-card border-border" />
                  </Carousel>
                </div>

                {/* Mobile grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                  {tier.cakes.map((cake, idx) => (
                    <CakeCard key={idx} cake={cake} tierTitle={tier.title} getWhatsAppUrl={getWhatsAppUrl} />
                  ))}
                </div>

                {/* Tier Note */}
                <p className="text-muted-foreground text-xs mt-4 text-center italic">
                  {tier.note}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Notes */}
        <div className="mt-16 bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card text-center">
          <h4 className="text-lg font-heading font-bold text-primary mb-3">
            🍰 Good to Know
          </h4>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span>✅ All cakes eggless by default</span>
            <span>✅ Custom designs (extra charge)</span>
            <span>✅ Delivery in Kanpur & nearby</span>
            <span>✅ Order 1–2 days in advance for designer cakes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Cake Card Component
const CakeCard = ({
  cake,
  tierTitle,
  getWhatsAppUrl,
}: {
  cake: CakeItem;
  tierTitle: string;
  getWhatsAppUrl: (name: string, tier: string) => string;
}) => (
  <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
    {/* Image */}
    <div className="relative aspect-square overflow-hidden">
      <img
        src={cake.image}
        alt={`${cake.name} cake`}
        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        loading="lazy"
      />
    </div>

    {/* Details */}
    <div className="p-4 flex flex-col flex-1">
      <h4 className="font-heading font-bold text-primary text-lg">{cake.name}</h4>
      <p className="text-saffron font-semibold text-sm mb-1">{cake.price}</p>
      <p className="text-muted-foreground text-xs mb-4 flex-1">{cake.description}</p>
      <a
        href={getWhatsAppUrl(cake.name, tierTitle)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="w-full bg-forest hover:bg-forest-light text-cream text-sm py-2" size="sm">
          <MessageCircle className="w-4 h-4 mr-1" />
          Order This
        </Button>
      </a>
    </div>
  </div>
);

export default CakesSection;
