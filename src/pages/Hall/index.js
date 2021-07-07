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
  CirculoFooter02
} from "./styles";
import { useGlobal } from "../../App";
import { useHistory } from "react-router-dom";
import { getUser, signOut, setUser } from "../../services/security";

function Hall() {
  const history = useHistory();

  const [show, setShow] = useState(false);
  const [globalState, globalActions] = useGlobal();
  const user = getUser();
  const level = 1;

  // useEffect(() => {
  // }, [globalState.socket.rooms.size]);

  const handleSubmit = () => {
    try {
      globalState.socket.emit("iniciateQuizz", {
        userId: 2,
        userLevel: 2,
        quizzId: 42,
      });
      history.push("/quizzes");
    } catch (error) {}
  };
  globalState.socket.on("start", async () => {
    history.push("/quizzes");
  });
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
              {user.userLevel === 2 && (
                <>
                  <CardHomeUp>
                    <h1>Pronto para iniciar?</h1>
                  </CardHomeUp>
                  <CardHomeDown>
                    <ButtonStartQuizz onClick={() => handleSubmit()}>
                      <span>START</span>
                    </ButtonStartQuizz>
                    <ButtonCancelQuizz>
                      <span>CANCEL</span>
                    </ButtonCancelQuizz>
                  </CardHomeDown>
                </>
              )}
              {user.userLevel === 3 && (
                <>
                  <CardHomeUp>
                    <h1>Aguardando Host...</h1>
                  </CardHomeUp>
                </>
              )}

              <Footer>
                <FooterBox>
                  <CirculoFooter></CirculoFooter>
                  {user.userLevel === 3 && <CirculoFooter02></CirculoFooter02>}
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
