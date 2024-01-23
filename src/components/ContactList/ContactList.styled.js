import styled from 'styled-components';


export const ButtonDel = styled.button`
  display: block;
  margin-left: auto;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const List = styled.ul`
  min-width: 320px;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  text-align: start;
`;

export const ListItem = styled.li`
  display: flex;
  margin-bottom: 6px;
`;
