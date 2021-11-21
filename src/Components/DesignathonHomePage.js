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
import designathon1 from '../img/designathon_1.JPG'
import designathon2 from '../img/designathon_2.jpg'
import designathon3 from '../img/designathon_3.jpg'
import logo from '../img/UTDL_Wings.png'
const useStyles = makeStyles({
    designathon: {
        //backgroundColor: "red",
    },
    img: {
        maxHeight: '250px',
        maxWidth: '250px',
    },
    desc_container: {
        //backgroundColor: "#555555",
    },
    title: {
        //fontSize will be overwritten by h3
        color: '#0288D1',
      

    },
})

/**
 * Dark Primary: #0288D1
 * Light Primary: #B3E5FC
 * Primary: #03A9F4
 * 


**/
const DesignathonHomePage = () => {
    
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
                       [LOGO]
                    </Typography>
                    <br/>
                    
                    <Typography variant='h5' ml-5>
                       Mission Statement
                    </Typography>
                    <br/>
                <br/>
                </Box>
                
            </Grid>
            <br/>
            <br/>
            <br/>
            <br/>
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
                <Grid
                    container 
                    direction="row"
                    justifyContent="center"
                    alignItems="center" 
                    spacing={3}
                    mt = {1}
                    className={classes.designathon}>

                    <Grid item xs={4} sm={4} md={3} >
                        <Box sx={{ mx: "auto", maxWidth: 250, my: 2 }}>
                            <img src={designathon1} className={classes.img} width='100%'/>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={4} md={3}>
                        <Box sx={{ mx: "auto", maxWidth: 250, my: 2 }}>
                            <img src={designathon2} className={classes.img} width='100%'/>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={4} md={3}>
                        <Box sx={{ mx: "auto", maxWidth: 250, my: 2 }}>
                            <img src={designathon3} className={classes.img} width='100%'/>
                        </Box>
                    </Grid>

                </Grid>
            </ThemeProvider>  
        </>
    )
}

export default DesignathonHomePage;