import { useEffect, useRef, useState } from "react";
import {
  Container,
  Header,
  Content,
  FeedContainer,
  MainFeed,
  CardHomeUp,
  TesteCima,
  TitleAndMore,
  NumberQuest,
  CardQuestion,
  QuestionZZ,

} from "./styles";

function QuizzScreen() {
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
                  <CardQuestion>
                  <TitleAndMore>
                      <h1>Banco de Dados </h1>
                  </TitleAndMore>
                  <NumberQuest>
                      <span>1-</span>
                      <span> Qua aiofuasfoiuasfjasiofjioasfijojoi</span>
                  </NumberQuest>
                  <QuestionZZ>
                      <form>
                        <label>
                        <input type="radio"/>
                          Nome 
                          <input type="radio"/>
                          Nome 
                          <input type="radio"/>
                          Nome 
                          <input type="radio"/>
                          Nome 
                        </label>
                        
                      </form>
                  </QuestionZZ>
                  </CardQuestion>
                </CardHomeUp>
              </TesteCima>
              
            </MainFeed>
          </FeedContainer>
        </Content>
      </Container>
    </>
  );
}

export default QuizzScreen;
