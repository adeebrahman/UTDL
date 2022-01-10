import React from 'react'
import { 
    Grid, 
    Typography,
    AppBar,
    Box,
    Button,
    IconButton,
    Toolbar,
    Drawer,
    List,
    ListItem ,
    ListItemIcon,
    ListItemText,
    ListItemButton,
    } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import utdlWings from '../img/Utdlwhite.png'


const useStyles = makeStyles({
    title: {
        //fontSize will be overwritten by h3
        color: 'white',
        
    },


})

const Navbar = () =>{

    const classes = useStyles();

    const [state, setState] = React.useState({
        left: false,
      });
    
    const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }

    setState({ ...state, [anchor]: open });
    };

    const navLinks = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Designathon',
            link: '/Designathon'
        },
        {
            name: 'Workshops',
            link: '/Workshops'
        },
        {
            name: 'Meet The Team',
            link: '/Members'
        },
    ]
    
    
    const list = (anchor) => (
    <Box
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
    >
        <List>
        {navLinks.map((item) => (
            <ListItemButton 
                component="a" 
                href={item.link} 
                sx={{minWidth:200, ml: 1}}
            >
            <ListItemText primary={item.name} />
            </ListItemButton>
        ))}
        </List>
    </Box>
    );

    return(
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar 
                    position="static"
                    sx={{bgcolor:'#004aad'}}
                >
                    <Toolbar>
                    
                        <React.Fragment key={'left'}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={toggleDrawer('left', true)}
                            >
                                <MenuIcon />
                            </IconButton>

                        
                            
                            <Drawer
                                anchor='left'
                                open={state['left']}
                                onClose={toggleDrawer('left', false)}
                                
                            >
                                {list('left')}
                            </Drawer>
                        </React.Fragment>
                        <Box sx={{ mx: "auto", width: 200}}>
                            <a href='/'>
                                <img src={utdlWings} height='30'/>
                            </a>
                        </Box>
                        
                    </Toolbar>
                </AppBar>
                </Box>
        </>
    )
};

export default Navbar;