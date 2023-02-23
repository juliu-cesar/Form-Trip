import styled from "styled-components";

export const StyledTotal = styled.div`
  width: 100%;

  .total_price, .form_payment{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .form_payment {
    padding: 10px 15px;
    border-radius: 1px;
    h4 {
      font-size: 17px;
      font-weight: 500;
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
