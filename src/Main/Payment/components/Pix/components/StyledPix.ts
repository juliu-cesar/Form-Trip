import styled from "styled-components";

export const StyledPix = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  .pix_icon {
    background-color: #ddd;
    padding: 10px;
    border-radius: 10px;
    img {
      width: 120px;
    }
  }
`;
