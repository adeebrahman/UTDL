import React from 'react'
import { 
    Grid, 
    Typography, 
    Button,
    createTheme, 
    responsiveFontSizes,
    ThemeProvider,
    Box 
    } from '@mui/material';
import { makeStyles } from '@mui/styles';
import workshop_header from '../img/workshop_bg.jpg'

const useStyles = makeStyles({

    title: {
        //fontSize will be overwritten by h3
        color: '#0288D1',
    },
    suggested_workshops: {
        minHeight: '200px',
        display:"flex" ,
        flexDirection:"column",
        justifyContent:"center",
        //backgroundColor:"orange",
    },
    page_header: {
        // backgroundColor: '#B3E5FC',
         backgroundImage: `url(${workshop_header})`,
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

const WorkshopIntro = () => {
    
    const classes = useStyles();

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return(
        <> 
            <ThemeProvider theme={theme}>
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
                            UTDL Workshops
                            </Typography>

                    </Grid>

                </div>
   
                <Box sx={{ mx: "auto", maxWidth: 1200}} >
                    <div className={classes.suggested_workshops}>
                        <Grid
                            container 
                            direction="row"
                            justifyContent="center"
                            alignItems="center" 
                            spacing={3}
                            mt = {0}
                        >
                            <Grid item xs={12} sm={12} md={8}>
                                <Box sx={{ mx: 2 }}>

                                    <Typography variant = 'h5'>
                                        Throughout the year our Education Technology Team organizes 
                                        a variety of hands-on workshops to equip students with 
                                        essential technical skills that will assist them while 
                                        undertaking any future design projects. Our workshops are 
                                        aimed at prototyping solutions for the challenges in our 
                                        upcoming Designathon. These workshops cover everything, 
                                        right from the visualization of ideas to the final assembly 
                                        of design components.
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={12} md={4} sx={{bgcolor: '#333333'}} >
                                <Box sx={{ mx: 2, color: 'white' }}>
                                    <Typography variant = 'h5'>
                                        Don't know which workshops to attend?
                                        <br/><br/>
                                        Here are our favorites:
                                    </Typography>
                                </Box>

                                <Box sx={{ mx: "auto", width: 200, my: 2 }}>
                                    <Button variant="contained" href="#" sx={{ my: 1}}>
                                        Selection 1
                                    </Button>

                                    <Button variant="contained" href="#" sx={{ my: 1}}>
                                        Selection 2
                                    </Button>

                                    <Button variant="contained" href="#" sx={{ my: 1}}>
                                        Selection 3
                                    </Button>
                                </Box>

                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </ThemeProvider>  
        </>
    )
}

export default WorkshopIntro;