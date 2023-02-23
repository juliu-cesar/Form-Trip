import styled from "styled-components";

const StyledSvg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="500.000000pt"
        height="500.000000pt"
        viewBox="0 0 500.000000 500.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M1940 3715 l-1215 -1215 1217 -1217 1218 -1218 157 158 158 157
-1060 1060 -1060 1060 1060 1060 1060 1060 -155 155 c-85 85 -157 155 -160
155 -3 0 -552 -547 -1220 -1215z"
          />
        </g>
      </svg>
    </StyledSvg>
  );
}
export function SvgNext() {
  return (
    <StyledSvg>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="500.000000pt"
        height="500.000000pt"
        viewBox="0 0 500.000000 500.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M1680 4775 l-155 -155 1060 -1060 1060 -1060 -1060 -1060 -1060
-1060 158 -157 157 -158 1218 1218 1217 1217 -1215 1215 c-668 668 -1217 1215
-1220 1215 -3 0 -75 -70 -160 -155z"
          />
        </g>
      </svg>
    </StyledSvg>
  );
}
