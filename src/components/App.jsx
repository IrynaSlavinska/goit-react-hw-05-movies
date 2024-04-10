import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout';

const Home = lazy(() => import('pages/Home/Home'));
const Search = lazy(() => import('pages/Search/Search'));
const Actors = lazy(() => import('pages/Actors/Actors'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const ActorDetails = lazy(() => import('pages/ActorDetails/ActorDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Filmography = lazy(() => import('./Filmography/Filmography'));
const Gallery = lazy(() => import('./Gallery/Gallery'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="actors" element={<Actors />} />
        <Route path="actors/:actorId" element={<ActorDetails />}>
          <Route path="films" element={<Filmography />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>

        <Route path="*" element={<NotFound to={'/'} />}></Route>
      </Route>
    </Routes>
  );
};
