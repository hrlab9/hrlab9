import React , {useState, useContext} from 'react';
import {Button, InputBase, Paper, IconButton} from '@material-ui/core';
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles, fade } from '@material-ui/core/styles';
import storeApi from '../../utils/storeApi';


const useStyle = makeStyles ((theme) => ({
    card:{
        width: '280px',
        paddingBottom: theme.spacing(4),
        margin: theme.spacing(0,1,1,1),
         
        },
    
    input:{
        margin: theme.spacing(1),
    },

    btnConfirm: {

        background: '#5AAC44',
        color:"#fff",
        "&:hover":{
            background:fade('#5AAC44',0.55),
        },
    },

    confirm:{
        margin: theme.spacing(0,1,1,1),
    } 


}));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
export default function InputCard({setOpen, listId, type}) {
    const classes = useStyle();
    const {addMoreCard, addMoreList} = useContext (storeApi);
    
    const [title, setTitle] = useState('');
    
    const handleOnChange = (e) => {
        setTitle(e.target.value);
    };
    
    const handleBtnConfirm = () => {
        if(type==='card'){ 
        
        addMoreCard(title, listId);
        setTitle('');// In order to delete the last Card-Title registered so you can type a new one 
        setOpen(false);
         }

         else{
             addMoreList(title);
             setTitle('');// In order to delete the last Card-Title registered so you can type a new one 
             setOpen(false);
         }
        };

    /**
     * //////////////////////////////////////////////////////////////////////////
        const handleBlur = () => {
        setOpen(false);
        //settitle(''); //////// 
        
        THIS WAS PREVENTING THE -ADD List- BUTTON FUNcTION
    };
    **////////////////////////////////////////////////////////////////////////////

        return (
        
        <div>
            <div> 
            <Paper className= {classes.card}>                
                <InputBase 
                onChange={handleOnChange}
                multiline 
                onBlur={()=> setOpen(false)}
                fullWidth 
                inputProps={{
                    className: classes.input,
                }}
                value={title}
                placeholder={type === 'card'?"Enter the Card Title Here":"Enter the List Title"} // BEWAREEE ! do not use [=] , Please use [===] // THIS WAS OBSTRUCTING THE -ADD List- BUTTON FUNTION
                />
                </Paper>                 
            </div>
            

            <div className={classes.confirm}>
                
                <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>
                {type=== 'card'?'Add Card':'Add List'}</Button>

                <IconButton onClick={()=> setOpen(false)}> 
                <ClearIcon/>

                </IconButton>

            </div>
        </div>
    )
}
