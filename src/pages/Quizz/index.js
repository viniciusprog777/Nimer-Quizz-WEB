import { useEffect, useRef, useState } from "react";
import Modal from "../../components/Modal";
import { io } from "socket.io-client";

import {
  Container,
  Header,
  ProfilePic,
  MenuContainer,
  Content,
  FeedContainer,
  QuadradinhoLogo,
  MenuHg,
  LabelMenu,
  HeaderFeed,
  MainFeed,
  SubMenus,
  ButtonCreateQuizz,
  CardHomeUp,
  CardHomeDown,
  TesteCima,
  TesteBaixo,
} from "./styles";
import { useGlobal } from "../../App";





function Home() {
  const [] = useState("");
  const [show, setShow] = useState(false);
  const [showNewQuizz, setShowNewQuizz] = useState(false);
  const [globalState, globalActions] = useGlobal();


  const handleNewQuizz = (e) =>{
    //e.preventDefault();
    setShowNewQuizz(true)
    globalActions.addToSocket(io("http://localhost:3333/"));
  }

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <>
      {showNewQuizz && (
        <Modal
          title="Criar Quizz"
          handleClose={() => setShowNewQuizz(false)}
        >
          <button onClick={console.log(globalState.socket)}>Aqui</button>
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
              <ButtonCreateQuizz onClick={() => handleNewQuizz()}>Criar Quizz</ButtonCreateQuizz>
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
                <hr/>
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
