import { BrowserRouter, Route } from 'react-router-dom'
import { Index, Movies } from '../pages'
import { RoutesNotFound } from '../utilities'
import { routes } from './routes'

export function Router() {
  return (
    <BrowserRouter>
      <RoutesNotFound>
        <Route path={routes.INDEX} element={<Index />} />
        <Route path={routes.MOVIES} element={<Movies />} />
      </RoutesNotFound>
    </BrowserRouter>
  )
}