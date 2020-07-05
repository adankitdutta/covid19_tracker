import axios from "axios";

const url="https://api.covid19india.org/data.json";

export const fetchData = async (state) =>{
    if(state){        
        try{
            const {data:{statewise}}=await axios.get(url);
            var index;
            statewise.some(function(entry, i) {
                if (entry.state === state) {
                    index = i;
                    return true;
                }
                });
            const modifiedData={
                confirmed:statewise[index].confirmed,
                active:statewise[index].active,
                recovered:statewise[index].recovered,
                deaths:statewise[index].deaths,
                lastupdatedtime:statewise[index].lastupdatedtime,
                deltaconfirmed:statewise[index].deltaconfirmed,
                deltadeaths:statewise[index].deltadeaths,
                deltarecovered:statewise[index].deltarecovered,
            }
            return modifiedData;
        }
        catch(error){
            console.log(error);
        }       
    }
    else{
    try{
        const {data:{statewise}}=await axios.get(url);
        
        const modifiedData={
            confirmed:statewise[0].confirmed,
            active:statewise[0].active,
            recovered:statewise[0].recovered,
            deaths:statewise[0].deaths,
            lastupdatedtime:statewise[0].lastupdatedtime,
            deltaconfirmed:statewise[0].deltaconfirmed,
            deltadeaths:statewise[0].deltadeaths,
            deltarecovered:statewise[0].deltarecovered,
        }
        return modifiedData;
    }
    catch(error){
        console.log(error);
    }
}
}

export const fetchDailyData= async()=>{
    try{
         const {data:{cases_time_series}}=await axios.get(url);
         const modifiedData=cases_time_series.map((dailyData)=>({
             totalconfirmed:dailyData.totalconfirmed,
             totaldeceased:dailyData.totaldeceased,
             totalrecovered:dailyData.totalrecovered,
             date:dailyData.date,
         }));

         return modifiedData;
    }
    catch(error){
        console.log(error);
    }
}


export const fetchStates= async()=>{
    try{
        const {data:{statewise}}=await axios.get(url);

        return statewise.map((name)=>name.state);
    }
    catch(error){
        console.log(error);
    }
}