import React from 'react';
import profile from '../../assets/images/profile_photo.jpg';
import './Hero.css';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Hero() {

const bioDescription = "From solving equations to crafting solutions - math meets code in my world."

return (
<div className="container-fluid col-xxl-8 px-4 py-5 hero-background">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={profile} className="d-block mx-lg-auto img-fluid hero-profile" alt="Bootstrap Themes" width="500" height="500" loading="lazy" />
      </div>
      <div className="col-lg-6">
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Daniel Walsh</h1>
      <h2>Full Stack Engineer</h2>
        <p className="lead">{bioDescription}</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Download Resume</button>
        </div>
      </div>
    </div>
  </div>
);
}

export default Hero;











