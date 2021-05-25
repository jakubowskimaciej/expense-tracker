import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: 60rem;
  padding: 3rem 4rem;
  margin: 2rem auto;
  border: 0.1rem solid #eceff6;
  border-radius: 2.5rem;
  background-color: var(--color-white);
  box-shadow: 0 0.5rem 1rem -0.6rem var(--shadow);
`;

const ViewWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ViewWrapper;
