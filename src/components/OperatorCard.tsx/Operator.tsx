import { FC } from "react";
import {
  OperatorWraper,
  OperatorImg,
  DescriptionWrapper,
  OperatorTitle,
  FakeBtn,
  StyledLink,
} from "./OperatorStyles";
import { IOperator } from "@/interfaces-types/const";

const Operator: FC<IOperator> = ({ id, name, img, slug }) => {
  return (
    <StyledLink href={`/payment/${slug}`} datatype={name}>
      <OperatorWraper key={id}>
        <OperatorImg src={img} alt="#" />
        <DescriptionWrapper>
          <OperatorTitle>{name}</OperatorTitle>
          <FakeBtn>Pay</FakeBtn>
        </DescriptionWrapper>
      </OperatorWraper>
    </StyledLink>
  );
};

export default Operator;
