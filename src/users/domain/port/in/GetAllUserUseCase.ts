import { User } from "../../models/User";

export interface GetAllUserUseCase{
    getAll(): Promise<User[]>;
}