import styled from "styled-components";

const Login = styled.div`
  display: flex;
  padding: 2rem 4rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 2rem;

    img {
      display: none;
    }
  }
`;
export default Login;
