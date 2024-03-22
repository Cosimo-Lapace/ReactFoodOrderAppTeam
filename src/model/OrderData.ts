import { SelectedMeal } from "./SelectedMeal";

export class Customer {
  name: string;
  email: string;
  street: string;
  postalCode: string;
  city: string;

  constructor(
    name: string,
    email: string,
    street: string,
    postalCode: string,
    city: string
  ) {
    this.name = name;
    this.email = email;
    this.street = street;
    this.postalCode = postalCode;
    this.city = city;
  }
}

export class Order {
  id: string;
  customer: Customer;
  items: SelectedMeal[];
  constructor(id: string, customer: Customer, items: SelectedMeal[]) {
    this.id = id;
    this.customer = customer;
    this.items = items;
  }
}
