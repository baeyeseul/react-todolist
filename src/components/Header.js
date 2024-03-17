import styled from "styled-components";

const Title = styled.h1`
  font-size: 32px;
  font-weight: bolder;
`;

function Header({ title }) {
  return <Title>{title}</Title>;
}

export default Header;
