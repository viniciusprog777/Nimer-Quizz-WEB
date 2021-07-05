import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { useGlobal } from "../../App";
import {
  Container,
  Header,
  ListChoices,
  ButtonChoices,
  Content,
  FeedContainer,
  MainFeed,
  CardHomeUp,
  TesteCima,
  TitleAndMore,
  NumberQuest,
  CardQuestion,
  QuestionZZ,
  Footer,
  FooterBox,
  CirculoFooter,
} from "./styles";
import { getUser, signOut, setUser } from "../../services/security";

function QuizzScreen() {
  const [] = useState("");
  const [show, setShow] = useState(false);
  const [questions, setQuestions] = useState(null);
  const [globalState, globalActions] = useGlobal();
  const [showQuestion, setShowQuestion] = useState(true);
  const [showNext, setShowNext] = useState(false);
  const user = getUser();
  let choice;
  let quizzId;
  let questionId = 0;

  const handleSubmit = async (choiceId) => {
    try {
      choice = choiceId;
      
      questions.nextQuestion.Quizzs.map((e) => {
        quizzId = e.id;
      });
      questionId = questions.nextQuestion.id;
      globalState.socket.emit("answerQuizz", {
        userId: user.userId,
        choiceId,
        quizzId,
      });
      setShowQuestion(false);
      setQuestions(null);
    } catch (error) {
      console.log(error);
    }
  };
  globalState.socket.on("answer", async() =>{
    const cont = globalState.socket.emit("responsesQuant",{
      choiceId: choice,
      quizzId
    });
    if (cont) {
      setShowNext(true);
      setShowQuestion(false);
      setQuestions(null);
    }
     
  })
  const handleQuestions = async () => {
    try {
      await globalState.socket.emit("nextQuestion", {
        userId: 2,
        quizzId: 10,
        questionId,
      });
      await globalState.socket.on("resNextQuestion", (q) => {
        setQuestions(q);
        console.log(q);
      });
    } catch (error) {}
  };
  useEffect(() => {
    handleQuestions();
  }, []);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setShow(!show);
  // };

  return (
    <>
      <Container>
        <Header></Header>
        <Content>
          <FeedContainer>
            <MainFeed>
              <TesteCima>
                <CardHomeUp>
                  {showQuestion && questions && (
                    <CardQuestion>
                      <NumberQuest>
                        <span>1- </span>
                        <span>{questions.nextQuestion.title}</span>
                      </NumberQuest>
                      <ListChoices>
                        {user.userLevel === 3 && questions.choices.map((e) => (
                          <ButtonChoices 
                          onClick={() => handleSubmit(e.id)}
                          >
                            {e.description}
                          </ButtonChoices>
                        ))}
                        {user.userLevel=== 2 && questions.choices.map((e) => (
                          <ButtonChoices>
                            {e.description}
                          </ButtonChoices>
                        ))}
                      </ListChoices>
                      <QuestionZZ></QuestionZZ>
                    </CardQuestion>
                  )}
                  {!showQuestion && user.userLevel === 3 && <h1>Aguardando outros jogadores</h1>}
                  {showNext && user.userLevel === 2 && <>
                    <h1>Todos Responderam</h1>
                    <button onClick={() => handleQuestions()}>Proxima Questão</button>
                    </>
                  }
                </CardHomeUp>
              </TesteCima>
              <Footer>
                <FooterBox>
                  <CirculoFooter>{/* A foto vem aqui */}</CirculoFooter>

                  <CirculoFooter></CirculoFooter>

                  <CirculoFooter></CirculoFooter>

                  <CirculoFooter></CirculoFooter>
                </FooterBox>
              </Footer>
            </MainFeed>
          </FeedContainer>
        </Content>
      </Container>
    </>
  );
}

export default QuizzScreen;
