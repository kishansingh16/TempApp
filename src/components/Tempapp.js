import React, { useState ,useEffect} from "react";
import "./css/style.css";

const Tempapp=()=>{
    const[city,setCity]=useState(null);
    const[search,setSearch]=useState("");


    useEffect(() => {
        const fetchApi=async()=>{
            const url=`
            http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=bdcbca98761ea3c55907e29a6605eb1c`
            const response=await fetch(url);
            const resJson=await response.json();
            // console.log(resJson);
            setCity(resJson.main);
        };
        fetchApi();
    },[search])
    return(
        <>
        <div id="all-elements">
            <div className="box">
                <div className="inputData">
                    <input type="search"
                    className="inputField"
                    value={search}
                    onChange={(event)=>{setSearch(event.target.value)}}/>
                </div> 
                {
                    ! city ? (
                        <p className="wrongdata" > Please!! Enter Valid Data</p>
                    ):(
                        <div className="data">
                            <div className="info">
                                <h2 className="location">
                                <i className="fas fa-street-view"></i>{search}
                                </h2>
                                <h1 className="temp">
                                    {city.temp}°Cel
                                </h1>
                                <h3 className="tempmin_max">Min :{city.temp_min}°Cel | Max :{city.temp_max}°Cel</h3>
                            </div>
                            <div className="waveone"></div>
                            <div className="wavetwo"></div>
                            <div className="wavethree"></div>
                        </div>
            )}
            </div>
            </div>
        </>
    )
}
export default Tempapp;