export default class Persona{
    private name:string
    private apellido:string

    constructor(name:string,apellido:string){
        this.name=name
        this.apellido=apellido
    }

    getFullName():string{
        return `${this.name} ${this.apellido}`
    }
}