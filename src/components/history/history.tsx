import { useContext } from "react";
import { HistoryContext } from "../../store/history-context";

const History = () => {
  //We retrieve the context from the provider
  const { history } = useContext(HistoryContext);

  return (
    <div>
        {/* We display the history starting from customer data */}
      <h1>Customer Data</h1>
      {history.length > 0}
      {history.map((order) => (
        <div key={order.id}>
          <h2>Order ID: {order.id}</h2>
          <p>Name: {order.customer.name}</p>
          <p>Email: {order.customer.email}</p>
          <p>Street:{order.customer.street}</p>
          <p>City: {order.customer.city}</p>
          <h3>Items Ordered:</h3>
          <ul>
            {order.items.map((item) => (
              <li key={item.meal.id}>
                {item.meal.name} - ${item.meal.price} x {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default History;
