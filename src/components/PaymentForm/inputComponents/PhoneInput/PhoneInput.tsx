"use client";
import { StyledInpuntMask } from "./PhoneInputStyles";
import {
  ErrorP,
  SucP,
  StyledLabel,
  StyledEnterValue,
  FakeP,
} from "../ErrorStyles";
import { IPhoneInput } from "@/interfaces-types/const";

export const PhoneInput = ({ phone, handleOnChangePhone }: IPhoneInput) => {
  return (
    <StyledLabel>
      <StyledEnterValue>Enter phone number</StyledEnterValue>
      <StyledInpuntMask
        mask="+7(___) ___-__-__"
        replacement={{ _: /\d/ }}
        value={phone}
        onChange={handleOnChangePhone}
        placeholder="+7(999) 999-99-99"
        type="text"
        autoFocus
      />
      {phone.length ? (
        phone.length < 17 ? (
          <ErrorP>Incorrect Number</ErrorP>
        ) : (
          <SucP>Correct Number</SucP>
        )
      ) : (
        <FakeP>....</FakeP>
      )}
    </StyledLabel>
  );
};
