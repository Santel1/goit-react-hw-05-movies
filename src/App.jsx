import { StyledAppContainer } from 'App.styled';
import { StyledHeader } from 'Header.styled';
import { Loader } from 'components/Loader';
import { Suspense } from 'react';
import { lazy } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Movies = lazy(() => import('pages/Movies'));

export const App = () => {
  return (
    <StyledAppContainer>
      <StyledHeader className="header">
        <nav>
          <NavLink className="header-link" to="/">
            Home
          </NavLink>
          <NavLink className="header-link" to="/movies">
            Movies
          </NavLink>
        </nav>
      </StyledHeader>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
        </Routes>
      </Suspense>
    </StyledAppContainer>
  );
};
