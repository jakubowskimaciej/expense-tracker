import styled from 'styled-components';

export const Input = styled.input`
  font: inherit;
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 0.5rem;
  border-radius: 0.6rem;
  border: 0.1rem solid #ccc;
  width: 20rem;
  max-width: 100%;
  outline: none;
`;
