import React from 'react';
import { List, Card} from 'antd';
import { Typography } from 'antd';

import iphone from '../assests/images/iphone.png'
import iphonepro from '../assests/images/iphone pro.png'
import iphonepromax from '../assests/images/iphone pro max.png'



const data = [
  {
    content: [
      {
        name: 'iphone 12',
        photo: <img src={iphone} alt="iphone 12" />,
        price: '£29.99',
        space: '1 GB of space',
        user: '1 user',
        support: '24/7 support',
        backup: 'Safe, reliable backup',
        access: 'Access from anywhere'
      }
    ]
  },
  {
    content: [
      {
        name: 'iphone 12pro',
        photo: <img src={iphonepro} alt="iphone 12pro" />,
        price: '£59.99',
        space: '5 GB of space',
        user: '5 users',
        support: '24/7 support',
        backup: 'Safe, reliable backup',
        access: 'Access from anywhere'
      }
    ]
  },
  {
    content: [
      {
        name: 'iphone 12pro max',
        photo: <img src={iphonepromax} alt="iphone 12pro max" />,
        price: '£99.99',
        space: 'Unlimited space',
        user: '15 users',
        support: '24/7 support',
        backup: 'Safe, reliable backup',
        access: 'Access from anywhere'
      }
    ]
  }
];

const AppPricing = () => {

    const { Text } = Typography;

  return (
    <div id="pricing" className="block pricingBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Choose a plan to fit your needs</h2>
          <p>Debitis itaque minima dolorum fuga aperiam inventore, quidem enim</p>
        </div>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3,
          }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card>
                <h4><Text type="secondary">{item.content[0].name}</Text></h4>
                <p>{item.content[0].photo}</p>
                <p className="large">{item.content[0].price}</p>
                <p>{item.content[0].space}</p>
                <p>{item.content[0].user}</p>
                <p>{item.content[0].support}</p>
                <p>{item.content[0].backup}</p>
                <p>{item.content[0].access}</p>
                <button class="btn btn-secondary" size="large"><i className="fab fa-telegram-plane"></i> Get Started</button>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>  
  );
}

export default AppPricing;