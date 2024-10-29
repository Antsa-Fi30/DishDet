//i18 translator
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//Languages
import en from "./en.json";
import fr from "./fr.json";
import mg from "./mg.json";

const resources = {
  en: en,
  fr: fr,
  mg: mg,
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  lng: "fr", // default language to use.
});

export default { i18n };
