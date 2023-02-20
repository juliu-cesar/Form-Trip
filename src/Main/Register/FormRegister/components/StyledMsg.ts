import styled from "styled-components";

export const StyledMsg = styled.span<{
  Border_color: string;
}>`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 5px;
  margin: 5px 0;
  opacity: 0;
  border: 1px solid ${({ theme, Border_color }) => theme[Border_color]};
  border-radius: 5px;
  transition: all 0.5s;
  p {
    color: ${({ theme }) => theme.red};
    font-size: 13px;
    line-height: 15px;
    font-weight: 600;
    transition: all .5s;
  }
  .green {
    color: ${({ theme }) => theme.green};
  }
  img {
    width: 20px;
  }
`;
