
export default class CartsDto {
    constructor({ title, products}) {
        this.title = title
        this.products = products
    }
}


export function asDto(cart) {
    if (Array.isArray(cart)) return cart.map((p) => new CartsDto(p));
    else return new CartsDto(cart);
}
