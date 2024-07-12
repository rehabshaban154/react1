import React from "react";
import { Component } from "react";
import me from "./Assets/rahoba.jpg";
import iti from "./Assets/iti.png";
import min from "./Assets/ministration.png";
import fcai from "./Assets/fcai.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export class About extends Component {
  render() {
    return (
      <>
        <div className="about" style={{ overflow: 'hidden', marginTop: '40px', marginBottom: '40px' }}>
          <div className="container d-flex flex-column flex-md-row justify-content-between">
            <div className="dis" id="about">
              <img src={me} style={{ width: '347px', borderRadius: '30px' }} />
              <div className="images d-flex" style={{ position: 'relative', top: '-37px', left: '101px', marginLeft: '-23px' }}>
                <img src={fcai} style={{ width: '70px', height: '70px' }} className="rounded-circle" />
                <img src={min} style={{ width: '70px', height: '70px', border: '2px solid gray' }} className="rounded-circle" />
                <img src={iti} style={{ width: '70px', height: '70px' }} className="rounded-circle" />
              </div>
            </div>

            <div className="content text-center" style={{ flexBasis: '50%', maxWidth: '100%' }}>
              <h2 className="position-relative heading">About Me</h2>
              <p>
                <span className="text-secondary fw-bold fs-4">Brief Information about me: </span>
                I am Rehab Shaban, 21 years old. As a frontend developer, I specialize in crafting engaging and user-friendly interfaces for websites and applications. Leveraging my expertise in HTML, CSS, and JavaScript, I bring designs to life, ensuring a seamless and visually captivating experience for users.
              </p>
              <p>
                <span className="text-secondary fw-bold fs-4">Education Information: </span>
                I am a student at the Faculty of Computer and Artificial Intelligence - BSU in the Department of Information Systems, and my cumulative GPA is excellent.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
