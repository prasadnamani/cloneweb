import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import { Grid } from '@material-ui/core'
//import './CallCss.css'
import { Button } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({

    body:{
        //display:'flex',
        //position:'static',
        //flexGrow:1,
        //padding: theme.spacing(0),
        margin:'50px 40px 0px'
        // background:'linear-gradient(170deg,deepskyblue 20%,navy 90%)',
        // backgroundColor: 'rgba(186, 211, 76, 0.1)',
  
    },  
  }));
  


export default function Call(){
    
    const classes = useStyles();
    return(

   <div className={classes.body}> 
    
     
     <Grid container>
     
      <Grid item xs={12}>
        <div className={classes.adj}>
            <h2 style={{fontSize:"30px",}}>An experience they’ll love</h2>
             <p style={{fontSize:'18px'}}>Our fresh approach to business software has enabled over 50,000 companies big and small across the globe to exceed customer and employee expectations. We deliver on the unfulfilled promise of easy-to-use SaaS software, and help our customers drive clear business results.</p>

        </div> 
      </Grid>
      
      <Grid item xs={12} sm={6} md={6}>
      
      <div style={{margin:"30px 0px 0px",textAlign:'center',padding:"0px 10px 0px"}}>
           <img src="https://website-assets-fw.freshworks.com/attachments/ckseg6ken0ugrpkg0ba4l86we-ill-delight-customers.one-half.jpg" alt="hello" width="100%" height="100%" style={{padding:"0px 0px 0px 0px"}}></img>
           <h1 style={{fontSize:"40px"}}>Delight your customers</h1>
           <p>Exceed the evolving expectations your customers have, with contextual and relevant conversations powered by a 360-degree customer view.</p>
           <Button variant="contained" color="primary" size="large" >
             SOLUTIONS FOR CUSTOMER SUPPORT
            </Button>
         <br />
         <br />
         <Button variant="contained" color="primary" size="large">
             
          SOLUTIONS FOR SALES AND MARKETING
         </Button>
      </div>
          
      </Grid>
      <Grid item xs={12} sm={6}>
      <div style={{margin:"30px 0px 0px",textAlign:'center',padding:"0px 10px 0px"}}>
           <img src="https://website-assets-fw.freshworks.com/attachments/cksegclxu23k2klfze5r4817y-ill-delight-employees.one-half.jpg" alt="hello" width="100%" height="100%"></img>
           <h1 style={{fontSize:"40px"}}>Delight your employees</h1>
           <p>Help your employees crush internal NPS ratings with our intuitive, easy-to-use products, so they can spend less time navigating bloated, difficult-to-use legacy software.</p>
           <Button variant="contained" color="primary" size="large">
             SOLUTIONS FOR IT SRVICE MANAGEMENT
            </Button>
         <br />
         <br />
         <Button variant="contained" color="primary" size="large">
             
          SOLUTIONS FOR HR MANAGEMENT
         </Button>
      </div>
      </Grid>
    </Grid>
    
    
    </div>
    )
}