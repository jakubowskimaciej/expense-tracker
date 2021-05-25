import React from 'react';
import styled from 'styled-components';
import ExpenseDate from '../../atoms/ExpenseDate/ExpenseDate';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0.2rem 0.8rem var(--shadow);
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 1.2rem;
  background-color: var(--color-primaryDark);
  color: var(--color-white);

  h2 {
    ${'' /* color: var(--color-primaryDark); */}
    font-size: ${({ theme }) => theme.fontSize.m};
    flex: 1;
    margin: 0 1rem;
    color: var(--color-white);
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  flex-flow: column-reverse;
  justify-content: flex-start;
  flex: 1;

  h2 {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const StyledPrice = styled.div`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  color: var(--color-white);
  background-color: var(--color-warning);
  border: 0.1rem solid var(--color-white);
  padding: 0.5rem;
  border-radius: 0.7rem;
`;

const ExpenseItem = ({ date, title, cost }) => {
  return (
    <Wrapper>
      <ExpenseDate date={date} />
      <DescriptionWrapper>
        <h2>{title}</h2>
        <StyledPrice>${cost}</StyledPrice>
      </DescriptionWrapper>
    </Wrapper>
  );
};

export default ExpenseItem;
