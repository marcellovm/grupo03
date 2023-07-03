import {Link} from "react-router-dom";
import {Box, Button, Container, TextField, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Logo from './img/dc-logo.png';
import './styles.scss';
import * as React from 'react';

import Badge from '@mui/material/Badge';



export default function NavBar() {         
    return (
        <div className="navbar">
            <Container fixed>
                <Box sx={{justifyContent: 'space-between', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <div>
                        <div className="navbar-logo">
                            <img src={Logo}/>
                            <Link to='/'><h1>Digital Store</h1></Link>
                        </div>
                       
                    </div>
                    <div className="input-text">
                        <TextField id="outlined-basic" label="Pesquisar produto..." variant="outlined" size="small"/>
                        <div className="search-click">
                            <span><SearchIcon/></span>
                        </div>
                    </div>
                    <Link to='/'><span>Cadastre-se</span></Link>                    
                    <Link to='/'><Button variant="contained">Entrar</Button></Link>
                    <Link to='/'>   
                        <Badge badgeContent={2}>
                             <ShoppingCartOutlinedIcon/>   
                        </Badge>                                                                                       
                    </Link> 
                                                 
                </Box>
            </Container>   
                      
        </div>        
    )
}