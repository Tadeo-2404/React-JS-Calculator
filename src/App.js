import React, {useState} from 'react';
import './scss/app.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calculadora from './components/Calculadora';

function App() {
  let [numero, setNumero] = useState('');
  let [history, setHistory] = useState('');
  
  return (
    <div className="main_wrapper d-flex justify-content-around align-content-center">
        <Calculadora numero={numero}
                     history={history}
                     setNumero={setNumero}
                     setHistory={setHistory}/>
    </div>
  );
}



export default App;
