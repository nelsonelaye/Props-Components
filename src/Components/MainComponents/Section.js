import styled from "styled-components"
import Child from "../SmallComponents/Child"
import Date from "../SmallComponents/Date"
import Course from "../SmallComponents/Course"
import Price from "../SmallComponents/Price"
import Button from "../SmallComponents/Button"

function App({direc}) {

    // const content = [
    //     {

    //     }
    // ]

    
  return (
    <Container>
        <Main>
            <MainDetail direc={direc}>
                <Date 
                year="2021"
                month="February"
                day={21}
                />
                <CourseDetail>
                    <Course course="FullStack Development" />
                    <Price price ="$50"/>
                </CourseDetail>
            </MainDetail>
            <Button/>
        </Main>
       
    </Container>
  );
}

export default App;

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;    
`

const Main = styled.div`
    /* width: 80%; */
    margin:30px;
    padding: 30px;
    box-shadow: 0px 3px 5px 5px #808080;
    border-radius: 10px;
    display:flex;
    flex-direction:column;
    align-items: center;
`

const MainDetail = styled.div`
    display:flex;
    flex-direction:${({direc}) => direc};
    align-items: center;
`

const CourseDetail = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
`
