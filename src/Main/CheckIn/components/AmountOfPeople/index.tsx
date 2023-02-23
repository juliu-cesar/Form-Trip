import { Dispatch, SetStateAction, useContext, useState } from "react";
import { StyledAmountPeople } from "./components/StyledAmountPeople";
import config from "@/config.json";
import ButtonsAmount from "./components/ButtonsAmount";
import { CarouselContext } from "@/src/Carousel/components/CarouselProvider";

export type PropsAmount = {
  amount: {
    adult: {
      state: number;
      set: Dispatch<SetStateAction<number>>;
    };
    child: {
      state: number;
      set: Dispatch<SetStateAction<number>>;
    };
    baby: {
      state: number;
      set: Dispatch<SetStateAction<number>>;
    };
  };
};

export default function AmountOfPeople({ amount }: PropsAmount) {
  const SelectHouse = useContext(CarouselContext);
  const adult = amount.adult;
  const child = amount.child;
  const baby = amount.baby;
  const allValues = adult.state + child.state + baby.state;
  const totalAmount = config.houses[SelectHouse.index].amountPeople;

  return (
    <StyledAmountPeople>
      <div className="adult">
        <h4>Adultos</h4>
        <ButtonsAmount
          state={adult.state}
          setState={adult.set}
          minValue={1}
          allValues={allValues}
          totalAmount={totalAmount}
        />
      </div>
      <div className="child">
        <h4>Crianças</h4>
        <ButtonsAmount
          state={child.state}
          setState={child.set}
          minValue={0}
          allValues={allValues}
          totalAmount={totalAmount}
        />
      </div>
      <div className="baby">
        <h4>Bebes</h4>
        <ButtonsAmount
          state={baby.state}
          setState={baby.set}
          minValue={0}
          allValues={allValues}
          totalAmount={totalAmount}
        />
      </div>
    </StyledAmountPeople>
  );
}
