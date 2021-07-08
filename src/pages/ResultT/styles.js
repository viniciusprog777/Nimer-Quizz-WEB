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
 
`;

export const FeedContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--light);
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


export const MainFeed = styled.div`
  width: 100vw;
  height: 94%;
  background-color: var(--light);
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 800px;
  height: 500px;
  background-color: var(--primary);
  margin:10px;
  padding: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: var(--light);
  font-size: 20px;
  text-shadow: 2px 2px 5px var(--darkdark);
  
  
  >span{
    
    font-size:60px;
    display:flex;
    justify-content:center;
  }
  :hover{
    text-shadow: 2px 2px 5px var(--darkdark);
  }
`;



export const TesteCima = styled.div`
margin:2px;
flex-direction: row;
display:flex;
align-items: flex-start;
margin-bottom:20px;
`;

export const Footer = styled.div`
height: 150px;
width: 100vw;
background-color: var(--secondary);
display: flex;
position: fixed;
bottom: 0;
margin-top: 150px;
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

export const CardHomeDown = styled.div`
  width: 500px;
  height: 200px;
  background-color: var(--primary);
  margin:30px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 420px;
  border-radius: 60px; 
`;

export const CardTeste = styled.div`
width: 700px;
height: 400px;
background-color: var(--secondary);
display: flex;
align-self: center;
flex-direction: column;
color: var(--light);
padding: 25px;
>h1{
  margin: 5px;
}
`;

export const ButtonReturn = styled.div`
width: 180px;
height: 220px;
display: flex;
align-self: flex-end;
justify-content: center;
margin-top: 50px;
font-size: 35px;
background-color: red;
:hover {
  color: var(--light);
  cursor: pointer;
  box-shadow: 0px 0px 5px var(--darkShadow);
}
`;