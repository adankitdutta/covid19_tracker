import React,{useState,useEffect} from 'react';
import {fetchDailyData} from "../../api";
import {Line,Bar} from "react-chartjs-2";

import styles from "./Chart.module.css";

const Chart=({data:{confirmed,active,recovered,deaths},state})=>{
    const [dailyData,setDailyData]=useState([]);

    useEffect(()=>{
        const fetchApi=async ()=>{
            setDailyData(await fetchDailyData());
        }
        fetchApi();
    },[]);

    const lineChart=(
       dailyData.length? (<Line
        data={{
            labels:dailyData.map(({date})=> date),
            datasets:[{
                data:dailyData.map(({totalconfirmed})=>totalconfirmed),
                label:'Confirmed',
                borderColor:'red',
                fill:true,
            },{
                data:dailyData.map(({totaldeceased})=>totaldeceased),
                label:'Death',
                borderColor:'black',
                backgroundColor:'rgba(0,0,0,0.5)',
                fill:true,
            },{
                data:dailyData.map(({totalrecovered})=>totalrecovered),
                label:'Recovered',
                borderColor:'green',
                backgroundColor:'rgba(0,255,0,0.5)',
                fill:true,
            }],
        }}
        />):null
    )
        const barChart = (
            confirmed ? (
              <Bar
                data={{
                  labels: ['Confirmed','Active' ,'Recovered', 'Deaths'],
                  datasets: [
                    {
                      label: 'People',
                      backgroundColor: ['rgba(255, 0, 0, 0.5)','rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(0, 0, 0, 0.5)'],
                      data: [confirmed,active, recovered, deaths],
                    },
                  ],
                }}
                options={{
                  legend: { display: false },
                  title: { display: true, text: `Current condition in ${state}` },
                }}
              />
            ) : null
          );

    return(
        <div className={styles.container}>
            {state?barChart:lineChart}
        </div>
    )
}

export default Chart;