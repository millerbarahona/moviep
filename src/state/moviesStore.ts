import create from 'zustand';
import { Movie, MovieResponse } from '../models';

export interface Movies {
  movies?: Movie[],
  page?: number,
  totalPages?: number,
}

interface MoviesState {
  movieRes: Movies ,
  addMovies: (newMovies: MovieResponse) => void,
  removeMovies: () => void
}

export const moviesStore = create<MoviesState>((set) => ({
  movieRes: {},
  addMovies: (newMovies) => {
    set((state) => ({
      movieRes: {
        movies: newMovies.results,
        page: newMovies.page,
        totalPages: newMovies.total_pages
      }
    }))
  },
  removeMovies: () => { 
    set((state)=>({
      movieRes: {}
    }))
  },
}))

