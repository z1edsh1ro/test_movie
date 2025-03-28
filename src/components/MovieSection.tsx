import MovieCard from "./MovieCard";
import { Movies } from "@/types/movie";

const MovieSection = ({ movies }: Movies) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
              price={movie.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieSection;
