import styled, { keyframes } from "styled-components";

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

export const MenuContainer = styled.div`
  width: 100%;
  height: 100hv;
  flex-direction: column;

  background-color: var(--primaryLight);

  display: flex;
  align-items: flex-start;
  padding-top: 10px;

  font-size: 16px;
`;

export const MenuHg = styled.div`
  width: 100%;
  align-items: center;
  color: var(--light);
  /* border-bottom:3px solid var(--darkdark); */
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    cursor: pointer;
    width: 95%;
    padding: 10px;
    font-size: 20px;
    margin-top: 10px;

    transition: 0.2s;

    :hover {
      text-shadow: 2px 2px 5px var(--darkdark);
      background-color: var(--secondary);
    }
  }

  hr {
    margin-top: 10px;
    width: 98%;
  }

  > h1 {
    width: 95%;
    text-align: left;
    font-size: 20px;
    margin-top: 10px;
    margin-left: 10px;
    font-weight: normal;
  }
`;

export const LabelMenu = styled.div`
  height: 40px;
  width: calc(92%);
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  background-color: var(--light);

  color: var(--darkdark);
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
  width: 100hv;
  height: 94%;
  flex-direction: column;
  background-color: var(--light);
  display: flex;
  align-items: flex-start;

  font-size: 16px;
  padding:50px;
  
  > span {
    font-size:20px;
    margin-bottom: 10px;
    color: var(--darkdark);

    :hover {
      box-shadow: 0px 0px 5px var(--darkShadow);
    }   
  }
`;

export const CardHomeUp = styled.div`
  width: 500px;
  height: 200px;
  background-color: var(--primary);
  margin:10px;
  align-items: center;
  display: flex;
  margin-left: 420px;
  border-radius: 60px;
  


  > h1 {
    font-size: 35px;
    margin-left:25px;
    color: var(--light);
    margin-left:50px;
  }

  :hover{
    transform: scale(1.1);
  }
`;



export const TesteCima = styled.div`
margin:2px;
flex-direction: row;
display:flex;
align-items: flex-start;
margin-bottom:20px;

> span {
  font-size:18px;
}
`;

export const Footer = styled.div`
height: 150px;
width: 1000px;
background-color: var(--primary);
display: flex;
margin-left: 180px;
margin-top: 150px;
border-radius: 50px;


`;

export const FooterBox = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
`;

export const CirculoFooter = styled.div`
height: 120px;
width: 120px;
background-color: var(--light);
border-radius: 100px;
margin: 10px;
`;

