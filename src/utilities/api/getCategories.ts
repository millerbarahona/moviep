import { CategoryResponse } from "../../models"

export async function getCategories () {
  const baseUrl = import.meta.env.VITE_BASE_URL
  const bb = import.meta.env
  const apiKey = import.meta.env.VITE_API_KEY
  const url = `${baseUrl}genre/movie/list?api_key=${apiKey}`

  const res = await fetch(url)
  const body: CategoryResponse = await res.json()

  return body.genres
}

export async function getCategory (idGenre: number) {
  const baseUrl = import.meta.env.VITE_BASE_URL
  const apiKey = import.meta.env.VITE_API_KEY
  const url = `${baseUrl}genre/movie/list?api_key=${apiKey}`

  const res = await fetch(url)
  const body: CategoryResponse = await res.json()
  const genre = body.genres.filter((genre) => genre.id === idGenre)[0]
  return genre
}