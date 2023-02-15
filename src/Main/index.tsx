import { StyledMain } from "./components/StyledMain";
import Amenities from "./Amenities";
import CheckIn from "./CheckIn";
import Payment from "./Payment";
import Register from "./Register";
import TotalPrice from "./TotalPrice";


export default function Main(){

  return(
    <StyledMain>
      <div className="left_side">
        <Register />
        <Payment />
        <TotalPrice />
      </div>
      <div className="right_side">
        <CheckIn />
        <Amenities />
      </div>
    </StyledMain>
  )
}