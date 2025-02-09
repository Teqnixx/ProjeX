"use client";

import { createContext, useContext, useState } from "react";

const RegistrationContext = createContext(null);

export const RegistrationProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });

  return (
    <RegistrationContext.Provider value={{ formData, setFormData }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => useContext(RegistrationContext);
