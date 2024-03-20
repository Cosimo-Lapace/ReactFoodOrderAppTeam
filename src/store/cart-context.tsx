import { createContext, useReducer } from "react";
import { SelectedMeal } from "../model/SelectedMeal";

interface CartContextType {
  items: SelectedMeal[];
  addItemToCart: (productId: string) => void;
  updateItemQuantity: (productId: string, amount: number) => void;
}

export const CartContext = createContext<CartContextType>({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

interface CartAction {
  type: string;
  payload: SelectedMeal;
}

interface CartState {
  items: SelectedMeal[];
}

function shoppingCartReducer(state: CartState, action: CartAction) {
    if (action.type === "ADD_ITEM") {
        const updatedItems = [...state.items];

        const existingCartItemIndex = updatedItems.findIndex(
            (cartItem) => cartItem.id === action.payload.id
        );
        const existingCartItem = updatedItems[existingCartItemIndex];

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems.push(
                {id:action.payload.id, quantity:1}
            );
        }

        return {
            items: updatedItems,
        };
    }
    else if ((action.type === "UPDATE_ITEM")) {
        const updatedItems = [...state.items];
        const updatedItemIndex = updatedItems.findIndex(
            (item) => item.id === action.payload.id
        );

        const updatedItem = {
            ...updatedItems[updatedItemIndex],
        };

        updatedItem.quantity += action.payload.quantity;

        if (updatedItem.quantity <= 0) {
            updatedItems.splice(updatedItemIndex, 1);
        } else {
            updatedItems[updatedItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
        };
    } else {
        return state;
     }
}

export default function CartContextProvider({
  children,
}: React.PropsWithChildren) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    { items: [] }
    );

    console.log(shoppingCartState);
    
      function handleAddItemToCart(productId: string) {
        shoppingCartDispatch({
          type: "ADD_ITEM",
          payload: { id: productId, quantity: 1 },
        });
      }

      function handleUpdateCartItemQuantity(productId:string, amount:number) {
        shoppingCartDispatch({
          type: "UPDATE_ITEM",
          payload: { id: productId, quantity: amount },
        });
      }

  const ctxValue = {
      items: shoppingCartState.items,
      addItemToCart: handleAddItemToCart,
      updateItemQuantity:handleUpdateCartItemQuantity
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
