import React from 'react';
import { Collapse, Button } from 'antd';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import Typical from 'react-typical'
import Design from '../assests/images/design_h2ok__dw6rbktprpm6_large-removebg-preview 1.png'


const AppFaq = () => {
    
    const items = [
        {
          icon: <img src={Design} />,
        },
    ]

  return(
    <div id="faq" className="block faqBlock">
      <div className="container">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
          <div className="underline mx-auto"></div>
        </div>
        
        <Row>
        <div class="row gx-5 align-items-center">
            {items.map(item => {
                            return (
                            
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                              <div data-aos="fade-up"
                              data-aos-duration="1500">
                                    {item.icon}
                              </div>
                            </Col>
                            
                            );
                            
            })}

        <Col xs={{ span: 11, offset: 2 }} lg={{ span: 8, offset: 5 }}>
        
            <h1 class="display-1 lh-1 mb-3">Showcase your app beautifully.</h1>
            <p class="lead fw-normal text-muted mb-5">
             <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
             'Launch your mobile app',
              1500,
             'landing page faster with this free,',
              1500,
             'open source theme from Start Bootstrap!',
             1500,
              ]} /> 
            </p>
        </Col>
        </div>
        </Row>
        
        <div className="quickSupport">
          <h3>Want quick support?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur velit necessitatibus praesentium aliquid eos in neque recusandae, incidunt esse dolore voluptatum nesciunt quod soluta consequuntur voluptatibus ab excepturi nobis! Porro!</p>
          <button class="btn btn-outline-warning" size="large"><i className="fas fa-envelope"></i> Email your question</button>
        </div>
      </div>
    </div>  
  );
}

export default AppFaq;