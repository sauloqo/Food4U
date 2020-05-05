import { UserDB } from "../../../data/userDatabase";

export class GetUserInfoUC {
    constructor(private db: UserDB) { }

    public async execute(input: GetUserInfoUCInput): Promise<GetUserInfoUCOutput> {
        const user = await this.db.getUserById(input.id)

        if (!user) {
            throw new Error("User not found")
        }

        return {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            birthdate: user.getBirthdate()
        }
    };
}

export interface GetUserInfoUCInput {
    id: string
}

export interface GetUserInfoUCOutput {
    id: string,
    name: string,
    email: string,
    password: string,
    birthdate: string
}