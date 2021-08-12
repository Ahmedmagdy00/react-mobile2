import React from 'react'
import { Carousel } from 'antd';
import pic1 from '../assests/images/pic1.jpg'
import pic2 from '../assests/images/pic2.png'
import pic3 from '../assests/images/pic3.png'




const AppHero = () => {
    return (
                <div id="hero">
                    <Carousel autoplay>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src={pic1} class="d-block w-100" />
                            </div>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src={pic2} class="d-block w-100" />
                            </div>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src={pic3} class="d-block w-100" />
                            </div>
                        </div>
                    </Carousel>
                </div>
            )
}

export default AppHero;