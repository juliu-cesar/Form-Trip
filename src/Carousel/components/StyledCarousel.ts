import styled from "styled-components";

export const StyledCarousel = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 16px;
  margin: auto;
  margin-bottom: 30px;
  button {
    width: 50px;
    height: 45px;
    padding: 6px;
    border-radius: 50%;
    transition: all 0.4s;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      outline: 2px solid ${({ theme }) => theme.text_color};
    }
  }
  .frame {
    width: 100%;
    display: flex;
    gap: 15px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .frame_img {
    position: relative;
    width: 100%;
    height: 50vw;
    max-height: 500px;
    border-radius: 15px;
    overflow: hidden;
  }
  .Carousel {
    position: absolute;
    width: calc(100% * 4);
    height: 100%;
    top: 0;
    left: 0px;
    display: flex;
    flex-direction: row;
    transition: all 0.7s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .card_img {
    position: relative;
    width: calc(100% / 4);
    height: 100%;
    img {
      width: 100%;
    }
  }
  @media (max-width: 620px) {
    padding: 0 10px;
    .frame {
      gap: 10px;
    }
    .frame_img {
      width: 100%;
      height: 45vw;
    }
    button {
      width: 45px;
      height: 40px;
      padding: 5px;
    }
  }
  @media (max-width: 400px) {
    width: 100%;
    min-width: 280px;
    min-height: 120px;
    padding: 0 5px;
    .frame {
      gap: 5px;
    }
    .frame_img {
      /* height: 50vw; */
      min-height: 120px;
    }
  }
  @media (min-width: 1000px) {
    .card_img {
      img {
        position: absolute;
        top: -20%;
        left: 0;
        width: 100%;
      }
    }
  }
`;
