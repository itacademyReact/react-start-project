import React, { useState } from 'react';
import './App.css';
import Display from './components/display'

const App = () => {
// function App() {
// export default () => {

  // Calculadora

  // *********************************************
  // ********* PASO 1. PENSAR SOLUCIÓN ***********
  // *********************************************

  // Calcula con números, operadores y donde se pueda ver el resultado
  // 1. Componentes:
  // display, keypad
  // 2. Props y state
  // display (props el resultado y lo que va tecleando el usuario)
  // keypad (props evento de teclear)
  // 3. Funciones/Logica/acciones de usuario que voy a necesitar (van en contenedor)
  // Pulsar botón
  // Resetear calculadora
  // Borrar un caracter

  // ******************************************************************************
  // ********* PASO 2. MONTAR ESTRUCTURA GENERAL, PARTES DEL COMPONENTE ***********
  // ******************************************************************************

  // *********************************************************************************
  // ********* PASO 3. ESCRIBIR PSEUDOCÓDIGO, PONER FUNCIONES SIN RELLENAR ***********
  // *********************************************************************************

  // ********************************************************************
  // ********* PASO 4. IR RELLENADO FUNCIONES ***********
  // ********* NO ESTRESARSE, LA LÓGICA SE PODRÁ MEJORAR!
  // ********* PREFERIBLE IR DESARROLLANDO FUNCIONES 1 A 1 E IR VALIDANDO
  // ********* PUEDE SER CONVENIENTE EMPEZAR DEFINIENDO EL ESTADO (USESTATE)
  // ********************************************************************

  // ********************************************************************
  // ********* PASO 5. REFACTORIZAR COMPONENTE
  // ********* PARTIR JSX EN COMPONENTES HIJOS
  // ********* SI LA LÓGICA ES MUY EXTENSA, CREAR FUNCIONES HELPER EN FICHEROS SEPARADOS
  // ********************************************************************


  // ** useState (definir estados, variables del componente, donde guardo valores)
  // valores
  // operador
  // resultado -> displayValue (lo que se va a ver en el display)

  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [operator, setOperator] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  // ** useEffect (carga de datos de API, ejecutar lógica antes de la carga del componente...)

  // ** Funciones

  // * Función principal -> handle events

  // onClickButton va a gestionar los eventos, ejecutando las funciones secundarias
  const onClickButton = (e) => {

    // get button value from event object
    let value = e.target.innerHTML;

    if (value === 'C') {
      // reset();
    }
    else if (value === 'CE' ){
      // backSpace();
    }
    else if (value === '=') {
      calculate();
    }
    else {
      setValue(value);
    }
  }

  // * Funciones secundarias -> resetear resultado, calcular resultado...
  // const calculate
  // const reset...
  // const backSpace...

  // setValue va a ir guardando valores de la fórmula
  const setValue = (value) => {

    // Si se teclea un operador se guarda
    if(value === '+' ||
       value === '-' ||
       value === '*' ||
       value === '%')
    {
      setOperator(value);
    }
    // Si NO HAY operador, guardar primer valor de la fórmula si no hay operador
    else if(!operator) {
      let newValue = firstValue + value;
      setFirstValue(newValue);
      setDisplayValue(newValue);
    }

    // Si HAY operador, guardar segundo valor de la fórmula si hay operador
    else if(operator) {
      let newValue = secondValue + value;
      setSecondValue(newValue);
      setDisplayValue(newValue);
    }
  }

  const calculate = () => {
    if(operator === '+') {
      setDisplayValue(parseInt(firstValue) + parseInt(secondValue));
    }
  }


  return (
    <div className="App">
      <h1>Calculadora</h1>
      {/* Fórmula: {firstValue} {operator} {secondValue} */}

      {/* Display */}
      <Display value={displayValue}></Display>

      {/* keypad */}
      {/* <Keypad></Keypad> */}
      <button onClick={onClickButton}>1</button>
      <button onClick={onClickButton}>2</button>
      <button onClick={onClickButton}>3</button>
      <button onClick={onClickButton}>4</button>
      <button onClick={onClickButton}>5</button>

      <button onClick={onClickButton}>+</button>
      <button onClick={onClickButton}>=</button>

    </div>
  );
}


export default App;
