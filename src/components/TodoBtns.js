import styled from "styled-components";
import TodoBtn from "./TodoBtn";

const Wrapper = styled.div`
  button:first-child {
    margin-right: 10px;
  }
`;

function TodoBtns({ setGroup }) {
  const deleteSelectedHandler = () => {
    setGroup((oldGroup) => {
      //filter메서드는 그 조건이 true인것만 모아서 새 배열을 만든다
      return oldGroup.filter((todoObj) => {
        //check가 false일떄 남겨둔다
        return !todoObj.check;
      });
    });
  };

  const clearHandler = () => {
    setGroup([]);
  };
  return (
    <Wrapper>
      <TodoBtn onClick={deleteSelectedHandler} btnName="Delete Selected" />
      <TodoBtn onClick={clearHandler} btnName="Clear All" />
    </Wrapper>
  );
}

export default TodoBtns;
