import React from 'react'
import { makeStyles, Toolbar, Button } from '@material-ui/core';
import {AppBar} from '@material-ui/core';
    
const useStyles = makeStyles((theme)=>({     
AppBar:{
        background:'none',        
    },
    title:{
        flexGrow:1,
    },
    btn:{
        color:'#fff',
        backgroundColor:'#000' // Remember the freaking # for referencing Colours
    },
}));

export default function TopBar ({setOpenSideMenu}){
    const classes = useStyles();
    return (
        <div>
            <AppBar position = "static" 
            className={classes.AppBar} elevation={0}>
                <Toolbar>
                    <h1 className={classes.title}>Plan</h1>
                    <Button className ={classes.btn} 
                    onClick={()=>setOpenSideMenu(true)}> 
                        ChangeBackG
                    </Button>
                </Toolbar>             
            </AppBar>
        </div>
    );
}
