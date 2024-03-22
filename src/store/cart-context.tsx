import { createContext, useReducer } from "react";
import { SelectedMeal } from "../model/SelectedMeal";
import { Meals } from "../model/Meals";
import usePost from "../hooks/usePost";
import { order } from "../http/https";
import { Order } from "../model/OrderData";
import { Outcome } from "../model/Outcome";

interface CartAction {
  type: string;
  payload: SelectedMeal;
}

interface CartState {
  items: SelectedMeal[];
}

interface CartContextType {
  items: SelectedMeal[];
  addItemToCart: (product: Meals) => void;
  updateItemQuantity: (product: Meals, amount: number) => void;
  placeOrder: (order: Order) => void;
  emptyCart: () => void;
  requestState: {
    outcome: Outcome | undefined;
    loading: boolean;
  };
}

export const CartContext = createContext<CartContextType>({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
  placeOrder: () => { },
  emptyCart: () => { },
  requestState: {
    outcome: {
      message: "",
      success: false,
    },
    loading: false,
  },
});

function shoppingCartReducer(state: CartState, action: CartAction) {
  //Add to the cart case; if the item does not already exists, the item is added to the cart; otherwise its quantity it's increased
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.meal.id === action.payload.meal.id
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ meal: action.payload.meal, quantity: 1 });
    }

    return {
      items: updatedItems,
    };
  }
  //Update item in the cart case; if the item quantity reaches <=0, the item is deleted from the cart
  else if (action.type === "UPDATE_ITEM") {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.meal.id === action.payload.meal.id
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
  } else if (action.type === "EMPTY_CART") {
    return {
      items: [],
    };
  }
  else {
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
  const { post, loading, outcome } = usePost(
    order,
    "orders",
    "An error has occurred"
  );

  function handleAddItemToCart(product: Meals) {
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: { meal: product, quantity: 1 },
    });
  }

  function handleUpdateCartItemQuantity(product: Meals, amount: number) {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: { meal: product, quantity: amount },
    });
  }

  function emptyCart() {
    shoppingCartDispatch({
      type: "EMPTY_CART",
      payload: { meal: new Meals("","","","",""), quantity: 1 },
    });
  }

  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
    placeOrder: post,
    emptyCart:emptyCart,
    requestState: {
      outcome,
      loading,
    },
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
