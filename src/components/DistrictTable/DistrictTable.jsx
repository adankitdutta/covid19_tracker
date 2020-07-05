import React from 'react';
import styles from "./DistrictTable.module.css";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


export default function District({district}) {
    const useStyles = makeStyles({
    table: {
    // minWidth: 0,
    }
  });
  const rows = [ ];
  function createData(name,confirmed, active, recovered, deceased) {
    rows.push({ name, confirmed, active, recovered, deceased });
  }
  var distsize=Object.keys(district).length;
  const addDistricts=()=>{ 
    
    for(var a=0;a<distsize;a++){
        var name=Object.keys(district)[a];  
        var confirmed=district[name].confirmed;
        var active=district[name].active;
        var recovered=district[name].recovered;
        var deceased=district[name].deceased;
        createData(name,confirmed,active,recovered,deceased)
        console.log(confirmed)
        
    }
}
  
const classes = useStyles();
  

  return (
      <div className={styles.container}>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="medium" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={styles.head} >District</TableCell>
            <TableCell align="right" className={styles.head}>CNF</TableCell>
            <TableCell align="right" className={styles.head}>A</TableCell>
            <TableCell align="right" className={styles.head}>R</TableCell>
            <TableCell align="right" className={styles.head}>D</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {addDistricts()}
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" className={styles.headside} >
                {row.name}
              </TableCell>
              <TableCell align="right">{row.confirmed}</TableCell>
              <TableCell align="right">{row.active}</TableCell>
              <TableCell align="right">{row.recovered}</TableCell>
              <TableCell align="right">{row.deceased}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
