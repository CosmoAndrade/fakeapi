
import styled from "styled-components";


export const Container = styled.div`

    width: 500px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    border-radius: 8px;

`;

export const Input = styled.input`

width: 100%;
  border: none;
  outline: none;
  border: 2px solid #FFF;
  background: #FFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px;
  border-radius: 4px;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color .2s ease-in;
  appearance: none;
  margin-bottom: 15px;
 


`;


export const Button = styled.button`

padding: 0 16px;
  height: 52px;
  border: none;
  background: #5061FC;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  color: #FFF;
  border-radius: 4px;
 cursor: pointer;

`;