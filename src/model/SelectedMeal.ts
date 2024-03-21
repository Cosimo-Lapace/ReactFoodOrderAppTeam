import { Meals } from "./Meals";

export class SelectedMeal {
  meal: Meals;
  quantity: number;
  constructor( meal:Meals, quantity: number) {
    this.meal = meal;
    this.quantity = quantity;
  }
}
