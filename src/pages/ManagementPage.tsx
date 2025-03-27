
import { useEffect } from "react";
import MovieSection from "@/components/MovieSection";
import { newReleases } from "@/data/moviesData";

const ManagementPage = () => {
  useEffect(() => {
    document.title = "Cinephile | New Releases";
  }, []);

  return (
    <div>
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
      
    </div>
  );
};

export default ManagementPage;
