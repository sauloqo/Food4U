import { UserGateway } from "../../gateways/userGateway";

export class FollowUserUC {
    constructor(private db: UserGateway) { }

    async execute(input: FollowUserUCInput) {
        await this.db.createUserFollowRelation(
            input.userId,
            input.userToFollowId)
    };
}

interface FollowUserUCInput {
    userId: string,
    userToFollowId: string
}