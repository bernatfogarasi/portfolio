import styled from "styled-components";
import Buttons from "./Buttons";
import Logo from "./Logo2";
import Menu from "./Menu";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 80px);
  position: fixed;
  padding: 20px 40px;
  background: white;
  color: black;
`;

const Navigation = () => {
  return (
    <Wrapper>
      <Logo />
      <Buttons />
      <Menu />
    </Wrapper>
  );
};

export default Navigation;
