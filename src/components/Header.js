import React, { Component } from "react";
import '../styles/Header.css'
import { Link, animateScroll as scroll } from "react-scroll";
import { useState, useEffect } from 'react';

function Header(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    useEffect(() => {
      const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
      };
      const element = document.getElementById("nav")
      window.addEventListener('resize', handleWindowResize);
      windowWidth < 800 
        ? element.classList.add("invisible") 
        : element.classList.remove("invisible")
      return () => {
        window.removeEventListener('resize', handleWindowResize)
      };
    });

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const openMenu = () => {
      const element = document.getElementById("nav")
      const top = document.getElementById("up-bar")
      const bottom = document.getElementById("down-bar")
      const middle = document.getElementById("menu-bar")
      if (element.classList.contains("invisible")){
        element.classList.remove("invisible")
        top.classList.add('up-x')
        bottom.classList.add('down-x')
        middle.classList.add("invisible")
      } else {
        element.classList.add("invisible")
        top.classList.remove("up-x")
        bottom.classList.remove("down-x")
        middle.classList.remove("invisible")
      }
    }
    return(
        <div className="contenedor-header">
            <img className="icono" src={require('../imgs/imss-logo.png')} alt="Imss-logo" onClick={scrollToTop}/>
            <div id="nav">
              <Link  className="cabecera-texto" activeClass="active" to="antecedentes" spy={true} offset={-70} duration={400}>
                Antecedentes
              </Link>
              <Link  className="cabecera-texto" activeClass="active" to="problematica" spy={true} offset={-70} duration={400}>
                Problematica
              </Link>
              <Link  className="cabecera-texto" activeClass="active" to="solucion" spy={true} offset={-70} duration={400}>
                Propuesta
              </Link>
              <Link  className="cabecera-texto" activeClass="active" to="modulos" spy={true} offset={-200} duration={400}>
                Modulos
              </Link>
            </div>
            <div id="menu" onClick={openMenu}>
                <div id="up-bar"></div>
                <div id="menu-bar"></div>
                <div id="down-bar"></div>
            </div>
        </div>
    );
}

export default Header;