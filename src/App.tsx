import React from 'react';
import './App.css'
import Headers from './components/headers/headers';
import MealsMain from './components/mealsMain/mealsMain';
import CartContextProvider from './store/cart-context';
import HistoryContextProvider from './store/history-context';

const App: React.FC =() => {

  return (
    <CartContextProvider>
      <HistoryContextProvider>
        <Headers />
      </HistoryContextProvider>
      <section>
          <MealsMain />
      </section>
      
    </CartContextProvider>
  );
}

export default App;
