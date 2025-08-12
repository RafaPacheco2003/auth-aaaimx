import { User } from "../../models/User";

export interface GetByIdUserUseCase{
    getById(id:string): Promise<User | null>;
}
