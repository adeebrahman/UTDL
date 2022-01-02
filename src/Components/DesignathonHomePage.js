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
import collaborate from '../img/Collaborate.png'
import create from '../img/Create.png'
import ideate from '../img/Ideate.png'
import Logo from '../img/Logo.png'
const useStyles = makeStyles({
    img: {
        maxHeight: '333px',
        maxWidth: '250px',
    },
    desc_container: {
        //backgroundColor: "#555555",
    },
    title: {
        //fontSize will be overwritten by h3
        color: 'white',
        textAlign: 'center',
    },
    generalWidth:{
        maxWidth: '1200px',
        backgroundColor: 'red',
    },
    designathon_container: {
        backgroundColor: '#004aad',
        minHeight: '500px',
        display:"flex" ,
        flexDirection:"column",
        justifyContent:"center",
        color: 'white',
    },
    page_header: {
        width: '100%',
    
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

                <img 
                    src={Logo} 
                    alt="UTDL Logo" 
                    className={classes.page_header}
                />


                <Box sx={{ mx: "auto", maxWidth: 1200}} >
                    <Typography 
                        variant = 'h5'
                        sx={{mx:2}}
                    >
                        UTDL was founded as a chapter of the National Design League in February 
                        2019. The purpose of the University of Toronto Design League (UTDL) is 
                        to provide engineering students of all disciplines and backgrounds an 
                        opportunity to learn and develop core mechanical design skills. There 
                        is an emphasis on real-world applications of additive manufacturing, 
                        rapid prototyping and CAD.
                        <br/>
                        <br/>
                        All the events held by UTDL  provide attendees across Ontario with a 
                        platform to learn technical skills as well as to design, fabricate 
                        and showcase their innovative solutions for real-life mechanical 
                        engineering design problems faced by our diverse industry partners. 
                    
                    </Typography>
                
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
                                <img src={collaborate} className={classes.img} width='100%'/>
                            </Box>
                        </Grid>
                        <Grid item xs={4} sm={4} md={3}>
                            <Box sx={{ mx: "auto", maxWidth: 250, my: 2 }}>
                                <img src={create} className={classes.img} width='100%'/>
                            </Box>
                        </Grid>
                        <Grid item xs={4} sm={4} md={3}>
                            <Box sx={{ mx: "auto", maxWidth: 250, my: 2 }}>
                                <img src={ideate} className={classes.img} width='100%'/>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <div className={classes.designathon_container}>
                    <Box sx={{ mx: "auto", maxWidth: 1200}} >
                        <Typography 
                            variant='h3' ml-5 
                            sx={{mx:2}}
                            className={classes.title}>
                            PARTICIPATE IN THE DESIGNATHON 
                        </Typography>
                        <br/> <br/>
                        <Typography 
                            variant = 'h5'
                            sx={{mx:2}}>
                            Our flagship event, the Designathon, is  36 hour design competition 
                            which provides students with a platform to showcase their design 
                            creativity and prototyping skills, all while solving real world 
                            challenges. Surrounded by technical designers from across North 
                            America, will you be able to create the next technology giant at 
                            our innovation-driven design marathon? 
                        </Typography>

                        <Box sx={{ mx: "auto", width: 200, my: 2 }}>
                            <Button variant="contained" href="/Designathon">
                                Learn More
                            </Button>
                        </Box>
                    </Box>
                </div>

                
                
            </ThemeProvider>  
        </>
    )
}

export default DesignathonHomePage;