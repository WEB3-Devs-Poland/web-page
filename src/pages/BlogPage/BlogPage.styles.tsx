import styled from 'styled-components';

export const BackButton = styled.div`
  transition: 0.3s;
  cursor: pointer;
  font-size: 1.2rem;

  padding: 0.5rem;
  width: 100px;
  width: 12rem;

  display: flex;
  align-items: center;

  svg {
    padding: 0 0.5rem;
  }

  :hover {
    color: ${({ theme }) => theme.primary};
    transition: 0.3s;
  }
`;

export const PostLink = styled.div`
  cursor: pointer;
  transition: 0.3s;
  margin-left: 20px;

  :hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const PostDate = styled.div`
  width: 120px;
  margin-left: 40px;
  color: ${({ theme }) => theme.grey.first};
`;
