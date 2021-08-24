import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({

  body:{
      //display:'flex',
      margin:'0 auto',
     padding: theme.spacing(1),
      //padding:'0px',
      //marginTop:'0px',
      //marginRight:'0px',
      backgroundImage:"url(https://website-assets-fw.freshworks.com/attachments/cks7v2jv501lmrffzrb67m1ua-gradient.one-half.png)",
      backgroundSize:'100% 100%',
      alignItems:'center'
     

  },
  adj:{
    marginTop:'0px',
  },

  
  
}));

// const image3 =
//  {img};

export default function Body() {
  

  const classes = useStyles();
  return (
   
       
        <div className={classes.body}> 
    
     
       <Grid container>
     
         <Grid item xs={12} sm={6}>
           
            <h1 style={{fontSize:'35px',}}>Delight Made Easy</h1>
             <p style={{fontSize:'18px'}}>We make it fast and easy for businesses to delight their customers and employees.</p>
             <div className={classes.btn}>
                
                 <Button variant="contained" color="primary" size="large" style={{padding:'5px'}}>GET STARTED</Button>
               
                 <Button variant="contained" color="primary" size="large" style={{margin:'10px',padding:'5px'}}>CONTACT SALES</Button> 
               
            
        </div>
      
               
          
      </Grid>
      
      <Grid item xs={12} sm={6}>
      
      <div>
           <img src="https://website-assets-fw.freshworks.com/attachments/cksefyet42l0ljqfzfmbgk84b-hero-image-0811-front.one-half.png" alt="hello" width="100%" height="100%"></img>
      </div>
          
      </Grid>
    </Grid>
    
    
    </div>
    
  );
}