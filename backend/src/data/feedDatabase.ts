import { BaseDB } from './baseDatabase';
import { Recipe } from '../business/entities/recipes';
import { FeedGateway } from '../business/gateways/feedGateway';
import { Feed } from '../business/entities/feeds';

export class FeedDB extends BaseDB implements FeedGateway {
   private relationsTable = "Food4U_users_relations";
   private recipesTable = "Food4U_recipes";
   private usersTable = "Food4U_users"

   async getFeedforUser(userId: string): Promise<Feed[]> {
      const result = await this.connection.raw(`   
            SELECT r.*, u.email FROM ${this.relationsTable}
            JOIN ${this.usersTable} u ON ${this.relationsTable}.followed_id = u.id
            JOIN ${this.recipesTable} r ON ${this.relationsTable}.followed_id = r.userId
            WHERE follower_id = '${userId}'
            ORDER BY r.creationDate DESC;
         `)

      return result[0].map((recipe: any) => {
         return new Feed(
            recipe.id,
            recipe.title,
            recipe.description,
            recipe.creationDate,
            recipe.userId,
            recipe.email)
      })
   };
}