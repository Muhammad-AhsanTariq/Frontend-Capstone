import React from "react";
import {Carousel} from 'react-bootstrap';

function Slide() {
  return (
    <Carousel>
      <Carousel.Item>
      <div className="bg-custom-light text-white  p-5 rounded-custom position-relative  mx-5 ">
      <img src="https://quiety.themetags.com/assets/img/testimonial/quotes-dot.svg"
          alt="quotes" width="100"
          className="img-fluid position-absolute left-0 top-0  p-3" />
      <div className="d-flex mb-32 align-items-center">
          <img src="https://quiety.themetags.com/assets/img/testimonial/3.jpg"
              className="img-fluid me-3 rounded" width="60" alt="user" />
          <div className="author-info">
              <h6 className="mb-0">Mr.Rupan Oberoi</h6>
              <small>Founder and CEO at Amaara Herbs</small>
          </div>
      </div>
      <blockquote>
          <h6>The Best Template You Got to Have it!</h6>
          Globally network long term high impact schemas
          cross-media infrastructures rather than ethical core competencies.
      </blockquote>
      <ul className="review-rate mb-0 mt-2 list-unstyled list-inline">
          <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
          <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
          <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
          <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
          <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
      </ul>
  </div>
       
      </Carousel.Item>
      <Carousel.Item>
      <div className="bg-custom-light text-white  p-5 rounded-custom position-relative mx-5">
      <img src="https://quiety.themetags.com/assets/img/testimonial/quotes-dot.svg"
          alt="quotes" width="100"
          className="img-fluid position-absolute left-0 top-0  p-3" />
      <div className="d-flex mb-32 align-items-center">
          <img src="https://quiety.themetags.com/assets/img/testimonial/3.jpg"
              className="img-fluid me-3 rounded" width="60" alt="user" />
          <div className="author-info">
              <h6 className="mb-0">Mr.Rupan Oberoi</h6>
              <small>Founder and CEO at Amaara Herbs</small>
          </div>
      </div>
      <blockquote>
          <h6>The Best Template You Got to Have it!</h6>
          Globally network long term high impact schemas
          cross-media infrastructures rather than ethical core competencies.
      </blockquote>
      <ul className="review-rate mb-0 mt-2 list-unstyled list-inline">
          <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
          <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
          <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
          <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
          <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
      </ul>
  </div>

        
      </Carousel.Item>
      <Carousel.Item>
      <div className="bg-custom-light text-white  p-5 rounded-custom position-relative mx-5">
      <img src="https://quiety.themetags.com/assets/img/testimonial/quotes-dot.svg"
          alt="quotes" width="100"
          className="img-fluid position-absolute left-0 top-0  p-3" />
      <div className="d-flex mb-32 align-items-center">
          <img src="https://quiety.themetags.com/assets/img/testimonial/3.jpg"
              className="img-fluid me-3 rounded" width="60" alt="user" />
          <div className="author-info">
              <h6 className="mb-0">Mr.Rupan Oberoi</h6>
              <small>Founder and CEO at Amaara Herbs</small>
          </div>
      </div>
      <blockquote>
          <h6>The Best Template You Got to Have it!</h6>
          Globally network long term high impact schemas
          cross-media infrastructures rather than ethical core competencies.
      </blockquote>
      <ul className="review-rate mb-0 mt-2 list-unstyled list-inline">
          <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
          <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
          <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
          <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
          <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
      </ul>
  </div>
        
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;