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
    designathon: {
        //backgroundColor: "red",
      },
    desc_container: {
        //backgroundColor: "#555555",
    },
    img_container: {
        //backgroundColor: "#CCCCCC",
        
    },
    title: {
        //fontSize will be overwritten by h3
        color: '#0288D1',
    },
    contact_us:{
        marginRight: '5px',
        backgroundColor: '#B3E5FC',
    },

      
})

const ContactUs = () => {
    const classes = useStyles();

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return(
        <> 
            <ThemeProvider theme={theme} >

                <Box sx={{ mx: 2, mt: 2 }}>
                    <Typography variant='h3' ml-5 className={classes.title}>
                        Contact Us
                    </Typography>
                </Box>

                <Grid 
                    container 
                    direction="row"
                    justifyContent="center"
                    alignItems="center" 
                    spacing={3}
                    mt = {1}
                >   
                    <Grid item xs={2} sm={1} md={1}>
                        <img src={ig} width='50' alt='instagram logo'/>
                    </Grid>
                    <Grid item xs={2} sm={1} md={1}>
                        <img src={fb} width='50' alt='facebook logo'/>
                    </Grid>
                    <Grid item xs={2} sm={1} md={1}>
                        <img src={linkedin} width='50' alt='linkedin logo'/>
                    </Grid>

                </Grid>
                

            </ThemeProvider>

        </>
    )
}

export default ContactUs;