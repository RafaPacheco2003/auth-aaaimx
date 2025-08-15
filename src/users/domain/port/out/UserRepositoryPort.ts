import { User } from "../../models/User";

export interface UserRepositoryPort {
    create(user: User): Promise<void>;
    findById(id: string): Promise<User | null>;
    findAll(): Promise<User[]>;
    update(user: User): Promise<void>;
    delete(id: string): Promise<void>;
    updateActive(id: string): Promise<void>;
}
