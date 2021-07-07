import { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
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
import turma01 from "../../assets/turma.jpg"

function Class() {
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
              <LabelMenu>Mobile - Kotlin</LabelMenu>
              {/* <LabelMenu>Card Turmas Recentes</LabelMenu>
              <LabelMenu>Card Turmas Recentes</LabelMenu> */}
            </MenuHg>
          </MenuContainer>
          <FeedContainer>
            <HeaderFeed>
              <QuadradinhoLogo>
                <h1>TE</h1>
              </QuadradinhoLogo>
              <h1>Desenvolvimento Web</h1>
              <SubMenus>
                <li>Home</li>
                <li>Alunos</li>
                <li>Gráficos</li>
              </SubMenus>
              <ButtonCreateQuizz>Criar Turma</ButtonCreateQuizz>
            </HeaderFeed>
            <MainFeed>
              <span>Cursos</span>
              <TesteCima>
                <Link to="/quizzs">
                  <CardHomeUp>
                    <h1>DS1T</h1>
                  </CardHomeUp>
                </Link>

                <Link to="/quizzs">
                  <CardHomeUp>
                    <h1>DS2T</h1>
                  </CardHomeUp>
                </Link>

                <Link to="quizzs">
                  <CardHomeUp>
                    <img src={turma01} alt="Foto da Turma"/>
                    <h1>DS3M</h1>
                  </CardHomeUp>
                </Link>
                <hr/>
              </TesteCima>
            </MainFeed>
          </FeedContainer>
        </Content>
      </Container>
    </>
  );
}

// Nao consegui terminar as telas dessa sprint

export default Class;
