import React, { useContext } from "react";
import FormContext from "../context/FormContext";

const About = () => {
  const { formData, handleChange } = useContext(FormContext);
  return (
    <div>
      <h2>Could you tell us a bit more about yourself?</h2>
      <div className="contact-input-fields">
        <input
          type="text"
          placeholder="First Name.."
          onChange={handleChange}
          name="firstname"
          value={formData.firstname}
        />
        <input
          type="text"
          placeholder="Last Name.."
          onChange={handleChange}
          name="lastname"
          value={formData.lastname}
        />
      </div>
    </div>
  );
};

export default About;
