import create from 'zustand';
import { Movie, MovieResponse } from '../models';
import { getLocalFavs } from '../utilities';


interface FavsState {
  favs: Movie[] ,
  addMovies: (newMovies: Movie[]) => void,
  addMovie: (newMovies: Movie) => void,
  removeMovie: (idMovie: number) => void,
}

export const favsStore = create<FavsState>((set) => ({
  favs:getLocalFavs() ? getLocalFavs()! : [],
  addMovies: (newMovies) => {
    set((state) => ({
      favs: [...state.favs, ...newMovies]
    }))
  },
  addMovie: (newMovie) => {
    set((state) => ({
      favs: [...state.favs, newMovie]
    }))
  },
  removeMovie: (idMovie) => { 
    set((state)=>({
      favs: state.favs.filter(fav => fav.id !== idMovie)
  }))
  }
}))