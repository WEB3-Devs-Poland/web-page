import styled from 'styled-components';

import ConnectionStatus from './components/ConnectionStatus';

export const Button = styled.button`
  cursor: pointer;
  padding: 1rem 2.5rem;

  border: none;
  border-radius: 10px;

  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.primary};
  align-self: center;

  :active,
  :hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  max-width: 100%;
  min-height: 100%;
  padding: 8px;

  & > * {
    box-sizing: border-box;
  }
`;

export const StyledConnectionStatus = styled(ConnectionStatus)`
  align-self: flex-start;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
`;

export const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 10px;
  padding: 8px;
  text-align: center;
  width: 50px;
  font-size: 1.2rem;
`;

export const CircleButton = styled.button`
  border: none;
  color: ${({theme}) => theme.white};
  background: ${({theme}) => theme.primary};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;

  &:hover {
    background: ${({theme}) => theme.secondary};
    cursor: pointer;
  }

  &:disabled {
    background: ${({theme}) => theme.grey.first};
  }
`;