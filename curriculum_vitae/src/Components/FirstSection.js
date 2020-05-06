
import React from 'react'
import '../css/First_Section.scss'


function First_Section() {
  return (
    <div className="container_1">
     
        <img className="image_cover" src="/background.jpg"></img>


        <div className="content_container">
              <img className="profile_pic" src="/profile_pic.jpg"></img>
              
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
