"use client";

import React, {
  ChangeEvent,
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import moment from "moment";
/**/
import {
  IAmortizationScheduleItem,
  IData,
  InputOnChange,
  IRepayment,
  SelectOnChange,
} from "@/common/types";
import { normalizeData } from "@/utils/normalizeData";
import { calculateAmortizationSchedule } from "@/core/calculateAmortizationSchedule";
import { setAmortizationSchedule } from "@/store/amortizationScheduleSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import store from "@/store/store";
import { Provider } from "react-redux";

const defaultValue = {
  data: {
    interestRate: "",
    duration: "",
    capital: "",
    startDate: moment().format("MM/YYYY"),
    repayments: [],
  },
  setData: () => {
    /* do nothing.*/
  },
  handleChange: () => {
    /* do nothing.*/
  },
  addRepayment: () => {
    /* do nothing.*/
  },
  removeRepayment: () => {
    /* do nothing.*/
  },
  items: [],
};

declare interface IAppContextInterface {
  data: IData;
  setData(data: IData): void;
  handleChange: InputOnChange & SelectOnChange;
  addRepayment(repayment: IRepayment): void;
  removeRepayment(month: number): void;
  items: IAmortizationScheduleItem[];
}

declare interface IMockData {
  data: IData;
  setData?(data: IData): void;
  handleChange?: InputOnChange & SelectOnChange;
  addRepayment?(repayment: IRepayment): void;
  removeRepayment?(month: number): void;
  items?: IAmortizationScheduleItem[];
}

type AppStoreProps = {
  children: ReactNode;
  mockData?: IMockData;
};

const AppContext = createContext<IAppContextInterface>(defaultValue);

const AppStore = ({ children, mockData }: AppStoreProps) => {
  const [data, setData] = useState<IData>(
    mockData ? { ...defaultValue.data, ...mockData.data } : defaultValue.data,
  );

  const items = useAppSelector((state) => state.amortizationSchedule.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const normalizedData = normalizeData(data);
    if (normalizedData) {
      const amortizationItems = calculateAmortizationSchedule(normalizedData);
      dispatch(setAmortizationSchedule(amortizationItems));
    } else {
      dispatch(setAmortizationSchedule([]));
    }
  }, [data, dispatch]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { value, name, validity } = e.target;
    if (validity.valid) {
      setData({ ...data, [name]: value });
    }
  };

  const addRepayment = ({
    month,
    amount,
    date,
  }: {
    month: string;
    amount: string;
    date: string;
  }) => {
    const updatedRepayments = [...data.repayments];
    updatedRepayments[parseInt(month)] = { amount, date, month };
    setData({ ...data, repayments: updatedRepayments });
  };

  const removeRepayment = (month: number) => {
    const updatedRepayments = [...data.repayments];
    updatedRepayments.splice(month, 1);
    setData({ ...data, repayments: updatedRepayments });
  };

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        handleChange,
        addRepayment,
        removeRepayment,
        items,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

function AppStoreWithRedux({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <AppStore>{children}</AppStore>
    </Provider>
  );
}

export { AppContext, AppStoreWithRedux };
