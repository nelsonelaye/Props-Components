import React from 'react'
import styled from "styled-components"
// import Date from "./Date"
// import Course from "./Course"

function Child() {

    let date = "November 25, 2021"
    let courseTitle = "Finished React Course"
    let price = "$50.0"

  return (
    <Wrap>
        {/* <Date date ={date}/>
        <Course 
        title={courseTitle}
        price={price}
        /> */}

        <Date>2,December, 2021</Date>
        <Course>React COurse 101</Course>
        <Price>$50</Price>
    </Wrap>
  );
}

export default Child;

const Wrap = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    /* width: 80%; */
`

const Date = styled.div`
   background-color: black; 
   color: #fff;
   margin:20px;
`

const Course = styled.h2`
    font-weight:600;
   margin:20px;

`

const Price = styled.span`
    color: orange;
   margin:20px;

`
