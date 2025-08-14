import { User } from "../../models/User";

export interface UserRepositoryPort {
    create(user: User): Promise<void>;
    findById(id: string): Promise<User | null>;
    findAll(): Promise<User[]>;
    delete(id: string): Promise<void>;
}
