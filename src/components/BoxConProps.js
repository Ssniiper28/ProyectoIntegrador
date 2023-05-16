import React from "react";
import '../styles/BoxConProps.css';

function BoxConProps(props){
    return(
        <div className={props.contenedor}>
            <p>
                <strong>{props.asunto}:</strong><br/>
            </p>
            <div className="contenedor-texto">
                <p className="estilo-contenido">{props.contenido}</p>
                <img className='img-BoxP' src={require(`../imgs/${props.img}.png`)} alt={props.img}/> 
            </div>
        </div>
    );
}

export default BoxConProps;