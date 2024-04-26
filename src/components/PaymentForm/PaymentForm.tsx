"use client";

import {
  FormWrapper,
  ButtonPay,
  StyledName,
  InputWrapperCom,
  ContentFormWrapper,
} from "./PaymentFormStyles";
import { PhoneInput } from "./inputComponents/PhoneInput/PhoneInput";
import { PayInput } from "./inputComponents/PayInput/PayInput";
import { InfoComponent } from "../InfoComponent/InfoComponent";
import { useForm } from "@/hooks/useForm";
import { usePay } from "@/hooks/usePay";
import { IPaymentForm } from "@/interfaces-types/const";
import { useState } from "react";

const PaymentForm = ({ name }: IPaymentForm) => {
  const { handleOnChangeForm, formValid, clearForm, formData } = useForm();
  const { response, res } = usePay(formData);
  const [loading, setLoading] = useState(false);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      res();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContentFormWrapper>
      <FormWrapper>
        <StyledName>{name}</StyledName>
        <InputWrapperCom>
          <PhoneInput
            phone={formData.phone}
            handleOnChangePhone={(event) =>
              handleOnChangeForm("phone", event.target.value)
            }
          />
          <PayInput
            pay={formData.pay}
            handleOnChangePay={(event) =>
              handleOnChangeForm("pay", event.target.value)
            }
          />
          <ButtonPay disabled={!formValid} onClick={onClick}>
            Pay
          </ButtonPay>
        </InputWrapperCom>
      </FormWrapper>
      <InfoComponent
        pay={formData.pay}
        response={response}
        onClear={clearForm}
        loading={loading}
        setLoading={() => setLoading(false)}
      />
    </ContentFormWrapper>
  );
};
export default PaymentForm;
