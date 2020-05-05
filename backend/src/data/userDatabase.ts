import { User } from '../business/entities/users';
import { BaseDB } from './baseDatabase';
import { UserGateway } from '../business/gateways/userGateway';

export class UserDB extends BaseDB implements UserGateway {
   private userTable = "Food4U_users";
   private relationsTable = "Food4U_users_relations";

   private mapDBUserToUser(input?: any): User | undefined {
      return (
         input && new User(
            input.id,
            input.name,
            input.email,
            input.password,
            input.birthdate
         )
      )
   };

   public async signup(user: User): Promise<void> {
      await this.connection.raw(`
         INSERT INTO ${this.userTable} (id, name, email, password, birthdate)
         VALUES (
           '${user.getId()}',
           '${user.getName()}',
           '${user.getEmail()}',
           '${user.getPassword()}',
           '${user.getBirthdate()}'
         )
      `)
   };

   public async login(email: string): Promise<User | undefined> {
      const user = await this.connection.raw(`
         SELECT * FROM ${this.userTable} WHERE email = '${email}'
      `);

      if (!user[0][0]) {
         return undefined
      }

      return this.mapDBUserToUser(user[0][0])
   };

   public async getUserById(id: string): Promise<User | undefined> {
      const result = await this.connection.raw(`
          SELECT *
          FROM ${this.userTable}
          WHERE id = '${id}'
      `)

      if (!result[0][0]) {
         return undefined;
      };

      return this.mapDBUserToUser(result[0][0])
   };

   async createUserFollowRelation(follower_id: string, followed_id: string): Promise<void> {
      await this.connection.raw(`
         INSERT INTO ${this.relationsTable} (follower_id, followed_id)
         VALUES ('${follower_id}', '${followed_id}')
      `)
   };

   async editUserInfo(id: string, newName: string, newEmail: string, newBirthdate: string): Promise<void> {
      await this.connection.raw(`
        UPDATE ${this.userTable}
        SET name = '${newName}', email = '${newEmail}', birthdate = '${newBirthdate}'
        WHERE id = '${id}'
      `)
   };
}