import React from 'react'
import { 
    Typography, 
    createTheme, 
    responsiveFontSizes,
    ThemeProvider,
    Box
    } from '@mui/material';
import { makeStyles } from '@mui/styles';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

import {
    Timeline,
    TimelineItem,
    TimelineSeparator, 
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
    TimelineDot 
} from '@mui/lab'



const useStyles = makeStyles({
    title: {
        //fontSize will be overwritten by h3
        color: 'white',
        textAlign: 'center',
    },
    upcoming_container: {
        backgroundColor: '#557A95',
        minHeight: '500px',
        display:"flex" ,
        flexDirection:"column",
        justifyContent:"center",
        color: 'white',
    },

})




const UpcomingEvents = () => {
    const classes = useStyles();

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return(
        <> 
            <ThemeProvider theme={theme} >
            
                <div className={classes.upcoming_container}>
                    <br/><br/>
                    <Box sx={{ mx: "auto", maxWidth: 1200}} >
                        <Typography 
                            variant='h3' ml-5 
                            sx={{mx:2}}
                            className={classes.title}>
                            Upcoming Events
                        </Typography>
                        <br/>
                    </Box>
                    
                    <Timeline position="alternate">
                        <TimelineItem>
                            <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body1"
                            color='white'
                            >
                            January 19
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary" variant="outlined">
                                <PeopleOutlineIcon />
                            </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Workshop
                            </Typography>
                            <Typography variant="body2">
                                Autodesk F360 Advanced
                            </Typography>
                            </TimelineContent>
                        </TimelineItem>



                        <TimelineItem>
                            <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            variant="body1"
                            color='white'
                            >
                            February 5
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <LaptopMacIcon />
                            </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Designathon
                            </Typography>
                            <Typography variant="body2"> 
                                Day 1
                            </Typography>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            variant="body1"
                            color='white'
                            >
                            February 6
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <LaptopMacIcon />
                            </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Designathon
                            </Typography>
                            <Typography variant="body2">
                                Day 2
                            </Typography>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body1"
                            color='white'
                            >
                            February 9
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary" variant="outlined">
                                <PeopleOutlineIcon />
                            </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Workshop
                            </Typography>
                            <Typography variant="body2">
                                Autodesk Generative Design 1
                            </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        
                        <TimelineItem>
                            <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body1"
                            color='white'
                            >
                            February 16
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary" variant="outlined">
                                <PeopleOutlineIcon />
                            </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Workshop
                            </Typography>
                            <Typography variant="body2">
                                Autodesk Generative Design 2
                            </Typography>
                            </TimelineContent>
                        </TimelineItem>


                        <TimelineItem>
                            <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            variant="body1"
                            color='white'
                            >
                            February 18
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <FlightTakeoffIcon />
                            </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Glider Competition
                            </Typography>
                            <Typography variant="body2"> 
                                Launch
                            </Typography>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            variant="body1"
                            color='white'
                            >
                            March 18
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <FlightTakeoffIcon />
                            </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Glider Competition
                            </Typography>
                            <Typography variant="body2"> 
                                Submissions Close
                            </Typography>
                            </TimelineContent>
                        </TimelineItem>

                    </Timeline>




                </div>
            </ThemeProvider>
            
        </>
    )
}

export default UpcomingEvents;