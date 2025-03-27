
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import MovieSection from "@/components/MovieSection";
import Newsletter from "@/components/Newsletter";
import { newReleases } from "@/data/moviesData";
import { newTVShows } from "@/data/tvShowsData";

const NewReleasesPage = () => {
  useEffect(() => {
    document.title = "Cinephile | New Releases";
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
            New Releases
          </h1>
          <p className="text-lg text-muted-foreground">
            Stay up to date with the latest movies and TV shows added to our collection.
          </p>
        </div>
      </div>
      
      <MovieSection 
        title="New Movies"
        movies={newReleases}
      />
      
      <MovieSection 
        title="New TV Shows"
        movies={newTVShows}
      />
      
      <Newsletter />
    </motion.div>
  );
};

export default NewReleasesPage;
