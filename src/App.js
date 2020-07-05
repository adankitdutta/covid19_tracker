import React,{Component} from "react";

import {Cards, Chart , StatePicker, District} from "./components";

import styles from "./App.module.css";
import coronaImage from "./images/image.png"
import {fetchData,fetchDistrict} from "./api";


class App extends Component{
    state={
        data:{},
        state:'',
        district:'',
    }

    async componentDidMount(){
        const fetchedData=await fetchData();
        
        this.setState({data:fetchedData})
    }

    handleStateChange=async (state)=>{
        const fetchedData=await fetchData(state);
        const fetchedDistrict=await fetchDistrict(state);
        this.setState({data:fetchedData, state:state,district:fetchedDistrict});
        // console.log(fetchedDistrict);
    }

    render(){
        const {data,state,district}=this.state;
        return(
            <div className={styles.container}>
            <img className={styles.image} src={coronaImage} alt="COVID-19"/>
            <h1 className={styles.heading}>INDIA</h1>
            <StatePicker handleStateChange={this.handleStateChange}/>
            <Cards data={data}/>
            <Chart data={data} state={state}/>
            {state && state!=="Total"?<div className={styles.container1}><h3>District-Wise Data For {state}</h3><District district={district}/></div>:<div></div>}
            <h4 className={styles.helpline}>COVID-19 Helpline Number : <u>+91-11-23978046</u> </h4>
            <h5>Made with ❤ by Ankit Dutta</h5>
            </div>
        )
    }
}

export default App;