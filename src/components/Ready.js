import React from 'react';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

    body:{
        
        flexGrow:1,
        
        margin:'50px 0px 0px',
        padding:"0px 40px 0px",
        backgroundColor:'#0b1320',
        backgroundImage:"url(https://website-assets-fw.freshworks.com/attachments/cksejum4900q4sng0frxzqm0j-banner1.full.png)",
        backgroundRepeat:'none',
        color:'white',
        // background:'linear-gradient(170deg,deepskyblue 20%,navy 90%)',
        // backgroundColor: 'rgba(186, 211, 76, 0.1)',
  
    },
  }));
export default function Ready(){
    const classes = useStyles();
    return(
        <div>
        
        <div className={classes.body}>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <h1>Ready to get started?</h1>
                    <p>Join our community of 50,000+ companies of all sizes who use Freshworks’ modern SaaS products to make it fast and easy to delight their customers and employees.</p>
                    <Button color="secondary" variant="contained" size="large" >SEE LIFE AT FRESH WORKS </Button>
                </Grid>
                
                
            </Grid>
            
               
                

        
         </div>
         <div>
            <h1>footer</h1>
        </div>
        </div>
        
    )
}