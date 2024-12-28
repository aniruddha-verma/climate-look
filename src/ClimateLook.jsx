import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function ClimateLook() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "ClimateLook",
        feelsLike: 15.07,
        humidity: 94,
        maxTemp: 15.05,
        minTemp: 15.05,
        temp: 15.05,
        weather: "mist"
    });

    let updateWeatherInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h2>Climate Look!</h2>
            <SearchBox updateWeatherInfo={updateWeatherInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    );
}