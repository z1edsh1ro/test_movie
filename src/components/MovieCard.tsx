import { motion } from "framer-motion";
import { Play, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MovieCardProps {
  title: string;
  image: string;
  genre: string;
  year: string;
  rating: string;
  delay?: number;
}

const MovieCard = ({ title, image, genre, year, rating, delay = 0 }: MovieCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl hover-scale"
    >
      <div className="aspect-[2/3] overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="absolute bottom-0 left-0 w-full p-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <div className="flex gap-2 mb-2">
          <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm border-white/10 text-white hover:bg-white/30">
            <Play className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm border-white/10 text-white hover:bg-white/30">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        
        <h3 className="font-medium text-white text-lg">{title}</h3>
        <div className="flex items-center text-xs text-gray-300 mt-1">
          <span>{year}</span>
          <span className="mx-1.5">•</span>
          <span>{genre}</span>
          <span className="mx-1.5">•</span>
          <span>{rating}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default MovieCard;
