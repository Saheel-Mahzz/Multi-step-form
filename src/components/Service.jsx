import React, { useContext } from "react";
import FormContext from "../context/FormContext";

const Service = () => {
  const { handleChange, formData } = useContext(FormContext);

  const service = formData.service;
  console.log(service);
  return (
    <>
      <h2>Welcome!😄 what are you looking for?</h2>
      <div className="input-fields">
        <label
          className={`${service === "Consultancy" ? "service-selected" : ""}`}
        >
          <input
            type="radio"
            value="Consultancy"
            name="service"
            onChange={handleChange}
          />
          Consutancy
        </label>
        <label
          className={`${
            service === "IT and Department" ? "service-selected" : ""
          }`}
        >
          <input
            type="radio"
            value="IT and Department"
            name="service"
            onChange={handleChange}
          />
          It and Department
        </label>
        <label
          className={`${service === "Technology" ? "service-selected" : ""}`}
        >
          <input
            type="radio"
            value="Technology"
            name="service"
            onChange={handleChange}
          />
          Technology
        </label>
      </div>
    </>
  );
};

export default Service;
