import React,{useState,useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './StatePicker.module.css';

import {fetchStates} from '../../api';

const StatePicker=({handleStateChange})=>{

    const [fetchedStates,setFetchedStates]=useState([]);

    useEffect(()=>{
        const fetchAPI=async ()=>{
            setFetchedStates(await fetchStates());
        }
        fetchAPI();
    },[setFetchedStates]);


    return(
        <div className={styles.container}>
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e)=>handleStateChange(e.target.value)}>
            <option value=''>All States</option>
                {fetchedStates.map((state,i)=><option key={i} value={state}>{state}</option>)}
            </NativeSelect>
        </FormControl>
        </div>
    )
}

export default StatePicker;