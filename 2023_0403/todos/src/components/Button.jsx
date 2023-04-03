import styled, { css } from "styled-components";

function Button({ color, children, onClick, width }) {
  return (
    <Container color={color} onClick={onClick} width={width}>
      {children}
    </Container>
  );
}

const Container = styled.button`
  background-color: #1d87ffa9;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  width: ${({ width }) => width || "auto"};

  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      transform: scale(1.1);
      font-weight: 700;
    `}

  & + & {
    margin-left: 20px;
  }

  &:hover {
    background-color: #1d85ff;
    color: #fff;
  }
`;

export const BigButton = styled(Container)`
  padding: 10px 20px;
  font-size: 1.3rem;
`;

export default Button;
