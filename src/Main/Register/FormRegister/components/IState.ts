import { Dispatch, SetStateAction } from "react";

export interface IState {
  email: {
    state: string;
    set: Dispatch<SetStateAction<string>>;
  };
  password: {
    state: string;
    set: Dispatch<SetStateAction<string>>;
  };
  password_2: {
    state: string;
    set: Dispatch<SetStateAction<string>>;
  };
  CEP: {
    state: string;
    set: Dispatch<SetStateAction<string>>;
  };
  street: {
    state: string;
    set: Dispatch<SetStateAction<string>>;
  };
  number: {
    state: string;
    set: Dispatch<SetStateAction<string>>;
  };
  adjunct: {
    state: string;
    set: Dispatch<SetStateAction<string>>;
  };
  district: {
    state: string;
    set: Dispatch<SetStateAction<string>>;
  };
  city: {
    state: string;
    set: Dispatch<SetStateAction<string>>;
  };
}
