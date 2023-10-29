import styled from 'styled-components';

export const CheckboxWrapper = styled.div`
  display: grid;
  align-items: center;
  user-select: none;
  margin: 0rem 0;
  cursor: pointer;
`;


export const CheckboxInput = styled.input`
appearance: none;
-webkit-appearance: none;
-moz-appearance: none;
border-radius: 4px;
margin: 0.5rem 1rem ;
cursor: pointer;

background: none;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid #737B86;
`;

export const CheckboxLabel = styled.label`
display: flex;
font-size:  16px;
`;