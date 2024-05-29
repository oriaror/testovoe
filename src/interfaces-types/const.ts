export interface IPaymentForm {
  name: string;
}

export enum StatusResponce {
  SUCCESS = "Success",
  FAILED = "Failed",
}

export type TFormData = {
  phone: string;
  pay: string;
};

export const makeInit = (): TFormData => {
  return {
    phone: "",
    pay: "",
  };
};


export interface InfoComponent {
  pay: string;
  response: boolean | null;
  onClear: () => void;
  loading: boolean;
  setLoading: () => void;
}

export interface IPayInput {
  pay: string,
  handleOnChangePay: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export interface IPhoneInput {
  phone: string;
  handleOnChangePhone: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type Props = { children: JSX.Element[] }

export interface IOperator {
  id: number;
  name: string;
  img: string;
  slug: string;
}
