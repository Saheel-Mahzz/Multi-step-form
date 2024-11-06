import React, { useContext } from "react";
import FormContext from "../context/FormContext";

const Department = () => {
  const { handleChange, formData } = useContext(FormContext);

  const department = formData.department;
  return (
    <div>
      <h2>Which Department you work in?</h2>
      <div className="input-fields">
        <label
          className={`${department === "Sales" ? "department-selected" : ""}`}
        >
          <input
            type="radio"
            value="Sales"
            name="department"
            onChange={handleChange}
          />
          Sales
        </label>
        <label
          className={`${
            department === "Programming" ? "department-selected" : ""
          }`}
        >
          <input
            type="radio"
            value="Programming"
            name="department"
            onChange={handleChange}
          />
          Programming
        </label>
        <label
          className={`${
            department === "Marketing" ? "department-selected" : ""
          }`}
        >
          <input
            type="radio"
            value="Marketing"
            name="department"
            onChange={handleChange}
          />
          Marketing
        </label>
      </div>
    </div>
  );
};

export default Department;
