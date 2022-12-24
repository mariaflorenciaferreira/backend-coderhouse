
export default class ProductsDto {
  constructor({ title, price, description, img}) {
    this.title = title
    this.price = price
    this.img = img
    this.description = description
  }
}

export function asDto(products) {
  if (Array.isArray(products)) return products.map((p) => new ProductsDto(p));
  else return new ProductsDto(products);
}

