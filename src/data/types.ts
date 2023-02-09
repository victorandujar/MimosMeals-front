export interface PaginationStructure {
  self: {
    href: string;
    title: string;
  };
}

export interface ImageStructure {
  LARGE: {
    url: string;
  };
}

export interface FATStructure {
  label: string;
  quantity: number;
  unit: string;
}

export interface CHOCDFStructure {
  label: string;
  quantity: number;
  unit: string;
}

export interface SUGARStructure {
  label: string;
  quantity: number;
  unit: string;
}

export interface PROCNTStructure {
  label: string;
  quantity: number;
  unit: string;
}

export interface CHOLEStructure {
  label: string;
  quantity: number;
  unit: string;
}

export interface TotalNutrientsStructure {
  FAT: FATStructure;
  CHOCDF: CHOCDFStructure;
  SUGAR: SUGARStructure;
  PROCNT: PROCNTStructure;
  CHOLE: CHOLEStructure;
}

export interface RecipeStructure {
  label: string;
  image: string;
  images: ImageStructure;
  ingredientLines: string[];
  calories: string;
  cuisineType: string[];
  totalNutrients: TotalNutrientsStructure;
}

export interface MealStructure {
  recipe: RecipeStructure;
}

export type MealsStructure = MealStructure[];

export interface ApiResponseStructure {
  count: number;
  front: number;
  hits: MealsStructure;
}
