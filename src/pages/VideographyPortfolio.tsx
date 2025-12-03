import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Button } from "@/components/ui/button";
import { InfiniteWorkShowcase } from "@/components/ui/infinite-work-showcase";

const VideographyPortfolio = () => {
  const cards = videographyData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-8">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>
      </div>

      <div className="w-full py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4"
        >
          <h2 className="text-xl md:text-5xl font-bold text-foreground font-heading mb-4">
            Videography Portfolio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Bringing stories to life through cinematic motion and sound
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

const WorkShowcase = ({ works }: { works: Array<{ image: string; title: string; description?: string }> }) => {
  return (
    <div className="py-4">
      <InfiniteWorkShowcase items={works} direction="right" speed="slow" />
    </div>
  );
};

const videographyData = [
  {
    category: "Videography",
    title: "Weddings",
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&h=800&fit=crop&auto=format",
    content: (
      <WorkShowcase
        works={[
          { image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1200&fit=crop", title: "Wedding Film", description: "Cinematic storytelling" },
          { image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=1200&fit=crop", title: "Ceremony Coverage", description: "Full event video" },
          { image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=1200&fit=crop", title: "Reception Highlights", description: "Best moments" },
          { image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=1200&fit=crop", title: "Love Story", description: "Emotional narrative" },
          { image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=1200&fit=crop", title: "Dance Floor", description: "Party energy" },
          { image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=1200&fit=crop", title: "Bridal Video", description: "Getting ready" },
          { image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=1200&fit=crop", title: "Venue Shots", description: "Beautiful locations" },
          { image: "https://images.unsplash.com/photo-1529634721943-f6e3c56e5e2f?w=800&h=1200&fit=crop", title: "Toast Speeches", description: "Heartfelt words" },
        ]}
      />
    ),
  },
  {
    category: "Videography",
    title: "Graduations",
    src: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=1200&h=800&fit=crop&auto=format",
    content: (
      <WorkShowcase
        works={[
          { image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&h=1200&fit=crop", title: "Corporate Profile", description: "Brand storytelling" },
          { image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=1200&fit=crop", title: "Product Demo", description: "Professional showcase" },
          { image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=1200&fit=crop", title: "Team Culture", description: "Corporate story" },
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1200&fit=crop", title: "Office Tour", description: "Behind the scenes" },
          { image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=1200&fit=crop", title: "Training Video", description: "Educational content" },
          { image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=1200&fit=crop", title: "Executive Interview", description: "Leadership voices" },
          { image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=1200&fit=crop", title: "Corporate Event", description: "Company gathering" },
          { image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=1200&fit=crop", title: "Promo Video", description: "Marketing content" },
        ]}
      />
    ),
  },
  {
    category: "Videography",
    title: "Documentaries",
    src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=1200&fit=crop&auto=format",
    content: (
      <WorkShowcase
        works={[
          { image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=1200&fit=crop", title: "Life Stories", description: "Authentic narratives" },
          { image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=1200&fit=crop", title: "Cultural Doc", description: "Deep storytelling" },
          { image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=1200&fit=crop", title: "Interview Series", description: "Personal stories" },
          { image: "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?w=800&h=1200&fit=crop", title: "Documentary Film", description: "Feature length" },
          { image: "https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?w=800&h=1200&fit=crop", title: "Historical Doc", description: "Past preserved" },
          { image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=1200&fit=crop", title: "Social Issue", description: "Important topics" },
          { image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=1200&fit=crop", title: "Nature Doc", description: "Wildlife stories" },
          { image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&h=1200&fit=crop", title: "Community Stories", description: "Local voices" },
        ]}
      />
    ),
  },
  {
    category: "Videography",
    title: "Music Videos",
    src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&h=800&fit=crop&auto=format",
    content: (
      <WorkShowcase
        works={[
          { image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=1200&fit=crop", title: "Music Production", description: "Visual artistry" },
          { image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=1200&fit=crop", title: "Performance Video", description: "Live energy" },
          { image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=1200&fit=crop", title: "Band Session", description: "Studio recording" },
          { image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&h=1200&fit=crop", title: "Concert Film", description: "Live show" },
          { image: "https://images.unsplash.com/photo-1598387846567-f5a8d183d3b1?w=800&h=1200&fit=crop", title: "Artist Portrait", description: "Creative visuals" },
          { image: "https://images.unsplash.com/photo-1415886541506-6efc5e4b1786?w=800&h=1200&fit=crop", title: "Music Video", description: "Cinematic edit" },
          { image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&h=1200&fit=crop", title: "Lyric Video", description: "Typography animation" },
          { image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=1200&fit=crop", title: "Behind Scenes", description: "Making of" },
        ]}
      />
    ),
  },
  {
    category: "Videography",
    title: "Event Coverage",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=800&fit=crop&auto=format",
    content: (
      <WorkShowcase
        works={[
          { image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=1200&fit=crop", title: "Conference", description: "Multi-camera setup" },
          { image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=1200&fit=crop", title: "Live Event", description: "Real-time capture" },
          { image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=1200&fit=crop", title: "Seminar Coverage", description: "Educational events" },
          { image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=1200&fit=crop", title: "Networking Event", description: "Business connections" },
          { image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=1200&fit=crop", title: "Product Launch", description: "Brand reveal" },
          { image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=1200&fit=crop", title: "Team Event", description: "Company culture" },
          { image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=1200&fit=crop", title: "Keynote Speech", description: "Inspiring moments" },
          { image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&h=1200&fit=crop", title: "Award Show", description: "Recognition ceremony" },
        ]}
      />
    ),
  },
];

export default VideographyPortfolio;

