import styled from "styled-components";

export const StyledAmountPeople = styled.div`
  position: absolute;
  z-index: 5;
  background-color: #333;
  top: 65px;
  left: calc(50% - 125px);
  width: 250px;
  height: 165px;
  padding: 20px 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  
  animation-name: show;
  animation-duration: 0.2s;
  animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  overflow: hidden;
  h4 {
    font-size: 17px;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
  .amount {
    width: 30px;
    height: 35px;
    padding: 3px;
    border-top: 2px solid;
    border-bottom: 2px solid;
    border-color: ${({ theme }) => theme.color2};
    font-size: 19px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .adult,
  .child,
  .baby {
    width: 85%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    div {
      display: flex;
      flex-direction: row;
    }
  }
  button {
    background-color: unset;
    width: 35px;
    height: 35px;
    padding: 3px;
    border: unset;
    border-top: 2px solid;
    border-bottom: 2px solid;
    border-color: ${({ theme }) => theme.color2};
  }
  @keyframes show {
    from {
      /* transform: scaleY(0.5); */
      height: 80px;
    }
    to {
      /* transform: scaleY(1); */
      height: 165px;
    }
  }
`;
