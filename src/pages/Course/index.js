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
import curso01 from "../../assets/curso.jpg"
import curso02 from "../../assets/curso02.jpg"

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
            {/* <HeaderFeed>
              <QuadradinhoLogo>
                <h1>TE</h1>
              </QuadradinhoLogo>
              <h1>Turma TCC</h1>
              <SubMenus>
                <li>Home</li>
                <li>Alunos</li>
                <li>Gráficos</li>
              </SubMenus>
               <ButtonCreateQuizz>Criar Turma</ButtonCreateQuizz> 
            </HeaderFeed> */}
            <MainFeed>
              <span>Cursos</span>
              <TesteCima>
                <Link to="/class">
                <CardHomeUp>
                <img src={curso02} alt="Foto do Curso"/>
                  <h1>Android - Kotlin</h1>
                </CardHomeUp>
                </Link>
                <Link to="/class">
                <CardHomeUp>
                 
                  <img src={curso01} alt="Foto do Curso"/>
                  <h1>Desenvolvimento Web</h1>
                </CardHomeUp>
                </Link>

                <hr />
              </TesteCima>
            </MainFeed>
          </FeedContainer>
        </Content>
      </Container>
    </>
  );
}

export default Course;
