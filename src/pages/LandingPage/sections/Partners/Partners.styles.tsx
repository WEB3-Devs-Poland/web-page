import styled from 'styled-components';

import { ThemeType } from 'theme/ThemeProvider';

export const Content = styled.div<{ $currentTheme?: ThemeType }>`
  margin-bottom: 10rem;
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);

  transition: 0.3s;
  background-color: ${({ $currentTheme }) => ($currentTheme === 'light' ? '#f0f0f0' : '#1d1d1d')};
`;

export const SubTitle = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 1.25rem;
  padding-top: 1rem;
  margin: auto;

  max-width: 600px;
  font-weight: 800;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.maxWidth}px) {
    font-size: 1rem;
    max-width: 80%;
  }
`;

export const Wrapper = styled.div`
  margin: auto;
  display: flex;
  align-items: center;

  max-width: ${({ theme }) => theme.contentWidth}px;
  overflow-x: hidden;
`;

export const SponsorIMG = styled.img`
  cursor: pointer;
  margin: auto;
  width: 20%;
  padding: 0 2%;
  max-width: 8rem;
`;
