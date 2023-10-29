import styled from "styled-components";
// import { login_img } from "../../images";

const Login = styled.div`
  display: flex;
  padding: 0rem 0rem;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;

    img{
        display:none
    }
  }
`;
export default Login;
