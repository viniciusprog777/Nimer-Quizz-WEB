import styled, { keyframes } from "styled-components";
import img from "../../assets/download.jpg";
import imgProfile from "../../assets/perfil.jpg";


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

export const ProfilePic = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  display: flex;
  right: 0;

  margin: 20px;

  margin-top: 5px;
  border-radius: 30px;
  /* border: 2px solid var(--darkdark); */
  background-image: url(${imgProfile});
  background-size: contain;

  box-shadow: 0px 0px 5px var(--darkdark);

  cursor: pointer;
  transition: 0.2s;
  

  :hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 15px var(--dark);
  }
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: calc(92%);
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  background-color: var(--light);

  color: var(--darkdark);

  :hover {
    color: white;
    background-color: var(--secondary);
    cursor: pointer;
  }
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
export const FormQuizz = styled.form`
  min-width: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid black;
  background-color: white;

  > button {
    position: relative;
    width: 100px;
    height: 40px;
    font-size: 18px;

    display: flex;
    align-self: flex-end;
    margin-right: 20px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
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
  }
  > label {
    font-size: 36px;
    margin-left: 10px;
    margin-top: 5px;
    font-weight: bold;
  }
  > input {
    height: 60px;
    font-size: 24px;
    padding-left: 10px;
    margin-bottom: 5px;
    margin-left: 5px;
    margin-right: 5px;
  }
  > h1 {
    font-size: 36px;
    margin: 10px;
  }
`;
export const QuestionCard = styled.div`
  width: 95%;
  min-height: 50px;
  height: auto;
  overflow: hidden;
  display: flex;
  align-self: center;
  align-items: center;
  font-size: 24px;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid black;
  margin-bottom: 5px;
  flex-direction: row;
  background-color: var(--primary);
  color: white;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    box-shadow: 0px 0px 5px var(--darkShadow);
  }
`;
export const ChoiceConteiner = styled.div`
  width: 92%;
  min-height: 50px;
  height: auto;
  overflow: hidden;
  background-color: #768891;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
`;
export const ChoiceCard = styled.div`
  width: 90%;
  min-height: 35px;
  height: auto;
  overflow: hidden;
  display: flex;
  align-self: center;
  align-items: center;
  font-size: 16px;
  padding-left: 5px;
  margin-bottom: 5px;
  margin-top: 5px;
  flex-direction: row;
  color: white;
  background-color: #f02b11;
`;
export const ChoiceCorrectCard = styled.div`
  width: 90%;
  min-height: 35px;
  height: auto;
  overflow: hidden;
  display: flex;
  align-self: center;
  align-items: center;
  font-size: 16px;
  padding-left: 5px;
  margin-bottom: 5px;
  margin-top: 5px;
  flex-direction: row;
  color: white;
  background-color: #278a30;
`;

export const MainFeed = styled.div`
  width: 100hv;
  height: 94%;
  flex-direction: column;
  background-color: var(--light);
  display: flex;
  align-items: flex-start;

  font-size: 16px;
  padding: 50px;

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
  width: 250px;
  height: 350px;
  /* background-color: var(--primary); */
  background-image: url(${img});
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
  margin-top: 15px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;

  > li {
    font-size: 28px;
    list-style-type: none;
    margin-left: 25px;
    padding-top: 15px;
    color: var(--light);
  }
  > h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--light);
  }
  > img {
    width: 100%;
    height: 250px;
    margin: 0;
    /* z-index: -1; */
    background-size: contain;
  }
`;

export const CardHomeDown = styled.div`
  width: 250px;
  height: 350px;
  background-color: var(--primary);
  margin-top: 15px;
  margin: 10px;

  > li {
    font-size: 28px;
    list-style-type: none;
    margin-left: 25px;
    padding-top: 15px;
    color: var(--light);
  }
`;

export const TesteCima = styled.div`
  margin: 2px;
  flex-direction: row;
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;

  > span {
    font-size: 18px;
  }
`;

export const TesteBaixo = styled.div`
  margin: 2px;
  flex-direction: row;
  display: flex;
  align-items: flex-start;

  > span {
    font-size: 18px;
  }
`;

export const ButtonEnterQuizz = styled.button`
  width: 250px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-size: 24px;
  background-color: white;
  font-weight: bold;
  cursor: pointer;
`;
