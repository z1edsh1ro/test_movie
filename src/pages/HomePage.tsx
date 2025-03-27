
import { useEffect } from "react";
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

  return (
    <div>
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
    </div>
  );
};

export default HomePage;
