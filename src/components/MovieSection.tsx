import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

interface MovieSectionProps {
  title: string;
  description?: string;
  movies: Array<{
    id: number;
    title: string;
    image: string;
    genre: string;
    year: string;
    rating: string;
  }>;
  link?: string;
}

const MovieSection = ({ title, description, movies, link }: MovieSectionProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-display font-bold tracking-tight"
            >
              {title}
            </motion.h2>
            {description && (
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="mt-2 text-muted-foreground"
              >
                {description}
              </motion.p>
            )}
          </div>
          {link && (
            <Link 
              to={link}
              className="mt-4 md:mt-0 text-sm font-medium flex items-center hover:underline"
            >
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          )}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {movies.map((movie, index) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              image={movie.image}
              genre={movie.genre}
              year={movie.year}
              rating={movie.rating}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieSection;
