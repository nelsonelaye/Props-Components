import styled from "styled-components"


function Button() {
  return (
    <ButtonHold>
      Get started
    </ButtonHold>
  );
}

export default Button;

const ButtonHold = styled.div`
    width: 150px;
    height: 50px;
    background-color: orange;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    color: #fff;
    font-weight: 600;
    transition: all 0.35s;
    cursor:pointer;
    margin-top:20px;

    :hover{
        background-color:black;
        
    }
`


