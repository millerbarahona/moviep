import create from 'zustand';
import { Category } from '../models';

interface CategoriesState {
  categories: Category[],
  addCategories: (newCategories: Category[]) => void,
  removeCategories: () => void
}

export const categoriesStore = create<CategoriesState>((set) => ({
  categories: [],
  addCategories: (newCategories) => {
    set((state) => ({
      categories: newCategories
    }))
  },
  removeCategories: () => {
    set((state) => ({
      categories: []
    }))
  }
}))

