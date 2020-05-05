import { FeedGateway } from "../../gateways/feedGateway";

export class GetFeedUserUC {
   constructor(private db: FeedGateway) { }

   async execute(input: GetFeedInput): Promise<GetFeedOutput[]> {
      const recipes = await this.db.getFeedforUser(input.userId)

      return recipes.map(recipe => {
         return {
            recipeId: recipe.getId(),
            title: recipe.getTittle(),
            description: recipe.getDescription(),
            creationDate: recipe.getCreationDate(),
            userId: recipe.getUserId(),
            email: recipe.getEmail()
         }
      })
   };
}

interface GetFeedInput {
   userId: string
}

interface GetFeedOutput {
   recipeId: string,
   title: string,
   description: string,
   creationDate: Date
}
