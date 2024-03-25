import Card from "./card";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CartContext } from "../../../store/cart-context";


const mockCartContext = {
  items: [],
  addItemToCart: jest.fn(),
  updateItemQuantity: jest.fn(),
  placeOrder: jest.fn(),
  emptyCart: jest.fn(),
  requestState: {
    outcome: {
      message: "",
      success: false,
    },
    loading: false,
  },
};


test("Button add test", () => {
    render(
      <CartContext.Provider value={mockCartContext}>
        <Card id={""} name={""} price={""} description={""} image={""} />
      </CartContext.Provider>
    );

    const addButton = screen.getByRole("button");
    fireEvent.click(addButton);

    expect(mockCartContext.addItemToCart).toHaveBeenCalled();
});