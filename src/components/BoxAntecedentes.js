import React from "react";
import '../styles/BoxAntecedentes.css'

function BoxAntecedentes(){
    return(
        <div className="contenedor-principal" id="antecedentes">
            <div className="contenedor-texto-hist">
                <p>
                  <strong>Nombre de la empresa:</strong><br/>
                  IMSS, hospital general de zona no. 2 (Instituto Mexicano Del Seguro Social).
                  <br/><strong>Giro de la empresa:</strong><br/> Sector Salud.<br/><strong>Dirección:</strong><br/>
                  11A. Calle Ote. Nte., Hidalgo, 29043 Tuxtla Gutiérrez, Chis.<br/>
                  <strong>Nombre de la representante:</strong><br/>Elsa Lidia Zea Nucamendi<br/>
                  <strong>Puesto:</strong><br/>Jefa de enfermeras. (Jefa de piso de segundo nivel).<br/>
                  <strong>Teléfono de contacto:</strong><br/>961-660-7702
                </p>
            </div>
            <img className="img-antecedentes" src={require('../imgs/antecedentes.png')} alt='Antecedentes imagen'/>
        </div>
    );
}

export default BoxAntecedentes;