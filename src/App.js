import logo from './logo.svg';
import './App.css';
import styled from "styled-components"
import Parent from "./Components/MainComponents/Parent"


function App() {
  return (
    <Container>
      <Parent/>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display:flex;
  align-items: center;
  justify-content:center;
  min-height:100vh;
`
