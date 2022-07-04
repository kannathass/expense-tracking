import React from "react";
import './About.css'
import imagePath from "../../assets/expense.jpg";

export default function About() {
    return(
        <div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <img className="img-about" src={imagePath} alt="Expense Management"/>
                </div>
                
              </div>
     
          </div>
        </div>
    );
}