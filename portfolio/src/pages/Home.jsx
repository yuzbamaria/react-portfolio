import React from "react";
import HomeBtn from '../components/HomeBtn';
import YourImage from '/assets/images/my_photo_circle.png';

export default function Home() {
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
                Front-End Web developer, possessing a solid comprehension of JavaScript and adhering to software development best practices. 
                Have been working in the IT industry for over 7 years as a Business Development manager, but being a creator by nature, have always been curious about being able to code by myself. So, having an opportunity, I jumped onto a journey of Front-End development bootcamp by EdX, which I completed successfully.
                Enthusiastic about joining a dynamic team where I can apply my recent experiences and up-to-date knowledge, contributing effectively to the collaborative environment.

                </p>
                <HomeBtn />
              </div>
            </div>
          </div>
        </div>
);
}
