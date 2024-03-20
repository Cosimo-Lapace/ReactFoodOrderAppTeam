export class Meals {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  constructor(
    id: string,
    name: string,
    price: string,
    description: string,
    image: string
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
  }
}
