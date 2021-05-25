import React from 'react';
import ChartBar from '../../atoms/ChartBar/ChartBar';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1rem;
  border-radius: 1.2rem;
  background-color: #c0c7d6;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
`;

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const maximum = Math.max(...dataPointValues);

  return (
    <Wrapper>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maximum}
          label={dataPoint.label}
        />
      ))}
    </Wrapper>
  );
};

export default Chart;
