import { fireEvent, render, screen } from "@testing-library/react";
import Headers from "./headers";
  import "@testing-library/jest-dom";


//This creates a mock-dom that renders children directly, allowing to test without encountering portal-realted problems
jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  createPortal: (node: React.ReactNode) => node,
}));

//Mocks dialog functions
beforeAll(() => {
  HTMLDialogElement.prototype.show = jest.fn();
  HTMLDialogElement.prototype.showModal = jest.fn();
  HTMLDialogElement.prototype.close = jest.fn();
});

test("This test verifies if the modal is functioning properly", () => {
  //ARRANGE
  render(<Headers />);

  //ACT
  const cartButton = screen.getByRole("button", { name: /cart/i });
  fireEvent.click(cartButton);

  //ASSERT
  //Verify that the showModal function is called
  expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled();
});
