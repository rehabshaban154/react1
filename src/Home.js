import { Component } from "react";
import inst from "./Assets/inst1.png"
import React from "react";
import './index.css';
import '@fortawesome/fontawesome-free';
export  class Home extends Component {

render(){
return(
    <>
<div className="header" style={{backgroundColor: '#27323E'}}>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#home">
            </a>
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-sliders-h"></i>
          </button>
          <div className="navbar-collapse collapse" id="navbarNav">
            <ul className="navbar-nav" style={{display: 'flex',justifyContent: 'space-between',width: '503px'}}>
              <li className="nav-item">
                <a className="nav-link active fw-bold" aria-current="page" href="#" >Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fw-bold" aria-current="page" href="#about" >About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fw-bold" aria-current="page" href="#Services" >Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fw-bold" aria-current="page" href="#Testemonials" >Testemonials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fw-bold" aria-current="page" href="#contact" >Contact Us</a>
              </li>
            </ul>

          </div>
        </div>
              </nav>


              <div className ="container d-flex justify-content-between py-4" style={{marginTop:'39px'}}>
                <h3 className="text-light">Beans<span className="main" style={{background: 'lineargradient(225deg, #FC4A1A 0%, rgb(241, 241, 79) 100%)',
                  backgroundclip: 'text',
                  display: 'inline-block',
                  WebkitTextFillColor: 'transparent'}}>Studio</span></h3>
                <span id="parent" className="main rounded-circle d-flex flex-column position-relative" style={{ backgroundColor: 'var(--main-span)',Width:'64px !important',
                Height:'64px !important',
                Top:'-4px !important',
                backgroundImage: 'linear-gradient(225deg, #FC4A1A 0%, rgb(241, 241, 79) 100%) !important'}}>
                    <span className="bg-white rounded-pill position-absolute" style={{top: '16px;'}}></span>
                    <span className="bg-white rounded-pill position-absolute" style={{ width: '40px', top: '28px', left: '12px'}}></span>
                    <span className="bg-white rounded-pill position-absolute" style={{width:'20px'}}></span>
                </span>
            </div>

          </div>

 
    <div className="landing" style={{overflow: 'hidden',  paddingBottom: '80px', backgroundColor: '#27323E'}}>
        <div className="content container d-flex justify-content-between pt-5">
         <div className="disc text-light">
        <h3 className="fw-bold p-2" style={{backgroundImage: 'linear-gradient(225deg, #FC4A1A 0%, rgb(241, 241, 79) 100%)',width: 'fit-content',borderRadius:'40px 40px 40px 0'}}>Hello, iam</h3>
        <h2>Rehab Shaban</h2>
        <p>Frontend Developer</p>
        <div className="media d-flex justify-content-between">
            <i className="fab fa-facebook-f bg-white d-flex justify-content-center align-items-center text-primary"></i>
            <a href="https://twitter.com/Re7ab_shaban?fbclid=IwAR0ZxnSTqIjYU1PZgGkpbQWu3uQEeFmUWRE48qj9XqEX0ExhGjsbT_xTi_k" target="_blank"><i className="fab fa-twitter bg-white d-flex justify-content-center align-items-center text-info"></i></a>
            <a href="https://www.linkedin.com/in/rehab-shaban-7b4231251
            " target="_blank"><i className="fab fa-linkedin-in bg-white d-flex justify-content-center align-items-center text-primary-emphasis"></i></a>
            <a href="https://github.com/rehabshaban154?tab=repositories" target="_blank"><i className="fab fa-github bg-white d-flex justify-content-center align-items-center "></i></a>
          </div>
          <a className="fw-bold p-2 text-light position-relative rounded-pill cv" href="https://drive.google.com/file/d/1Au4bzWv57yNd-T4wOGJ9F0-qQdgyXwWf/view?usp=sharing" download target="_blank" style={{backgroundImage:'linear-gradient(225deg, #FC4A1A 0%, rgb(241, 241, 79) 100%)',width: 'fit-content',width: 'fit-content;transition: 0.5s'}}>Download My CV</a>
         </div>
        <img src={inst} style={{width: '400px',height: '400px',marginRight: '200px',marginTop: '-27px',borderRadius:'50%',}}/>
        </div>
    </div>
    </>
)
}
}
export default Home;
