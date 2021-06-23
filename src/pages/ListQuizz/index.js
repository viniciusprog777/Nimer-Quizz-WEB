// import { useEffect, useRef, useState } from "react";
// import {
//   ActionsContainer,
//   Container,
//   Header,
//   ProfilePic,
//   MenuContainer,
//   Content,
//   FeedContainer,
//   QuadradinhoLogo,
//   MenuHg,
//   LabelMenu,
//   HeaderFeed,
//   MainFeed,
//   SubMenus,
//   ButtonCreateQuizz,
//   CardHomeUp,
//   CardHomeDown,
//   TesteCima,
//   TesteBaixo,
// } from "./styles";

// import Modal from "../../components/Modal";

// function NewQuizz() {
//   const [newQuizz, setNewQuizz] = useState({
//     title: "",
//     description: "",
//   });

//   const [turma, setTurma] = useState([]);
//   const [turmaSel, setTurmaSel] = useState([]);
//   const turmaRef = useRef();

//   /*useEffect(() => {
//     const loadTurmas = async () => {
//       try {
//         const response = await api.get("/turmas");

//         setTurma(response.data);
//       } catch (error) {
//         alert(error);
//       }
//     };

//     loadTurmas();
//   }, []);*/

//   const handleTurmas = (e) => {
//     const idSel = e.target.value;

//     const turmaSel = turma.find((c) => c.id.toString() === idSel);

//     if (turmaSel && !turmaSel.includes(turmaSel))
//       setTurmaSel([...turmaSel, turmaSel]);

//     e.target[e.target.selectedIndex].disabled = true;
//     e.target.value = "";
//   };

//   const handleUnselTurma = (idUnsel) => {
//     setTurmaSel(turmaSel.filter((c) => c.id !== idUnsel));

//     const { options } = turmaRef.current;

//     for (var i = 0; i < options.length; i++) {
//       if (options[i].value === idUnsel.toString()) options[i].disabled = false;
//     }
//   };

//   const handleInput = (e) => {
//     setNewQuizz({ ...newQuizz, [e.target.id]: e.target.value });
//   };

//   const handleAddNewQuizz = async (e) => {
//     e.preventDefault();

//     if (turmaSel.length === 0) return alert("Selecione uma categoria");

//     const data = new FormData();

//     data.append("title", newQuizz.title);
//     data.append("description", newQuizz.description);

//     const turma = turmaSel.reduce((s, c) => (s += c.id + ","), "");

//     data.append("turma", turma.substr(0, turma.length - 1));

//     /*try {
//       await api.post("/quizz", data, {
//         headers: {
//           "Content-type": "multipart/form-data",
//         },
//       });

//     } catch (error) {
//       alert(error);

//       */
//   };

//   return (
//     <FormNewQuizz onSubmit={handleAddNewQuizz}>
//       <Input
//         id="title"
//         label="Título"
//         value={newQuizz.title}
//         handler={handleInput}
//         minLength="5"
//         required
//       />
//       <Input
//         id="description"
//         label="Descrição"
//         value={newQuizz.description}
//         handler={handleInput}
//         minLength="10"
//         required
//       />
//       <Select id="turma" label="turma" handler={handleTurmas} ref={turmaRef}>
//         <option value="">Selecione</option>
//         {turma.map((c) => (
//           <option key={c.id} value={c.id}>
//             {c.description}
//           </option>
//         ))}
//       </Select>
//       <div>
//         {categoriesSel.map((c) => (
//           <Tag
//             key={c.id}
//             info={c.description}
//             handleClose={() => handleUnselTurma(c.id)}
//           ></Tag>
//         ))}
//       </div>
//       <button>Enviar</button>
//     </FormNewQuizz>
//   );
// }

// function ListQuizz() {
//   const [] = useState("");
//   const [show, setShow] = useState(false);
//   const [showNewQuizz, setShowNewQuizz] = useState(false);

//   const handleClick = (e) => {
//     e.preventDefault();
//     setShow(!show);
//   };

