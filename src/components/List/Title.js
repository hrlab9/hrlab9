import { Typography, InputBase } from '@material-ui/core';
import React, {useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'; // 3Dots Icon Import
import storeApi from '../../utils/storeApi';


// Style for the Title Box
const useStyle = makeStyles ((theme) => ({
    editableTitleContainer:{
        margin: theme.spacing(1),
        display:'flex',
    },
    editableTitle:{
        flexGrow: 1,
        fontSize: "1.2rem",
        fontWeight: "bold",
    },
    input:{
        fontSize: "1.2rem",
        fontWeight: "bold",
        margin: theme.spacing(1),
        "&:focus":{
            background:'#ddd',

        },
    },    
}));
////////////////////////////////////////////////////////////////////////////////////////////////////

export default function Title({title, listId}) {
    const [open, setOpen] = useState(false);
    const [newTitle,setNewTitle]= useState(title);
    const {updateListTitle} = useContext(storeApi);
    const classes = useStyle();
    const handleOnChange = (e)=>{
        setNewTitle(e.target.value);
    };

    const handleOnBlur = () =>{
        updateListTitle(newTitle,listId)  
        setOpen(false);
        
    };


    return (
        <div>
            {open? (
            <div>
            <InputBase 
            /** // [value="To +"] // I had the props for "value" duplicated on Line 39// **/
            onChange={handleOnChange}
            autoFocus
            value = {newTitle} 
            inputProps={{
                className: classes.input,
                }}
                fullWidth
                onBlur =  {handleOnBlur}
                />
            </div>
    ):(
        <div className={classes.editableTitleContainer}>
            <Typography
            onClick ={()=> setOpen(!open)} 
            className={classes.editableTitle}>
            {title}
            </ Typography>
            <MoreHorizIcon/>

    </div>
    )}       
    </div>
    );
}