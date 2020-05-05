import { Request, Response } from 'express';
import { UserDB } from "../../../data/userDatabase";
import { LoginUC } from '../../../business/usecases/users/login';
import { JwtAuthorizer } from '../../../services/jwtAuthorize';
import { BcryptService } from '../../../services/bcryptService';

export const loginEndpoint = async (req: Request, res: Response) => {
   try {
      const loginUC = new LoginUC(new UserDB(), new JwtAuthorizer(), new BcryptService());
      const token = await loginUC.execute({
         email: req.body.email,
         password: req.body.password
      })

      res.status(200).send(token)
   } catch (err) {
      res.status(err.errorCode || 400).send({
         message: err.message
      });
   }
};