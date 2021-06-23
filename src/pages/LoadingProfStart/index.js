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
} from "./styles";

function LoadingProfStart() {
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
                  <h1>Pronto para iniciar prof ?</h1>
                </CardHomeUp>
                <hr/>
              </TesteCima>

              <TesteCima>
                <CardHomeDown>
                  <ButtonStartQuizz><span>START</span></ButtonStartQuizz>
                  <ButtonCancelQuizz><span>CANCEL</span></ButtonCancelQuizz>
                </CardHomeDown>
                <hr/>
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

export default LoadingProfStart;
