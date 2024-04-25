"use client";

import { useEffect } from "react";
import {
  Info,
  StyledInstruction,
  StyledInfo,
  StyledLoader,
  StyledResImg,
  StyledText,
} from "./InfoStyled";
import { useRouter } from "next/navigation";
import checked from "../../../public/img/checked.png";
import cancel from "../../../public/img/cancel.png";

const InfoComponent = ({ response, onClear, loading, setLoading }: any) => {
  const router = useRouter();
  useEffect(() => {
    if (response == null) {
      return;
    }

    if (response) {
      setLoading();
      setTimeout(() => {
        router.back();
        onClear();
      }, 1500);
    } else {
      setTimeout(() => {
        setLoading();
        onClear();
      }, 1500);
    }
  }, [response]);

  return (
    <Info>
      <StyledInstruction>
        Fill out the form and click the Pay button
      </StyledInstruction>
      <StyledInfo>
        After successful payment you will be redirected to the main page
      </StyledInfo>
      {loading ? (
        <StyledLoader></StyledLoader>
      ) : response === true ? (
        <>
          <StyledResImg src={checked.src} />{" "}
          <StyledText>Payment received</StyledText>
        </>
      ) : null || response === false ? (
        <>
          <StyledResImg src={cancel.src} />
          <StyledText>Try again later</StyledText>{" "}
        </>
      ) : null}
    </Info>
  );
};

export { InfoComponent };