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
  width: 100hv;
  height: 94%;
  background-color: var(--light);

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
  width: 1000PX;
  height: 570px;
  background-color: var(--primary);
  margin:10px;
  align-items: center;
  display: flex;
  margin-left: 190px;
  border-radius: 60px;
  


  > h1 {
    font-size: 35px;
    margin-left:25px;
    color: var(--light);
    margin-left:50px;
  }
`;

export const TesteCima = styled.div`
margin:2px;
margin-bottom:20px;
`;

export const TitleAndMore = styled.div`


> h1 {
  font-size:38px;
  color: var(--light);
  padding-left: 320px;
  padding-bottom: 100px;
}
`;

export const CardQuestion = styled.div`

`;

export const NumberQuest = styled.div`
padding: 15px;
>span{
color: var(--light);
font-size: 35px;
margin-top: -100px;
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



