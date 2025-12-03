import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Button } from "@/components/ui/button";
import { InfiniteWorkShowcase } from "@/components/ui/infinite-work-showcase";

const PhotographyPortfolio = () => {
  const cards = photographyData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-8">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>
      </div>

      {/* Header */}
      <div className="w-full py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4"
        >
          <h2 className="text-xl md:text-5xl font-bold text-foreground font-heading mb-4">
            Photography Portfolio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Capturing life's precious moments with creativity and precision
          </p>
        </motion.div>
        <Carousel items={cards} />
      </div>

      {/* CTA Section */}
      <section className="cinematic-section">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Want to see your project here?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's create something extraordinary together
            </p>
            <div className="flex justify-center">
              <Link to="/quote">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="div"
                  className="bg-accent hover:bg-accent/90 text-white font-medium text-lg px-12 py-6 glow-effect"
                >
                  <Button className="bg-transparent hover:bg-transparent text-white border-0 font-medium text-lg px-0 py-0 h-auto">
                    Start Your Project
                  </Button>
                </HoverBorderGradient>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const WorkShowcase = ({ works }: { works: Array<{ image: string; title: string; description?: string; hideText?: boolean }> }) => {
  return (
    <div className="w-full">
      <div className="mb-6">
        <h3 className="text-2xl font-heading font-bold text-foreground mb-2">Our Work</h3>
        <p className="text-muted-foreground">Hover over images to pause the carousel</p>
      </div>
      <InfiniteWorkShowcase items={works} direction="left" speed="slow" />
    </div>
  );
};

const photographyData = [
  {
    category: "Photography",
    title: "Weddings",
    src: "/images/Weddings.jpg",
    content: (
      <WorkShowcase
        works={[
          { image: "/images/wedding photos/A(32of640).jpg", title: "Wedding Photo 1", hideText: true },
          { image: "/images/wedding photos/A(64of640).jpg", title: "Wedding Photo 2", hideText: true },
          { image: "/images/wedding photos/A(112of640).jpg", title: "Wedding Photo 3", hideText: true },
          { image: "/images/wedding photos/A(123of640).jpg", title: "Wedding Photo 4", hideText: true },
          { image: "/images/wedding photos/A(130of640).jpg", title: "Wedding Photo 5", hideText: true },
          { image: "/images/wedding photos/A(200of640).jpg", title: "Wedding Photo 6", hideText: true },
          { image: "/images/wedding photos/A(240of640).jpg", title: "Wedding Photo 7", hideText: true },
          { image: "/images/wedding photos/A(478of640).jpg", title: "Wedding Photo 8", hideText: true },
        ]}
      />
    ),
  },
  {
    category: "Photography",
    title: "Graduations",
    src: "/images/Graduations.jpg",
    content: (
      <WorkShowcase
        works={[
          { image: "/images/Liz/TOP06767.jpg", title: "Graduation Photo 1", hideText: true },
          { image: "/images/Liz/TOP06771.jpg", title: "Graduation Photo 2", hideText: true },
          { image: "/images/Liz/TOP06802.jpg", title: "Graduation Photo 3", hideText: true },
          { image: "/images/Liz/TOP06812.jpg", title: "Graduation Photo 4", hideText: true },
          { image: "/images/Liz/TOP07004.jpg", title: "Graduation Photo 5", hideText: true },
          { image: "/images/Liz/TOP07048.jpg", title: "Graduation Photo 6", hideText: true },
          { image: "/images/Liz/TOP07077.jpg", title: "Graduation Photo 7", hideText: true },
          { image: "/images/Liz/TOP07118.jpg", title: "Graduation Photo 8", hideText: true },
        ]}
      />
    ),
  },
  {
    category: "Photography",
    title: "Family Shoots",
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&h=800&fit=crop&auto=format",
    content: (
      <WorkShowcase
        works={[
          { image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=1200&fit=crop", title: "Family Gathering", description: "Warm family moments" },
          { image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=1200&fit=crop", title: "Outdoor Fun", description: "Natural family shots" },
          { image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=1200&fit=crop", title: "Candid Moments", description: "Authentic expressions" },
          { image: "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=800&h=1200&fit=crop", title: "Parents & Kids", description: "Generational love" },
          { image: "https://images.unsplash.com/photo-1542359649-31e03cd4d909?w=800&h=1200&fit=crop", title: "Sibling Bond", description: "Brother & sister" },
          { image: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=800&h=1200&fit=crop", title: "Extended Family", description: "All together" },
          { image: "https://images.unsplash.com/photo-1543511396-a7096bde2f55?w=800&h=1200&fit=crop", title: "Family Lifestyle", description: "Home moments" },
          { image: "https://images.unsplash.com/photo-1609220136758-8ec2c5f0c5df?w=800&h=1200&fit=crop", title: "Playful Moments", description: "Fun and laughter" },
        ]}
      />
    ),
  },
  {
    category: "Photography",
    title: "Birthdays",
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&h=800&fit=crop&auto=format",
    content: (
      <WorkShowcase
        works={[
          { image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=1200&fit=crop", title: "Birthday Party", description: "Joyful celebrations" },
          { image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&h=1200&fit=crop", title: "Cake Moments", description: "Sweet memories" },
          { image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800&h=1200&fit=crop", title: "Party Fun", description: "Celebration shots" },
          { image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&h=1200&fit=crop", title: "Birthday Bash", description: "Party time" },
          { image: "https://images.unsplash.com/photo-1578992027229-ee7d29c7b5e6?w=800&h=1200&fit=crop", title: "Candles & Wishes", description: "Special moments" },
          { image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=1200&fit=crop", title: "Kids Party", description: "Childhood joy" },
          { image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&h=1200&fit=crop", title: "Milestone Birthday", description: "Big celebrations" },
          { image: "https://images.unsplash.com/photo-1567721913486-6585f069b332?w=800&h=1200&fit=crop", title: "Gift Opening", description: "Surprise reactions" },
        ]}
      />
    ),
  },
  {
    category: "Photography",
    title: "Corporate Events",
    src: "/images/Corporate Events.jpg",
    content: (
      <WorkShowcase
        works={[
          { image: "/images/corporate events/DAV_7792.jpg", title: "Corporate Event Photo 1", hideText: true },
          { image: "/images/corporate events/DAV_7794.jpg", title: "Corporate Event Photo 2", hideText: true },
          { image: "/images/corporate events/DAV_7857.jpg", title: "Corporate Event Photo 3", hideText: true },
          { image: "/images/corporate events/DAV_7865.jpg", title: "Corporate Event Photo 4", hideText: true },
          { image: "/images/corporate events/DAV_7880.jpg", title: "Corporate Event Photo 5", hideText: true },
          { image: "/images/corporate events/DAV_7887.jpg", title: "Corporate Event Photo 6", hideText: true },
          { image: "/images/corporate events/DAV_7897.jpg", title: "Corporate Event Photo 7", hideText: true },
          { image: "/images/corporate events/DAV_7921.jpg", title: "Corporate Event Photo 8", hideText: true },
          { image: "/images/corporate events/IMG_9607.jpg", title: "Corporate Event Photo 9", hideText: true },
          { image: "/images/corporate events/IMG_9646.jpg", title: "Corporate Event Photo 10", hideText: true },
          { image: "/images/corporate events/IMG_9786.jpg", title: "Corporate Event Photo 11", hideText: true },
          { image: "/images/corporate events/IMG_9887.jpg", title: "Corporate Event Photo 12", hideText: true },
        ]}
      />
    ),
  },
];

export default PhotographyPortfolio;

