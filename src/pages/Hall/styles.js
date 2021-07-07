import styled, { keyframes } from "styled-components";
import imgProfile from "../../assets/perfil.jpg";
import imgProfile02 from "../../assets/perfil02.jpg";


export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: var(--light);

  display: flex;
  justify-content: left;
`;

export const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 60px;

  display: flex;
  align-items: right;
  justify-content: space-between;

  background-color: var(--primary);
  box-shadow: 0px 2px 5px var(--darkShadow);
`;
export const FeedHome = styled.div`
  display: flex;
  flex-direction: horizontal;
  align-items: center;
  /* back */
  gap: 10px;
  overflow-y: auto;

  padding: 10px 0px;
`;

export const Content = styled.div`
  width: 100%;
  padding-top: 60px;

  display: grid;
  grid-template-columns: 200px calc(100% - 200px);
`;

export const FeedContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--light);
`;

export const ActionsContainer = styled.div``;

export const QuadradinhoLogo = styled.div`
  width: 50px;
  height: 50px;
  margin-top: 10px;
  margin: 20px;
  padding-top: 5px;
  border: 2px solid var(--darkdark);
  background-color: var(--primary);
  box-shadow: 0px 0px 5px var(--darkdark);

  cursor: pointer;
  transition: 0.2s;
  text-align: center;
  font-size: 30px;

  > h1 {
    padding-top: 6px;
    font-size: 20px;
    color: var(--light);
  }

  :hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 15px var(--darkdark);
    background-color: var(--secondary);
    color: var(--light);
  }
`;

export const HeaderFeed = styled.div`
  width: 100%;
  height: 60px;
  background-color: var(--light);
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 5px var(--darkdark);

  > h1 {
    font-size: 20px;
  }
`;

export const SubMenus = styled.nav`
  display: flex;
  flex-direction: row;
  margin-left: 10px;

  > li {
    margin-right: 10px;
    list-style-type: none;

    cursor: pointer;

    :hover {
      text-shadow: 2px 2px 5px var(--darkShadow);
    }
  }
`;
export const ButtonCreateQuizz = styled.button`
  position: fixed;
  right: 20px;

  background-color: var(--secondary);
  padding: 10px;
  color: var(--light);
  border: none;
  font-weight: bold;

  cursor: pointer;
  transition: 0.2s;

  :hover {
    box-shadow: 0px 0px 5px var(--darkShadow);
  }
`;

export const MainFeed = styled.div`
  width: 100vw;
  height: 94%;
  flex-direction: column;
  background-color: var(--light);
  display: flex;
  align-items: center; 
  justify-content: center;

  font-size: 16px;
  /* padding: 50px; */

  > span {
    font-size: 20px;
    margin-bottom: 10px;
    color: var(--darkdark);

    :hover {
      box-shadow: 0px 0px 5px var(--darkShadow);
    }
  }
`;

export const CardHomeUp = styled.div`
  width: 1000px;
  height: 200px;
  border: 10px solid green;
  margin-bottom: 100px;
  background-color: var(--primary);
  margin: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 60px;

  > h1 {
    font-size: 50px;
    margin-left: 25px;
    color: var(--light);
    margin-left: 50px;
  }

  :hover {
    text-shadow: 2px 2px 5px var(--darkdark);
  }
`;

export const TesteCima = styled.div`
  margin: 2px;
  flex-direction: row;
  display: flex;
  border: 1px solid black;
  margin-bottom: 20px;

  > span {
    font-size: 18px;
  }
`;

export const Footer = styled.div`
  height: 110px;
  width: 100vw;
  position: absolute;
  bottom: 0;
  background-color: var(--primary);
  display: flex;
  margin-top: 50px;
`;

export const FooterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const CirculoFooter = styled.div`
  height: 80px;
  width: 80px;
  background-image: url(${imgProfile});
  background-size: contain;
  border-radius: 100px;
  margin: 10px;
`;

export const CirculoFooter02 = styled.div`
  height: 80px;
  width: 80px;
  background-image: url(${imgProfile02});
  background-size: cover;
  border-radius: 100px;
  margin: 10px;
`;

export const ButtonStartQuizz = styled.div`
  width: 200px;
  height: 100px;
  background-color: var(--secondary);
  color: var(--light);
  margin-left: 10px;
  border-radius: 50px;
  border-color: black;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 35px;
  cursor: pointer;

  :hover {
    text-shadow: 2px 2px 5px var(--darkdark);
    background-color: var(--secondary2);
    transform: scale(1.1);
  }
`;

export const ButtonCancelQuizz = styled.div`
  width: 200px;
  height: 100px;
  background-color: var(--vermelhao);
  color: var(--light);
  margin-left: 20px;
  border-radius: 50px;
  border-color: black;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 35px;
  cursor: pointer;

  :hover {
    text-shadow: 2px 2px 5px var(--darkdark);
    background-color: var(--vermelhao2);
    transform: scale(1.1);
  }
`;

export const CardHomeDown = styled.div`
  width: 500px;
  height: 200px;
  background-color: var(--primary);
  margin: 30px;
  padding: 30px;
  align-items: center;
  display: flex;
  margin-bottom: 250px;
  /* margin-left: 420px; */
  border-radius: 60px;
`;
