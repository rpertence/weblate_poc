import React from "react";
import { useTranslation } from "react-i18next";
import "./i18n";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <div style={{ padding: 20 }}>
      <h1>{t("greeting")}</h1>
      <p>{t("favorite")}</p>
      <p>{t("a")}</p>
      <p>{t("b")}</p>
      <button onClick={() => changeLanguage("en-US")}>American English</button>
      <button onClick={() => changeLanguage("en-GB")}>British English</button>
    </div>
  );
}

export default App;
