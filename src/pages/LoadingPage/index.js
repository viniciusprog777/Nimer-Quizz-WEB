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
} from "./styles";

function LoadingPage() {
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
                  <h1>Carregando Aguarde ...</h1>
                </CardHomeUp>
                <hr/>
              </TesteCima>

              <Footer>
                  <FooterBox>

                      <CirculoFooter>
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

export default LoadingPage;
