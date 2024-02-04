import React from "react";
import Btn from '../Btn';
import YourImage from '../../assets/images/my_photo_circle.png';

function HomeData() {
    return ( 
        <div>
          <div className="container background min-vh-100 text-center pt-5">
            <div className="row align-items-center">

              <div className="col col-lg-4 col-md-6 col-sm-12 mx-auto p-5">
                <img src={YourImage} alt="Description" style={{ width: '100%' }} className='img-fluid' />
              </div>

              <div className="col col-lg-7 col-md-6 col-sm-12">
                  {/* <div className="row">
                  <div className="col col-lg-8"> */}
                <h2>Hello, I'm Maria</h2>
                <h5>Front-End Web developer</h5>
                <p>
                 Results-driven Fron-End developer with over 7 years of experience 
                 in business development within the IT industry. 
                 Proven ability to thrive in dynamic environments, contributing to 
                 agile teams with a collaborative mindset. Known for effective communication and problem-solving 
                 skills, with a commitment to delivering high-quality results within 
                 project timelines. 
                </p>
                <Btn />
              </div>
            </div>
          </div>
        </div>
);
}

export default HomeData;