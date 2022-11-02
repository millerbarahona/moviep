export interface CategoryResponse {
  genres: Category[],
}

export interface Category {
  id: number,
  name: string,
}