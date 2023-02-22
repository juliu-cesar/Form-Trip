import styled from "styled-components";

export const StyledRangePicker = styled.div`
  .ant-picker {
    background-color: unset;
    color: ${({ theme }) => theme.text_color};
    width: 100%;
    padding: unset;
    border: unset;
    border-radius: unset;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    div {
      height: 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      input {
        color: ${({ theme }) => theme.text_color};
        width: 90%;
        /* height: 55px; */
        padding: 0 15px;
        font-family: "Montserrat", sans-serif;
        font-size: 17px;
        font-weight: 500;
        ::placeholder {
          color: ${({ theme }) => theme.text_color};
          font-family: "Montserrat", sans-serif;
          font-size: 17px;
          font-weight: 500;
        }
      }
      &:nth-child(1) {
        border-right: 2px solid ${({ theme }) => theme.color2};
      }
    }
    .ant-picker-clear{
      background-color: unset;
      color: unset;
    }
    .ant-picker-range-separator {
      display: none;
    }
    .ant-picker-suffix {
      display: none;
    }
    .ant-picker-active-bar{
      display: none;
    }
  }
`;
