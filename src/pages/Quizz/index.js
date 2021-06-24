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
  ChoiceCard,
} from "./styles";
import { useGlobal } from "../../App";
import { api } from "../../services/api";
import { useHistory } from "react-router-dom";

function Answer(answer) {
  console.log(answer);
  return (
    <>
      <ChoiceCard>
        <p>{answer.choice.description}</p>
      </ChoiceCard>
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

      {showAnswers &&
        question.question.Choices.map((m) => <Answer choice={m} />)}
    </>
  );
}

function Home() {
  const history = useHistory();
  const [questions, setQuestions] = useState();
  const [show, setShow] = useState(false);
  const [showNewQuizz, setShowNewQuizz] = useState(false);
  const [globalState, globalActions] = useGlobal();
  const [title, setTitle] = useState({
    title: "",
  });
  const handleSubmit = async () => {
    try {
      globalState.socket.emit("prepareQuizz", {
        userId: 2,
        userLevel: 2,
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
      history.push("/");
    } catch (error) {}
  };
  const handleQuestions = async () => {
    try {
      const response = await api.get(`/question`);

      console.log(response.data);

      setQuestions(response.data);
    } catch (error) {}
  };
  useEffect(() => {
    handleQuestions();
  }, []);

  const handleInput = (e) => {
    setTitle({ ...title, [e.target.id]: e.target.value });
  };

  const handleNewQuizz = (e) => {
    setShowNewQuizz(true);
    //handleQuestions();
    console.log(questions);
    globalActions.addToSocket(io("http://localhost:3333/"));
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <>
      {showNewQuizz && (
        <Modal title="Criar Quizz" handleClose={() => setShowNewQuizz(false)}>
          <FormQuizz onSubmit={handleSubmit}>
            <label htmlFor="title">Titulo</label>
            <input
              id="title"
              placeholder="Digite um email"
              value={title.title}
              onChange={handleInput}
            />
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
          <ProfilePic />
        </Header>
        <Content>
          <MenuContainer>
            <MenuHg>
              <span>Cursos</span>
              <span>Turma</span>
              <hr />
              <h1>Recentes</h1>
              <LabelMenu>Card Turmas Recentes</LabelMenu>
              <LabelMenu>Card Turmas Recentes</LabelMenu>
              <LabelMenu>Card Turmas Recentes</LabelMenu>
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
              <ButtonCreateQuizz onClick={() => handleNewQuizz()}>
                Criar Quizz
              </ButtonCreateQuizz>
            </HeaderFeed>
            <MainFeed>
              <span>Em andamento</span>
              <TesteCima>
                <CardHomeUp>
                  <li>teste</li>
                  <li>teste</li>
                  <li>teste</li>
                  <li>teste</li>
                </CardHomeUp>
                <hr />
              </TesteCima>
              <span>Finalizados</span>
              <TesteBaixo>
                <CardHomeDown>
                  <li>teste</li>
                  <li>teste</li>
                  <li>teste</li>
                  <li>teste</li>
                </CardHomeDown>

                <CardHomeDown>
                  <li>teste</li>
                  <li>teste</li>
                  <li>teste</li>
                  <li>teste</li>
                </CardHomeDown>

                <CardHomeDown>
                  <li>teste</li>
                  <li>teste</li>
                  <li>teste</li>
                  <li>teste</li>
                </CardHomeDown>

                <CardHomeDown>
                  <li>teste</li>
                  <li>teste</li>
                  <li>teste</li>
                  <li>teste</li>
                </CardHomeDown>
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