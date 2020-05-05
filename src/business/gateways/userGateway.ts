import { User } from "../entities/users";

export interface UserGateway {
    signup(user: User): Promise<void>;
    login(email: string): Promise<User | undefined>;
    getUserById(id: string): Promise<User | undefined>;
    createUserFollowRelation(followeing_id: string, followed_id: string): Promise<void>;
    editUserInfo(id: string, newName: string, newEmail: string, newBirthdate: string): Promise<void>
}