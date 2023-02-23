import styled from "styled-components";

export const StyledFormCard = styled.div<{
  display?: string;
}>`
  display: ${({ display }) => display};
  .ant-select {
    .ant-select-selector {
      background-color: unset;
      color: ${({ theme }) => theme.text_color};
      height: 40px;
      margin-bottom: 10px;
      align-items: center;
      border: unset;
      border-color: unset;
      border-bottom: 3px solid ${({ theme }) => theme.color1};
      border-radius: unset;
      font-family: "Montserrat", sans-serif;
      font-size: 15px;
      font-weight: 500;
    }    
    .ant-select-selection-item {
      color: ${({ theme }) => theme.text_color};
    }
    .ant-select-arrow {
      span {
        svg {
          path {
            fill: ${({ theme }) => theme.text_color};
          }
        }
      }
    }
  }
`;
