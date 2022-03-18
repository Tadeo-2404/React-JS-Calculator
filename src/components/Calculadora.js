import React, {Fragment} from 'react';
import ReactDOM from 'react-dom'

function Calculadora({numero, history, setNumero, setHistory}) {
  let arr = [];

  const handleClick = (e) => {
    setNumero(numero + (e.target.name));
    setHistory(history + (e.target.innerText));
  }

  const handleClear = (e) => {
   setNumero('');
  } 

  const handleDelete = (e) => {
  setNumero(numero = numero.slice(0, -1));
  setHistory(history = history.slice(0, -1));
  } 

  const handleSpanClick = (e) => {
    const element = e.target.parentNode.firstChild.innerText;
    const reloodHistory = element.split('=');
    setNumero(reloodHistory[0])
  }

   
  const handleResult = (e) => {
    setNumero(numero = eval(numero).toString()); 
    if(numero === "Infinity") {
      setHistory(history += e.target.innerText + 0);
    } else {
      setHistory(history += e.target.innerText + numero + ' ');
    }
  
   history = history.split(/\s+/);
   history.forEach(element => {
     arr.push(<div className='divArr d-flex justify-content-between'><p>{element}</p> <span className='spanDiv' onClick={handleSpanClick}>&#8635;</span></div>);
   });
   arr.pop();
   ReactDOM.render(arr, document.querySelector('.history-boddy'));

}

    return (
      <Fragment>
          <div id='Calculadora'>
            <input type='text' id='input' defaultValue={numero}></input>
           <div className='container-sm'>
               <div className='row'>
                 <button className='col' name="AC" onClick={handleClear}>AC</button>
                 <button className='col' name="C" onClick={handleDelete}>C</button>  
               </div>
               <div className='row'>
                 <button className='col-sm-3' name="1" onClick={handleClick}>1</button>
                 <button className='col-sm-3' name="2" onClick={handleClick}>2</button>
                 <button className='col-sm-3' name="3" onClick={handleClick}>3</button>
                 <button className='col-sm-3' name="+" onClick={handleClick}>+</button> 
               </div>
               <div className='row'>
                 <button className='col-sm-3' name="4" onClick={handleClick}>4</button>
                 <button className='col-sm-3' name="5" onClick={handleClick}>5</button>
                 <button className='col-sm-3' name="6" onClick={handleClick}>6</button>
                 <button className='col-sm-3' name="-" onClick={handleClick}>-</button>                   
               </div>
               <div className='row'>
                 <button className='col-sm-3' name="7" onClick={handleClick}>7</button>
                 <button className='col-sm-3' name="8" onClick={handleClick}>8</button>
                 <button className='col-sm-3' name="9" onClick={handleClick}>9</button>
                 <button className='col-sm-3' name="*" onClick={handleClick}>x</button>                  
               </div>
               <div className='row'>
                 <button className='col-sm-3' name="0" onClick={handleClick}>0</button>
                 <button className='col-sm-3' name="." onClick={handleClick}>.</button>
                 <button className='col-sm-3' name="/" onClick={handleClick}>/</button>
                 <button className='col-sm-3' name="=" onClick={handleResult}>=</button>    
               </div>
           </div>
        </div>

    <div className='history-wrapper'>
        <h1 className='text-center'>History</h1>
        <div className='history-boddy d-flex flex-column'>
        </div>
    </div>
      </Fragment>
      
    )
}

export default Calculadora;