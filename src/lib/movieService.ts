import { MovieResponse } from '../types/movie';

const API_KEY = 'c8351c04b608f0cac08faf3888f924d1';
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovies = async (query: string): Promise<MovieResponse> => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }

    const data: MovieResponse = await response.json();
    
    // Add dummy price to each movie
    data.results = data.results.map(movie => ({
      ...movie,
      price: Math.floor(Math.random() * (30 - 5 + 1)) + 5 // Random price between 5 and 30
    }));

    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
}; 