import styled from "styled-components";

export const StyledHeader = styled.header`
width: 100vw;
height: 60px;
.frame_header{
  width: 100%;
  height: 100%;
  max-width: 1300px;
  padding: 10px 30px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.logo{
  color: ${({theme})=> theme.primary_color};
  font-family: 'Lobster', cursive;
  font-size: 35px;
}
.btn_theme{
  position: relative;
  background-color: #ddd;
  width: 52px;
  height: 28px;
  border: 1px solid ${({theme})=> theme.text_color};
  border-radius: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  .icon-sun{
    width: 20px;
    margin-left: 3px;
  }
  .icon-moon{
    width: 15px;
    margin-right: 4px;
  }
  .cover_theme{
    background-color: #222;
    position: absolute;
    width: 24px;
    height: 24px;
    top: 1px;
    left: 1px;
    border-radius: 50%;
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
}
`