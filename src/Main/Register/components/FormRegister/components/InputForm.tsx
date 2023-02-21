import DisplayError from "./DisplayError";
import { IMsg, IState } from "./IState";

interface Props {
  e: {
    id: string;
    type: string;
    label: string;
    err_msg?: {
      msg: string;
      class: string;
    }[];
  };
  allStates: IState;
  allMsg: IMsg;
}
export default function InputForm({ e, allStates, allMsg }: Props) {
  return (
    <div>
      <label htmlFor={e.id}>{e.label}</label>
      <input
        id={e.id}
        type={e.type}
        value={allStates[e.id as keyof typeof allStates].state}
        onChange={(eChange) => {
          allStates[e.id as keyof typeof allStates].set(
            eChange.target.value
          );
        }}
        onFocus={() => {
          allMsg[e.id as keyof typeof allMsg]?.set(true);
        }}
        onBlur={() => {
          allMsg[e.id as keyof typeof allMsg]?.set(false);
        }}
      />
      {allMsg[e.id as keyof typeof allMsg]?.state && (
        <DisplayError state={allStates} id={e.id} msg={e.err_msg} />
      )}
    </div>
  );
}
