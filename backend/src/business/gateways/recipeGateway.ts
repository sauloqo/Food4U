import { Recipe } from "../entities/recipes";

export interface RecipeGateway {
   createRecipe(recipe: Recipe): Promise<void>
}