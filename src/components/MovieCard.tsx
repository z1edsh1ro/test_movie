import { motion } from "framer-motion";
import { Plus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Movie } from "@/types/movie";

const MovieCard = ({ title, poster_path, release_date, vote_average, price }: Movie) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl hover-scale bg-card shadow-lg"
    >
      <div className="aspect-[2/3] overflow-hidden rounded-t-xl">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="absolute bottom-0 left-0 w-full p-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <div className="flex justify-between items-center mb-2">
          <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm border-white/10 text-white hover:bg-white/30">
            <Plus className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
            <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
            <span className="text-xs text-white">{vote_average.toFixed(1)}</span>
          </div>
        </div>
        
        <h3 className="font-medium text-white text-lg line-clamp-2">{title}</h3>
        <div className="flex flex-col gap-1 text-xs text-gray-300 mt-2">
          <div className="flex items-center gap-1">
            <span className="font-medium">${price}</span>
          </div>
          <div className="text-gray-400">
            {new Date(release_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MovieCard;
