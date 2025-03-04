import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Provider } from 'react-redux';
import appStore from './redux/store';

function App() {
  const [searchItem, setSearchItem] = useState("");

  return (
      <Provider store={appStore}>
        <Header setSearchItem={setSearchItem} />
        <Outlet context={{ searchItem }} />
      </Provider>
     
  );
}

export default App;
