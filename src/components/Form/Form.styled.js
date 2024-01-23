import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 200px;
  border: 2px solid black;
`;

export const Label = styled.label`
    height: 60px;
  margin-left: 10px;
  margin-top: 8px;
  text-align: start;
  font-weight: 600;
  font-size: 20px;
`;

export const SubmitButton = styled.button`
  background-color: #4caf50;
  width: 200px;
  margin-left: 10px;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }

  &:disabled {
    background-color: dimgrey;
    color: linen;
    opacity: 1;
  }
`;


