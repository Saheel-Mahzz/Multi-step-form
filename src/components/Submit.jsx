import React, { useContext } from "react";
import FormContext from "../context/FormContext";

const Submit = () => {
  const { formData } = useContext(FormContext);
  return (
    <div>
      <h2>
        Thanks for your valuable time! 😊 Please ensure all fields are correct.
      </h2>
      <ul className="review-list">
        <li>
          <strong>Service </strong> : {formData.service}
        </li>
        <li>
          <strong>Department</strong> : {formData.department}
        </li>
        <li>
          <strong>Email</strong> : {formData.email}
        </li>
        <li>
          <strong>Phone</strong> :{formData.phone}
        </li>
        <li>
          <strong>First Name</strong> :{formData.firstname}
        </li>
        <li>
          <strong>Last Name</strong> :{formData.lastname}
        </li>
      </ul>
    </div>
  );
};

export default Submit;
