import React from 'react'
import { 
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

const WorkshopList = () => {
    const classes = useStyles();

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return(
        <> 
            <ThemeProvider theme={theme} >
<<<<<<< HEAD
                <Box sx={{ mx: "auto", maxWidth: 1200}} >
                    <Box sx={{ mx: 2, mt: 2 }}>
                        <Typography 
                            variant='h3' 
                            className={classes.title}
                            sx={{mx:2}}>
                            All Workshops
                        </Typography>
                    </Box>

                    <Box sx={{ mx: 2, mt: 2 }}>

                    <Accordion 
                        expanded={expanded === 'panel1'} 
                        onChange={handleChange('panel1')}
                        sx={{ bgcolor: '#B3E5FC'}}
                        >
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: '700' }}>
                                    Fusion 360 Beginner
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    October 5, 2021 [Online]
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                    Join us as we go over the basics of 3D modelling with Fusion 360! 
                                    We will go over the interface and some basic skills to prepare 
                                    you for our future Design-a-thon!
                                    <br/><br/>
                                    Missed the workshop? 
                                    <br/>
                                    Watch it here

                                </Typography>
                            </AccordionDetails>

                        </Accordion>
                        <br/>


                        <Accordion 
                        expanded={expanded === 'panel2'} 
                        onChange={handleChange('panel2')}
                        sx={{ bgcolor: '#B3E5FC'}}
                        >
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: '700' }}>
                                    Fusion 360 Intermediate
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    October 12, 2021 [Online]
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                    Join us for our intermediate Fusion 360 workshop as we go over 
                                    the basics of 3D modelling in more depth! We will go over the 
                                    interface and some time saving and intermediate skills to 
                                    prepare you for our future Design-a-thon!
                    

                                </Typography>
                            </AccordionDetails>

                        </Accordion>

                        <br/>

                        
                        
                        <Accordion 
                        expanded={expanded === 'panel3'} 
                        onChange={handleChange('panel3')}
                        sx={{ bgcolor: '#B3E5FC'}}
                        >
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: '700' }}>
                                    Introduction to ANSYS Modelling
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    October 27, 2021 [Online]
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                Join us as we introduce the ANSYS software and go through the basics 
                                of design modelling! In this workshop, you will understand the 
                                importance of including modelling and simulations in your design 
                                projects, learn how to use Spaceclaim to create and improve your 
                                designs, and practice your skills with a small exercise. Looking 
                                forward to seeing you there!

                                Content Overview:
                                • Motivation behind CAD
                                • Basics of Spaceclaim
                                • Making a Simple Object
                                • Exercise: Making a Bracket
                                   

                                </Typography>
                            </AccordionDetails>

                        </Accordion>
                        <br/>

                        <Accordion 
                        expanded={expanded === 'panel4'} 
                        onChange={handleChange('panel4')}
                        sx={{ bgcolor: '#B3E5FC'}}
                        >
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: '700' }}>
                                    Introduction to ANSYS Simulation
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    November 3, 2021 [Online]
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                    Join us as we dive deeper into ANSYS and learn about simulations! 
                                    In this workshop, we will go over how to perform static, thermal, 
                                    and non-static simulations. We will also discuss the valuable 
                                    information that you can extract from these simulations and then 
                                    wrap it up with an exercise. Looking forward to seeing you there!

                                    Content Overview:
                                    • Motivation behind Simulations
                                    • Basics of Workbench
                                    • Static Structural
                                    • Steady-State Thermal
                                    • Explicit Analysis
                                    • Exercise: Static Structural

                                </Typography>
                            </AccordionDetails>

                        </Accordion>
                        <br/>


                        <Accordion 
                        expanded={expanded === 'panel5'} 
                        onChange={handleChange('panel5')}
                        sx={{ bgcolor: '#B3E5FC'}}
                        >
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel5bh-content"
                            id="panel5bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: '700' }}>
                                    Autodesk Advanced Fusion 360
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    January 19, 2022 [Online]
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                    • Advanced part modelling we will be covering many features 
                                    such as loft, sweep, and combine. These features and more have 
                                    been picked based on how common they are used.
                                    <br/>
                                    • Mechanical assemblies, we will be walking through assembling 
                                    a complicated assembly, the parts will be created beforehand 
                                    and sent to everybody in the workshop, during which it will be 
                                    assembled. 
                                    <br/><br/>
                                    Zoom link to join workshop will be provided closer to the event
                                </Typography>
                            </AccordionDetails>

                        </Accordion>

                        <br/>

                        <Accordion 
                        expanded={expanded === 'panel6'} 
                        onChange={handleChange('panel6')}
                        sx={{ bgcolor: '#B3E5FC'}}
                        >
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel6bh-content"
                            id="panel6bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0 , fontWeight: '700' }}>
                                    Autodesk Generative Design 1
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    February 9, 2022 [Online]
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                    • Cover what generative design is, how to use the interface and 
                                    setting up the design space, and a basic example.
                                    <br/><br/>
                                    Zoom link to join workshop will be provided closer to the event
                                </Typography>
                            </AccordionDetails>

                        </Accordion>

                        <br/>

                        <Accordion 
                        expanded={expanded === 'panel7'} 
                        onChange={handleChange('panel7')}
                        sx={{ bgcolor: '#B3E5FC'}}
                        >
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel7bh-content"
                            id="panel7bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: '700' }}>
                                    Autodesk Generative Design 1
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    February 16, 2022 [Online]
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                • Will host a more advanced generative example, address any questions
                                 and deal with post processing of the generative engine, this means
                                 choosing the best outcome for the project.
                                 <br/>
                                • Working through common issues
                                <br/><br/>
                                Zoom link to join workshop will be provided closer to the event
                                </Typography>
                            </AccordionDetails>

                        </Accordion>

                    </Box>
