import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import Navbar from '@/components/Navbar';
import useFavoriteMovies from '@/hooks/useFavoritesMovies';
import useMovieList from '@/hooks/useMovieList';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const Home = () => {
  const { data: movies } = useMovieList();
  const { data: favoriteMoviews } = useFavoriteMovies();
  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title={'Trending Now'} data={movies} />
        <MovieList title={'My List'} data={favoriteMoviews} />
      </div>
    </>
  );
};

export default Home;
