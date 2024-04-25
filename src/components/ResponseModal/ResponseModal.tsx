"use client";

import { useEffect, useState } from "react";
import {
  StyledBack,
  StyledPargrh,
  StyledPortal,
  StyledModal,
  StyledLoader,
  StyledFail,
  StyledSucc,
} from "./ResponseModalStyles";
import { useRouter } from "next/navigation";
import { IResponseModal } from "@/interfaces-types/const";

const ResponseModal = ({
  phone,
  pay,
  setModalShow,
  name,
  response,
  onClear,
}: IResponseModal) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (response == null) {
      return;
    }
    setLoading(false);
    if (response) {
      setTimeout(() => {
        router.back();
        onClear();
      }, 1500);
    } else {
      setTimeout(() => {
        onClear();
        setModalShow();
      }, 1500);
    }
  }, [response]);

  return (
    <StyledPortal>
      {<StyledBack></StyledBack>}
      <StyledModal>
        {!loading ? (
          <div>
            <StyledPargrh className="info">
              {phone} operator {name.toUpperCase()}
            </StyledPargrh>
            <StyledPargrh>Payment in the amount of {pay} rubles</StyledPargrh>
            {response === true ? (
              <StyledSucc>Payment received</StyledSucc>
            ) : null || response === false ? (
              <StyledFail>Try again later</StyledFail>
            ) : null}
          </div>
        ) : (
          <StyledLoader />
        )}
      </StyledModal>
    </StyledPortal>
  );
};

export { ResponseModal };
