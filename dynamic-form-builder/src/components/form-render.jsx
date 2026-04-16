import React from "react";
import { formcontextUse } from "../context/FormContext";

const FormShowing = () => {
  const { formInputData, addInput, removeInput, editInput } = formcontextUse();

  return (
    <div className="reder-form-container">
      {formInputData.map((item) => {
        return (
          <label htmlFor={item.id} key={item.id}>
            {item.label && "Name"} :{" "}
            <input
              type={item.type && "text"}
              placeholder={item.placeholder && "enter your name"}
              id={item.id}
              required={item.required}
            />
            <br />
            <br />
          </label>
        );
      })}
    </div>
  );
};

export default FormShowing;
