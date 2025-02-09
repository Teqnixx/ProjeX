"use client";

import { useState } from "react";
import UserDetails from "@/components/UserDetails";
import AccountDetails from "@/components/AccountDetails";
import UserImage from "@/components/UserImage";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useRegistration } from "@/context/RegistrationContext";

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const { formData } = useRegistration();

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const submitForm = async () => {
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => formDataToSend.append(key, formData[key]));

    const response = await fetch("/api/register", {
      method: "POST",
      body: formDataToSend,
    });

    if (response.ok) alert("Registration Successful!");
    else alert("Registration Failed");
  };

  return (
    <Card className="max-w-md mx-auto mt-10 p-6 shadow-md">
      <Progress value={(step / 3) * 100} className="mb-4" />
      {step === 1 && <UserDetails nextStep={nextStep} />}
      {step === 2 && <AccountDetails nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <UserImage prevStep={prevStep} submitForm={submitForm} />}
    </Card>
  );
};

export default RegistrationForm;
