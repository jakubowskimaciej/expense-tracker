import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 8.5rem;
  height: 90%;
  border: 0.1rem solid var(--color-white);
  background-color: var(--color-primaryDark);
  color: var(--color-white);
  border-radius: 1rem;
  align-items: center;
  justify-content: center;
`;

const StyledDate = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const StyledDay = styled.div`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 300;
`;

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.year;

  return (
    <Wrapper>
      <StyledDate>{month}</StyledDate>
      <StyledDay>{day}</StyledDay>
      <StyledDate>{year}</StyledDate>
    </Wrapper>
  );
};

export default ExpenseDate;
