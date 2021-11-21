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

const WorkshopIntro = () => {
    
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
                >
                    <Grid item xs={12} sm={12} md={6}>
                        <Box sx={{ m: 2 }}>

                            <Typography variant='h2' ml-5 className={classes.title}>
                                UTDL Workshops
                            </Typography>
                            <br/>
                            <Typography variant = 'h5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} sx={{bgcolor: '#333333'}} >
                        <Box sx={{ m: 2, color: 'white' }}>
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
            </ThemeProvider>  
        </>
    )
}

export default WorkshopIntro;