=======

                <Box sx={{ mx: 2, mt: 2 }}>
                    <Typography variant='h3' ml-5 className={classes.title}>
                        Workshop List
                    </Typography>
                </Box>

                <Box sx={{ mx: 2, mt: 2 }}>
                    <Accordion 
                    expanded={expanded === 'panel1'} 
                    onChange={handleChange('panel1')}
                    sx={{ bgcolor: '#68e17f'}}
                    >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                Workshop Name
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>DATE, LOCATION</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography>
                                Workshop description<br/>
                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                Aliquam eget maximus est, id dignissim quam.
                            </Typography>
                        </AccordionDetails>

                    </Accordion>

                    <br/>

                    <Accordion 
                    expanded={expanded === 'panel2'} 
                    onChange={handleChange('panel2')}
                    sx={{ bgcolor: '#0288D1'}}
                    >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                Workshop Name
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>DATE, LOCATION</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography>
                                Workshop description<br/>
                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                Aliquam eget maximus est, id dignissim quam.
                            </Typography>
                        </AccordionDetails>

                    </Accordion>

                    <br/>

                    <Accordion 
                    expanded={expanded === 'panel3'} 
                    onChange={handleChange('panel3')}
                    sx={{ bgcolor: '#0288D1'}}
                    >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                Workshop Name
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>DATE, LOCATION</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography>
                                Workshop description<br/>
                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                Aliquam eget maximus est, id dignissim quam.
                            </Typography>
                        </AccordionDetails>

                    </Accordion>

                    <br/>

                    <Accordion 
                    expanded={expanded === 'panel4'} 
                    onChange={handleChange('panel4')}
                    sx={{ bgcolor: '#B3E5FC'}}
                    >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                Workshop Name
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>DATE, LOCATION</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography>
                                Workshop description<br/>
                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                Aliquam eget maximus est, id dignissim quam.
                            </Typography>
                        </AccordionDetails>

                    </Accordion>

                    <br/>

                    <Accordion 
                    expanded={expanded === 'panel5'} 
                    onChange={handleChange('panel5')}
                    sx={{ bgcolor: '#B3E5FC'}}
                    >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5bh-content"
                        id="panel5bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                Workshop Name
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>DATE, LOCATION</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography>
                                Workshop description<br/>
                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                Aliquam eget maximus est, id dignissim quam.
                            </Typography>
                        </AccordionDetails>

                    </Accordion>
>>>>>>> 64fbb3379b5c9e058e640fb0460844b0fe572708
                </Box>

            </ThemeProvider>

        </>
    )
}

export default WorkshopList;