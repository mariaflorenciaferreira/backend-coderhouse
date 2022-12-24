
export default class OrderDto {
    constructor({ _id, products,amount,adress}) {
        this._id = _id
        this.products = products
        this.amount = amount
        this.adress = adress
    }
}

export function asDto(order) {
    if (Array.isArray(order)) return order.map((o) => new OrderDto(o));
    else return new OrderDto(order);
}
