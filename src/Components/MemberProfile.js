import React from 'react'
import { makeStyles } from '@mui/styles';
import { 
    Grid, 
    Typography, 
    Button,
    createTheme, 
    responsiveFontSizes,
    ThemeProvider,
    Box,
    Stack,
    Avatar
    } from '@mui/material';

import Default from '../img/members/default.jpg';
import Devam from '../img/members/Devam.jpg';
import Megi from '../img/members/Megi.jpg';
import Sally from '../img/members/Sally.jpeg';
import Tanya from '../img/members/Tanya.jpg';
import Yannis from '../img/members/Yannis.jpg';
import Sumyung from '../img/members/Sumyung.jpg';




const useStyles = makeStyles({

    title: {
        //fontSize will be overwritten by h3
        color: '#0288D1',
    },
    avatarCard: {
        textAlign: 'center',
    },
    avatarCardExec:{
        textAlign: 'center',
        backgroundColor: '#004aad',
        color: 'white'
    }
})

const MemberProfile = () =>{

    const classes = useStyles();

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return(
      
        <ThemeProvider theme={theme}>
            <Box sx={{ mx: "auto", maxWidth: 1200}} >
                
                {/****************** CEO/CTO **********************/}
                <Stack 
                    direction="row" 
                    justifyContent="center"
                    alignItems="center"
                    spacing={4}
                >
                    <div className={classes.avatarCard}>
                        <Avatar
                                alt="Yannis He"
                                src={Yannis}
                                sx={{ width: 150, height: 150, m: 2 }}
                        />
                  
                        <Typography variant="subtitle1" display="block" gutterBottom>
                            Yannis He
                        </Typography>    
                        <Typography variant="subtitle2" display="block" gutterBottom>
                            CEO
                        </Typography> 
                    </div>

                    <div className={classes.avatarCard}>
                        <Avatar
                                alt="Kyle Damrell"
                                src={Default}
                                sx={{ width: 150, height: 150, m: 2 }}
                        />
                  
                        <Typography variant="subtitle1" display="block" gutterBottom>
                            Kyle Damrell
                        </Typography>    
                        <Typography variant="subtitle2" display="block" gutterBottom>
                            CTO
                        </Typography> 
                    </div>
                </Stack>

                {/****************** Finance **********************/}
                <Stack 
                    direction="row" 
                    justifyContent="center"
                    alignItems="center"
                    spacing={4}
                >
                    <div className={classes.avatarCard}>
                        <Avatar
                                alt="Devam Gandhi"
                                src={Devam}
                                sx={{ width: 150, height: 150, m: 2 }}
                        />
                  
                        <Typography variant="subtitle1" display="block" gutterBottom>
                            Devam Gandhi
                        </Typography>    
                        <Typography variant="subtitle2" display="block" gutterBottom>
                            Finance Director
                        </Typography> 
                    </div>
                </Stack>

                {/****************** Operations **********************/}
                <Stack 
                    direction="row"
                    justifyContent="center"
                    alignItems="center" 
                    spacing={4}
                >
                    <div className={classes.avatarCard}>
                        <Avatar
                                alt="Sumyung Jang"
                                src={Sumyung}
                                sx={{ width: 150, height: 150, m: 2 }}
                        />
                  
                        <Typography variant="subtitle1" display="block" gutterBottom>
                        Sumyung Jang
                        </Typography>    
                        <Typography variant="subtitle2" display="block" gutterBottom>
                            Operations Director
                        </Typography> 
                    </div>

                    <div className={classes.avatarCard}>
                        <Avatar
                                alt="Tanya Nguyen"
                                src={Tanya}
                                sx={{ width: 150, height: 150, m: 2 }}
                        />
                  
                        <Typography variant="subtitle1" display="block" gutterBottom>
                        Tanya Nguyen
                        </Typography>    
                        <Typography variant="subtitle2" display="block" gutterBottom>
                            Operations
                        </Typography> 
                    </div>

                    <div className={classes.avatarCard}>
                        <Avatar
                                alt="Megi Gura"
                                src={Megi}
                                sx={{ width: 150, height: 150, m: 2 }}
                        />
                  
                        <Typography variant="subtitle1" display="block" gutterBottom>
                        Megi Gura
                        </Typography>    
                        <Typography variant="subtitle2" display="block" gutterBottom>
                            Operations
                        </Typography> 
                    </div>
                </Stack>

                {/****************** Media **********************/}
                <Stack 
                    direction="row"
                    justifyContent="center"
                    alignItems="center" 
                    spacing={4}
                >
                    <div className={classes.avatarCard}>
                        <Avatar
                                alt="Vama Dave"
                                src={Default}
                                sx={{ width: 150, height: 150, m: 2 }}
                        />
                  
                        <Typography variant="subtitle1" display="block" gutterBottom>
                        Vama Dave
                        </Typography>    
                        <Typography variant="subtitle2" display="block" gutterBottom>
                            Media Director
                        </Typography> 
                    </div>

                    <div className={classes.avatarCard}>
                        <Avatar
                                alt="Sally Chiu"
                                src={Sally}
                                sx={{ width: 150, height: 150, m: 2 }}
                        />
                  
                        <Typography variant="subtitle1" display="block" gutterBottom>
                        Sally Chiu
                        </Typography>    
                        <Typography variant="subtitle2" display="block" gutterBottom>
                            Graphic Designer
                        </Typography> 
                    </div>

                    <div className={classes.avatarCard}>
                        <Avatar
                                alt="Martha Khoshabeh"
                                src={Default}
                                sx={{ width: 150, height: 150, m: 2 }}
                        />
                  
                        <Typography variant="subtitle1" display="block" gutterBottom>
                            Martha Khoshabeh
                        </Typography>    
                        <Typography variant="subtitle2" display="block" gutterBottom>
                            Graphic Designer
                        </Typography> 
                    </div>

                    <div className={classes.avatarCard}>
                        <Avatar
                                alt="Adeeb Rahman"
                                src={Default}
                                sx={{ width: 150, height: 150, m: 2 }}
                        />
                  
                        <Typography variant="subtitle1" display="block" gutterBottom>
                            Adeeb Rahman
                        </Typography>    
                        <Typography variant="subtitle2" display="block" gutterBottom>
                            Webmaster
                        </Typography> 
                    </div>

                    <div className={classes.avatarCard}>
                        <Avatar
                                alt="Lokeesan Kaneshwaran"
                                src={Default}
                                sx={{ width: 150, height: 150, m: 2 }}
                        />
                  
                        <Typography variant="subtitle1" display="block" gutterBottom>
                        Lokeesan Kaneshwaran
                        </Typography>    
                        <Typography variant="subtitle2" display="block" gutterBottom>
                            Marketing 
                        </Typography> 
                    </div>
                </Stack>
                
                {/****************** Sponsorship **********************/}
                <Stack 
                    direction="row"
                    justifyContent="center"
                    alignItems="center" 
                    spacing={4}
                >
                    <div className={classes.avatarCard}>
                        <Avatar
                                alt="Yashvansh Chawla"
                                src={Default}
                                sx={{ width: 150, height: 150, m: 2 }}
                        />
                  
                        <Typography variant="subtitle1" display="block" gutterBottom>
                        Yashvansh Chawla
                        </Typography>    
                        <Typography variant="subtitle2" display="block" gutterBottom>
                        Sponsorship Director
                        </Typography> 
                    </div>

                    <div className={classes.avatarCard}>
                        <Avatar
                                alt="Devashish Khare"
                                src={Default}
                                sx={{ width: 150, height: 150, m: 2 }}
                        />
                  
                        <Typography variant="subtitle1" display="block" gutterBottom>
                        Devashish Khare
                        </Typography>    
                        <Typography variant="subtitle2" display="block" gutterBottom>
                        Sponsorship
                        </Typography> 
                    </div>

                </Stack>


                {/****************** Ed Tech **********************/}
                <Stack 
                    direction="row"
                    justifyContent="center"
                    alignItems="center" 
                    spacing={4}
                >
                    <div className={classes.avatarCard}>
                        <Avatar
                                alt="Shaheer Siddiqui"
                                src={Default}
                                sx={{ width: 150, height: 150, m: 2 }}
                        />
                  
                        <Typography variant="subtitle1" display="block" gutterBottom>
                        Shaheer Siddiqui
                        </Typography>    
                        <Typography variant="subtitle2" display="block" gutterBottom>
                        Educational Technology Director
                        </Typography> 
                    </div>

                    <div className={classes.avatarCard}>
                        <Avatar
                                alt="Devashish Khare"
                                src={Default}
                                sx={{ width: 150, height: 150, m: 2 }}
                        />
                  
                        <Typography variant="subtitle1" display="block" gutterBottom>
                        Devashish Khare
                        </Typography>    
                        <Typography variant="subtitle2" display="block" gutterBottom>
                        Educational Technology
                        </Typography> 
                    </div>

                </Stack>

                {/****************** Design Tech **********************/}
                <Stack 
                    direction="row"
                    justifyContent="center"
                    alignItems="center" 
                    spacing={4}
                >
                    <div className={classes.avatarCard}>
                        <Avatar
                                alt="Devansh Khare"
                                src={Default}
                                sx={{ width: 150, height: 150, m: 2 }}
                        />
                  
                        <Typography variant="subtitle1" display="block" gutterBottom>
                        Devansh Khare
                        </Typography>    
                        <Typography variant="subtitle2" display="block" gutterBottom>
                        Design Technology Director
                        </Typography> 
                    </div>

                    <div className={classes.avatarCard}>
                        <Avatar
                                alt="Ella Walsh"
                                src={Default}
                                sx={{ width: 150, height: 150, m: 2 }}
                        />
                  
                        <Typography variant="subtitle1" display="block" gutterBottom>
                        Ella Walsh
                        </Typography>    
                        <Typography variant="subtitle2" display="block" gutterBottom>
                        Design Technology
                        </Typography> 
                    </div>

                    <div className={classes.avatarCard}>
                        <Avatar
                                alt="John R. Abellanoza"
                                src={Default}
                                sx={{ width: 150, height: 150, m: 2 }}
                        />
                  
                        <Typography variant="subtitle1" display="block" gutterBottom>
                        John R. Abellanoza
                        </Typography>    
                        <Typography variant="subtitle2" display="block" gutterBottom>
                        Design Technology
                        </Typography> 
                    </div>
                </Stack>

            </Box>
        </ThemeProvider>
        
    
    )
};

export default MemberProfile;