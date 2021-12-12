import React, {useState} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { Drawer, Grow } from '@material-ui/core';
import colors from "../../utils/color";


const useStyles = makeStyles((theme)=>({drawer:{
    width:'400px',
},
menu:{
    display:'flex',
    marginTop: theme.spacing(2),
    justifyContent:'space-around',

},

optionContainer:{
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'space-around',
    marginTop: theme.spacing(2),
},

box:{
    width:'45%',
    height:'90px',
    backgroundColor: '',
    borderRadius:'9px',
    marginBottom: theme.spacing(2),

},
}))  ;  

export default function SideMenu({setOpenSideMenu, openSideMenu }) {
    const classes = useStyles(); //React Hook "useStyles" cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function
    const [openOptionColor,setOptionColor]= useState(false);
    const [openOptionImage,setOptionImage]= useState(false);


    return (
        <div>
            <Drawer open={openSideMenu} 
            anchor = "right" 
            onClose={()=>setOpenSideMenu(false)}>
            <div className={classes.drawer}>
            <div className={classes.menu}> 
                <div className={classes.box}
                style={{
                    backgroundImage:
                    'url(https://c4.wallpaperflare.com/wallpaper/943/826/490/digital-digital-art-artwork-painting-drawing-hd-wallpaper-preview.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
            }}
            onClick={()=> setOptionImage(true)}
                ></div>           

<div className={classes.box}
                style={{
                    backgroundImage:
                    'url(https://c4.wallpaperflare.com/wallpaper/55/897/164/science-fiction-landscape-space-planet-wallpaper-preview.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    }}
                    onClick={()=> {
                        setOptionColor(true);
                        setOptionImage(false);
                    }}
                ></div>           



               </div>

            {openOptionImage ? <Grow in ={openOptionImage}>
            <div className= {classes.optionContainer}>
                {colors.map((color, index)=>{
                    return(<div 
                        key={index}
                className={classes.box}
                style={{
                    backgroundColor: color,
                }}
                ></div>
                ); 
                })}
            </div>
            </Grow>: (
                <Grow in ={openOptionColor}>
                <div className= {classes.optionContainer}>
                    {colors.map((color, index)=>{
                        return(<div 
                            key={index}
                    className={classes.box}
                    style={{
                        backgroundColor: color,
                    }}
                    ></div>
                    ); 
                    })}
                </div>
                </Grow>
            )}           

                        </div>
            </Drawer>
        </div>
    );
}
