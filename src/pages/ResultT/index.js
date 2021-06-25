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

function Result() {
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

                  <ButtonReturn>Voltar/Sair</ButtonReturn>
                  </CardTeste>
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
                </CardHomeUp>
              </TesteCima>
              
            </MainFeed>
          </FeedContainer>
        </Content>
      </Container>
    </>
  );
}

export default Result;