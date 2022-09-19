import React from 'react';

export declare interface IRepayment {
    month: string;
    amount: string;
    date: string;
}

export declare interface IData {
    capital: string;
    interestRate: string;
    duration: string;
    startDate: string;
    repayments: IRepayment[];
}

export declare interface INormalizedRepayment {
    amount: number;
    month: number;
    date: string;
}

export declare interface INormalizedData {
    capital: number;
    interestRate: number;
    duration: number;
    startDate: string;
    repayments: INormalizedRepayment[];
}

export declare interface IAmortizationScheduleItem {
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

export type InputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => void;

export type SelectOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => void;
