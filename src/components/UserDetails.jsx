"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRegistration } from "@/context/RegistrationContext";
import { useRouter } from "next/navigation";

const UserDetails = ({ nextStep }) => {
  const { formData, setFormData } = useRegistration();
  const router = useRouter();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">User Details</h2>
      <Input
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        className="mb-3"
      />
      <Input
        placeholder="Middle Name"
        value={formData.middleName}
        onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}
        className="mb-3"
      />
      <Input
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        className="mb-3"
      />
      <div className="flex justify-between">
        <Button onClick={() => router.push("/")}>Login</Button>
        <Button onClick={nextStep}>Next</Button>
      </div>
    </div>
  );
};

export default UserDetails;
