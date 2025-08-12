import { User } from "../../models/User";
import { UserId } from "../../valueObject/UserId";

export interface UserRepositoryPort {
    create(user: User): Promise<void>;
    findById(id: UserId): Promise<User | null>;
    findAll(): Promise<User[]>;
    delete(id: UserId): Promise<void>;
}
