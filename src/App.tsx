import React from 'react';
import './App.css'
import Headers from './components/headers/headers';
import MealsMain from './components/mealsMain/mealsMain';

const App: React.FC =() => {

  return (
    <>
      <Headers />
      <section>
        <MealsMain />
      </section>
    </>
  );
}

export default App;
