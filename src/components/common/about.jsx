import React from 'react'
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import design4 from '../assests/images/design 4.jpg'
import design1 from '../assests/images/design1.png'




const AppAbout = () => {

    const items = [
        {
          key: '1',
          icon: <img src={design4} />,
          title: 'High Performance',
          content: 'A14 Bionic chip Next‑generation Neural Engine A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display Ceramic Shield with four times better drop performance.',
        },

        {
          key: '2',
          icon: <img src={design1} />,
          title: 'Flat Display',
          content: 'Super Retina XDR display 5.4‑inch (diagonal) all‑screen OLED display 2340‑by‑1080-pixel resolution at 476 ppi .',
        },

        {
          key: '3',
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-aperture"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>,
          title: 'Camera System',
          content: 'Now you can record 4K HDR video with Dolby Vision. Edit in Photos or iMovie. Then zap it to your TV using AirPlay5 to see all that color and detail',
        },
      ]


    return (
        <div id="about" className="block aboutBlock">
               <div className="container-fluid">
                   <div className="row">
                       <div className="col-md-12 text-center">
                            <h3 className="main-heading">About</h3>
                            <div className="underline mx-auto"></div>
                            <p>
                            The iPhone 12 and iPhone 12 mini are Apple's mainstream flagship iPhones<br/>
                            for 2020. The phones come in 6.1-inch and 5.4-inch sizes with identical features, including support for faster 5G<br/>
                            cellular networks, OLED displays, improved cameras, and Apple's latest A14 chip, all in a completely refreshed design.
                            </p>
                            <Link to="/about" class="btn btn-outline-secondary">Read More</Link>
                            <br/>
                            <br/>
                       </div>   
                   </div>
                   <Row gutter={[16, 16]}>   
                        {items.map(item => {
                            return (
                            <Col md={{ span: 8 }} key={item.key}>
                                <div className="content">
                                <div className="icon">
                                    {item.icon}
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                                </div>
                            </Col>
                            );
                        })}
                     </Row>
               </div>
           </div>
    )
}

export default AppAbout;