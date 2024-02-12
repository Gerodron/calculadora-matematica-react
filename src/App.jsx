import { useState } from 'react'
import './App.css'
import freedCodeCampLogo from './assets/freecodecamp-logo.png'
import Boton from './components/Boton'
import BotonClear from './components/BotonClear'
import Pantalla from './components/Pantalla'
import { evaluate } from 'mathjs'
function App() {

  const [valorActual, setValorActual] = useState('')
  const incrementarValorActual = (valor) =>{
    setValorActual(valorActual+valor)
  }
  const calcularResultado = () =>{
    if(valorActual){
      setValorActual(evaluate(valorActual))
    }else{
      alert("Por favor ingresa valores para realziar los calculos")
    }
  }
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freedCodeCampLogo}
          className='freecodecamp-logo' 
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla Display={valorActual} />
        <div className='fila'>
          <Boton manejarClic={incrementarValorActual} >1</Boton>
          <Boton manejarClic={incrementarValorActual} >2</Boton>
          <Boton manejarClic={incrementarValorActual} >3</Boton>
          <Boton manejarClic={incrementarValorActual} >+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={incrementarValorActual} >4</Boton>
          <Boton manejarClic={incrementarValorActual} >5</Boton>
          <Boton manejarClic={incrementarValorActual} >6</Boton>
          <Boton manejarClic={incrementarValorActual} >-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={incrementarValorActual} >7</Boton>
          <Boton manejarClic={incrementarValorActual} >8</Boton>
          <Boton manejarClic={incrementarValorActual} >9</Boton>
          <Boton manejarClic={incrementarValorActual} >*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado} >=</Boton>
          <Boton manejarClic={incrementarValorActual} >0</Boton>
          <Boton manejarClic={incrementarValorActual} >.</Boton>
          <Boton manejarClic={incrementarValorActual} >/</Boton>
        </div>
        <div className='fila'>
            <BotonClear manejarClear={() => setValorActual('')} >
              Clear
            </BotonClear>
        </div>
      </div>
    </div>
  )
}

export default App
