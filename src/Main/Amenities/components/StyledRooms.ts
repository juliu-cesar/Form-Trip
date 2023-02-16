import styled from "styled-components";

export const StyledRooms = styled.div<{
  Width: number;
  Height: number;
}>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  div {
    width: ${({ Width }) => `${Width}px`};
    height: ${({ Height }) => `${Height}px`};
    border: 2px solid ${({ theme }) => theme.color1};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;
  }
`;
