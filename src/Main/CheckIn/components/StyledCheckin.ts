import styled from "styled-components";

export const StyledCheckin = styled.div`
  width: 100%;
  margin-bottom: 25px;
  #Price {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  .check-in {
    border: 2px solid ${({ theme }) => theme.color2};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    .card_amount {
      height: 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .card_checkin {
      border-right: 2px solid ${({ theme }) => theme.color2};
    }
    .card_amount {
      grid-area: amount;
      border-top: 2px solid ${({ theme }) => theme.color2};
    }
  }
  .Inline{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    p{
      padding: 5px 0;
      font-size: 15px;
    }
    div{
      padding: 5px 0;
      font-size: 20px;
      font-weight: 600;
    }
  }
`;
