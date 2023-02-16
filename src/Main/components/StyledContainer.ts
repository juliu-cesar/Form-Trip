import styled from "styled-components";

export const StyledContainer = styled.div`
  width: calc(100% - 10px);
  border-left: 2px solid;
  border-right: 2px solid;
  border-color: ${({ theme }) => theme.primary_color_2};
  padding: 15px 30px;
`;
