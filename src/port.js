import React from "react";
import { Component } from "react";
import todoImg from "./Assets/todo.jpg";
import testImg from "./Assets/test.jpg";
import shoppingImg from "./Assets/shopping.jpg";
import fetchImg from "./Assets/fetch.jpg";
import notesImg from "./Assets/notes.jpg";
import homeImg from "./Assets/home.jpg";
import chairsImg from "./Assets/chairs.jpg";
import sliderImg from "./Assets/slider.jpg";
import portImg from "./Assets/port.jpg";
import bakeryImg from "./Assets/bakery.jpg";
import holidayImg from "./Assets/holiday.jpg";
import medicalImg from "./Assets/medical.jpg";
import agencyImg from "./Assets/agency.jpg";
import finxoImg from "./Assets/finxo.jpg";
import restaurantImg from "./Assets/resturant.jpg";

export  class Port extends Component{
    render(){
        return (
            <div className="port" style={{ backgroundColor: "#27323E", padding: "40px 0", overflow: "hidden" }}>
              <div className="container">
                <h3 className="text-center text-light position-relative head">PORTFOLIO</h3>
        
                <div className="content d-flex" style={{ marginLeft: "208px", position: "relative", marginTop: "50px", zIndex: 1 }}>
                  <div className="box" style={{ marginRight: "10px" }}>
                    <div className="img">
                      <a href="https://rehabshaban154.github.io/Todo-list/" target="_blank" rel="noopener noreferrer">
                        <img src={todoImg} alt="Todo List" />
                      </a>
                      <a href="https://rehabshaban154.github.io/Quiz-app/" target="_blank" rel="noopener noreferrer">
                        <img src={testImg} alt="Quiz App" />
                      </a>
                    </div>
                    <a href="https://rehabshaban154.github.io/mysite/" target="_blank" rel="noopener noreferrer">
                      <img src={shoppingImg} alt="Shopping Site" />
                    </a>
                  </div>
                  <div className="box" style={{ marginRight: "10px" }}>
                    <div className="img">
                      <a href="https://rehabshaban154.github.io/Fetch-api/" target="_blank" rel="noopener noreferrer">
                        <img src={fetchImg} alt="Fetch API" />
                      </a>
                      <a href="https://rehabshaban154.github.io/Notes-app/" target="_blank" rel="noopener noreferrer">
                        <img src={notesImg} alt="Notes App" />
                      </a>
                    </div>
                    <a href="https://rehabshaban154.github.io/site6/" target="_blank" rel="noopener noreferrer">
                      <img src={homeImg} alt="Home Site" />
                    </a>
                  </div>
                  <div className="box" style={{ marginRight: "10px" }}>
                    <div className="img">
                      <a href="https://rehabshaban154.github.io/Rroker-Business/" target="_blank" rel="noopener noreferrer">
                        <img src={chairsImg} alt="Broker Business" />
                      </a>
                      <img src={sliderImg} alt="Slider" />
                    </div>
                    <a href="https://rehabshaban154.github.io/my-portfolio/" target="_blank" rel="noopener noreferrer">
                      <img src={portImg} alt="Portfolio" style={{ marginTop: "2px" }} />
                    </a>
                  </div>
                </div>
                <div className="blog bg-black text-center position-relative d-flex justify-content-center align-items-center" style={{ width: "200px", height: "500px", left: "575px", top: "-200px", border: "2px solid gray", position: "relative" }}>
                  <h3 className="text-center fw-bold text-light head">Blog</h3>
                </div>
                <div className="images" style={{ position: "relative", top: "-199px", left: "455px" }}>
                  <a href="https://rehabshaban154.github.io/Bakery/" target="_blank" rel="noopener noreferrer">
                    <img src={bakeryImg} alt="Bakery" style={{ position: "relative", top: "-69px", left: "12px" }} />
                  </a>
                  <a href="https://rehabshaban154.github.io/second-site/" target="_blank" rel="noopener noreferrer">
                    <img src={holidayImg} alt="Holiday" />
                  </a>
                  <a href="https://rehabshaban154.github.io/Mediplus/" target="_blank" rel="noopener noreferrer">
                    <img src={medicalImg} alt="Medical" style={{ position: "relative", top: "69px", left: "-13px" }} />
                  </a>
                  <a href="https://rehabshaban154.github.io/Agency/" target="_blank" rel="noopener noreferrer">
                    <img src={agencyImg} alt="Agency" style={{ position: "relative", top: "-90px", left: "-140px" }} />
                  </a>
                  <a href="https://rehabshaban154.github.io/sit-7/" target="_blank" rel="noopener noreferrer">
                    <img src={finxoImg} alt="Finxo" style={{ position: "relative", top: "-17px", left: "-153px" }} />
                  </a>
                  <a href="https://rehabshaban154.github.io/restaurant-templet/" target="_blank" rel="noopener noreferrer">
                    <img src={restaurantImg} alt="Restaurant" style={{ position: "relative", left: "-193px", top: "-103px" }} />
                  </a>
                </div>
              </div>
            </div>
          );
        }
        
}

 export default Port;

