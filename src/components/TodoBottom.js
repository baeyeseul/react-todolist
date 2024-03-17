import styled from "styled-components";
import TodoBtns from "./TodoBtns";

const Wrapper = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-weight: bolder;
  }
`;

function TodoBottom({ setGroup, group }) {
  const checkedLength = group.filter((checkedTrue) => checkedTrue.check).length;

  return (
    <Wrapper>
      <h3>Completed Todos : {checkedLength}</h3>
      <TodoBtns setGroup={setGroup} />
    </Wrapper>
  );
}

export default TodoBottom;
