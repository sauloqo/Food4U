import { UserGateway } from "../../gateways/userGateway";
import { AuthenticationGateway } from "../../gateways/authGateway";

export class EditUserInfoUC {
   constructor(
      private db: UserGateway,
      private authGateway: AuthenticationGateway
   ) { }

   async execute(input: EditUserInfoUCInput): Promise<EditUserInfoUCOutput> {
      const userInfo = await this.authGateway.getUsersInfoFromToken(
         input.token
      );

      if (!userInfo) {
         throw new Error("User Not Found");
      }

      const userId = await this.db.getUserById(input.id);

      if (!userId) {
         throw new Error("User not found");
      }

      await this.db.editUserInfo(
         userId.getId(),
         input.newName || userId.getName(),
         input.newEmail || userId.getEmail(),
         input.newBirthdate || userId.getBirthdate()
      );

      return {
         message: "User informations edited sucessfully!"
      }
   }
}

interface EditUserInfoUCInput {
   token: string,
   id: string,
   newName: string,
   newEmail: string,
   newBirthdate: string
}

interface EditUserInfoUCOutput {
   message: string
}