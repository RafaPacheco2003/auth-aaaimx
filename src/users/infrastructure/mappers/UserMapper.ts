import { User } from "src/users/domain/models/User";
import { UserRequest } from "../https/request/UserRequest";

export function requestToDomain(request: UserRequest): User {
    return User.createNew(
        request.first_name,
        request.last_name,
        request.email,
        request.phone
    );
}
