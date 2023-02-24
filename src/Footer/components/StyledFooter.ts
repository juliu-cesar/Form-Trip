import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  padding: 0 20px;
  margin-top: 25px;
  .container_footer {
    height: 60px;
    max-width: 1300px;
    padding: 0 20px;
    margin: auto;
    border-top: 3px solid ${({ theme }) => theme.text_color};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  a {
    color: ${({ theme }) => theme.text_color};
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    svg {
      width: 20px;
      height: 20px;
      path {
        fill: ${({ theme }) => theme.text_color};
      }
    }
    :hover{
      color: ${({ theme }) => theme.primary_color};
    }
  }
`;
