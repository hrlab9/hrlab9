import { Collapse, Paper,Typography } from '@material-ui/core';
import React, {useState} from 'react';
import { makeStyles, fade} from '@material-ui/core/styles';
import InputCard from './InputCard';


// Used to give some Style to the Card Boxes
const useStyle = makeStyles ((theme) => ({
    root:{
        
        marginTop: theme.spacing(1),
        
    },
    
    addCard:{
        padding: theme.spacing(1,1,1,2),
        margin: theme.spacing(0,1,1,1),
        background:"FAFAFA",
        '&:hover':{
          backgroundColor: fade('#000',0.15),
        },
    },
}));
// this is the function for the +ADDCARD button////////////////////////////////////////////////////
export default function InputContainer({listId, type}) {
    const classes = useStyle();
    const [open, setOpen] = useState(false);
    return (
        //
        <div className= {classes.root}>
            <Collapse in={open}>
            <InputCard setOpen={setOpen} listId = {listId} type={type} />
            </Collapse>
            <Collapse in={!open}>
         <Paper className = {classes.addCard} elevation={0} onClick={()=> setOpen(!open)}> 
             <Typography>
             {type === 'card'?'+ Add Card':'Add Another List'}
             </Typography>
        </Paper> 
        </Collapse>
        </div>
    );
}
