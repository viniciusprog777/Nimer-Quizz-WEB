import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { useGlobal } from "../../App";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [questions, setQuestions] = useState(null);
  const [questionId, setQuestionId] = useState(0);
  const [globalState, globalActions] = useGlobal();
  const [showQuestion, setShowQuestion] = useState(true);
  const [showNext, setShowNext] = useState(false);
  const [wait, setWait] = useState(false)
  const user = getUser();
  let choice;
  let quizzId;
  // let questionId = 0;;

  const handleSubmit = async (choiceId) => {
    try {
      choice = choiceId;

      questions.nextQuestion.Quizzs.map((e) => {
        quizzId = e.id;
      });

      globalState.socket.emit("answerQuizz", {
        userId: user.userId,
        choiceId,
        quizzId,
      });
      setShowQuestion(false);
      setQuestions(null);
      setWait(true)
    } catch (error) {
      console.log(error);
    }
  };
  globalState.socket.on("answer", async () => {
    const cont = globalState.socket.emit("responsesQuant", {
      choiceId: choice,
      quizzId,
    });
    if (cont) {
      setShowNext(true);
      setShowQuestion(false);
      setQuestions(null);
    }
  });
  const handleQuestions = async () => {
    try {
      await globalState.socket.emit("nextQuestion", {
        userId: 2,
        quizzId: 42,
        questionId,
      });
      setShowNext(false);
      setShowQuestion(true);
      setWait(null)
      console.log(globalState.socket.rooms)
      await handleRes()
    } catch (error) {
      alert(error);
    }
  };
  const handleRes = async () => {
    await globalState.socket.on("resNextQuestion", async (q) => {
      setQuestions(q);
      setQuestionId(q.nextQuestion.id);
      setShowNext(false);
      setShowQuestion(true);
      setWait(null)
      console.log(q.nextQuestion.id);
    });
  }
  globalState.socket.on("resNoQuestion", async() => {
    history.push("/result");
  });
  
  useEffect(async () => {
    await handleQuestions();
    setShowNext(false);
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
                        {user.userLevel === 3 &&
                          questions.choices.map((e) => (
                            <ButtonChoices onClick={() => handleSubmit(e.id)}>
                              {e.description}
                            </ButtonChoices>
                          ))}
                        {user.userLevel === 2 &&
                          questions.choices.map((e) => (
                            <ButtonChoices>{e.description}</ButtonChoices>
                          ))}
                      </ListChoices>
                      <QuestionZZ></QuestionZZ>
                    </CardQuestion>
                  )}
                  {wait && (
                    <h1>Aguardando outros jogadores</h1>
                  )}
                  {showNext && user.userLevel === 2 && (
                    <>
                      <h1>Todos Responderam</h1>
                      <button onClick={() => handleQuestions()}>
                        Proxima Questão
                      </button>
                    </>
                  )}
                </CardHomeUp>
              </TesteCima>
              {/* <Footer>
                <FooterBox>
                  {/* <CirculoFooter>{/* A foto vem aqui */}
                  {/* </CirculoFooter>

                  <CirculoFooter></CirculoFooter>

                  <CirculoFooter></CirculoFooter>

                  <CirculoFooter></CirculoFooter> */} 
                {/* </FooterBox>
              </Footer> */} 
            </MainFeed>
          </FeedContainer>
        </Content>
      </Container>
    </>
  );
}

export default QuizzScreen;
