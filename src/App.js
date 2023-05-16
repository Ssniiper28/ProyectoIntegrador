import React from 'react';
import './App.css';
import BoxAntecedentes from './components/BoxAntecedentes.js';
import BoxConProps from './components/BoxConProps';
import Modulos from './components/Modulos';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const listaModulos=[require('./imgs/modulo1.jpg'), require('./imgs/modulo2.jpg'), require('./imgs/modulo3.jpg'), require('./imgs/modulo4.jpg')];
  return (
    <div className="App" >
      <Header/>
      <BoxAntecedentes id="antecedentes"/>
      <BoxConProps
      id='problematica'
      asunto='Problemática encontrada'
      contenido='El desgaste físico y mental que conlleva el llenado de los formatos, pues este procedimiento se basa en la ejecución de múltiples métodos para obtener el registro de los medicamentos, contemplando los errores al ingresar datos y realizar promedios, como también de la repercusión en futuros registros, puestos que se elaboran cada mes, 6 meses y año. El cliente aclaró que el procedimiento que realiza no es eficaz, por lo cual ve necesaria una herramienta para que el trabajo sea completado de manera sencilla y eficiente.'
      img='problematica'
      contenedor='contenedor-p problema'
      />
      <BoxConProps
      id='solucion'
      asunto='Propuesta de solución'
      contenido='El cliente solicita, como primer elemento, un inicio de sesión, esto con la intención de mantener seguros los datos registrados y que solo el personal con el cargo respectivo pueda modificar los registros. Los servicios considerados son cirugía y trauma, choque, urgencias, medicina interna, hemodiálisis, alta extensión de trauma y urgencias pediátricas, cada servicio  tendrá su listado de medicamentos. Los medicamentos serán clasificados en  5 apartados, lo cuales son cuadro básico, alto costo, uso controlado, clave 4000 y clave 5000; almacenados alfabéticamente, cada medicamento deberá tener los atributos de clave, nombre, presentación, dosis y fecha de caducidad. Los datos de cada medicamento se dividirán en tres apartados, la cantidad solicitada, la cantidad suministrada y la cantidad consumida; se nos solicita que exista una restricción al ingreso de estos datos debido a que existen condiciones que deben cumplir como, por ejemplo, la cantidad solicitada no puede ser menor a la cantidad suministrada. Como también para los datos promediados para la dotación teórica y fija, se nos solicita que se realicen de manera automática a partir del análisis de registros anteriores. Se nos solicita una barra para la búsqueda personalizada del medicamento a partir de la clave, como también que las herramientas sean intuitivas haciendo uso de simbología.'
      img='solucion'
      contenedor='contenedor-p solucion'
      />
      <Modulos imagenes={listaModulos}/>  
    </div>
  );
}

export default App;
