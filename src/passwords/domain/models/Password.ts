import { User } from "src/users/domain/models/User";
import { PasswordId } from "../valueObject/PasswordId";

export class Password{
    id: PasswordId;
    hash_password: string;
    salt: string;
    alg: string;
    is_active: boolean;
    date_created: Date;
    id_user: string;

    private constructor(){

    }


    static createNew(hash_password: string, salt: string, alg: string, id_user: string):Password{
        return new Password(hash_password, salt, alg, id_user);
    }
    
}