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
import ReactPlayer from 'react-player'

const useStyles = makeStyles({
    title: {
        //fontSize will be overwritten by h3
        color: '#0288D1',
      

    },

})

const DesignathonDescription = () => {
    
    const classes = useStyles();

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return(
        <> 
            <ThemeProvider theme={theme}>
                
                <Grid
                        container 
                        direction="row"
                        justifyContent="center"
                        alignItems="center" 
                        spacing={3}
                        mt = {1}
                        className={classes.designathon}>
                    
                    <Box sx={{ mx: 2, mt: 2 }}>
                    <br/>
                    <br/>
                        <Typography variant='h2' ml-5 className={classes.title}>
                        UofT Designathon
                        </Typography>
                        <br/>
                    <br/>
                    </Box>
                    
                </Grid> 
               

                <Grid
                    container 
                    direction="row"
                    justifyContent="center"
                    alignItems="center" 
                    spacing={3}
                    mt = {1}
                >
                    <Grid item xs={12} sm={12} md={6} >
                        <Box sx={{ m: 2 }}>
                            <Typography variant = 'h5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip
                            </Typography>
                        </Box>
                        <Box sx={{ mx: "auto", width: 200, my: 2 }}>
                            <Button variant="contained" href="#">
                                Learn More
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} >
                        <Box sx={{ m: 3 }}>
                            <ReactPlayer 
                                url='https://www.youtube.com/watch?v=BLwwXTX0-b4&ab_channel=UTDLTechnologyTeam' 
                                controls 
                                width='100%'    
                            />
                        </Box>
                    </Grid>

                    

                </Grid>
            </ThemeProvider>  
        </>
    )
}

export default DesignathonDescription;