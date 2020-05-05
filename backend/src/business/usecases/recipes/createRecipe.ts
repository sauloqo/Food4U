import { v4 } from "uuid";
import { Recipe } from "../../entities/recipes";
import { RecipeGateway } from "../../gateways/recipeGateway";

interface CreateRecipeInput {
    title: string
    description: string
    userId: string
}

interface CreateRecipeOutput {
    message: string
}

export class CreateRecipeUC {
    constructor(private db: RecipeGateway) { }

    async execute(input: CreateRecipeInput): Promise<CreateRecipeOutput> {
        const id = v4()

        const newRecipe = new Recipe(id, input.title, input.description, new Date(), input.userId)

        await this.db.createRecipe(newRecipe)

        return {
            message: "Recipe created sucessfully!"
        }
    };
}