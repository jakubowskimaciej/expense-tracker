import React from 'react';
import styled from 'styled-components';

const StyledBar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInner = styled.div`
  height: 100%;
  width: 100%;
  border: 0.1rem solid #313131;
  border-radius: 1.2rem;
  background-color: #eceff6;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const StyledFill = styled.div`
  background-color: ${({ value, maxValue }) => {
    if (value > 0 && value <= 300) return 'var(--color-success)';
    if (value <= 600) return 'var(--color-warning)';
    if (value >= 600) return 'var(--color-danger)';
    return '#c0c7d6';
  }};
  width: 100%;
  transition: all 0.3s ease-out;
  height: ${({ value, maxValue }) => {
    if (maxValue > 0) return Math.round((value / maxValue) * 100) + '%';
  }};
`;

const StyledLabel = styled.div`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
`;

const ChartBar = ({ label, value, maxValue }) => {
  return (
    <StyledBar>
      <StyledInner>
        <StyledFill value={value} maxValue={maxValue}></StyledFill>
      </StyledInner>
      <StyledLabel>{label}</StyledLabel>
    </StyledBar>
  );
};

export default ChartBar;
