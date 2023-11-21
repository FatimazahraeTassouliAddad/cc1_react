import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";
import maroc from "./mr.png";
import englais from "./en.avif";
import espain from "./es.png";
import franc from "./fr.jpg";
import data from "./data";
import './long.css';
import { useLanguage } from './ContexteLanguage'; // Adjust the import based on your actual file path

export const Home = () => {
  const { language, changeLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage);
  };

  return (
    <div>
      <h1>{data[language].Title}</h1>
      <p>{data[language].Txt}</p>
      <div className="button-container">
        <button className="flag-button" onClick={() => handleLanguageChange("FR")}>
          <img src={franc} alt="franc" />
        </button>
        
        <button className="flag-button" onClick={() => handleLanguageChange("MR")}>
          <img src={maroc} alt="maroc" />
        </button>
        <button className="flag-button" onClick={() => handleLanguageChange("ES")}>
          <img src={espain} alt="español" />
        </button>
      </div>
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};
