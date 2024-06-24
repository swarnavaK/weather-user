import React from "react";
import { useTranslation } from 'react-i18next';


const TodayWeather = ({ data }) => {
const { t } = useTranslation();
  //console.log("TodayWeather", data);

  return (
    <div className='w-full h-full px-3 pt-2'>
      <div className='w-full mx-auto text-black p-4 bg-white/90 md:flex items-center justify-between h-auto rounded-t-xl'>
        {/* right weather icon section */}

        <div className='w-full'>
          <div>
            <h2 className='font-bold text-xl'>{t("currentSoilConditions")}</h2>
            <p className='font-bold text-lg'>
              <h5>{t("bulkSoilDensity")}</h5>
              {Math.round(data?.bulk_soil_density)}
            </p>
            <p className='text-xl font-bold'>
              <h5>{t("evapotranspiration")} </h5>
              {Math.round(data?.evapotranspiration)}
            </p>
            <p className='text-xl font-bold'>
              <h5>{t("specificHumidity")}</h5>
              {Math.round(data?.specific_humidity)}
            </p>
          </div>
        </div>
        {/* left details section */}
        <div className='w-full p-2 relative'>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center justify-between text-xl border-b-2 border-black'>
              <p>{t("surfacePressure")}</p>
              <p>{Math.round(data?.pres_avg)} mb</p>
            </div>
            <div className='flex items-center justify-between text-xl border-b-2 border-black'>
              <p>{t("windSpeed")}</p>
              <p>{Math.round(data?.wind_10m_spd_avg)} m/s</p>
            </div>
            <div className='flex items-center justify-between text-xl border-b-2 border-black'>
              <p>{t("specificHumidity")}</p>
              <p>{Math.round(data?.specific_humidity)} kg/kg</p>
            </div>
            <div className='flex items-center justify-between text-xl border-b-2 border-black'>
              <p>{t("averageTemperature")}</p>
              <p>{Math.round(data.temp_2m_avg)} C</p>
            </div>
            <div className='flex items-center justify-between text-xl border-b-2 border-black'>
              <p>{t("precipitation")}</p>
              <p>{Math.round(data?.precip)} mm</p>
            </div>
          </div>
        </div>
      </div>
      <img
        src={`farm/farming.jpg`}
        alt='weather'
        className='w-full object-cover h-48 lg:h-60 rounded-b-xl'
      />
    </div>
  );
};

export default TodayWeather;
