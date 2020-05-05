import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { CreateRecipeUC } from "../../../business/usecases/recipes/createRecipe";
import { RecipeDB } from "../../../data/recipeDatabase";

export const createRecipeEndPoint = async (req: Request, res: Response) => {
    try {
        const jwtSecret: string = process.env.SECRET || "";
        const createRcipeUC = new CreateRecipeUC(new RecipeDB());
        const data = jwt.verify(req.headers.auth as string, jwtSecret) as { id: string }

        const result = await createRcipeUC.execute({
            title: req.body.title,
            description: req.body.description,
            userId: data.id
        });

        res.status(200).send({ recipe: result });
    } catch (err) {
        res.status(err.errorCode || 400).send({
            message: err.message
        });
    }
};