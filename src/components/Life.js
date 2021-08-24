import React from 'react'
import { Button, Grid } from '@material-ui/core';


export default function Life(){
    const gadjust={
        textAlign:'left',
        padding:"0px 0px 0px 0px",
        alignItems:"center"
    
    }
    return(
        <div style={{margin:"60px 30px 0px",}}>
            <div>
          <Grid container spacing={4} style={gadjust} >
              
                <Grid item xs={12} >
                    <h1 style={{textAlign:"center"}}>We aspire to be one of the most loved companies in the world</h1>
                    
                </Grid> 
               
            
                <Grid item xs={12} sm={3} md={3} lg={3}>
                    <img src="https://website-assets-fw.freshworks.com/attachments/cksei9i7m17u4f6g0quue7y07-freshworks-banner-chat-3000x3000-final-craftsmanship-min.full.jpg" alt="yell" width="60%" height="60%"></img>
                    <h2>Culture</h2>
                    <p>A culture that supports high-quality work, joy and pride in that work, speed to execution, and intense customer focus.</p>
                         
                </Grid>
             
            
                <Grid item xs={12} sm={3} md={3} lg={3} >
                    <img src="https://website-assets-fw.freshworks.com/attachments/cksentdbp02unsng03c8bl6ys-untitled-design-2021-08-16t184407-551.full.png" alt="doll" width="70%" height="70%"></img>
                  <h2>Diversity</h2>
                 <p> Full-spectrum diversity, equity, and inclusion are key priorities for us.</p>
                 
                </Grid>
                
                
                <Grid item xs={12} sm={3} md={3} lg={3}>
                    <img src="https://website-assets-fw.freshworks.com/attachments/ckseisvvm0013o2fzr55qiheq-freshworks-banner-chat-3000x3000-final-actively-empowered-min.full.jpg" alt="sqres" width="70%" height="70%"></img>
                  <h2>Experience</h2> 
                  <p>Focus on enhancing the team experience by strengthening our managers’ leadership capabilities.</p>
                     
                </Grid>

                


                
                <Grid item xs={12} sm={3} md={3} lg={3}>
                    <img src="https://website-assets-fw.freshworks.com/attachments/ckseiwbr6001qtag0yhmrq0f2-ho-careers-thumbs-team.full.jpg" alt="" width="70%" height="70%"></img>
                  <h2>Team</h2> 
                  <p>4,000 employees and growing in offices across India, US, Europe, and Australia..</p>
                     
                </Grid>
               
                
            </Grid>

            
                <div style={{margin:"10px 0px 0px ",textAlign:"center"}}>
                <Button color="primary" variant="contained" >SEE LIFE AT FRESH WORKS </Button>
                </div> 
                     
               
                </div>
        </div> 
    )
}