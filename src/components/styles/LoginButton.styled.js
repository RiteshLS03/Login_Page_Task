import styled from "styled-components";

const LoginButton = styled.button`

display: flex;
justify-content: center;
align-items: center;
margin: 2rem;
padding: 0.5rem;
cursor: pointer;

border-radius: 8px;
background: var(--Primary---1, #1575A7);


    color: var(--white-color, #FFF);

/* Button - Medium - 18 */
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 110%; /* 19.8px */

`

export const LoginButtonP = styled.p`
display: flex;
justify-content: center;
align-items: center;


color: #04072F;
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
` 

export const LoginButtonA = styled.a`

margin: 0%.5rem;
cursor: pointer;

color: var(--Secondary---1, #F78719);
font-family: Poppins;
font-size: 18px;
font-style: normal;
line-height: normal;
text-decoration-line: underline;

font-size: 16px;
font-style: normal;
font-weight: 700;
`

export default LoginButton