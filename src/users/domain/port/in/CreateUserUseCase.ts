import { User } from "../../models/User";

export interface CreateUserUseCase{
    create(user: User): Promise<void>;

}