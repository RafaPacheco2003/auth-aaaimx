export class PasswordId{
    value: string;

    constructor(value: string){
        this.value = value;
    }

    private ensureIsValid():void{
        if (this.value.length < 3) {
            throw new Error("Invalid PassowrdId");
        }
       
    }
}