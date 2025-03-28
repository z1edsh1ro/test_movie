import { useState, useEffect } from 'react';
import { Movie, MovieResponse } from '../types/movie';
import { searchMovies } from '../lib/movieService';

export const useMovies = (query: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query.trim()) {
        query = 'a';
      }

      setLoading(true);
      setError(null);

      try {
        const response: MovieResponse = await searchMovies(query);
        setMovies(response.results);
        setTotalPages(response.total_pages);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch movies');
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchMovies();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return { movies, loading, error, totalPages };
}; 