import React from 'react';
import './App.css'
import Headers from './components/headers/headers';
import MealsMain from './components/mealsMain/mealsMain';
import CartContextProvider from './store/cart-context';
import FilterContextProvider from './store/filter-context';



const App: React.FC =() => {

  return (
    <CartContextProvider>
      <Headers />
      <section>
        <FilterContextProvider>
          <MealsMain />
        </FilterContextProvider>
      </section>
    </CartContextProvider>
  );
}

export default App;
