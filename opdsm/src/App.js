import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import getAxies from './services/api/axies';

function App() {
  const [axies, setAxies] = useState([]);
  useEffect(() => {
    const axies = getAxies();
    Promise.resolve(axies).then((res) => setAxies(res));
  }, []);

  console.log('axies: ', axies);

  return (
    <div className="App">
      <div className="grid grid-cols-3 gap-4 px-8 py-8">
        {axies
          ? axies.map((team) =>
              team.map((axie) => (
                <div key={axie.name} className="py-4 px-4 mx-auto rounded-xl w-11/12	shadow-md">
                  <div className="container mx-w-full flex">
                    <div className="">Name: {axie.name}</div>
                    <div className="">Class: {axie.class}</div>
                    <div className="">Breed Count: {axie.breedCount}</div>
                  </div>

                  <img src={axie.image} alt="" className="w-72 mx-auto" />
                  <div className="">
                    {/* {axie.parts.map(part => <li>{part.type}</li>)} */}
                    {axie.parts
                      ? axie.parts.map((part) => (
                          <div className="container flex">
                            <div className="">{part.type}: &nbsp;</div>

                            {/* <div className="">{" "}{part.id}</div> */}

                            <div className="">{part.name}</div>
                          </div>
                        ))
                      : 'nothing here'}
                  </div>
                </div>
              ))
            )
          : 'nothing here'}
      </div>
    </div>
  );
}

export default App;
