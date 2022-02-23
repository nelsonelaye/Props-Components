import React from 'react'
import styled from "styled-components"

function Course(Props) {
  return (
    <Container>
        <PriceHold>
            {Props.price}
        </PriceHold>
    </Container>
  );
}

export default Course;

const Container = styled.div`
    color: orange;
    font-size: 25px;
    font-weight: 600;
`

const PriceHold = styled.span`
    margin: 20px;

`

