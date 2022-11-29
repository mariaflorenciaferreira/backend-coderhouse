
export default class ProductsDto {
  constructor({ title, price, description}) {
    this.title = title
    this.price = price
    this.description = description
  }
}

export function asDto(products) {
  if (Array.isArray(products)) return products.map((p) => new ProductsDto(p));
  else return new ProductsDto(products);
}

