import { v4 } from 'uuid';
import { UserDB } from '../../../data/userDatabase';
import { User } from '../../entities/users';
import * as bcrypt from 'bcrypt';
import { CryptographyGateway } from '../../gateways/cryptographyGateway';
import { AuthenticationGateway } from '../../gateways/authGateway';

export class SignUpUC {
   constructor(
      private db: UserDB,
      private authenticationGateway: AuthenticationGateway,
      private cryptographyGateway: CryptographyGateway
   ) { }

   public async execute(input: SignUpUCInput): Promise<SignUpUCOutput> {
      const id = v4();

      if (!input.name || input.name.length < 1) {
         throw new Error("Input name is missing!");
      }
      if (!input.email || input.email.length < 1) {
         throw new Error("Input email is missing!");
      }
      if (!input.birthdate || input.birthdate.length < 1) {
         throw new Error("Input birthDate is missing!");
      }

      const pass = await this.cryptographyGateway.encrypt(input.password);
      const invalidPassword = pass.length < 6;

      if (!pass || invalidPassword) {
         throw new Error("Password does not exist or is not valid");
      }

      const newUser = new User(id, input.name, input.email, pass, input.birthdate);

      await this.db.signup(newUser);

      const token = this.authenticationGateway.generateToken({
         id: newUser.getId(),
      });

      return {
         message: "User created sucessfully!",
         token
      }
   };
}

export interface SignUpUCInput {
   name: string,
   email: string,
   password: string,
   birthdate: string
}

export interface SignUpUCOutput {
   message: string,
   token: string
}