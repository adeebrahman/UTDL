import React from 'react'
import { 
    Typography, 
    createTheme, 
    responsiveFontSizes,
    ThemeProvider,
    Box 
    } from '@mui/material';
import { makeStyles } from '@mui/styles';




const useStyles = makeStyles({
    title: {
        //fontSize will be overwritten by h3
        color: '#0288D1',
    },
})

const WorkshopCalendar = () => {
    const classes = useStyles();

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return(
        <> 
            <ThemeProvider theme={theme} >

                <Box sx={{ mx: 2, mt: 2 }}>
                    <Typography variant='h3' ml-5 className={classes.title}>
                        Calendar
                    </Typography>
                </Box>

            </ThemeProvider>

        </>
    )
}

export default WorkshopCalendar;