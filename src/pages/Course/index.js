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

function Course() {
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
              <ButtonCreateQuizz>Criar Quizz</ButtonCreateQuizz>
            </HeaderFeed>
            <MainFeed>
              <span>Cursos</span>
              <TesteCima>
                <CardHomeUp>
                  <li>teste</li>
                  <li>teste</li>
                  <li>teste</li>
                  <li>teste</li>
                </CardHomeUp>

                <CardHomeUp>
                  <li>teste</li>
                  <li>teste</li>
                  <li>teste</li>
                  <li>teste</li>
                </CardHomeUp>

                <CardHomeUp>
                  <li>teste</li>
                  <li>teste</li>
                  <li>teste</li>
                  <li>teste</li>
                </CardHomeUp>

                <CardHomeUp>
                  <li>teste</li>
                  <li>teste</li>
                  <li>teste</li>
                  <li>teste</li>
                </CardHomeUp>

                <CardHomeUp>
                  <li>teste</li>
                  <li>teste</li>
                  <li>teste</li>
                  <li>teste</li>
                </CardHomeUp>

                <hr />
              </TesteCima>

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

export default Course;
