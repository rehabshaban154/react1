import { Component } from "react";
import React from "react";

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import client1 from './Assets/client1.png';
import hero from './Assets/hero.jpg';
import testimonial from './Assets/testimonial.jpg';
import female from './Assets/female.jpg';
import me from './Assets/me.jpg';
import female2 from './Assets/female2.png';


export  class Testimonials extends Component {
  render() {
    return (
      <div className="testimonial bg-white" style={{ overflow: "hidden", paddingBottom: "30px" }} id="Testimonials">
        <h3 className="head position-relative headig">Testimonials</h3>
        <div className="container text-center d-grid grid gap-0 row-gap-3">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">

            <div className="col" style={{ marginTop: "40px" }}>
              <div className="box position-relative p-2" style={{ boxShadow: "0px 2px 9px 2px gray", marginLeft: "11px", borderRadius: "5px", transition: "0.5s" }}>
                <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                <div className="data" style={{ display: "flex", flexDirection: "column" }}>
                  <img src={client1} className="position-absolute text-center rounded-circle" style={{ width: "50px", height: "50px" }} alt="Gemma Nolen" />
                  <div className="rate">
                    <i className="fas fa-star" style={{ color: "#ef900b" }}></i>
                    <i className="fas fa-star" style={{ color: "#ef900b" }}></i>
                    <i className="fas fa-star" style={{ color: "#ef900b" }}></i>
                    <i className="fas fa-star" style={{ color: "#ef900b" }}></i>
                  </div>
                  <h3>Gemma Nolen</h3>
                  <span>Google</span>
                </div>
              </div>
            </div>

            <div className="col" style={{ marginTop: "40px" }}>
              <div className="box position-relative p-2" style={{ boxShadow: "0px 2px 9px 2px gray", marginLeft: "11px", borderRadius: "5px", transition: "0.5s" }}>
                <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                <div className="data" style={{ display: "flex", flexDirection: "column" }}>
                  <img src={hero} className="position-absolute text-center rounded-circle" style={{ width: "50px", height: "50px" }} alt="Michael Brown" />
                  <div className="rate">
                    <i className="fas fa-star" style={{ color: "#ef900b" }}></i>
                    <i className="fas fa-star" style={{ color: "#ef900b" }}></i>
                    <i className="fas fa-star" style={{ color: "#ef900b" }}></i>
                    <i className="fas fa-star" style={{ color: "#ef900b" }}></i>
                  </div>
                  <h3>Michael Brown</h3>
                  <span>Google</span>
                </div>
              </div>
            </div>

            <div className="col" style={{ marginTop: "40px" }}>
              <div className="box position-relative p-2" style={{ boxShadow: "0px 2px 9px 2px gray", marginLeft: "11px", borderRadius: "5px", transition: "0.5s" }}>
                <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                <div className="data" style={{ display: "flex", flexDirection: "column" }}>
                  <img src={testimonial} className="position-absolute text-center rounded-circle" style={{ width: "50px", height: "50px" }} alt="John Smith" />
                  <div className="rate">
                    <i className="fas fa-star" style={{ color: "#ef900b" }}></i>
                    <i className="fas fa-star" style={{ color: "#ef900b" }}></i>
                    <i className="fas fa-star" style={{ color: "#ef900b" }}></i>
                    <i className="fas fa-star" style={{ color: "#ef900b" }}></i>
                  </div>
                  <h3>John Smith</h3>
                  <span>Google</span>
                </div>
              </div>
            </div>

            <div className="col" style={{ marginTop: "40px" }}>
              <div className="box position-relative p-2" style={{ boxShadow: "0px 2px 9px 2px gray", marginLeft: "11px", borderRadius: "5px", transition: "0.5s" }}>
                <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                <div className="data" style={{ display: "flex", flexDirection: "column" }}>
                  <img src={female} className="position-absolute text-center rounded-circle" style={{ width: "50px", height: "50px" }} alt="David Miller" />
                  <div className="rate">
                    <i className="fas fa-star" style={{ color: "#ef900b" }}></i>
                    <i className="fas fa-star" style={{ color: "#ef900b" }}></i>
                    <i className="fas fa-star" style={{ color: "#ef900b" }}></i>
                    <i className="fas fa-star" style={{ color: "#ef900b" }}></i>
                  </div>
                  <h3>David Miller</h3>
                  <span>Google</span>
                </div>
              </div>
            </div>

            <div className="col" style={{ marginTop: "40px" }}>
              <div className="box position-relative p-2" style={{ boxShadow: "0px 2px 9px 2px gray", marginLeft: "11px", borderRadius: "5px", transition: "0.5s" }}>
                <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                <div className="data" style={{ display: "flex", flexDirection: "column" }}>
                  <img src={me} className="position-absolute text-center rounded-circle" style={{ width: "50px", height: "50px" }} alt="Joseph Moore" />
                  <div className="rate">
                    <i className="fas fa-star" style={{ color: "#ef900b" }}></i>
                    <i className="fas fa-star" style={{ color: "#ef900b" }}></i>
                    <i className="fas fa-star" style={{ color: "#ef900b" }}></i>
                    <i className="fas fa-star" style={{ color: "#ef900b" }}></i>
                  </div>
                  <h3>Joseph Moore</h3>
                  <span>Google</span>
                </div>
              </div>
            </div>

            <div className="col" style={{ marginTop: "40px" }}>
              <div className="box position-relative p-2" style={{ boxShadow: "0px 2px 9px 2px gray", marginLeft: "11px", borderRadius: "5px", transition: "0.5s" }}>
                <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                <div className="data" style={{ display: "flex", flexDirection: "column" }}>
                  <img src={female2} className="position-absolute text-center rounded-circle" style={{ width: "50px", height: "50px" }} alt="Alexa Horwitz" />
                  <div className="rate">
                    <i className="fas fa-star" style={{ color: "#ef900b" }}></i>
                    <i className="fas fa-star" style={{ color: "#ef900b" }}></i>
                    <i className="fas fa-star" style={{ color: "#ef900b" }}></i>
                    <i className="fas fa-star" style={{ color: "#ef900b" }}></i>
                  </div>
                  <h3>Alexa Horwitz</h3>
                  <span>Google</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
