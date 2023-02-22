import { SvgNext, SvgPrev } from "@/src/Main/components/SvgPrevNext";
import { Dispatch, SetStateAction } from "react";

interface Props {
  state: number;
  setState: Dispatch<SetStateAction<number>>;
  minValue: number;
  allValues: number;
  totalAmount: number;
}

export default function ButtonsAmount({
  state,
  setState,
  minValue,
  allValues,
  totalAmount,
}: Props) {
  return (
    <div>
      <button
        onClick={() => {
          if (state == minValue) return;
          setState(state - 1);
        }}
      >
        <SvgPrev />
      </button>
      <div className="amount">{state}</div>
      <button
        onClick={() => {
          if (allValues == totalAmount) return;
          console.log(allValues);
          
          setState(state + 1)
        }}
      >
        <SvgNext />
      </button>
    </div>
  );
}
