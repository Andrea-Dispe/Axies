import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

import {getAxies} from './services/api/axies';
import Navbar from './components/Navbar';
import AxiesList from './pages/AxiesList';


function App() {
  const [axies, setAxies] = useState([]);
  useEffect(() => {
    const axies = getAxies();
    Promise.resolve(axies).then((res) => setAxies(res));
  }, []);

  console.log('axies: ', axies);

  return (
    <div className="App">
      <Navbar />
   <AxiesList axies={axies} />
    </div>
  );
}

export default App;
