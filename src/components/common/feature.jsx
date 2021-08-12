import React from 'react'
import { Layout } from 'antd';
import { Row, Col, Card } from 'antd';
import { useEffect } from 'react';
import AOS from 'aos';
import Modern from '../assests/images/Modern.jpg'
import gaming from '../assests/images/gaming.jpg'
import Multi from '../assests/images/Multi.jpg'
import Camera from '../assests/images/Camera.jpg'
import Great from '../assests/images/Great.jpg'
import Five from '../assests/images/Five.jpg'





const AppFeature = () => {

    const { Meta } = Card;

    useEffect(() => {
        AOS.init();
    });
    
 
    return (
        <div id="feature" className="block featureBlock bgGray">
                     <div className="container-fluid">
                      
                       <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">Feature</h3>
                            <div className="underline mx-auto"></div>
                       </div>

                       <Row gutter={[16, 16]}>
                        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <div data-aos="zoom-out-right"
                        data-aos-duration="1000">
                            <Card
                            hoverable
                            cover={<img alt="Modern Design" src={Modern} />}
                            >
                            <Meta title="Modern Design" />
                            </Card>
                        </div>
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <div data-aos="zoom-out"
                        data-aos-duration="900">
                            <Card
                            hoverable
                            cover={<img alt="Test" src={Camera} />}
                            >
                            <Meta title="Maximus Camera" />
                            </Card>
                        </div>
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <div data-aos="zoom-out-left"
                        data-aos-duration="850">
                            <Card
                            hoverable
                            cover={<img alt="Test" src={Five} />}
                            >
                            <Meta title="5G Network" />
                            </Card>
                        </div>
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <div data-aos="zoom-out-right"
                        data-aos-duration="1000">
                            <Card
                            hoverable
                            cover={<img alt="Test" src={Multi} />}
                            >
                            <Meta title="Multi Tasks" />
                            </Card>
                        </div>
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <div data-aos="zoom-out"
                        data-aos-duration="1000">
                            <Card
                            hoverable
                            cover={<img alt="Test" src={Great} />}
                            >
                            <Meta title="Great Support" />
                            </Card>
                        </div>
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <div data-aos="zoom-out-left"
                        data-aos-duration="1000">
                            <Card
                            hoverable
                            style={{width: "500", height: "250"}}
                            cover={<img alt="Test" src={gaming} />}
                            >
                            <Meta title="Gaming" />
                            </Card>
                        </div>
                        </Col>
                    </Row>
            </div>
        </div>
                        
    )
}

export default AppFeature;