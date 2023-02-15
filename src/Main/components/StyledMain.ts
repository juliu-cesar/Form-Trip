import styled from "styled-components";

export const StyledMain = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  .left_side{
    background-color: red;
    width: 100%;
    height: 100px;
  }
  .right_side{
    background-color: blue;
    width: 100%;
    height: 100px;
    
  }
`