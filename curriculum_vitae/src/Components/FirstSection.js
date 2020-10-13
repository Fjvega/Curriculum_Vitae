
import React,{useState,useEffect } from 'react'
import '../css/First_Section.scss'


function First_Section() {
  

  useEffect(() => {
    console.log('Se cargo el componente')
    document.getElementById("loader").style.display="none"
  });
  
  
  return (
    <div className="container_1">
     
        <img className="image_cover" src={process.env.PUBLIC_URL +"/background.jpg"}></img>


        <div className="content_container">
              <img className="profile_pic" src={process.env.PUBLIC_URL +"/profile_pic.jpg"}></img>
              
              <div className="title_container">
                  <h1 className="name_container">
                        Francisco Vega
                  </h1>
              </div>
        </div>


    </div>
  );
}

export default First_Section;
