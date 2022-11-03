import create from 'zustand';
import { Category } from '../models';
import { getLocalCategories, postLocalCategories } from '../utilities';

interface CategoriesState {
  categories: Category[] | undefined,
  addCategories: (newCategories: Category[]) => void,
  removeCategories: () => void
}

export const categoriesStore = create<CategoriesState>((set) => ({
  categories: getLocalCategories() ? getLocalCategories() : [],
  addCategories: (newCategories) => {
    postLocalCategories(JSON.stringify(newCategories))
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