//   return (
//     <>
//       {showNewQuestion && (
//         <Modal title="Crie um quizz" handleClose={() => setShowNewQuizz(false)}>
//           <NewQuizz />
//           //
//         </Modal>
//       )}
//       <Container>
//         <Header>
//           <ProfilePic />
//         </Header>
//         <Content>
//           <MenuContainer>
//             <MenuHg>
//               <span>Cursos</span>
//               <span>Turma</span>
//               <hr />
//               <h1>Recentes</h1>
//               <LabelMenu>Card Turmas Recentes</LabelMenu>
//               <LabelMenu>Card Turmas Recentes</LabelMenu>
//               <LabelMenu>Card Turmas Recentes</LabelMenu>
//             </MenuHg>
//           </MenuContainer>
//           <FeedContainer>
//             <HeaderFeed>
//               <QuadradinhoLogo>
//                 <h1>TE</h1>
//               </QuadradinhoLogo>
//               <h1>Turma TCC</h1>
//               <SubMenus>
//                 <li>Home</li>
//                 <li>Alunos</li>
//                 <li>Gráficos</li>
//               </SubMenus>
//               <ButtonCreateQuizz>FUNÇAO</ButtonCreateQuizz>
//             </HeaderFeed>
//             <MainFeed>
//               <span>Quizz em andamento</span>
//               <TesteCima>
//                 <CardHomeUp>
//                   <h1>Titulo</h1>
//                   <label>Qtde Perguntas</label>
//                   <p>16 perguntas</p>
//                   <label>Professor</label>
//                   <p>Rafael Leme</p>
//                 </CardHomeUp>

//                 <CardHomeUp>
//                   <h1>Titulo</h1>
//                   <label>Qtde Perguntas</label>
//                   <p>16 perguntas</p>
//                   <label>Professor</label>
//                   <p>Rafael Leme</p>
//                 </CardHomeUp>

//                 <CardHomeUp>
//                   <h1>Titulo</h1>
//                   <label>Qtde Perguntas</label>
//                   <p>16 perguntas</p>
//                   <label>Professor</label>
//                   <p>Rafael Leme</p>
//                 </CardHomeUp>

//                 <CardHomeUp>
//                   <h1>Titulo</h1>
//                   <label>Qtde Perguntas</label>
//                   <p>16 perguntas</p>
//                   <label>Professor</label>
//                   <p>Rafael Leme</p>
//                 </CardHomeUp>

//                 <CardHomeUp>
//                   <h1>Titulo</h1>
//                   <label>Qtde Perguntas</label>
//                   <p>16 perguntas</p>
//                   <label>Professor</label>
//                   <p>Rafael Leme</p>
//                 </CardHomeUp>

//                 <hr />
//               </TesteCima>
//               <span>Quizz Finalizados</span>
//               <TesteBaixo>
//                 <CardHomeDown>
//                   <h1>Titulo</h1>
//                   <label>Acertos</label>
//                   <p>Grafico</p>
//                   <label>Nota</label>
//                 </CardHomeDown>

//                 <CardHomeDown>
//                   <h1>Titulo</h1>
//                   <label>Acertos</label>
//                   <p>Grafico</p>
//                   <label>Nota</label>
//                 </CardHomeDown>

//                 <CardHomeDown>
//                   <h1>Titulo</h1>
//                   <label>Acertos</label>
//                   <p>Grafico</p>
//                   <label>Nota</label>
//                 </CardHomeDown>

//                 <CardHomeDown>
//                   <h1>Titulo</h1>
//                   <label>Acertos</label>
//                   <p>Grafico</p>
//                   <label>Nota</label>
//                 </CardHomeDown>
//               </TesteBaixo>
//             </MainFeed>
//           </FeedContainer>
//           <ActionsContainer>
//             <button onClick={() => setShowNewQuizz(true)}>
//               Criar um Quizz
//             </button>
//           </ActionsContainer>
//         </Content>
//       </Container>
//     </>
//   );
// }

// export default ListQuizz;
