import React from "react";
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export class Services extends Component{
    render(){

        return(
            <>
            <div className="services" style={{backgroundColor: '#27323E', padding: '40px0 40px',overFlow: 'hidden',paddingBottom:'70px'}}>
<div className="container">
<h3 className="headig text-center head">My services</h3>

<div className="container text-center d-grid grid gap-0 row-gap-3">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
      <div className="col text-light"  style={{marginTop: '40px'}}>
    <h3>Photography</h3>
    <i className="far fa-images  headig  fs-4"></i>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis officiis incidunt</p>
      </div>
      <div className="col text-light" style={{marginTop: '30px'}}>
        <h3>Web Development</h3>
        <i className="fas fa-code headig fs-4"></i>
        <p id="Services">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis officiis incidunt</p>
          </div> 

          <div className="col text-light" style={{marginTop: '30px'}}>
            <h3>UI|UX Design</h3>
            <i className="fas fa-object-group headig fs-4"></i>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis officiis incidunt</p>
              </div> 

              <div className="col text-light" style={{marginTop: '30px'}}>
                <h3>3D Design</h3>
                <i className="fab fa-unity headig fs-4"></i>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis officiis incidunt</p>
                  </div> 

                  <div className="col text-light "  style={{marginTop: '30px'}}>
                    <h3>Web Design</h3>
                    <i className="fas fa-code headig fs-4"></i>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis officiis incidunt</p>
                      </div> 


                      <div className="col text-light"  style={{marginTop: '30px'}}>
                        <h3>2D Design</h3>
                        <i className="fas fa-code headig fs-4"></i>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis officiis incidunt</p>
                          </div>
    </div>
  </div>

</div>
</div>
            </>
        )
    }
}