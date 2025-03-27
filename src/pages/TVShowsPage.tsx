
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import MovieSection from "@/components/MovieSection";
import Newsletter from "@/components/Newsletter";
import { popularTVShows, newTVShows, topRatedTVShows } from "@/data/tvShowsData";

const TVShowsPage = () => {
  useEffect(() => {
    document.title = "Cinephile | TV Shows";
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
            TV Shows
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover addictive series, compelling dramas, and binge-worthy shows for every taste.
          </p>
        </div>
      </div>
      
      <MovieSection 
        title="Popular TV Shows"
        movies={popularTVShows}
      />
      
      <MovieSection 
        title="New & Upcoming"
        movies={newTVShows}
      />
      
      <MovieSection 
        title="Top Rated Series"
        movies={topRatedTVShows}
      />
      
      <Newsletter />
    </motion.div>
  );
};

export default TVShowsPage;
