import {AppBar,Toolbar,Typography, Stack, Button} from '@mui/material';
import {Link} from 'react-router-dom';
import image from './images/logo.jpg';
export default function Navbar(){
    return (
        <AppBar position='static' style={{background:'#2E86C1',fontFamily:'Arial'}} className='Nav'>
            <Toolbar>
            <img src={image} className="logo" />
            <p className='header' style={{fontFamily:'Open Sans'}}>
                Texas Student Led Chess Association
            </p>
            <Stack direction='row' spacing={4} sx={{marginLeft:'auto'}}>
                <Link to='/' style={{textDecoration:'none',color:'white'}}>Home</Link>
                <Link to='/team' style={{textDecoration:'none',color:'white'}}>Leadership Team</Link>
                <Link to='/about' style={{textDecoration:'none',color:'white'}}>About</Link>
                <Link to='/mission' style={{textDecoration:'none',color:'white'}}>Our Mission</Link>
            </Stack>
            </Toolbar>
      </AppBar>
    )
}