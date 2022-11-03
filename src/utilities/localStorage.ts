import { Category, Movie, OwnMovie } from "../models"

export function saveMoviesLocal () {

}

export function postLocalCategories (categories: string) {
  localStorage.setItem('categories', categories)
}

export function getLocalCategories () {
  const local = localStorage.getItem('categories')
  let localCategories: Category[] | undefined 
  local ? localCategories = JSON.parse(local) : null
  return localCategories
}

export function getLocalFavs () {
  const local = localStorage.getItem('favs')
  let localFavs: Movie[] | undefined 
  local ? localFavs = JSON.parse(local) : null
  return localFavs
}


export function addFav (newFav: Movie) {
  let toSave: Movie[] = []
  getLocalFavs() ? toSave = [...getLocalFavs()!, newFav] : toSave = [newFav]
  console.log(toSave)
  localStorage.setItem('favs', JSON.stringify(toSave))
}

export function removeFav (oldFav: Movie) {
  let toSave: Movie[] = []
  const local = getLocalFavs()

  local ? localStorage.setItem('favs',JSON.stringify(local.filter(fav => fav.id !== oldFav.id)) ) : null
}

export function getOwnMovies () {
  const local = localStorage.getItem('ownMovies')
  let localOwns: OwnMovie[] | undefined 
  local ? localOwns = JSON.parse(local) : null
  return localOwns

}

export function addOwnMovie(ownMovie: OwnMovie) {
  let toSave: OwnMovie[] = []
  getOwnMovies() ? toSave = [...getOwnMovies()!, ownMovie] : toSave = [ownMovie]
  localStorage.setItem('ownMovies', JSON.stringify(toSave))
}