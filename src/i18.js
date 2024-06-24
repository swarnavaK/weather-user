import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      weekDays: {
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday",
      },
      currentSoilConditions: "CURRENT SOIL CONDITIONS",
      bulkSoilDensity: "Bulk Soil Density kg/m^3",
      evapotranspiration: "Reference evapotranspiration (mm)",
      specificHumidity: "Average specific humidity (kg/kg)",
      surfacePressure: "Average Surface pressure",
      windSpeed: "Average 10 meter wind speed",
      averageTemperature: "Average 2 meter temperature",
      precipitation: "Precipitation",
    },
  },
  hi: {
    translation: {
      weekDays: {
        monday: "सोमवार",
        tuesday: "मंगलवार",
        wednesday: "बुधवार",
        thursday: "गुरुवार",
        friday: "शुक्रवार",
        saturday: "शनिवार",
        sunday: "रविवार",
      },
      currentSoilConditions: "मौसमी स्थिति",
      bulkSoilDensity: "बल्क मृदा घनत्व kg/m^3",
      evapotranspiration: "संदर्भ वाष्पावपात (मिमी)",
      specificHumidity: "औसत विशिष्ट आर्द्रता (किलो / किलो)",
      surfacePressure: "औसत सतह दबाव",
      windSpeed: "औसत 10 मीटर हवा की गति",
      averageTemperature: "औसत 2 मीटर तापमान",
      solarRadiation: "औसत प्रति घंटे नीचे की लंबी ध्वनि रोशनी",
      precipitation: "वर्षा",
    },
  },
  te: {
    translation: {
      weekDays: {
        monday: "సోమవారం",
        tuesday: "మంగళవారం",
        wednesday: "బుధవారం",
        thursday: "గురువారం",
        friday: "శుక్రవారం",
        saturday: "శనివారం",
        sunday: "ఆదివారం",
      },
      currentSoilConditions: "ప్రస్తుత మృదావస్థ",
      bulkSoilDensity: "మొత్తం మృదం ఘనత kg/m^3",
      evapotranspiration: "సందర్భ వాప్పాయన (మిమీ)",
      specificHumidity: "ఔసత్తు ప్రత్యేక ఆర్ద్రత (కిలో / కిలో)",
      surfacePressure: "ఔసత సర్ఫేస్ ప్రెస్యర్",
      windSpeed: "ఔసతిగా 10 మీటర్ల వాతావరణ వేగం",
      averageTemperature: "ఔసతిగా 2 మీటర్ల వాతావరణ తెప్పు",
      precipitation: "మంచు",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en", // fallback language if translation not found
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
