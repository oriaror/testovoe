import { useEffect, useState } from "react";
import { TFormData, makeInit } from "@/interfaces-types/const";


export const useForm = () => {
  const [formData, setFormData] = useState<TFormData>(makeInit());
  const [formValid, setFormValid] = useState(false);

  const handleOnChangeForm = (name: keyof TFormData, value: string) => {
    const newData = {
      ...formData,
    };
    newData[name] = value;
    setFormData(newData);
  };

  useEffect(() => {
    if (
      formData.phone.length === 17 &&
      Number(formData.pay) >= 10 &&
      Number(formData.pay) <= 1000 &&
      String(formData.pay)[0] !== "0"
    ) {
      setFormValid(true);
    } else setFormValid(false);
  }, [formData]);

  const clearForm = () => {
    setFormData(makeInit());
  };

  return { handleOnChangeForm, formValid, clearForm, formData }
}