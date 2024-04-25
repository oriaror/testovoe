import { ContentWrapper } from "./ContentStyles";
import { Props } from "@/interfaces-types/const";

const Content = ({ children }: Props) => {
  return <ContentWrapper>{children}</ContentWrapper>;
};

export default Content;
