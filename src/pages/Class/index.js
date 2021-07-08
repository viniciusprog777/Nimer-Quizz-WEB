import { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ModalClass from "../../components/ModalClass";
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
  FormClass
} from "./styles";
import turma01 from "../../assets/turma.jpg"
import { getUser } from "../../services/security";
import { api } from "../../services/api";
import { useGlobal } from "../../App";

function Class() {
  const history = useHistory();
  const [classes, setClass] = useState(null);
  const [globalState, globalActions] = useGlobal();
  const [showNewClass, setShowNewClass] = useState(false);
  const [name, setName] = useState({
    name: "",
  });
  const user = getUser();

  const handleSubmit = async(classId) =>{
    globalActions.addToClass(classId)
    history.push("/quizzs");
  }
  const handleClass = async() =>{
    try {
      let response
      if (user.userLevel === 2) {
        response = await api.get(`/class/${globalState.courseId}/teacher`);
      }
      if (user.userLevel === 3) {
        response = await api.get(`/class/${globalState.courseId}/student`);
      }
      await setClass(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleNewClass = async() =>{
    try {
      const response = await api.post(`/class/${globalState.courseId}`, {
        name: name.name
      })
      history.push("/course");
    } catch (error) {
      console.log(error);
    }
  }
  const handleInput = (e) => {
    setName({ ...name, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    handleClass()
  }, [])

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setShow(!show);
  // };

  return (
    <>
      {showNewClass && (
        <ModalClass title="Criar Turma" handleClose={() => setShowNewClass(false)}>
          <FormClass onSubmit={handleNewClass}>
            <label htmlFor="title">Nome da Turma:</label>
            <input id="name" value={name.name} onChange={handleInput} />

            <button type="submit">Enviar</button>
          
          </FormClass>
        </ModalClass>
      )}
      <Container>
        <Header>
          <ProfilePic />
        </Header>
        <Content>
          <MenuContainer>
            <MenuHg>
              <span><Link to="/course">Cursos </Link></span>
              <span><Link to="/class">Turma</Link></span>
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
              {user.userLevel === 2 && <ButtonCreateQuizz onClick={() => setShowNewClass(true)}>Criar Turma</ButtonCreateQuizz>}
            </HeaderFeed>
            <MainFeed>
              <span>Turmas</span>
              <TesteCima>
                {classes && classes.map((c) => (
                   <CardHomeUp onClick={() => handleSubmit(c.id)}>
                   <h1>{c.name}</h1>
                 </CardHomeUp>
                ))}
{/*               
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
                </Link> */}
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
