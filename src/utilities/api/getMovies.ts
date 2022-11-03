import { Movie, MovieResponse } from "../../models"

export async function getMoviesbyCategory (idCategory: number, page: number = 1) {
  const baseUrl = import.meta.env.VITE_BASE_URL
  const apiKey = import.meta.env.VITE_API_KEY
  const url = `${baseUrl}discover/movie?api_key=${apiKey}&with_genres=${idCategory}&page=${page}&limit=30`
  
  const res = await fetch(url)
  const body: MovieResponse = await res.json()
  return body
}
export async function getMovies ( page: number = 1) {
  const baseUrl = import.meta.env.VITE_BASE_URL
  const apiKey = import.meta.env.VITE_API_KEY
  const url = `${baseUrl}discover/movie?api_key=${apiKey}&page=${page}`
  
  const res = await fetch(url)
  const body: MovieResponse = await res.json()
  return body
}

export async function getMovie (idMovie: number) {
  const baseUrl = import.meta.env.VITE_BASE_URL
  const apiKey = import.meta.env.VITE_API_KEY
  const url = `${baseUrl}/movie/${idMovie}?api_key=${apiKey}`
  
  const res = await fetch(url)
  const body: Movie = await res.json()
  return body
}