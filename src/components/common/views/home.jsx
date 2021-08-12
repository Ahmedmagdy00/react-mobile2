import React from 'react';

import AppAbout from '../about';
import AppFaq from '../faq';
import AppFeature from '../feature';
import AppWorks from '../works';
import AppHero from '../hero';
import AppPricing from '../pricing';
import AppContact from '../contact';

function AppHome() {
    return (
      <div className="main">
        <AppHero />
        <AppAbout />
        <AppFeature />
        <AppWorks />
        <AppFaq />
        <AppPricing />
        <AppContact />
      </div>
    );
  }
  
  export default AppHome;