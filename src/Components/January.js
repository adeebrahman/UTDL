import React from 'react'
import { 
    Typography, 
    createTheme, 
    responsiveFontSizes,
    ThemeProvider,
    Box
    } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Calendar from 'react-awesome-calendar';



const useStyles = makeStyles({
    title: {
        //fontSize will be overwritten by h3
        color: '#0288D1',
    },
})



const January = () => {
    const classes = useStyles();

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return(
        <>               
                <table border="2"cellpadding="12" align="center" bordercolor="white">
                    <tr>
                        <th colspan="7">January 2022</th>
                    </tr>

                    <tr>
                        <th>S</th>
                        <th>M</th>
                        <th>T</th>
                        <th>W</th>
                        <th>T</th>
                        <th>F</th>
                        <th>S</th>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                    </tr>
                </table> 
        </>
    )
}

export default January;