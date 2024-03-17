import styled from "styled-components";

const Btn = styled.button`
  border: 0;
  border-radius: 4px;
  background-color: rgb(108, 117, 125);
  padding: 7px;
  color: white;
`;

function TodoBtn({ onClick, btnName }) {
  return <Btn onClick={onClick}>{btnName}</Btn>;
}

export default TodoBtn;
