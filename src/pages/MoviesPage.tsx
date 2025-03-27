
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import MovieSection from "@/components/MovieSection";
import Newsletter from "@/components/Newsletter";
import { featuredMovies, trendingMovies, newReleases, topRatedMovies } from "@/data/moviesData";

const MoviesPage = () => {
  useEffect(() => {
    document.title = "Cinephile | Movies";
  }, []);

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    out: {
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="pt-20 md:pt-24"
    >
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
            Movies
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore our extensive collection of films, from timeless classics to the latest blockbusters.
          </p>
        </div>
      </div>
      
      <MovieSection 
        title="Featured Movies"
        movies={featuredMovies}
      />
      
      <MovieSection 
        title="Trending Now"
        movies={trendingMovies}
      />
      
      <MovieSection 
        title="New Releases"
        movies={newReleases}
      />
      
      <MovieSection 
        title="Top Rated"
        movies={topRatedMovies}
      />
      
      <Newsletter />
    </motion.div>
  );
};

export default MoviesPage;
