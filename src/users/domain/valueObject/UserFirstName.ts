export class UserFirstName {
    value: string;

    constructor(value: string) {
        this.value = value
        this.ensureIsValid()
    }
    private ensureIsValid(): void {
        if (this.value.length < 2) {
            throw new Error("Invalid DescriptionDescription");
        }
        if(this.value.length < 10){
            throw new Error("First Name supera el tamaño maximo")
        }
    }
}

//squi-uel