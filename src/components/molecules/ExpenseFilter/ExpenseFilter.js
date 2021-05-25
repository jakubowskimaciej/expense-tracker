import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  ${'' /* color: white; */}
  padding: 0 1rem;
`;
const StyledControls = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0 3rem 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  position: relative;

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  select {
    font: inherit;
    padding: 0.5rem 1rem;
    font-weight: bold;
    border-radius: 0.6rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background-color: var(--shadow);
  }
`;

const ExpenseFilter = (props) => {
  const yearHandler = (e) => props.onYearChange(e.target.value);
  const monthHandler = (e) => props.onMonthChange(e.target.value);

  return (
    <Wrapper>
      <StyledControls>
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={yearHandler}>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </StyledControls>
      <StyledControls>
        <label>Filter by month</label>
        <select value={props.selectedMonth} onChange={monthHandler}>
          <option value="0">January</option>
          <option value="1">February</option>
          <option value="2">March</option>
          <option value="3">April</option>
          <option value="4">May</option>
          <option value="5">June</option>
          <option value="6">July</option>
          <option value="7">August</option>
          <option value="8">September</option>
          <option value="9">October</option>
          <option value="10">November</option>
          <option value="11">December</option>
        </select>
      </StyledControls>
    </Wrapper>
  );
};

export default ExpenseFilter;
