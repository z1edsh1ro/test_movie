
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Info } from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Mask */}
      <div className="absolute inset-0 z-0 hero-mask">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center animate-image-glow"
          style={{ 
            backgroundPosition: "center 30%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-end px-4 pb-24 md:pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl space-y-4"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 text-xs font-medium text-primary-foreground mb-2">
            New Release
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            The Luminescent Forest
          </h1>
          
          <p className="text-base md:text-lg text-gray-300 max-w-xl">
            A captivating journey through enchanted woodlands, where ancient mysteries await those brave enough to venture beyond the treeline.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
