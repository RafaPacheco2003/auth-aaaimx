import { UserId } from "src/users/domain/valueObject/UserId";

export class UserResponse {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
}