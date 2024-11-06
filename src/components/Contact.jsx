import React, { useContext } from "react";
import FormContext from "../context/FormContext";

const Contact = () => {
  const { handleChange, formData } = useContext(FormContext);
  console.log(formData);
  return (
    <div>
      <h2>What is the email or phone number that we can reach you the best?</h2>
      <div className="contact-input-fields">
        <input
          type="text"
          placeholder="Phone"
          onChange={handleChange}
          name="phone"
          value={formData.phone}
        />
        <input
          type="email"
          placeholder="Email Address*"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
      </div>
    </div>
  );
};

export default Contact;
