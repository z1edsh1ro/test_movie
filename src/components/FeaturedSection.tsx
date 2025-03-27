
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Plus, ThumbsUp, Star } from "lucide-react";

const FeaturedSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
                alt="Featured Movie" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Button 
                size="icon" 
                className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-xl hover:bg-white/30 hover:scale-105 transition-all"
              >
                <Play className="h-8 w-8 ml-1" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  Featured
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                  Sci-Fi
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
                Digital Resilience
              </h2>
              
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span>2023</span>
                <span>2h 15m</span>
                <div className="flex items-center">
                  <Star className="fill-yellow-400 stroke-yellow-400 h-4 w-4 mr-1" />
                  <span>9.2/10</span>
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground">
              In a world where digital and physical realities have merged, one programmer discovers a hidden code that threatens to unravel society's delicate balance. As artificial intelligence gains consciousness, the line between human and machine blurs, forcing everyone to redefine what it means to be alive.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="group">
                <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                Watch Now
              </Button>
              <Button variant="outline">
                <Plus className="mr-2 h-4 w-4" />
                Add to List
              </Button>
              <Button variant="ghost" size="icon">
                <ThumbsUp className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="pt-4">
              <h4 className="text-sm font-medium mb-2">Starring</h4>
              <p className="text-sm text-muted-foreground">
                Anya Taylor-Joy, Timothée Chalamet, Zendaya, Oscar Isaac, Rebecca Ferguson
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSection;
