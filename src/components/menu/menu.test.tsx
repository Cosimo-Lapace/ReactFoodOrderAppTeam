// import { render, screen } from "@testing-library/react";
// import Menu from "./menu";



// describe("Async component", () => {
//   test("Verify if ", async () => {
//     (window.fetch as jest.Mock) = jest.fn();
//     (window.fetch as jest.Mock).mockResolvedValueOnce({
//       json: async () => [{ id: 1, title: "fist title" }],
//     });

//     //Arrange
//     render(<Menu />);

//     //Assert
//     const cardComponents = await screen.findAllByTestId("card");
//     expect(cardComponents).not.toHaveLength(0);
//   });
// })