
import { useEffect } from "react";
import Hero from "@/components/Hero";
import MovieSection from "@/components/MovieSection";
import { featuredMovies, trendingMovies, newReleases } from "@/data/moviesData";

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
      
    </div>
  );
};

export default HomePage;
