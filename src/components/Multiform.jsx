import React, { useContext } from "react";
import FormContext from "../context/FormContext";
import Service from "./Service";
import Department from "./Department";
import Contact from "./Contact";
import About from "./About";
import Submit from "./Submit";

const Multiform = () => {
  const { step, formData, nextStep, prevStep, handleSubmit } =
    useContext(FormContext);
  console.log(formData);
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Multi Step Form</h1>

      <form className="form-wrapper" onSubmit={handleSubmit}>
        <h2>Step : {step}</h2>
        {step === 1 && <Service />}
        {step === 2 && <Department />}
        {step === 3 && <Contact />}
        {step === 4 && <About />}
        {step === 5 && <Submit />}

        <div className="btns">
          {step > 1 && <button onClick={prevStep}>Prev</button>}
          {step < 5 ? (
            <button onClick={nextStep}>Next</button>
          ) : (
            <button type="submit">Submit</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Multiform;
