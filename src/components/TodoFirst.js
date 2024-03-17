import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 10px;
  input {
    margin-right: 20px;
  }
`;

const Content = styled.h2`
  margin-top: 4px;
  font-weight: ${(props) => (props.$isBold ? "600" : "")};
`;

function TodoFirst({ setGroup, todo, id, check }) {
  const clickChecked = (e) => {
    if (e.target.value === "all") {
      const allChecked = e.target.checked;
      setGroup((oldGroup) => {
        return oldGroup.map(({ id, todo }) => {
          return { check: allChecked, todo, id };
        });
      });
    } else {
      const todoId = +e.target.value;
      setGroup((oldGroup) => {
        const targetTodoIndex = oldGroup.findIndex((todoObj) => {
          return todoObj.id === todoId;
          //이게 같으면 내가 checked를 한 객체의 인덱스를 찾는거
        });
        const newTodo = {
          todo: oldGroup[targetTodoIndex].todo,
          check: !oldGroup[targetTodoIndex].check,
          id: todoId,
        };
        return [
          ...oldGroup.slice(0, targetTodoIndex),
          newTodo,
          ...oldGroup.slice(targetTodoIndex + 1),
        ];
      });
    }
    // console.log(typeof e.target.value);
    // checked 햇는 id의 인덱스
  };
  return (
    <Wrapper>
      <input
        type="checkbox"
        value={id}
        checked={check}
        onChange={clickChecked}
      />
      {/* onChange={clickAll} 해야됨 */}
      <Content $isBold={id === "all"}>{todo}</Content>
    </Wrapper>
  );
}

export default TodoFirst;
