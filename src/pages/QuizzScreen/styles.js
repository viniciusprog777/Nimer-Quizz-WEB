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


// export const ButtonCreateQuizz = styled.button`
//   position: fixed;
//   right: 20px;

//   background-color: var(--secondary);
//   padding: 10px;
//   color: var(--light);
//   border: none;
//   font-weight: bold;

//   cursor: pointer;
//   transition: 0.2s;

//   :hover {
//     box-shadow: 0px 0px 5px var(--darkShadow);
//   }
// `;

export const MainFeed = styled.div`
  width: 100vw;
  height: 94%;
  background-color: var(--light);
  display: flex;
  justify-content: center;
  align-items: center; 


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
  width: 1000px;
  min-height: 200px;
  height: auto;
  overflow: hidden;
  background-color: var(--primary);
  display: flex;
  justify-content: center;
  border-radius: 10px;
  padding: 10px;
  padding-bottom: 20px;
  


  > h1 {
    font-size: 35px;
    display: flex;
    align-self: center;
    
    color: var(--light);
    
  }
`;

export const ListChoices = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
`;
export const ButtonChoices = styled.button`
 display: flex;
  width: 100%;
  height: 80px;
  margin-bottom: 20px;
  font-size: 20px;
  padding-left: 5px;
  align-items: center;
  box-shadow: 5px 5px 10px black;
  background-color: var(--light);
`;

export const TesteCima = styled.div`
margin:2px;
margin-bottom:20px;
`;


export const CardQuestion = styled.div`
  width: 100%;
`;

export const NumberQuest = styled.div`
  padding: 15px;
  display: flex;
  align-items: flex-start;
  >span{
    color: var(--light);
    font-size: 35px;
    
  }
`;

export const QuestionZZ = styled.div`
flex-direction: column;
margin: 20px;

>input{
  padding: 20px;
  margin: 20px;
  color: var(--light);
}
`;
export const Footer = styled.div`
  height: 100px;
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
  background-color: var(--light);
  border-radius: 100px;
  margin: 10px;
`;



