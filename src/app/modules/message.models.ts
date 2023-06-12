export class Message{
    name: string | undefined
    lastname: string | undefined
    message: string | undefined
    date: Date | undefined
    
    constructor(name: string,lastname: string, message: string, date: Date){
        this.name = name
        this.lastname = lastname
        this.message = message
        this.date = date
    }
}