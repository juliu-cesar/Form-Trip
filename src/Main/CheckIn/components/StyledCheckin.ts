import styled from "styled-components";

export const StyledCheckin = styled.div`
  width: 100%;
  #Price {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  .check-in {
    border: 2px solid ${({ theme }) => theme.primary_color_2};
    border-radius: 10px;
    display: grid;
    grid-template-areas:
      "auto auto"
      "amount amount";
    .card_checkin,
    .card_checkout,
    .card_amount {
      height: 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .card_checkin {
      border-right: 2px solid ${({ theme }) => theme.primary_color_2};
    }
    .card_amount {
      grid-area: amount;
      border-top: 2px solid ${({ theme }) => theme.primary_color_2};
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
