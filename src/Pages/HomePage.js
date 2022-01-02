import React from 'react'
import DesignathonHomePage from '../Components/DesignathonHomePage.js'
import WorkshopHomePage from '../Components/WorkshopHomePage.js'
import UpcomingEvents from '../Components/UpcomingEvents.js';
import ContactUs from '../Components/ContactUs.js'

const HomePage = () =>{
    return(
        <>
            <DesignathonHomePage/>
            <WorkshopHomePage/>
            <ContactUs/>
        </>
    )
};

export default HomePage;