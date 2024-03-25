import React from 'react';
import './App.css'
import Headers from './components/headers/headers';
import MealsMain from './components/mealsMain/mealsMain';
import HistoryContextProvider from './store/history-context';

const App: React.FC =() => {

  return (
    <>
      <HistoryContextProvider>
        <Headers />
      </HistoryContextProvider>
      <section>
          <MealsMain />
      </section>
    </>
  );
}

export default App;
