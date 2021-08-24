import React from 'react';
import { Grid } from '@material-ui/core';


export default function Comp(){
    const imgstyle={
      width:'50%',
      height:'50%',
      margin:"50px 20px 0px",
      
    };
    
    return(
        
        <div>
            <Grid container spacing={4}>
            <Grid item xs={12}>
                    <h1>rusted by 50K+ customers big and small</h1>
                    <p>We are a leading provider of modern SaaS solutions that solve multiple, complex business problems to companies of all sizes. Businesses from more than 120 countries around the world use Freshworks’ products to delight their customers and employees every day.</p>
                </Grid>
                <Grid item xs={3} >
                    <img src="https://website-assets-fw.freshworks.com/attachments/cjofbed7300ehb2g0mip1g658-logo-pearson.one-half.png" style={imgstyle} alt="" ></img>
                   
                </Grid>
                   
                <Grid item xs={3}>
                    <img src="https://website-assets-fw.freshworks.com/attachments/cjof9itid006mfjfzxvl4ytpx-logo-bridgestone.one-half.png" style={imgstyle} alt="" ></img>
                </Grid>
                <Grid item xs={3}>
                   <img src="https://website-assets-fw.freshworks.com/attachments/cjof9j9f3005tb1g0nbbmckre-logo-buying-show.one-half.png" style={imgstyle} alt="" ></img>
                </Grid>
                <Grid item xs={3}>
                    <img src="https://website-assets-fw.freshworks.com/attachments/cjof9rgj200bdb1g0uurm44o4-logo-teamviewer.one-half.png" style={imgstyle} alt="" ></img>
                </Grid>
                <Grid item xs={3}>
                    <img src="https://website-assets-fw.freshworks.com/attachments/cjuv4xqrb00glhfg0115znjzk-group-6-copy-5.one-half.png" style={imgstyle} alt="" ></img>
                </Grid>
                <Grid item xs={3}>
                    <img src="https://website-assets-fw.freshworks.com/attachments/cjqp1qi61022tfyg0mh343dzl-klarna2x.one-half.png" style={imgstyle} alt="" ></img>
                </Grid>
                <Grid item xs={3}>
                    <img src="https://website-assets-fw.freshworks.com/attachments/ckjmi0rks07lk4qg10s5lso0y-multichoice.one-half.png" style={imgstyle} alt="" ></img>
                </Grid>
                <Grid item xs={3}>
                    <img src="https://website-assets-fw.freshworks.com/attachments/ckjmirr4907mgodfzq0ndvi0m-deichmann.one-half.png" style={imgstyle} alt="" ></img>
                </Grid>
                <Grid item xs={3}>
                    <img src="https://website-assets-fw.freshworks.com/attachments/ckk3fdeji00gjrug1wqrzyjr5-untitled-design-24.one-half.png" style={imgstyle} alt="" ></img>
                </Grid>
                <Grid item xs={3}>
                    <img src="https://website-assets-fw.freshworks.com/attachments/ckjmmrbao09644qg1lgjafjv2-untitled-design-29.one-half.png" style={imgstyle} alt="" ></img>
                </Grid>
                <Grid item xs={3}>
                    <img src="https://website-assets-fw.freshworks.com/attachments/ckjmmir9f08tvodfzxduqa4i5-untitled-design-27.one-half.png" style={imgstyle} alt="" ></img>
                </Grid>
                <Grid item xs={3}>
                    <img src="https://website-assets-fw.freshworks.com/attachments/ckjmmabb108xh4qg1urqz0dlf-untitled-design-25.one-half.png" style={imgstyle} alt="" ></img>
                </Grid>
            </Grid>
        </div>
    )
}