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

const useStyles = makeStyles({
    workshop_container:{
        backgroundColor: '#B3E5FC',
        minHeight: '350px',
        display:"flex" ,
        flexDirection:"column",
        justifyContent:"center",
    },
    hook:{
        textAlign: 'center',
    },
    workshop_text:{
        
    },
},

)


const WorkshopHomePage = () => {
    
    const classes = useStyles();

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return(
        <> 
            <ThemeProvider theme={theme} >
                <div className={classes.workshop_container}>
                    
                    <Box sx={{ mx: "auto", maxWidth: 1200}} >
                        <Grid 
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center" 
                            spacing={3}>
                            <br/>   
                            <Grid item md={12} lg={6}>
                                <Box>
                                    <Typography variant='h4' ml-5 className={classes.hook}>
                                        WANT TO DEVELOP YOUR SKILLS?
                                        JOIN OUR FREE WORKSHOPS
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid item md={12} lg={6}>
                                <Box sx={{ mx: "auto", width: 200, my: 2 }}>
                                    <Button variant="contained" href="/Workshops">
                                        See All Workshops
                                    </Button>
                                </Box>
                            </Grid>
                            <br/>
                        </Grid>
                    </Box>
                </div>

            </ThemeProvider>  
        </>
    )
}

export default WorkshopHomePage;