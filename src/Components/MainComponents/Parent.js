import styled from "styled-components"
import Section from "./Section"

function Parent() {
  return (
    <Container>
      <Section/>
      <Section direc="row-reverse"/>
      <Section/>
    </Container>
  );
}

export default Parent;

const Container = styled.div`
  /* display:flex;
  align-items: center;
  justify-content:center; */
  margin-top: 30px;
`
