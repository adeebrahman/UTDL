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
    },
    hook:{
        textAlign: 'center',
    }
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
                    <Grid container spacing={1}>
                        <br/>   
                        <Grid item md={12} lg={6}>
                            <Box sx={{ m: 2 }}>
                                <Typography variant='h4' ml-5 className={classes.hook}>
                                    WANT TO DEVELOP YOUR SKILLS?
                                    <br/>
                                    JOIN OUR FREE WORKSHOPS
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item md={12} lg={6}>
                            <Box sx={{ mx: "auto", width: 200, my: 2 }}>
                                <Button variant="contained" href="#">
                                    See All Workshops
                                </Button>
                            </Box>
                        </Grid>
                        <br/>
                    </Grid>
                </div>

            </ThemeProvider>  
        </>
    )
}

export default WorkshopHomePage;