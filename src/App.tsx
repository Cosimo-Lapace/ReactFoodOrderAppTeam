import React from 'react';
import './App.css'
import Headers from './components/headers/headers';
import MealsMain from './components/mealsMain/mealsMain';
import CartContextProvider from './store/cart-context';


const App: React.FC =() => {

  return (
    
      <CartContextProvider>
        <Headers />
        <section>
          <MealsMain />
        </section>
      </CartContextProvider>
  );
}

export default App;
