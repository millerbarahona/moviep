import { MovieResponse } from "../../models"

export async function getMoviesbyCategory (idCategory: number, page: number = 1) {
  const baseUrl = import.meta.env.VITE_BASE_URL
  const apiKey = import.meta.env.VITE_API_KEY
  const url = `${baseUrl}discover/movie?api_key=${apiKey}&with_genres=${idCategory}&page=${page}`
  
  const res = await fetch(url)
  const body: MovieResponse = await res.json()
  return body
}