import { ChangeEvent } from "react";

export interface IRepayment {
  month: string;
  amount: string;
  date: string;
}

export interface IData {
  capital: string;
  interestRate: string;
  duration: string;
  startDate: string;
  repayments: IRepayment[];
}

export interface INormalizedRepayment {
  amount: number;
  month: number;
  date: string;
}

export interface INormalizedData {
  capital: number;
  interestRate: number;
  duration: number;
  startDate: string;
  repayments: INormalizedRepayment[];
}

export interface IAmortizationScheduleItem {
  month: number;
  date: string;
  installment: number;
  interestsQuote: number;
  capitalQuote: number;
  paidUpCapital: number;
  residualDebt: number;
  paidUpInterests: number;
  repayment: number;
  repaymentSaving: number;
}

export type InputOnChange = (e: ChangeEvent<HTMLInputElement>) => void;

export type SelectOnChange = (e: ChangeEvent<HTMLSelectElement>) => void;
