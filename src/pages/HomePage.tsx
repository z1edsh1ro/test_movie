
import Hero from "@/components/Hero";
import MovieSection from "@/components/MovieSection";
import { useState } from 'react';
import { useMovies } from '../hooks/useMovies';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { movies, loading, error } = useMovies(searchQuery);

  console.log(movies);

  return (
    <div>
      <Hero />

      <div className="container mx-auto flex mt-8">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for movies..."
          className="flex-1 px-4 py-2 mr-8 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      {loading && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
        </div>
      )}

      {error && (
        <div className="text-red-500 text-center py-4">
          {error}
        </div>
      )}

      {!loading && !error && movies.length === 0 && searchQuery && (
        <div className="text-center py-8 text-gray-500">
          No movies found for "{searchQuery}"
        </div>
      )}
      
      <MovieSection 
        movies={movies}
      />
      
    </div>
  );
};

export default HomePage;
