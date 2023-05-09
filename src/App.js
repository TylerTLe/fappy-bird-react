import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const BIRD_SIZE = 20;
function App() {
  return <Div>
    <Bird size={BIRD_SIZE} />
  </Div>;
}

export default App;

const Bird = styled.div`
  posistion: absolute;
  background-color: red;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  top: ${(props) => props.size}px;
  border-radius: 50%
`;

const Div = styled.div`
  display: flex;
  width 100;
  justify-content: center;
`; 

const GameBox = styled.div`
 height: ${(props) => props.height}px;
 width: ${(props) => props.height}px;
 background-color: blue;
`;