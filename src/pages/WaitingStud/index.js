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

function WaitingStud() {
  const [] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <>
      <Container>
        <Header></Header>
        <Content>
          <FeedContainer>
            <MainFeed>
              <TesteCima>
                <CardHomeUp>
                  <h1>Você esta na sala de espera ;)</h1>
                  <h1>! Aguarde</h1>
                </CardHomeUp>
                <hr />
              </TesteCima>

              <TesteCima>
                <CardHomeDown>
                  <h1>Espere a proxima pergunta</h1>
                  <ButtonStartQuizz>
                    <span>Next</span>
                  </ButtonStartQuizz>
                </CardHomeDown>
              </TesteCima>

              <Footer>
                <FooterBox>
                  <CirculoFooter></CirculoFooter>

                  <CirculoFooter></CirculoFooter>

                  <CirculoFooter></CirculoFooter>

                  <CirculoFooter></CirculoFooter>
                </FooterBox>
              </Footer>
            </MainFeed>
          </FeedContainer>
        </Content>
      </Container>
    </>
  );
}

export default WaitingStud;
