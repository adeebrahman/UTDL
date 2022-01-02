import React from 'react'
import WorkshopIntro from '../Components/WorkshopIntro';
import WorkshopList from '../Components/WorkshopList';

const WorkshopPage = () =>{
    return(
        <>
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