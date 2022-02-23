import React from 'react'
import styled from "styled-components"

function Date({year, month, day}) {
    // const date = new Date()
    // let year = date.getFullYear()
    // let month = date.toLocaleString("en-US", {month: "long"})
    // let day = date.getDay()

  return (
   <Hold>
       <div>{year}</div>
       <div>{month}</div>
       <div>{day}</div>

   </Hold>
  );
}

export default Date;

const Hold = styled.div`
    border: 1px solid #123456;
    padding: 10px;
    border-radius: 10px;
    margin: 20px;
    width: 100px;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction:column;
    background-color:rgb(112, 128, 144);
    border: none;
    color: #fff;
    font-weight: 500;
    transition: all 0.35s;
    cursor:pointer;

    :hover{
        background-color:rgba(112, 128, 144, .5);
    }

    div{
        margin-bottom:5px;
    }
`