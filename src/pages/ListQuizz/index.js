import { useEffect, useRef, useState } from "react";
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

function ListQuizz() {
  const [] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <>
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
              <ButtonCreateQuizz>FUNÇAO</ButtonCreateQuizz>
            </HeaderFeed>
            <MainFeed>
              <span>Quizz em andamento</span>
              <TesteCima>
                <CardHomeUp>
                  <h1>Titulo</h1>
                  <label>Qtde Perguntas</label>
                  <p>16 perguntas</p>
                  <label>Professor</label>
                  <p>Rafael Leme</p>
                </CardHomeUp>

                <CardHomeUp>
                  <h1>Titulo</h1>
                  <label>Qtde Perguntas</label>
                  <p>16 perguntas</p>
                  <label>Professor</label>
                  <p>Rafael Leme</p>
                </CardHomeUp>

                <CardHomeUp>
                  <h1>Titulo</h1>
                  <label>Qtde Perguntas</label>
                  <p>16 perguntas</p>
                  <label>Professor</label>
                  <p>Rafael Leme</p>
                </CardHomeUp>

                <CardHomeUp>
                  <h1>Titulo</h1>
                  <label>Qtde Perguntas</label>
                  <p>16 perguntas</p>
                  <label>Professor</label>
                  <p>Rafael Leme</p>
                </CardHomeUp>

                <CardHomeUp>
                  <h1>Titulo</h1>
                  <label>Qtde Perguntas</label>
                  <p>16 perguntas</p>
                  <label>Professor</label>
                  <p>Rafael Leme</p>
                </CardHomeUp>

                <hr/>
              </TesteCima>
              <span>Quizz Finalizados</span>
              <TesteBaixo>
                <CardHomeDown>
                  <h1>Titulo</h1>
                  <label>Acertos</label>
                  <p>Grafico</p>
                  <label>Nota</label>
                </CardHomeDown>

                <CardHomeDown>
                  <h1>Titulo</h1>
                  <label>Acertos</label>
                  <p>Grafico</p>
                  <label>Nota</label>
                </CardHomeDown>

                <CardHomeDown>
                  <h1>Titulo</h1>
                  <label>Acertos</label>
                  <p>Grafico</p>
                  <label>Nota</label>
                </CardHomeDown>

                <CardHomeDown>
                  <h1>Titulo</h1>
                  <label>Acertos</label>
                  <p>Grafico</p>
                  <label>Nota</label>
                </CardHomeDown>

              </TesteBaixo>
              
            </MainFeed>
          </FeedContainer>
        </Content>
      </Container>
    </>
  );
}

export default ListQuizz;
