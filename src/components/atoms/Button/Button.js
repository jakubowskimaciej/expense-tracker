import styled from 'styled-components';

export const Button = styled.button`
  margin: 1.5rem 1rem;
  padding: 0.8rem 2rem;
  background-color: ${({ isSecondary }) =>
    isSecondary ? `var(--color-danger)` : `var(--color-success)`};
  color: var(--color-white);
  font-weight: 700;
  border: none;
  border-radius: 5rem;
`;
