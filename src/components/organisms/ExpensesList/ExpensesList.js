import React, { useState } from 'react';
import ExpenseItem from '../../molecules/ExpensesItem/ExpenseItem';
import ViewWrapper from '../../molecules/ViewWrapper/ViewWrapper';
import ExpenseFilter from '../../molecules/ExpenseFilter/ExpenseFilter';

import styled from 'styled-components';
import ExpensesChart from '../ExpensesChart/ExpensesChart';

const StyledH2 = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: var(--color-primaryDark);
  margin-top: 1rem;
`;

const ExpensesList = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState('2021');
  const [selectedMonth, setSelectedMonth] = useState('0');

  const handleYearChange = (year) => setSelectedYear(year);
  const handleMonthChange = (month) => setSelectedMonth(month);

  const annualExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  const monthlyExpenses = annualExpenses.filter((expense) => {
    return expense.date.getMonth().toString() === selectedMonth;
  });

  return (
    <ViewWrapper>
      <ExpenseFilter
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
        onYearChange={handleYearChange}
        onMonthChange={handleMonthChange}
      />
      <ExpensesChart expenses={annualExpenses} />
      {annualExpenses.length === 0 ? (
        <StyledH2>There is no expenses for chosen year.</StyledH2>
      ) : monthlyExpenses.length === 0 ? (
        <StyledH2>There is no expenses for chosen month.</StyledH2>
      ) : (
        monthlyExpenses.map(({ title, cost, date }, index) => (
          <ExpenseItem key={index} title={title} cost={cost} date={date} />
        ))
      )}
    </ViewWrapper>
  );
};

export default ExpensesList;
