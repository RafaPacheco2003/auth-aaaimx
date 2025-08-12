import { UserId } from "../valueObject/UserId";

export class User{
    id: UserId;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    is_active: boolean;
    is_verified: boolean;
    created_at: Date;
    updated_at: Date;


    constructor(
        id: UserId,
        first_name: string,
        last_name: string,
        email: string,
        phone: string,
        is_active: boolean,
        is_verified: boolean,
        created_at: Date,
        updated_at: Date
    ) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone = phone;
        this.is_active = is_active;
        this.is_verified = is_verified;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}