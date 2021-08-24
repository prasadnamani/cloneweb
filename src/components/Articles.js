import React from 'react'
import { Button, Grid } from '@material-ui/core';


export default function Articles(){
    const gadjust={
        textAlign:'center',
       
        padding:"0px 90px 40px 50px",
        alignItems:'center',
        
    }
    
    return(
        <div>
        <div style={{margin:"90px 0px 0px",alignItems:'center',}}>
             <h1>What’s new at Freshworks</h1>  
             </div>

        <div style={{margin:"0px auto",padding:"10px 30px 10px 40px"}}>
            <Grid container spacing={4} style={gadjust} >
                <Grid item xs={12} sm={4} md={4} >
                    
                    <img src="https://website-assets-fw.freshworks.com/attachments/cksej2r4n00eto2fzfmuqumae-whatsnew-tile-337x240-cloud100.one-half.png" alt="yell" width="100%" height="100%"></img>
                    <h3>Freshworks Ranked Number 10 on the Forbes 2021 Cloud 100</h3>
                    <p>Fifth consecutive year on the list driven by Freshworks CRM and ITSM product adoption in 120 countries</p>
                    <h4><a href="youtube" style={{color:'red'}}>Read More-</a></h4> 
                    
                </Grid>
                
                <Grid item xs={12} sm={4} md={4} >
                    <img src="https://website-assets-fw.freshworks.com/attachments/cksej87fc00fhsog0m3w96l6d-whatsnew-tile-337x240-gart-crm.one-half.png" alt="doll" width="100%" height="100%"></img>
                  <h3>Freshworks is a Visionary Again!</h3>
                 <p> 2021 Gartner Magic Quadrant for the CRM Customer Engagement Center.</p>
                 <h4><a href="youtube" style={{color:'red'}}>Read More-</a></h4>  
                </Grid>
                
               
                <Grid item xs={12} sm={4} md={4} >
                    <img src="https://website-assets-fw.freshworks.com/attachments/cksejar8m00kwo2fzt5yzkups-whatsnew-tile-337x240-di-v2.one-half.png" alt="sqres" width="100%" height="100%"></img>
                  <h3>Fresh Thinking on D&I</h3> 
                  <p>Fresh thinking on D&I - how Freshworks first Chief Diversity and Inclusion Officer plans to strike a positive balance</p>
                  <h4><a href="youtube" style={{color:'red'}}>Read More-</a></h4>  
                </Grid>
                
            </Grid>
            </div>
            
                <div style={{alignItems:'center'}}>
                <Button color="primary" variant="contained" size="large" >SEE ALL NEWS </Button>
                </div> 
                     
               
            
        </div> 
    )
}