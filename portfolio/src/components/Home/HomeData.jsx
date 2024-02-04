import React from "react";
import Hero from '../Hero';
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';
import Btn from '../Btn';
import YourImage from '../../assets/images/my_photo.jpg';

function HomeData() {
    return ( 
        <div>
            <Hero backgroundColor="red">
            <Container style={{ marginTop: 30 }}>
                <Row>
                  <Col size="md-4 mb-3"> {/* Adjust the size based on your layout */}
                    <img src={YourImage} alt="Description" style={{ width: '60%' }} />
                  </Col>
                  <Col size="md-8">
                    <Row>
                      <Col size="md-12">
                        <h1>Front-End Web developer</h1>
                        <p>
                          Results-driven Fron-End developer with over 7 years of experience 
                          in business development within the IT industry. 
                          Proven ability to thrive in dynamic environments, contributing to 
                          agile teams with a collaborative mindset. Known for effective communication and problem-solving 
                          skills, with a commitment to delivering high-quality results within 
                          project timelines. 
                        </p>
                        <Btn />
                      </Col>
                  </Row>
                  </Col>
                </Row>
            </Container>
        </Hero> 
</div>
);
}

export default HomeData;