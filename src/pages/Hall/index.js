import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
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
import { useGlobal } from "../../App";
import { useHistory } from "react-router-dom";


function Hall() {
  const history = useHistory();

  const [show, setShow] = useState(false);
  const [globalState, globalActions] = useGlobal();
  const level = 1;

  useEffect(() => {
    globalActions.addToSocket(io("http://localhost:3333/"));
  }, [])

  const handleSubmit = () => {
    try {
      globalState.socket.emit("iniciateQuizz", {
        userId: 2,
        userLevel: 2,
        quizzId: 14,
      })
      history.push("/quizzes")
    } catch (error) {
      
    }
  }
  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <>
      <Container>
        {/* <Header>
        </Header> */}
        <Content>
          <FeedContainer>
            <MainFeed>
                {level === 1 && (
                  <>
                   <CardHomeUp>
                   <h1>Pronto para iniciar?</h1>
                  </CardHomeUp>
                 <CardHomeDown>
                   <ButtonStartQuizz onClick={() => handleSubmit()}><span>START</span></ButtonStartQuizz>
                   <ButtonCancelQuizz><span>CANCEL</span></ButtonCancelQuizz>
                 </CardHomeDown>
                 </>
                )}
                {level === 2 && (
                  <>
                  <CardHomeUp>
                    <h1>Aguardando Host...</h1>
                  </CardHomeUp>
                  </>
                )}
               

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

export default Hall;
