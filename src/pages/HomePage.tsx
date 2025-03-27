
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import MovieSection from "@/components/MovieSection";
import FeaturedSection from "@/components/FeaturedSection";
import Newsletter from "@/components/Newsletter";
import { featuredMovies, trendingMovies, newReleases } from "@/data/moviesData";
import { popularTVShows } from "@/data/tvShowsData";

const HomePage = () => {
  useEffect(() => {
    document.title = "Cinephile | Home";
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
    >
      <Hero />
      
      <MovieSection 
        title="Featured Movies"
        description="Our selection of must-watch films"
        movies={featuredMovies}
        link="/movies"
      />
      
      <FeaturedSection />
      
      <MovieSection 
        title="Trending Now"
        description="Popular movies this week"
        movies={trendingMovies}
        link="/movies"
      />
      
      <MovieSection 
        title="New Releases"
        description="The latest movies added to our collection"
        movies={newReleases}
        link="/new-releases"
      />
      
      <MovieSection 
        title="Popular TV Shows"
        description="Top-rated series to binge watch"
        movies={popularTVShows}
        link="/tv-shows"
      />
      
      <Newsletter />
    </motion.div>
  );
};

export default HomePage;
