import styled from "styled-components";

const StyledSvg = styled.div`
width: 100%;
height: 100%;
  svg {
    width: 100%;
    height: 100%;
    path {
      fill: ${({ theme }) => theme.text_color};
    }
  }
`;

export function SvgPrev() {
  return (
    <StyledSvg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 35 45">
        <path d="M20 44 0 24 20 4l2.8 2.85L5.65 24 22.8 41.15Z" />
      </svg>
    </StyledSvg>
  );
}
export function SvgNext() {
  return (
    <StyledSvg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 35 45">
        <path d="m15.2 43.9-2.8-2.85L29.55 23.9 12.4 6.75l2.8-2.85 20 20Z" />
      </svg>
    </StyledSvg>
  );
}
