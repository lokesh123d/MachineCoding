import React, { useState, useContext, createContext } from "react";

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: 0,
    email: "",
    gender: "male",
    hobbies: [],
    favoriteCategory: [],
    experienceLevel: "intermediate",
    notifications: false,
    theme: "light",
    terms: false,
  });

  return (
    <FormContext.Provider value={[formData, setFormData]}>
      {children}
    </FormContext.Provider>
  );
};

export function useFormData() {
  const [formData, setFormData] = useContext(FormContext);
  return [formData, setFormData];
}

export default FormProvider;
