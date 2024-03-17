import styled from "styled-components";
import TodoFirst from "./TodoFirst";
import TodoList from "./TodoList";

const Wrapper = styled.div`
  margin: 10px 0;
  width: 100%;
`;

const TodoLists = styled.div`
  border-top: 2px solid rgba(0, 0, 0, 0.3);
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
`;

const TodoBottom = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TodoSuccess = styled.div`
  font-weight: bolder;
`;

const TodoBtns = styled.div`
  button:first-child {
    margin-right: 10px;
  }
`;

const TodoBtn = styled.button`
  border: 0;
  border-radius: 4px;
  background-color: rgb(108, 117, 125);
  padding: 7px;
  color: white;
`;

function TodoContents({ setGroup, group }) {
  const checkedLength = group.filter((checkedTrue) => checkedTrue.check).length;

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
      <TodoFirst setGroup={setGroup} todo="List" />
      <TodoLists>
        {group.map((todoObj) => (
          <TodoList setGroup={setGroup} todoObj={todoObj} />
        ))}
      </TodoLists>
      <TodoBottom>
        <TodoSuccess>
          <h3>Completed Todos : {checkedLength}</h3>
        </TodoSuccess>
        <TodoBtns>
          <TodoBtn onClick={deleteSelectedHandler}>Delete selected</TodoBtn>
          <TodoBtn onClick={clearHandler}>Clear all</TodoBtn>
        </TodoBtns>
      </TodoBottom>
    </Wrapper>
  );
}

export default TodoContents;
