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
import ig from '../img/ig.png'
import fb from '../img/fb.png'
import linkedin from '../img/linkedin.png'



const useStyles = makeStyles({
    title: {
        //fontSize will be overwritten by h3
        color: '#0288D1',
    },
    contact_container:{
        backgroundColor: 'black',
    },
    icon_container:{

    },      
})

const ContactUs = () => {
    const classes = useStyles();

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return(
        <> 
            <ThemeProvider theme={theme} >

                <div className={classes.contact_container}>

                <br/>
                    <Box sx={{ mx: "auto", maxWidth: 1200}} >
                        {/* <Box sx={{ mx: 2, mt: 2 }}>
                            <Typography variant='h3' ml-5 className={classes.title}>
                                Contact Us
                            </Typography>
                        </Box> */}

                        <Grid 
                            container 
                            // direction="row"
                            // justifyContent="center"
                            // alignItems="center" 
                            spacing={3}
                            sx={{mx:2}}
                        >   
                            <Grid item xs={2} sm={1} md={1}>
                                <img src={ig} width='30' alt='instagram logo'/>
                            </Grid>
                            <Grid item xs={2} sm={1} md={1}>
                                <img src={fb} width='30' alt='facebook logo'/>
                            </Grid>
                            <Grid item xs={2} sm={1} md={1}>
                                <img src={linkedin} width='30' alt='linkedin logo'/>
                            </Grid>

                        </Grid>
                    </Box>
                    <br/>
                </div>

            </ThemeProvider>

        </>
    )
}

export default ContactUs;