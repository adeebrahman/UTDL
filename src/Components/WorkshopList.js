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
                </Box>

            </ThemeProvider>

        </>
    )
}

export default WorkshopList;