import React, { children, createContext, useContext, useState } from "react";

const initialFields = [
  {
    id: "field_101",
    label: "Full Name",
    type: "text",
    required: true,
    placeholder: "Enter your full name",
  },
  {
    id: "field_102",
    label: "Email",
    type: "email",
    required: true,
    placeholder: "Enter your email",
  },
  {
    id: "field_103",
    label: "Age",
    type: "number",
    required: false,
    placeholder: "Enter your age",
  },
  {
    id: "field_104",
    label: "Accept Terms",
    type: "checkbox",
    required: true,
    placeholder: "",
  },
];

const FormContext = createContext(initialFields);
const FormProvider = ({ children }) => {
    const [formInputData, setformInputData] = useState([]);
    
    function addInput(item) {
        setformInputData([...formInputData, item]);
    }
    
    function removeInput(id) {
        setformInputData(formInputData.filter((val) => val.id !== id));
    }
    
    function editInput(id, editFeild, updatedName) {
        setformInputData(
      formInputData.map((val) => {
        if (val.id == id) {
          return { ...val,[ editFeild]: updatedName };
        }
        return updatedName;
    }),
);
}

return (
    <FormContext.Provider
    value={{ formInputData, addInput, removeInput, editInput }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;

export const formcontextUse = ()=>useContext(FormContext);