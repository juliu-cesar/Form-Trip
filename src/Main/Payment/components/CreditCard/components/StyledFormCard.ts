import styled from "styled-components";

export const StyledFormCard = styled.div<{
  display?: string;
}>`
  display: ${({ display }) => display};
  .card_installments {
    position: relative;
    span{
      z-index: -1;
      position: absolute;
      top: 10px;
      left: 5px;
    }
    select {
      padding-right: 40px;
      font-size: 15px;
      font-weight: 500;
    }
    option {
      text-align: right;
      margin-right: 40px;
    }
  }
`;
