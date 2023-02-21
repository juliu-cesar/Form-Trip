import styled from "styled-components";

export const StyledCreditCard = styled.div`
width: 100%;
div{
  position: relative;
  background-color: #D8D8D8;
  color: #D8D8D8;
  width: 370px;
  height: 200px;
  margin: auto;
  border-radius: 10px;
  font-family: 'Titillium Web', sans-serif;
  img{
    position: absolute;
    top: calc(50% - 87px);
    left: calc(50% - 175px);
    width: 350px;
  }
}
#number{
  position: absolute;
  top: 52%;
  left: 35px;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 2px;
}
#monthYear{
  position: absolute;
  top: 66%;
  left: 50%;
  font-size: 14px;
  font-weight: 600;
}
#cardName{
  position: absolute;
  max-width: 210px;
  top: 75%;
  left: 30px;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
}
`