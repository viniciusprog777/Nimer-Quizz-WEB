import { useEffect, useRef, useState } from "react";
import {
  Container,
  Header,
  Content,
  FeedContainer,
  MainFeed,
  CardHomeUp,
  TesteCima,
  Footer,
  FooterBox,
  CirculoFooter,
  ButtonStartQuizz,
  CardHomeDown,
  ButtonCancelQuizz,
  CardTeste,
  ButtonReturn,
} from "./styles";
import { useGlobal } from "../../App";
import { useHistory } from "react-router-dom";
import { getUser, signOut, setUser } from "../../services/security";


function Result() {
  const [globalState, globalActions] = useGlobal();
  const history = useHistory();
  const user = getUser();


  const handleOut = () =>{
    globalState.socket.emit("quitQuizz", 47);
    history.push("/quizzs");
  }
  const handleResult = () =>{
    globalState.socket.emit("showResultAll")
    globalState.socket.emit("showResult")

  }
  useEffect(() =>{

  }, [])
  return (
    <>
      <Container>
        <Header>
        </Header>
        <Content>
          <FeedContainer>
            <MainFeed>
              <TesteCima>
                <CardHomeUp>
                  <span>Final de Partida</span>
                  <CardTeste>
                  <h1>Resultado Final:</h1>
                  <h1>Resultado dos Alunos:</h1>
                  <h1>Destaque da partida: Roberto Alvez</h1>
                  <h1>"Lista de alunos talvez"</h1>

                  <ButtonReturn onClick={() => handleOut()}>Sair</ButtonReturn>
                  </CardTeste>
                 
                </CardHomeUp>
              </TesteCima>
               <Footer>
                  <FooterBox>

                      <CirculoFooter>
                        {/* A foto vem aqui */}
                      </CirculoFooter>

                      <CirculoFooter>
                      </CirculoFooter>

                      <CirculoFooter>
                      </CirculoFooter>

                      <CirculoFooter>
                      </CirculoFooter>
                  </FooterBox>
              </Footer>
              
            </MainFeed>
          </FeedContainer>
        </Content>
      </Container>
    </>
  );
}

export default Result;