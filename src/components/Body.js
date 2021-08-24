import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({

  body:{
      display:'flex',
      padding: theme.spacing(1),
      marginTop:'0px',
      backgroundImage:"url(https://website-assets-fw.freshworks.com/attachments/cks7v2jv501lmrffzrb67m1ua-gradient.one-half.png)",
      backgroundSize:'100% 100%',
      // background:'linear-gradient(170deg,deepskyblue 20%,navy 90%)',
      // backgroundColor: 'rgba(186, 211, 76, 0.1)',

  },
  adj:{
    marginTop:'90px',
  },
  head:{
    fontSize:'40px',
  },
  btn:{
    listStyleType:'none',
   
  },
  li:{
    display:'inline',
    padding:'10px',
  },
  
  
}));

// const image3 =
//  {img};

export default function Body() {
  

  const classes = useStyles();
  return (
    <div>
       <div style={{position:'fixed',backgroundColor:'#0b1320',width:'100%',color:'white'}}><h1>NAV BAR</h1></div>
        <div className={classes.body}> 
    
     
       <Grid container>
     
         <Grid item xs={12} sm={6}>
           <div className={classes.adj}>
            <h1 className={classes.head}>Delight Made Easy</h1>
             <p style={{fontSize:'20px'}}>We make it fast and easy for businesses to delight their customers and employees.</p>
             <div >
                <ul className={classes.btn}>
                 <li className={classes.li}>
                   <Button variant="contained" color="primary" size="large">GET STARTED</Button></li>
               
                 <li className={classes.li}><Button variant="contained" color="primary" size="large">CONTACT SALES</Button></li> 
               </ul>
            </div>
        </div>
      
               
          
      </Grid>
      
      <Grid item xs={12} sm={6}>
      
      <div>
           <img src="https://website-assets-fw.freshworks.com/attachments/cksefyet42l0ljqfzfmbgk84b-hero-image-0811-front.one-half.png" alt="hello" width="100%" height="100%"></img>
      </div>
          
      </Grid>
    </Grid>
    
    
    </div>
    </div> 
  );
}