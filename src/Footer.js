import React from "react";
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export class Footer extends Component {
  render() {
    return (
        <>
          <div className="footer-container">
        <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#27323E' }}>
          <div className="container p-4 pb-0">
            <section>
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">News Letter</h6>
                  <p>
                    <input 
                      type="text" 
                      placeholder="Enter your email" 
                      style={{ 
                        border: 'none', 
                        outline: 'none', 
                        padding: '8px', 
                        borderBottom: '2px solid gray', 
                        backgroundColor: '#27323E', 
                        background: 'linear-gradient(225deg, #FC4A1A 0%, rgb(241, 241, 79) 100%)',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent' 
                      }} 
                    />
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Links</h6>
                  <p><a href="#" className="text-white">Home</a></p>
                  <p><a href="#" className="text-white">Shop</a></p>
                  <p><a href="#" className="text-white">About</a></p>
                  <p><a href="#" className="text-white">Contact</a></p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Help</h6>
                  <p><a href="#" className="text-white">Payment Options</a></p>
                  <p><a href="#" className="text-white">Returns</a></p>
                  <p><a href="#" className="text-white">Privacy Policies</a></p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                  <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                  <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                  <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                  <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                </div>
              </div>
            </section>

            <hr className="my-3" />

            <section className="p-3 pt-0">
              <div className="row d-flex align-items-center">
                <div className="col-md-7 col-lg-8 text-center text-md-start">
                  <div className="p-3">
                    © 2024 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/"> Rehab Shaban</a>
                  </div>
                </div>

                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                  <a className="btn btn-outline-light btn-floating m-1" role="button">
                    <i className="fab fa-facebook-f"></i>
                  </a>

                  <a className="btn btn-outline-light btn-floating m-1" role="button">
                    <i className="fab fa-twitter"></i>
                  </a>

                  <a className="btn btn-outline-light btn-floating m-1" role="button">
                    <i className="fab fa-google"></i>
                  </a>

                  <a className="btn btn-outline-light btn-floating m-1" role="button">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div>
        </>
    
    );
  }
}
