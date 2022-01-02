import React from 'react'
import { 
    Grid, 
    Typography, 
    createTheme, 
    responsiveFontSizes,
    ThemeProvider,
    Box 
    } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ReactPlayer from 'react-player'
import uoft_header from '../img/uoft_header.jpeg'


const useStyles = makeStyles({
    title: {
        //fontSize will be overwritten by h3
        color: 'white',
        
    },
    page_header: {
       // backgroundColor: '#B3E5FC',
        backgroundImage: `url(${uoft_header})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '500px',
        display:"flex" ,
        flexDirection:"column",
        justifyContent:"center",
        opacity: '0.7',
        
    },
    

})

const DesignathonDescription = () => {
    
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
                                sx={{opacity: '1'}}>
                                UofT Designathon
                            </Typography>

                    </Grid>

                </div>
               
                <Box sx={{ mx: "auto", maxWidth: 1200}} >
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
                                <Typography variant = 'h6'>
                                    A Designathon is a continuous 36-hour long design competition 
                                    where participants choose a design challenge from one of the 
                                    provided real-world design problems and ideate a solution for 
                                    it in teams of 4. The teams then follow the ideation process 
                                    with the creation of a prototype of their design solution, 
                                    before finally presenting it to a panel of judges. It is 
                                    similar to a hackathon, with the exception that the design 
                                    problems aren't normally IT-centric and the students are 
                                    encourages to build physical prototypes using 3-D printers, 
                                    arduinos and other resources. 

                                </Typography>
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
                </Box>
            </ThemeProvider>  
        </>
    )
}

export default DesignathonDescription;