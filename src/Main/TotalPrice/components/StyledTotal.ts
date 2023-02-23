import styled from "styled-components";

export const StyledTotal = styled.div`
  width: 100%;

  .total_price, .payment_method{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .payment_method {
    h4 {
      font-size: 17px;
      font-weight: 500;
    }
    h4:nth-last-child(1){
      width: 120px;
      font-size: 15px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      img{
        background-color: #d8d8d8;
        width: 30px;
        padding: 3px;
        border-radius: 5px;
      }
    }
  }
  .total_price {
    background-color: ${({ theme }) => theme.semi_black};
    padding: 10px 15px;
    margin: 15px 20px;
    border-top: 2px solid;
    border-bottom: 2px solid;
    border-color: ${({ theme }) => theme.color2};
    border-radius: 1px;
  }
`;
