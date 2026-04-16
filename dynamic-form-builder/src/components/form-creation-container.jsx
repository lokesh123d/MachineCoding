import { nanoid } from "nanoid";
import React, { useState } from "react";
import { formcontextUse } from "../context/FormContext";

const FormTitle = () => {
  const [fieldData, setfieldData] = useState({
    label: "",
    required: false,
    type: "",
    placeholder: "",
  });

  const { formInputData, addInput, removeInput, editInput } = formcontextUse();

  function handleSubmit(e) {
    e.preventDefault();
    let newInput = { ...fieldData, id: nanoid() };
    addInput(newInput);
  }

  return (
    <div>
      <div className="header">
        <h3>Dynamic Form Builder</h3>
        <div className="input-container">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              placeholder="label name here"
              value={fieldData.label}
              onChange={(e) =>
                setfieldData({ ...fieldData, label: e.target.value })
              }
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="input type here"
              value={fieldData.type}
              onChange={(e) =>
                setfieldData({ ...fieldData, type: e.target.value })
              }
            />
            <br />
            <br />
            <label htmlFor="required">
              Required
              <input
                type="checkbox"
                name="required-agrement"
                id="required"
                checked={fieldData.required}
                onChange={(e) =>
                  setfieldData({ ...fieldData, required: e.target.checked })
                }
              />
            </label>
            <br />
            <br />
            <input
              type="placeholder"
              placeholder="input placeholder here"
              value={fieldData.placeholder}
              onChange={(e) =>
                setfieldData({ ...fieldData, placeholder: e.target.value })
              }
            />
            <br />
            <br />
            <button type="submit">Add fields</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormTitle;
