import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { UserDB } from "../../../data/userDatabase";
import { FollowUserUC } from "../../../business/usecases/users/followUser";

export const followUserEndpoint = async (req: Request, res: Response) => {
    try {
        const folowUserUC = new FollowUserUC(new UserDB());
        const jwtSecretKey: string = process.env.SECRET || "";
        const data = jwt.verify(req.headers.auth as string, jwtSecretKey) as { id: string }

        await folowUserUC.execute({
            userId: data.id,
            userToFollowId: req.body.userToFollowId

        });

        res.status(200).send({ 
            massege: "You're now following this user!" 
        });
    } catch (err) {
        res.status(err.errorCode || 400).send({
            message: err.message
        });
    }
};