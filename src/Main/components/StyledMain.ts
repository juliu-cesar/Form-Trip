import styled from "styled-components";

export const StyledMain = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  .left_side{
    width: 100%;
    min-width: 420px;
  }
  .right_side{
    width: 100%;
    min-width: 420px;
  }
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column-reverse;
    .left_side{
      width: 100%;
      min-width: 420px;
      max-width: 500px;
      margin: auto;
    }
    .right_side{
      width: 100%;
      min-width: 420px;
      max-width: 500px;
      margin: auto;
    }
  }
  @media (max-width: 620px) {
    padding: 0 10px;
    .left_side{
      width: 100%;
      min-width: unset;
      max-width: unset;
      margin: auto;
    }
    .right_side{
      width: 100%;
      min-width: unset;
      max-width: unset;
      margin: auto;
    }
  }
`