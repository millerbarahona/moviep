import { Route } from 'react-router-dom'
import { AddMovie, Index, MovieDetail, Movies, OwnMovies } from '../pages'
import FavMovies from '../pages/favs/FavMovies'
import { RoutesNotFound } from '../utilities'
import { routes } from './routes'

export function Router() {
  return (
      <RoutesNotFound>
        <Route path={routes.INDEX} element={<Index />} />
        <Route path={routes.MOVIES} element={<Movies />} />
        <Route path={routes.MOVIE} element={<MovieDetail />} />
        <Route path={routes.FAVS} element={<FavMovies />} />
        <Route path={routes.ADD} element={<AddMovie />} />
        <Route path={routes.OWN} element={<OwnMovies />} />
      </RoutesNotFound>
  )
}