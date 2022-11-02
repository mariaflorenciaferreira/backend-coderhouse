export default class Perimetro {
    private lado:number


    constructor(lado:number){
        this.lado=lado
    }

    // perímetro del cuadraro
    get perimetroCuadrado():number{
        return this.lado*4
    }
    
    // perímetro del rectángulo
    get perimetroRectangulo():number{
        return this.lado*2+this.lado*2
    }
    
    //perímetro del circulo
    get perimetroCirculo():number{
        return this.lado*2*Math.PI
    }
}   
