import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({

    body:{
        display:'flex',
        position:'static',
        flexGrow:1,
        padding: theme.spacing(0),
        margin:'0px 50px 0px'
        // background:'linear-gradient(170deg,deepskyblue 20%,navy 90%)',
        // backgroundColor: 'rgba(186, 211, 76, 0.1)',
  
    },
    adj:{
        padding:'50px',
    }
    
  }));
export default function Comp(){
    const imgstyle={
      width:'100%',
      height:'100%',
      margin:"0px 20px 0px",
      
    };
    
    return(
        
        <div>
            <Grid container className={mergeClasses.adj}>
                <Grid item xs={2}>
                    <img src="https://website-assets-fw.freshworks.com/attachments/cjofbed7300ehb2g0mip1g658-logo-pearson.one-half.png" alt="pearson" style={imgstyle}></img>
                </Grid>
                <Grid item xs={2}>
                    <img src="https://website-assets-fw.freshworks.com/attachments/cjofbed7300ehb2g0mip1g658-logo-pearson.one-half.png" alt="pearson" style={imgstyle}></img>
                </Grid>
                <Grid item xs={2}>
                    <img src="https://website-assets-fw.freshworks.com/attachments/cjofbed7300ehb2g0mip1g658-logo-pearson.one-half.png" alt="pearson" style={imgstyle}></img>
                </Grid>
                <Grid item xs={2}>
                    <img src="https://website-assets-fw.freshworks.com/attachments/cjofbed7300ehb2g0mip1g658-logo-pearson.one-half.png" alt="pearson" style={imgstyle}></img>
                </Grid>
                <Grid item xs={2}>
                    <img src="https://website-assets-fw.freshworks.com/attachments/cjofbed7300ehb2g0mip1g658-logo-pearson.one-half.png" alt="pearson" style={imgstyle}></img>
                </Grid>
                <Grid item xs={2}>
                    <img src="https://website-assets-fw.freshworks.com/attachments/cjofbed7300ehb2g0mip1g658-logo-pearson.one-half.png" alt="pearson" style={imgstyle}></img>
                </Grid>
                <Grid item xs={2}>
                    <img src="https://website-assets-fw.freshworks.com/attachments/cjofbed7300ehb2g0mip1g658-logo-pearson.one-half.png" alt="pearson" style={imgstyle}></img>
                </Grid>
                <Grid item xs={2}>
                    <img src="https://website-assets-fw.freshworks.com/attachments/cjofbed7300ehb2g0mip1g658-logo-pearson.one-half.png" alt="pearson" style={imgstyle}></img>
                </Grid><Grid item xs={2}>
                    <img src="https://website-assets-fw.freshworks.com/attachments/cjofbed7300ehb2g0mip1g658-logo-pearson.one-half.png" alt="pearson" style={imgstyle}></img>
                </Grid>
                
            </Grid>
        </div>
    )
}