
import React,{useState,useEffect } from 'react'
import '../css/Second_Section.scss'


function SecondSection() {
  

  useEffect(() => {
    console.log('Se cargo el componente')
    document.getElementById("loader").style.display="none"
  });
  
  
  return (
    <div className="container_2">
      <h2>
        Perfil
      </h2>
        <div className="profile_container">
          <h3>
              Soy un  Ingeniero de Sistemas graduado de la Universidad del Norte, con conocimientos en patrones
              de diseño para proyectos orientados al desarrollo de
              software. Dominio avanzado en Python, JavaScript,
              ReactJS, HTML/CSS. Familiarizado con bases de datos
              relacionales(MySQL,PostgreSQL) y no relacionales(Mongodb,Firebase).
          </h3>
        </div>
        <div className="image_profile_container">
              <div className="expertise_container">
               <img src={process.env.PUBLIC_URL +"/html.png"}></img>
                  <div className="bar back advanced" data-skill="HTML/CSS"></div>
              </div>
              <div className="expertise_container">
               <img src={process.env.PUBLIC_URL +"/logo192.png"}></img>
                  <div className="bar back advanced" data-skill="React JS"></div>
              </div>  
              <div className="expertise_container">
               <img src={process.env.PUBLIC_URL +"/python.png"}></img>
                  <div className="bar back advanced" data-skill="Python"></div>
              </div>
              <div className="expertise_container">
               <img src={process.env.PUBLIC_URL +"/nodejs_logo.png"}></img>
                  <div className="bar back intermediate" data-skill="NodeJs"></div>
              </div> 
              <div className="expertise_container">
               <img src={process.env.PUBLIC_URL +"/JavaScript.png"}></img>
                  <div className="bar back intermediate" data-skill="JavaScript"></div>
              </div>  
     
        </div>


    </div>
  );
}

export default SecondSection;
