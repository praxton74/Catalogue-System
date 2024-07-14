import './App.css';
import { useEffect, useState } from 'react';
import Catalogue from './Catalogue';
import Header from  './Header'

function App() {
  const [data, setData] = useState('');
  
  const handleData = (newData) => {
    setData(newData);
  };


  return (
    <div className="App">
      <Header onDataUpdate={handleData}/>
      <h1 className='text1'>{data}</h1>
      <Catalogue category={data}/>
    </div>
  );
}

export default App;
