import React, { Component } from "react";
import inst from "./Assets/inst1.png";
import './index.css';

export class Contact extends Component {
  render() {
    return (
      <>
        <div className="contact" style={{ overflow: 'hidden',marginBottom:'50px' }}>
          <h3 className="headig head">Get In Touch</h3>
          <div className="container d-flex justify-content-between">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '35px',
                width: '390px',
                borderRadius: '10px',
                border: 'none'
              }}
            >
              <input type="hidden" name="access_key" value="31d1d7f9-1d59-4f58-b42b-88394cc84ce1" />
              <div
                className="name"
                style={{ display: 'flex', justifyContent: 'space-between' }}
                id="contact"
              >
                <input
                  type="text"
                  name="first_name"
                  required
                  placeholder="First Name"
                  className="rounded-pill"
                  style={{ width: '184px' }}
                />
                <input
                  type="text"
                  name="last_name"
                  required
                  placeholder="Last Name"
                  className="rounded-pill"
                  style={{ width: '184px', marginLeft: '10px' }}
                />
              </div>
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="rounded-pill"
              />
              <input
                type="text"
                name="phone"
                required
                placeholder="Your Phone Num"
                className="rounded-pill"
              />
              <textarea
                name="message"
                required
                placeholder="Write a Message For Me"
                className="pl-4"
                style={{
                  marginTop: '30px',
                  height: '150px',
                  marginBottom: '20px',
                  paddingTop: '10px',
                  outline: 'none'
                }}
              />
              <div className="h-captcha" data-captcha="true"></div>
              <button
                type="submit"
                className="align-middle"
                style={{
                  width: '120px',
                  padding: '11px',
                  transition: '0.4s',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  backgroundImage: 'linear-gradient(225deg, #FC4A1A 0%, rgb(241, 241, 79) 100%)',
                  borderRadius: '10px',
                  border: 'none'
                }}
              >
                Submit Form
              </button>
            </form>
            <div className="info" style={{ flexBasis: '50%' }}>
              <h3>CONTACT INFO</h3>
              <p className="text-body-tertiary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maxime perspiciatis
                voluptates officia nostrum dolores velit in, qui facere necessitatibus culpa rerum,
                pariatur at quisquam eveniet aperiam enim incidunt veritatis.
              </p>
              <div className="add">
                <span className="text-body-tertiary fw-bold fs-4" style={{ marginRight: '20px' }}>
                  <i className="fas fa-map-marker-alt headig"></i> Address:
                </span>
                <p className="d-inline">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
              <div className="email">
                <span className="text-body-tertiary fw-bold fs-4" style={{ marginRight: '20px' }}>
                  <i className="fas fa-envelope headig"></i> Email:
                </span>
                <p className="d-inline">rehabshaban74@gmail.com </p>
              </div>
              <div className="phone">
                <span className="text-body-tertiary fw-bold fs-4" style={{ marginRight: '20px' }}>
                  <i className="fas fa-phone headig"></i> Phone:
                </span>
                <p className="d-inline">+52 671 114 3273</p>
              </div>
              <div className="office">
                <span className="text-body-tertiary fw-bold fs-4" style={{ marginRight: '20px' }}>
                  <i className="fas fa-briefcase headig"></i> Office:
                </span>
                <p className="d-inline">Beans Studio</p>
              </div>
              <div className="Skype">
                <span className="text-body-tertiary fw-bold fs-4" style={{ marginRight: '20px' }}>
                  <i className="fab fa-skype headig"></i> Skype:
                </span>
                <p className="d-inline">Rehab Skype</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
