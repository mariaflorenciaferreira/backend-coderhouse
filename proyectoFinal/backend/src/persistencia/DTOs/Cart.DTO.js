
export default class CartsDto {
    constructor({ _id, products}) {
        this._id = _id
        this.products = products
    }
}


export function asDto(cart) {
    if (Array.isArray(cart)) return cart.map((p) => new CartsDto(p));
    else return new CartsDto(cart);
}
