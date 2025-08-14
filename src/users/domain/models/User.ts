import { v4 as uuidv4 } from 'uuid';
import { UserId } from "../valueObject/UserId";
import { UserFirstName } from '../valueObject/UserFirstName';

export class User {
    id: UserId;
    first_name: UserFirstName;
    last_name: string;
    email: string;
    phone: string;
    is_active: boolean;
    is_verified: boolean;

    private constructor(
        first_name: UserFirstName,
        last_name: string,
        email: string,
        phone: string,
        is_active: boolean,
        is_verified: boolean,
        id?: UserId
    ) {
        this.id = id ?? new UserId(uuidv4());
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone = phone;
        this.is_active = is_active;
        this.is_verified = is_verified;
    }

    // Factory para crear nuevo usuario
    static createNew(
        first_name: UserFirstName,
        last_name: string,
        email: string,
        phone: string
    ): User {
        return new User(first_name, last_name, email, phone, false, false);
    }

    verify(): void {
        this.is_verified = true;
    }

    // opcional: método para activar usuario
    activate(): void {
        this.is_active = true;
    }
    
    desactive(): void{
        this.is_active = false;
    }


    // Factory para reconstruir desde la base de datos
    static fromPrimitives(data: {
        id: string;
        first_name: UserFirstName;
        last_name: string;
        email: string;
        phone: string;
        is_active: boolean;
        is_verified: boolean;
    }): User {
        return new User(
            data.first_name,
            data.last_name,
            data.email,
            data.phone,
            data.is_active,
            data.is_verified,
            new UserId(data.id)
        );
    }
}
