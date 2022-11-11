import styled, { createGlobalStyle } from "styled-components";
// import BGImage from "./images/nattu-adnan-unsplash.jpg";

export const GlobalStyle = createGlobalStyle`
	html {
		height: 100%;

    * {
      margin: 0;
      padding: 0;
    }
	}

	body {
    background-color: #e6f3ff;
    margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
    overflow-x: hidden; 
	}

	* {
		box-sizing: border-box;
		font-family: 'Catamaran', sans-serif;
	}
`;

export const NavWrapper = styled.nav`
  background-color: #fff;
  width: 100vw;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;

  > .nav_cont_1 {
    max-width: 1200px;
    width: 60%;
    padding: 20px 0;

    h1 {
      font-family: Rubik, sans-serif;
      background-image: linear-gradient(180deg, #000, #000);
      background-size: 100%;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
      font-size: 3rem;
      font-weight: 500;
      text-align: left;
    }

    @media (max-width: 768px) {
      h1 {
        text-align: left;
        font-size: 2.6rem;
      }
    }

    @media (max-width: 500px) {
      h1 {
        text-align: left;
        font-size: 1.6rem;
      }
    }
  }

  > .nav_cont_2 {
    display: flex;
    flex-direction: column;
    font-size: 13px;

    p {
      display: flex;
      align-items: center;
      font-size: 0.8rem;

      img {
        width: 20%;
        margin-left: 5px;
      }
    }

    a {
      text-decoration: underline;
      color: #000;
      font-weight: 600;
      font-size: 0.7rem;
    }

    @media (max-width: 768px) {
      p {
        font-size: 0.6rem;
      }

      a {
        font-size: 0.56rem;
      }
    }
  }
`;

export const Wrapper = styled.div`
  padding: 30px 0;
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: 768px) {
    align-items: center;
    gap: 50px;
    flex-direction: column;
  }

  > * {
    /* border: 1px solid black; */
  }

  > p {
    color: #000;
  }

  .score {
    color: #000;
    font-size: 2rem;
    margin: 0;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(170deg, #595959, #1a1a1a, #000, #000);
    border: none;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    color: #fff;
  }

  .start {
    max-width: 200px;
  }
`;

export const GameSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  /* border: 1px solid #000; */
  width: 65%;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const DifficultySelect = styled.select`
  margin: 5px 3px 0px;
  border: 2px solid #ccc;
  background-color: #efefef;
  border-radius: 4px;
  width: 130px;
  font-size: 14px;
  outline: none;
  padding: 2px 0;
  text-align: center;
`;

export const SetDifficultyView = styled.div`
  margin-top: 5px;
  border: 2px solid #ccc;
  background-color: #efefef;
  border-radius: 4px;
  width: 130px;
  font-size: 14px;
  outline: none;
  text-align: center;
  padding: 2px 0;
`;

export const ExtraContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;

  .art_sec_01 {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;

    > h1 {
      width: 55%;
      font-size: 1.3rem;
      color: #2f3a43;
    }
    > div {
      position: relative;
      max-width: 125px;
      max-height: 125px;
      min-height: 125px;
      width: 40%;

      > p {
        position: absolute;
        bottom: -14%;
        opacity: 0.7;
        left: 9%;
        font-style: italic;
        font-size: 12px;
        color: #ab6800;
        font-weight: 700;
      }
    }
    .profile_img_cont {
      border-radius: 50%;
      max-width: 125px;
      max-height: 125px;
      min-height: 125px;
      width: 100%;
      overflow: hidden;

      img {
        width: 105%;
        object-fit: cover;
        object-position: -50%;
      }
    }
  }
  .created_with_cont {
    padding-top: 10px;
    width: 90%;
    display: flex;
    flex-direction: column;

    a {
      text-decoration: none;
      color: #000;
      font-size: 17px;
      width: 70%;
      opacity: 0.6;
      /* border: 1px solid black; */

      &:hover {
        opacity: 0.84;
      }

      @media (max-width: 768px) {
        margin: 0 auto;
      }

      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 7px;
        > p {
          width: 70%;
        }
        > div {
          max-width: 60px;
          min-width: 60px;
          width: 60%;
          max-height: 60px;
          min-height: 60px;
          height: 100%;

          img {
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          > p {
            text-align: left;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    max-width: 500px;
    width: 100%;
    padding: 10px;
    text-align: center;
  }
`;
