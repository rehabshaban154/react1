import React, { Component } from "react";
import fram1 from "./Assets/fram1.png";
import './index.css';

export class Example extends Component {
  render() {
    return (
        <>
        <div className="example" style={{ backgroundColor: '#000000ad', padding: '118px 0 61px', marginTop: '34px', overflow: 'hidden' }}>
        <div className="container position-relative d-flex justify-content-between" style={{ marginTop: '60px' }}>
          <div className="examp d-flex justify-content-between">
            <div className="dis" style={{ zIndex: 2 }}>
              <h4 className="fw-bold" style={{ color: '#FC4A1A' }}>Featured Project</h4>
              <h2 className="fw-bold text-light">Example Project</h2>
              <p className="bg-secondary" style={{ width: '669px', height: '134px', borderRadius: '14px', padding: '13px' }}>
                A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio
                information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more
              </p>
              <i className="fas fa-lightbulb"></i>
              <i className="fas fa-lightbulb"></i>
            </div>
            <div className="back position-relative First" style={{ width: '300px', height: '300px', backgroundColor: '#FC4A1A', borderRadius: '15px', top: '-7px', zIndex: 3, left: '224px' }}>
              <img src={fram1} style={{ width: '300px', height: '242px', borderRadius: '15px', position: 'relative', top: '31px', left: '39px' }} alt="Example" />
            </div>
          </div>
        </div>

        <div className="container position-relative d-flex justify-content-between" style={{ marginTop: '60px' }}>
          <div className="examp d-flex justify-content-between">
            <div className="back position-relative" style={{ width: '300px', height: '300px', backgroundColor: '#FC4A1A', borderRadius: '15px', top: '-7px', zIndex: 3, left: '64px' }}>
              <img src={fram1} style={{ width: '300px', height: '242px', borderRadius: '15px', position: 'relative', top: '31px', left: '34px' }} alt="Example" />
            </div>
            <div className="dis" style={{ zIndex: 2, marginLeft: '270px' }}>
              <h4 className="fw-bold" style={{ color: '#FC4A1A' }}>Featured Project</h4>
              <h2 className="fw-bold text-light">Example Project</h2>
              <p className="bg-secondary" style={{ width: '669px', height: '134px', borderRadius: '14px', padding: '13px' }}>
                A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio
                information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more
              </p>
              <i className="fas fa-lightbulb"></i>
              <i className="fas fa-lightbulb"></i>
            </div>
          </div>
        </div>
      </div>
        </>
      
    );
  }
}
