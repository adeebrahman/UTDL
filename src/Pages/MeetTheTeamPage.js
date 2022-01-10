import React from 'react'
import { 
    Grid, 
    Typography, 
    } from '@mui/material';
import { makeStyles } from '@mui/styles';
import members_header from '../img/members_bg.jpg'
import MemberProfile from '../Components/MemberProfile';
import Navbar from '../Components/Navbar.js';



const useStyles = makeStyles({
    title: {
        //fontSize will be overwritten by h3
        color: 'white',
        
    },
    page_header: {
       // backgroundColor: '#B3E5FC',
        backgroundImage: `url(${members_header})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '500px',
        display:"flex" ,
        flexDirection:"column",
        justifyContent:"center",
        opacity:'0.7'
    },
    

})

const MeetTheTeam = () =>{

    const classes = useStyles();
    return(
        <>
            <Navbar/>
            <div className={classes.page_header}>
                    
                    <Grid
                        container 
                        direction="row"
                        justifyContent="center"
                        alignItems="center" 
                        spacing={3}
                    >

                            <Typography 
                                variant='h2' 
                                className={classes.title}
                                sx={{opacity: '1'}}
                                >
                            Meet the Team
                            </Typography>

                    </Grid>

                </div>
                <br/> <br/>
            <MemberProfile/>
            <br/> <br/>
        </>
    )
};

export default MeetTheTeam;