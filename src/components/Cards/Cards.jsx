import React from 'react';
import Countup from 'react-countup';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import cx from 'classnames';

import styles from "./Cards.module.css";

const Cards=({data: {confirmed,active, recovered,deaths,lastupdatedtime,deltaconfirmed,
                        deltarecovered,deltadeaths}})=>{
    if(!confirmed){
        return 'Loading...'
    }
    var dateString = lastupdatedtime.slice(0,10);
    var dateParts = dateString.split("/");
    var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); 
    var time=lastupdatedtime.slice(11,);
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={2} className={cx(styles.card,styles.confirmed)}>
                    <CardContent>
                        <Typography color="error" gutterBottom><strong>CONFIRMED</strong></Typography>
                        <Typography variant="h5">
                            <Countup start={0} end={parseInt(confirmed, 10)} duration={2} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">Last Update:</Typography>
                        <Typography color="textSecondary">{dateObject.toDateString()} {time}</Typography>
                        <Typography variant="body2">TODAY (as per last update) -</Typography>
                        <Typography color="error">Confirmed: <Countup start={0} end={parseInt(deltaconfirmed, 10)} duration={2} separator=","/></Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={cx(styles.card,styles.active)}>
                    <CardContent>
                        <Typography color="primary" gutterBottom><strong>ACTIVE</strong></Typography>
                        <Typography variant="h5">
                            <Countup start={0} end={parseInt(active, 10)} duration={2} separator=","/>
                        </Typography>
                        <Typography color="initial">Active Percent: {Math.round((parseInt(active, 10)/ parseInt(confirmed,10)) * 10000) / 100}</Typography>
                        <Typography color="textSecondary">Last Update:</Typography>
                        <Typography color="textSecondary">{dateObject.toDateString()} {time}</Typography>
                        {/* <Typography variant="body2">Active cases of Covid-19</Typography> */}
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography className={styles.recoveredtext} gutterBottom><strong>RECOVERED</strong></Typography>
                        <Typography variant="h5">
                            <Countup start={0} end={parseInt(recovered, 10)} duration={2} separator=","/>
                        </Typography>
                        <Typography color="initial">Recovery Percent: {Math.round((parseInt(recovered, 10)/ parseInt(confirmed,10)) * 10000) / 100}</Typography>
                        <Typography color="textSecondary">Last Update:</Typography>
                        <Typography color="textSecondary">{dateObject.toDateString()} {time}</Typography>
                        <Typography variant="body2">TODAY (as per last update) -</Typography>
                        <Typography className={styles.recoveredtext}>Recovered: <Countup start={0} end={parseInt(deltarecovered, 10)} duration={2} separator=","/></Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="initial" gutterBottom><strong>DECEASED</strong></Typography>
                        <Typography variant="h5">
                            <Countup start={0} end={parseInt(deaths, 10)} duration={2} separator=","/>
                        </Typography>
                        <Typography color="initial">Death Percent: {Math.round((parseInt(deaths, 10)/ parseInt(confirmed,10)) * 10000) / 100}</Typography>
                        <Typography color="textSecondary">Last Update:</Typography>
                        <Typography color="textSecondary">{dateObject.toDateString()} {time}</Typography>
                        <Typography variant="body2">TODAY (as per last update) -</Typography>
                        <Typography color="initial"> Deceased: <Countup start={0} end={parseInt(deltadeaths, 10)} duration={2} separator=","/></Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;