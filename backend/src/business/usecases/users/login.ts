import { UserDB } from '../../../data/userDatabase';
import { AuthenticationGateway } from '../../gateways/authGateway';
import { CryptographyGateway } from '../../gateways/cryptographyGateway';

export class LoginUC {
   constructor(
      private db: UserDB,
      private authenticationGateway: AuthenticationGateway,
      private cryptographyGateway: CryptographyGateway
      ) { }

   public async execute(input: LoginUCInput): Promise<LoginUCOutput> {
      const user = await this.db.login(input.email);

      if (!user) {
         throw new Error("User not found!")
      };

      const verifyPassword = await this.cryptographyGateway.compare(         
         input.password,
         user.getPassword()
      );

      if (!verifyPassword) {
         throw new Error("Wrong password or email")
      };

      const token = this.authenticationGateway.generateToken({
         id: user.getId(),
      });

      return {
         message: "You are logged!",
         token: token
      }
   };
};

export interface LoginUCInput {
   email: string,
   password: string
}

export interface LoginUCOutput {
   message: string,
   token: string
}