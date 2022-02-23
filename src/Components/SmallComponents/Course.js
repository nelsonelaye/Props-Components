import React from 'react'
import styled from "styled-components"

function Course(Props) {
  return (
    <CourseHold>
        <Name>{Props.course}</Name>
    </CourseHold>
  );
}

export default Course;

const CourseHold = styled.div`
    display:flex;
    align-items:center;

`
const Name = styled.h1`
    margin: 20px;
    font-size: 23px;
`

