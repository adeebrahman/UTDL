import React from 'react'
import WorkshopIntro from '../Components/WorkshopIntro';
import WorkshopList from '../Components/WorkshopList';
import Navbar from '../Components/Navbar.js';

const WorkshopPage = () =>{
    return(
        <>
            <Navbar/>
            <WorkshopIntro/>
            <br/>
            <br/>
            {/* <WorkshopCalendar/> */}
            <br/>
            <br/>
            <WorkshopList/>
            <br/>
            <br/>
        </>
    )
};

export default WorkshopPage;