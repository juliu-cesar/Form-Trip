import { createContext, Dispatch, SetStateAction, useState } from "react";

type PriceType = {
  TotalPrice: number;
  setTotalPrice: Dispatch<SetStateAction<number>>;
  PaymentMethod: number;
  setPaymentMethod: Dispatch<SetStateAction<number>>;
  CardInstallments: number;
  setCardInstallments: Dispatch<SetStateAction<number>>;
};

export const PriceContext = createContext<PriceType>({
  TotalPrice: 0,
  setTotalPrice: () => {
    alert("setTotalPrice ainda não configurado.");
  },
  PaymentMethod: 1,
  setPaymentMethod: () => {
    alert("setPaymentMethod ainda não configurado.");
  },
  CardInstallments: 1,
  setCardInstallments: () => {
    alert("setCardInstallments ainda não configurado.");
  },
});

interface Props {
  children: React.ReactNode;
}

export default function PriceProvider({ children }: Props) {
  const [TotalPrice, setTotalPrice] = useState(0);
  const [PaymentMethod, setPaymentMethod] = useState(1);
  const [CardInstallments, setCardInstallments] = useState(1);

  return (
    <PriceContext.Provider
      value={{
        TotalPrice: TotalPrice,
        setTotalPrice: setTotalPrice,
        PaymentMethod: PaymentMethod,
        setPaymentMethod: setPaymentMethod,
        CardInstallments: CardInstallments,
        setCardInstallments: setCardInstallments,
      }}
    >
      {children}
    </PriceContext.Provider>
  );
}
