import styled from "styled-components";

const LoginContainer = styled.div`

flex-direction: column;
border-radius: 12px;
background: #FFF;
box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);


margin: 1rem 4rem;
padding: 2rem 8rem;


@media (min-width: 901px )and(max-width: 1200px){
    margin: 0.5rem;
    padding: 2rem 2rem;
    padding:1rem 8rem;
}

@media (max-width: 900px){
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;

    img{
        display:none
    }
}
`
export default LoginContainer;