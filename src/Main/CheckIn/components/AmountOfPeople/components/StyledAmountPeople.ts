import styled from "styled-components";

export const StyledAmountPeople = styled.div`
  position: absolute;
  z-index: 5;
  background-color: #333;
  top: 65px;
  left: calc(50% - 125px);
  width: 250px;
  padding: 20px 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

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
`;
