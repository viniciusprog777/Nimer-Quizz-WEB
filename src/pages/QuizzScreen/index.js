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

function QuizzScreen() {
  const [] = useState("");
  const [show, setShow] = useState(false);
  const [questions, setQuestions] = useState(null);
  const [globalState, globalActions] = useGlobal();

  const [showQuestion, setShowQuestion] = useState(true);

  const handleSubmit = async (choiceId) => {
    try {
      let quizzId;
      questions.nextQuestion.Quizzs.map((e) => {
        quizzId = e.id;
      });
      globalState.socket.emit("answerQuizz", {
        studentId: 1,
        choiceId,
        quizzId,
      });
      setShowQuestion(false);
      setQuestions(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuestions = async () => {
    try {
      await globalState.socket.emit("nextQuestion", {
        userId: 2,
        quizzId: 1,
        questionId: 0,
      });
      await globalState.socket.on("resNextQuestion", (q) => {
        setQuestions(q);
        console.log(q);
      });
    } catch (error) {}
  };
  useEffect(() => {
    globalActions.addToSocket(io("http://localhost:3333/"));

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
                        {questions.choices.map((e) => (
                          <ButtonChoices onClick={() => handleSubmit(e.id)}>
                            {e.description}
                          </ButtonChoices>
                        ))}
                      </ListChoices>
                      <QuestionZZ></QuestionZZ>
                    </CardQuestion>
                  )}
                  {!showQuestion && <h1>Aguardando outros jogadores</h1>}
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
