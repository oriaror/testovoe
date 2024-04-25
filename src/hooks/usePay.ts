import { useState } from "react";
import { TFormData, StatusResponce } from "@/interfaces-types/const";

export const usePay = (formData: TFormData) => {
  const [response, setResponse] = useState<boolean | null>(null);

  const res = async () => {
    setResponse(null);
    const resp = await fetch("http://localhost:3000/api/pay", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    const result = await resp.json();
    if (result.status === StatusResponce.SUCCESS) {
      setResponse(true);
    } else {
      setResponse(false);
    }
  };

  return { response, res }
}