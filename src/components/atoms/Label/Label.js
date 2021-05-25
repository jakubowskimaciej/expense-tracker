import styled from 'styled-components';

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
  color: var(--color-white);
  font-size: ${({ theme }) => theme.fontSize.m};
`;
