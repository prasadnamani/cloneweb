import React from 'react'
import { Grid } from '@material-ui/core';


export default function Div(){
    const gadjust={
       
        padding:"0px 30px 40px 20px",
    
    }
    return(
        <div style={{margin:"100px 0px 0px",backgroundColor:'rgb(11,19,32)',color:'white',textAlign:'left'}}>
          <Grid container spacing={9} style={gadjust} >
              
                <Grid item xs={12} >
                    <h2>Frictionless, simple, easy</h2>
                    <p>Freshworks makes it fast and easy for businesses to delight their customers and employees.</p>

                    <p>We take a fresh approach to how businesses discover, engage with, and realize value from software throughout their journey.</p>
                    
                </Grid> 
               
            
                <Grid item xs={12} sm={6} >
                    <img src="https://website-assets-fw.freshworks.com/attachments/cksegp1j016clf6g002na6gni-icon-get-up.full.png" alt="yell" width="15%" height="30%"></img>
                    <h2>Get up and running with no barriers</h2>
                    <p>Try or purchase our software directly from our website, and onboard in a matter of days, not months.</p>
                    <h4><a href="youtube" style={{color:'red'}}>Start Free Trial</a></h4>             
                </Grid>
             
            
                <Grid item xs={12} sm={6} >
                    <img src="https://website-assets-fw.freshworks.com/attachments/cksegthxt1evgprg0agwz8g3j-icon-choose-price.full.png" alt="doll" width="15%" height="25%"></img>
                  <h2>Choose your pricing plan</h2>
                 <p> Our pricing plans are designed for modern business use cases and affordable for organizations of all sizes.</p>
                 <h4><a href="youtube" style={{color:'red'}}>See Pricing</a></h4>
                </Grid>
                
                
                <Grid item xs={12} sm={6} >
                    <img src="https://website-assets-fw.freshworks.com/attachments/cksegverv2m2ujqfzql2x6dr0-icon-build-and.full.png" alt="sqres" width="15%" height="25%"></img>
                  <h2>Build and customize as you go</h2> 
                  <p>Extend and tailor experiences to meet your unique business needs, with low-code development and over 1,100 custom apps made available on our marketplace.</p>
                  <h4><a href="youtube" style={{color:'red'}}>Visit Market Place</a></h4>
                </Grid>

                


                
                <Grid item xs={12} sm={6}>
                    <img src="https://website-assets-fw.freshworks.com/attachments/cksfx0eo5021vibg0n897i2jy-80-80.full.png" alt="" width="20%" height="30%"></img>
                  <h2>Create value, fast</h2> 
                  <p>Create value, fast
                     Accelerate your team’s productivity and efficiency with modern automation and collaboration tools, to get tangible results in no time.</p>
                     <h4><a href="youtube" style={{color:'red'}}>Learn How</a></h4>
                </Grid>
                
            </Grid> 
        </div>
    )
}