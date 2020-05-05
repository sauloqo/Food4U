import { Request, Response } from "express";
import { EditUserInfoUC } from "../../../business/usecases/users/editUserInfo";
import { UserDB } from "../../../data/userDatabase";
import { JwtAuthorizer } from "../../../services/jwtAuthorize";

export const editUserInfoEndpoint = async (req: Request, res: Response) => {
   try {
      const editUserInfoUC = new EditUserInfoUC(new UserDB(), new JwtAuthorizer())

      const result = await editUserInfoUC.execute({
         token: req.headers.auth as string,
         id: req.body.id,
         newName: req.body.newName,
         newEmail: req.body.newEmail,
         newBirthdate: req.body.newBirthdate
      })

      res.status(200).send(result)
   } catch (err) {
      res.status(err.errorCode || 400).send({
         message: err.message
      })
   }
}