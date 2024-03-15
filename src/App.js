import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import TodoContents from "./components/TodoContents";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  background-color: black;
  padding: 50px;
  min-height: 100vh;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

const Wrapper = styled.div`
  background-color: white;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [group, setGroup] = useState([
    { check: true, todo: "Exercise", id: 0 },
    { check: false, todo: "Study", id: 1 },
    { check: false, todo: "Shopping", id: 2 },
  ]);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header title="ToDo List App" />
        <InputForm setGroup={setGroup} />
        <TodoContents group={group} setGroup={setGroup} />
      </Wrapper>
    </>
  );
}

export default App;
