import { Request, Response } from 'express';
import { UserDB } from "../../../data/userDatabase";
import { SignUpUC } from '../../../business/usecases/users/signUp';
import { BcryptService } from '../../../services/bcryptService';
import { JwtAuthorizer } from '../../../services/jwtAuthorize';

export const signUpEndpoint = async (req: Request, res: Response) => {
   try {
      const signUpUC = new SignUpUC(new UserDB(), new JwtAuthorizer(), new BcryptService());
      const result = await signUpUC.execute({
         name: req.body.name,
         email: req.body.email,
         password: req.body.password,
         birthdate: req.body.birthdate
      })

      res.status(200).send(result)
   } catch (err) {
      res.status(err.errorCode || 400).send({
         message: err.message
      });
   }
};
