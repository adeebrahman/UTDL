import React from 'react'
import PropTypes from 'prop-types';
import { 
    Grid, 
    Typography, 
    createTheme, 
    responsiveFontSizes,
    ThemeProvider,
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    title: {
        color: '#0288D1',     

    },
})



const DesignathonFAQs = () => {
    
    const classes = useStyles();

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return(
        <> 
            <ThemeProvider theme={theme}>

<<<<<<< HEAD
                <Box sx={{ mx: "auto", maxWidth: 1200}} >
                    <Box sx={{ mx: 2, mt: 2 }}>
                        <Typography variant='h3' ml-5 className={classes.title}>
                            FAQs
                        </Typography>
                    </Box>

                    <Box sx={{ mx: 2, mt: 2 }}>
                        <Accordion sx={{ bgcolor: '#B3E5FC'}}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                                <Typography>
                                    When is registration opening?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Registration will begin around January 2021. Follow our 
                                    UTDL pages on Facebook and Instagram to keep updated!
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <br/>

                        <Accordion sx={{ bgcolor: '#B3E5FC'}}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                                <Typography>
                                    How many people can I have in my team?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Teams will comprise 3-4 members. In case you need any help 
                                finding additional team members, we will have virtual booths 
                                prepared at the start of the competition.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <br/>

                        <Accordion sx={{ bgcolor: '#B3E5FC'}}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                                <Typography>
                                    What do I need to prepare for the event?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Your laptop with any CAD software. Teams near campus could 
                                    also request a variety of materials, such as Arduinos, 
                                    electrical components, prototyping materials, and even 3D 
                                    prints! We will schedule timeslots for on-campus pickup, 
                                    regulated with plenty of safety precautions regarding COVID.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <br/>

                        <Accordion sx={{ bgcolor: '#B3E5FC'}}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                                <Typography>
                                    Do I need any prior experience to participate in the
                                    event?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    None! There will be technical workshops during the event and 
                                    mentors to answer questions. We recommend attending our 
                                    preparation workshops to familiarize yourself with CAD, 
                                    Arduino and 3-D printers.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <br/>

                        <Accordion sx={{ bgcolor: '#B3E5FC'}}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                                <Typography>
                                    Can I attend the designathon without attending any of the
                                    workshops or vice versa?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Of course! The workshops are only meant to prepare you for 
                                    the designathon and any future projects you undertake as 
                                    designers. In case you cannot attend them, feel free to 
                                    join us directly for the main event.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <br/>

                        <Accordion sx={{ bgcolor: '#B3E5FC'}}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                                <Typography>
                                    What do the workshops cover?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    The workshops are held throughout the year, covering a 
                                    broad spectrum from various CAD software to Arduinos. 
                                    Our workshop section on the website contains a detailed 
                                    description of the topics to be covered in each workshop.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <br/>


                    </Box>
                </Box>

=======
            <Box sx={{ mx: 2, mt: 2 }}>
                <Typography variant='h3' ml-5 className={classes.title}>
                    FAQs
                </Typography>
            </Box>

            <Box sx={{ mx: 2, mt: 2 }}>
                <Accordion sx={{ bgcolor: '#B3E5FC'}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography>
                            When is registration opening?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Registration will begin around January 2021. Follow our 
                            UTDL pages on Facebook and Instagram to keep updated!
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <br/>

                <Accordion sx={{ bgcolor: '#B3E5FC'}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography>
                            How many people can I have in my team?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Teams will comprise 3-4 members. In case you need any help 
                        finding additional team members, we will have virtual booths 
                        prepared at the start of the competition.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <br/>

                <Accordion sx={{ bgcolor: '#B3E5FC'}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography>
                            What do I need to prepare for the event?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Your laptop with any CAD software. Teams near campus could 
                            also request a variety of materials, such as Arduinos, 
                            electrical components, prototyping materials, and even 3D 
                            prints! We will schedule timeslots for on-campus pickup, 
                            regulated with plenty of safety precautions regarding COVID.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <br/>

                <Accordion sx={{ bgcolor: '#B3E5FC'}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography>
                            Do I need any prior experience to participate in the
                            event?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            None! There will be technical workshops during the event and 
                            mentors to answer questions. We recommend attending our 
                            preparation workshops to familiarize yourself with CAD, 
                            Arduino and 3-D printers.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <br/>

                <Accordion sx={{ bgcolor: '#B3E5FC'}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography>
                            Can I attend the designathon without attending any of the
                            workshops or vice versa?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Of course! The workshops are only meant to prepare you for 
                            the designathon and any future projects you undertake as 
                            designers. In case you cannot attend them, feel free to 
                            join us directly for the main event.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <br/>

                <Accordion sx={{ bgcolor: '#B3E5FC'}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography>
                            What do the workshops cover?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            The workshops are held throughout the year, covering a 
                            broad spectrum from various CAD software to Arduinos. 
                            Our workshop section on the website contains a detailed 
                            description of the topics to be covered in each workshop.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <br/>


            </Box>

            {/* <Grid
                    container 
                    direction="row"
                    justifyContent="center"
                    alignItems="center" 
                    spacing={3}
                    mt = {1}
                >
                    

    
               
              

            </Grid> */}
            
             
>>>>>>> 64fbb3379b5c9e058e640fb0460844b0fe572708
            </ThemeProvider>  
        </>
    )
}

export default DesignathonFAQs;