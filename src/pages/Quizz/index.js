import { useEffect, useRef, useState } from "react";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import { io } from "socket.io-client";

import {
  Container,
  Header,
  ProfilePic,
  MenuContainer,
  Content,
  FormQuizz,
  FeedContainer,
  QuadradinhoLogo,
  MenuHg,
  LabelMenu,
  HeaderFeed,
  MainFeed,
  SubMenus,
  QuestionCard,
  ButtonCreateQuizz,
  CardHomeUp,
  CardHomeDown,
  TesteCima,
  TesteBaixo,
  ChoiceConteiner,
  ChoiceCard,
  ChoiceCorrectCard,
  ButtonEnterQuizz,
} from "./styles";


import { useGlobal } from "../../App";
import { api } from "../../services/api";
import { useHistory } from "react-router-dom";
import { getUser, signOut, setUser } from "../../services/security";

function Answer(answer) {
  console.log(answer);
  return (
    <>
      {answer.choice.correct_option === true && (
        <ChoiceCorrectCard>
          <p>{answer.choice.description}</p>
        </ChoiceCorrectCard>
      )}
      {answer.choice.correct_option === false && (
        <ChoiceCard>
          <p>{answer.choice.description}</p>
        </ChoiceCard>
      )}
    </>
  );
}

function Question(question) {
  const [showAnswers, setShowAnswers] = useState(false);
  console.log(question);

  return (
    <>
      <QuestionCard onClick={() => setShowAnswers(!showAnswers)}>
        <p>{question.question.title}</p>
      </QuestionCard>

      {showAnswers && (
        <ChoiceConteiner>
          {question.question.Choices.map((m) => (
            <Answer choice={m} />
          ))}
        </ChoiceConteiner>
      )}
    </>
  );
}
function Quizz(quizz) {}

function Home() {
  const history = useHistory();

  const [questions, setQuestions] = useState();
  const [quizzs, setQuizzs] = useState();
  const [show, setShow] = useState(false);
  const [showNewQuizz, setShowNewQuizz] = useState(false);
  const [globalState, globalActions] = useGlobal();

  const user = getUser();

  const [title, setTitle] = useState({
    title: "",
  });

  const handleSubmit = async () => {
    try {
      globalState.socket.emit("prepareQuizz", {
        userId: user.userId,
        userLevel: user.userLevel,
        title: title.title,
        classId: 1,
        questions: [
          {
            id: 1,
          },
          {
            id: 2,
          },
        ],
      });
      history.push("/hall");
    } catch (error) {}
  };
  const handleEnterQuizz = async (quizzId) => {
    try {
      globalState.socket.emit("enterQuizz", {
        classId: 1,
        userId: user.userId,
        quizzId: 42,
      });
      history.push("/hall");
    } catch (error) {
      console.log(error);
    }
  };
  const handleQuestions = async () => {
    try {
      const response = await api.get(`/question`);

      console.log(response.data);

      setQuestions(response.data);
    } catch (error) {}
  };
  const handleQuizz = async () => {
    try {
      const response = await api.get(`/quizz/1`);

      setQuizzs(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleQuizz();
    handleQuestions();
    globalActions.addToSocket(io("http://localhost:3333/"));
  }, []);

  const handleInput = (e) => {
    setTitle({ ...title, [e.target.id]: e.target.value });
  };

  const handleNewQuizz = (e) => {
    setShowNewQuizz(true);
    handleQuestions();
    console.log(questions);
    globalActions.addToSocket(io("http://localhost:3333/"));
  };

  return (
    <>
      {showNewQuizz && (
        <Modal title="Criar Quizz" handleClose={() => setShowNewQuizz(false)}>
          <FormQuizz onSubmit={handleSubmit}>
            <label htmlFor="title">Nome:</label>
            <input id="title" value={title.title} onChange={handleInput} />
            <h1>Questões</h1>
            {questions.map((q) => (
              <Question question={q} />
            ))}
            <button type="submit">Enviar</button>
            {/* <Input
              id="title"
              label="Titulo"
              value={title.title}
              handler={handleInput}
            /> */}
          </FormQuizz>
        </Modal>
      )}
      <Container>
        <Header>
          <ProfilePic >
          </ProfilePic>
        </Header>
        <Content>
          <MenuContainer>
            <MenuHg>
              <span>Cursos</span>
              <span>Turma</span>
              <hr />
              <h1>Recentes</h1>
              <LabelMenu>Elétrica</LabelMenu>
              <LabelMenu>Construção Civil</LabelMenu>
              <LabelMenu>Redes</LabelMenu>
            </MenuHg>
          </MenuContainer>
          <FeedContainer>
            <HeaderFeed>
              <QuadradinhoLogo>
                <h1>TE</h1>
              </QuadradinhoLogo>
              <h1>Turma TCC</h1>
              <SubMenus>
                <li>Home</li>
                <li>Alunos</li>
                <li>Gráficos</li>
              </SubMenus>
              {user.userLevel === 2 && (
                <ButtonCreateQuizz onClick={() => handleNewQuizz()}>
                  Criar Quizz
                </ButtonCreateQuizz>
              )}
            </HeaderFeed>
            <MainFeed>
              {/* <span>Em andamento</span> */}
              <TesteCima>
                {user.userLevel === 3 && (
                  <CardHomeUp>
                    <h1>Quizz Dst-3</h1>
                    <ButtonEnterQuizz onClick={() => handleEnterQuizz()}>
                      Entrar
                    </ButtonEnterQuizz>
                  </CardHomeUp>
                )}

                {quizzs &&
                  quizzs.map((e) => {
                    <Quizz></Quizz>;
                  })}

                <hr />
              </TesteCima>
              <span>Finalizados</span>
              <TesteBaixo>
                <CardHomeUp>
                  <h1>Quizz Redes</h1>
                </CardHomeUp>

                <CardHomeUp>
                  <h1>Quizz Front</h1>
                </CardHomeUp>

                <CardHomeUp>
                  <h1>Quizz Back</h1>
                </CardHomeUp>

                <CardHomeUp>
                  <h1>Prova de Testes</h1>
                </CardHomeUp>
              </TesteBaixo>
            </MainFeed>
          </FeedContainer>
        </Content>
      </Container>
    </>
  );
}

// Nao consegui terminar as telas dessa sprint

export default Home;
