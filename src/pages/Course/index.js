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
import { api } from "../../services/api";
import { getUser, signOut, setUser } from "../../services/security";
import { useGlobal } from "../../App";

function Course() {
  const history = useHistory();
  const [] = useState("");
  const [show, setShow] = useState(false);
  const [course, setCourse] = useState(null);
  const [globalState, globalActions] = useGlobal();
  const user = getUser();

  const handleSubmit = async(courseId) =>{
    globalActions.addToCourse(courseId)
    history.push("/class");

  }
  const handleCourses = async() =>{
    try {
      let response
      if (user.userLevel === 2) {
        response = await api.get("/course/teacher");
      }
      if (user.userLevel === 3) {
        response = await api.get("/course/student");    
      }
      await setCourse(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleCourses()
  }, [])
  return (
    <>
      <Container>
        <Header>
          <ProfilePic />
        </Header>
        <Content>
          <MenuContainer>
            <MenuHg>
            <span><Link to="/course">Cursos </Link></span>
             <span><Link>Turma</Link></span>
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
                {/* {setTimeout(() => { */}
                  {course && course.map((c) => (
                    <CardHomeUp onClick={() => handleSubmit(c.id)}>
                      <img src={curso01} alt="Foto do Curso"/>
                      <h1>
                        {c.name}
                      </h1>
                    </CardHomeUp>
                     ))}
                 {/* }, 5000) }  */}
                {/* <Link to="/class">
                <CardHomeUp>
                </CardHomeUp>
                </Link>
                <Link to="/class">
                <CardHomeUp>
                 
                  <img src={curso01} alt="Foto do Curso"/>
                  <h1>Desenvolvimento Web</h1>
                </CardHomeUp>
                </Link> */}

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
