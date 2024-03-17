import styled from "styled-components";
import TodoFirst from "./TodoFirst";
import TodoList from "./TodoList";
import TodoBottom from "./TodoBottom";

const Wrapper = styled.div`
  margin: 10px 0;
  width: 100%;
`;

const TodoLists = styled.div`
  border-top: 2px solid rgba(0, 0, 0, 0.3);
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
`;

function TodoContents({ setGroup, group }) {
  return (
    <Wrapper>
      <TodoFirst setGroup={setGroup} todo="List" id="all" />
      <TodoLists>
        {group.map((todoObj) => (
          <TodoList setGroup={setGroup} todoObj={todoObj} />
        ))}
      </TodoLists>
      <TodoBottom setGroup={setGroup} group={group} />
    </Wrapper>
  );
}

export default TodoContents;
