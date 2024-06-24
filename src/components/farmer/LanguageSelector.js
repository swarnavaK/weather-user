import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='w-full flex items-center justify-between bg-black text-white p-5 mt-5'>
      <div className='flex items-center w-full justify-center'>
        <img src='icons/13d.png' alt='' className='w-10' />
        <p className='text-2xl'>Today's Farmer Weather</p>
      </div>
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        defaultValue={i18n.language}
        className='w-[60%] mx-auto text-xl bg-transparent border border-white rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500'
      >
        <option value='en' className='text-slate-700 text-xl'>
          English
        </option>
        <option value='hi' className='text-black text-xl'>
          हिंदी
        </option>
        <option value='te' className='text-black text-xl'>
          తెలుగు
        </option>
      </select>
    </div>
  );
};

export default LanguageSelector;
