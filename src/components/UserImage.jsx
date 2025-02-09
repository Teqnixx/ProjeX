"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRegistration } from "@/context/RegistrationContext";
import { useState } from "react";
import { FILE_UPLOAD_CONFIG } from "@/config/fileUpload";

const UserImage = ({ prevStep, submitForm }) => {
  const { formData, setFormData } = useRegistration();
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const { MAX_FILE_SIZE, ALLOWED_TYPES } = FILE_UPLOAD_CONFIG;

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      setError("Only JPEG, JPG, PNG, and WEBP images are allowed.");
      return;
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      setError("File size exceeds 2MB limit.");
      return;
    }

    // Clear error and update state
    setError("");
    setFormData({ ...formData, profileImage: file });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Upload Profile Image</h2>
      <Input type="file" accept="image/*" onChange={handleFileChange} className="mb-3" />
      
      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div className="flex justify-between mt-4">
        <Button onClick={prevStep}>Back</Button>
        <Button onClick={submitForm} disabled={!!error}>Submit</Button>
      </div>
    </div>
  );
};

export default UserImage;
