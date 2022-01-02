import React from 'react'
import PropTypes from 'prop-types';
import { 
    Grid, 
    Typography, 
    createTheme, 
    responsiveFontSizes,
    ThemeProvider,
    Box,
    Tabs,
    Tab 
    } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    title: {
        color: '#0288D1',     

    },
})

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}
  
TabPanel.propTypes = {
children: PropTypes.node,
index: PropTypes.number.isRequired,
value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
};
}
  

const DesignathonEventDetails = () => {
    
    const classes = useStyles();

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <> 
            <ThemeProvider theme={theme}>

                <Box sx={{ mx: "auto", maxWidth: 1200}} >
                    <Box sx={{ mx: 2, mt: 2 }}>
                            <Typography variant='h3' ml-5 className={classes.title}>
                                Event Details
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
                        <Box sx={{ width: '100%', typography: 'subtitle2', fontWeight: 'bold'}}>
                            <Tabs value={value} onChange={handleChange} centered>
                                <Tab label="INFO" {...a11yProps(0)} />
                                <Tab label="PRIZE" {...a11yProps(1)} />
                                <Tab label="SIGN UP" {...a11yProps(2)} />
                            </Tabs>
                        </Box>

                        <TabPanel value={value} index={0}>
                            
                            <Box sx={{ mx: 2, mt: 2 }}>
                                <Typography variant='h5' ml-5 className={classes.title}>
                                    When
                                </Typography>
                                <Typography variant='h4' ml-5>
                                    February 5-6, 2022
                                </Typography>
                                <br/>
                                <Typography variant='h5' ml-5 className={classes.title}>
                                    Where
                                </Typography>
                                <Typography variant='h4' ml-5>
                                    TBD
                                </Typography>
                            </Box>
                        </TabPanel>

                        <TabPanel value={value} index={1}>
                            <Box sx={{ mx: 2, mt: 2 }}>
                                Coming Soon
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <Box sx={{ mx: 2, mt: 2 }}>
                                Coming Soon
                            </Box>
                        </TabPanel>

                    </Grid>
                </Box>
             
            </ThemeProvider>  
        </>
    )
}

export default DesignathonEventDetails;