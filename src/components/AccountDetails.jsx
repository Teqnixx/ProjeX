"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRegistration } from "@/context/RegistrationContext";

const AccountDetails = ({ nextStep, prevStep }) => {
  const { formData, setFormData } = useRegistration();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Account Details</h2>
      <Input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="mb-3"
      />
      <Input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        className="mb-3"
      />
      <Input
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        className="mb-3"
      />
      <div className="flex justify-between">
        <Button onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next</Button>
      </div>
    </div>
  );
};

export default AccountDetails;
