import React from "react";
import '../styles/Modulos.css'

function Modulos({imagenes}){
    const [imagenActual, setImagenActual] = React.useState(0);
	const cantidad = imagenes?.length;

	// Verifica que se hayan cargado bien las imagenes en el array
	if (!Array.isArray(imagenes) || cantidad === 0) return;

	const siguienteImagen = () => {
		setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
	};

	const anteriorImagen = () => {
		setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
	};

	const derecha = ">"
	const izquierda = "<"

	return (
        <div className='fondo' id="modulos">
        	<button className='boton izquierdo' onClick={anteriorImagen}>{izquierda}</button>
			<div className='contenedor-Carrusel'>
			  {imagenes.map((imagen, index) => {
				  return (
					  <>
						 {imagenActual === index && (
						 <img key={index} src={imagen} alt="imagen" />
						 )}
					  </>
					);
				})}
		  	</div>
          	<button className="boton derecho" onClick={siguienteImagen}>{derecha}</button>
        </div>
	);
}

export default Modulos;