import React from 'react'
import DesignathonHomePage from '../Components/DesignathonHomePage.js'
import WorkshopHomePage from '../Components/WorkshopHomePage.js'
import UpcomingEvents from '../Components/UpcomingEvents.js';
import ContactUs from '../Components/ContactUs.js'
import Navbar from '../Components/Navbar.js';

const HomePage = () =>{
    return(
        <>
            <Navbar/>
            <DesignathonHomePage/>
            <WorkshopHomePage/>
            <UpcomingEvents/>
            <ContactUs/>
        </>
    )
};

export default HomePage;