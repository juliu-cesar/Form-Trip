import styled from "styled-components";

export const StyledAmenities = styled.div`
  width: 100%;
  overflow: hidden;
  margin-bottom: 25px;
  .rooms {
    margin-bottom: 15px;
    h4 {
      font-size: 17px;
      font-weight: 600;
    }
    p {
      font-size: 15px;
      font-weight: 400;
    }
  }
  .detail_Bedrooms {
    h4 {
      font-size: 17px;
      font-weight: 600;
    }
    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 15px;
      text-align: center;
    }
    span {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 5px;
      img {
        width: 30px;
        height: 30px;
        background-color: ${({ theme }) => theme.text_color};
        padding: 2px;
        border-radius: 5px;
      }
    }
  }
  .Amenities {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    div {
      width: 115px;
      height: 70px;
      padding: 2px;
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid ${({ theme }) => theme.color1};
      border-radius: 10px;
    }
  }
`;
