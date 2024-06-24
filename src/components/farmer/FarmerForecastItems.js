import React from "react";
import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { useTranslation } from "react-i18next";



const FarmerForecastItems = ({ item, idx }) => {
  //console.log("FarmerForecastItems", item, idx);
  
  const [arrow, setArrow] = useState(false);
  const { t } = useTranslation();
  const WEEK_DAYS = [
    t("weekDays.monday"),
    t("weekDays.tuesday"),
    t("weekDays.wednesday"),
    t("weekDays.thursday"),
    t("weekDays.friday"),
    t("weekDays.saturday"),
    t("weekDays.sunday"),
  ];
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  return (
    <div>
      <Accordion allowZeroExpanded>
        <AccordionItem key={idx}>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div
                className=' w-full flex items-center justify-between bg-slate-50 my-2 px-5 py-1 rounded-full'
                onClick={() => setArrow(!arrow)}
              >
                <label className='text-xl'>{forecastDays[idx]}</label>
                <label className='text-xl'>
                  {t("bulkSoilDensity")}: {Math.round(item?.bulk_soil_density)}
                  {/* {Math.round(item?.evapotranspiration)}°C */}
                </label>
                <label className='text-xl hidden sm:block'>
                  {t("solarRadiation")}: {Math.round(item?.dlwrf_avg)}
                </label>
                {arrow ? (
                  <AiOutlineArrowUp
                    size={30}
                    className='animate-bounce bg-slate-200 rounded-full p-2'
                  />
                ) : (
                  <AiOutlineArrowDown
                    size={30}
                    className='animate-bounce bg-slate-200 rounded-full p-2'
                  />
                )}
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className='w-[60%] mx-auto my-3 p-3 bg-white/90 md:flex items-center justify-between rounded-lg'>
              <div className='w-full p-2'>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center justify-between text-xl border-b-2 border-black'>
                    <p>{t("surfacePressure")}</p>
                    <p>{Math.round(item?.pres_avg)} mb</p>
                  </div>
                  <div className='flex items-center justify-between text-xl border-b-2 border-black'>
                    <p>{t("windSpeed")}</p>
                    <p>{Math.round(item?.wind_10m_spd_avg)} m/s</p>
                  </div>
                  <div className='flex items-center justify-between text-xl border-b-2 border-black'>
                    <p>{t("specificHumidity")}</p>
                    <p>{Math.round(item?.specific_humidity)} kg/kg</p>
                  </div>
                  <div className='flex items-center justify-between text-xl border-b-2 border-black'>
                    <p>{t("averageTemperature")}</p>
                    <p>{Math.round(item?.temp_2m_avg)} C</p>
                  </div>
                  <div className='flex items-center justify-between text-xl border-b-2 border-black'>
                    <p>{t("precipitation")}</p>
                    <p>{Math.round(item?.precip)} mm</p>
                  </div>
                </div>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FarmerForecastItems;
