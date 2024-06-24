import React from "react";
import FarmerForecastItems from "./FarmerForecastItems";

const FarmerForecast = ({ data }) => {
 //console.log("FarmerForecast", data);
  return (
    <div className='w-full h-full p-5'>
      <h1 className='font-bold text-3xl flex justify-center'>
        Weekly Forecast
      </h1>
      {data.data.slice(0, 7).map((item, idx) => (
        <FarmerForecastItems item={item} idx={idx} />
      ))}
    </div>
  );
};

export default FarmerForecast;
