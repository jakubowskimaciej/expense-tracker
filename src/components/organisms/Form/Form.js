import React, { useState, useReducer } from 'react';
import FormField from '../../molecules/FormField/FormField';
import styled from 'styled-components';
import { Button } from '../../atoms/Button/Button';

const StyledForm = styled.form`
  background-color: var(--color-primaryDark);
  padding: 1rem;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 1.2rem;
  text-align: center;
  box-shadow: 0 1.2rem 0.5rem -0.6rem var(--shadow);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.5rem 2rem;
  gap: 2rem;
  margin-bottom: 1rem;
  text-align: left;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 2.5rem;
`;

const initialFormState = {
  title: '',
  cost: '',
  date: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT CHANGE':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'CLEAR VALUES':
      return initialFormState;
    default:
      return state;
  }
};

const Form = (props) => {
  const [formValues, dispatch] = useReducer(reducer, initialFormState);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    dispatch({
      type: 'INPUT CHANGE',
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      title: formValues.title,
      cost: +formValues.cost,
      date: new Date(formValues.date),
    };
    props.onFormSubmit(newExpense);
    dispatch({
      type: 'CLEAR VALUES',
    });
    // setIsModalOpen(false);
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      {isModalOpen ? (
        <>
          <Wrapper>
            <FormField
              name="title"
              id="title"
              label="Title"
              type="text"
              onChange={handleInputChange}
              value={formValues.title}
            />
            <FormField
              name="cost"
              id="cost"
              label="Cost"
              type="number"
              min="0.01"
              step="0.01"
              onChange={handleInputChange}
              value={formValues.cost}
            />
            <FormField
              name="date"
              id="date"
              label="Date"
              type="date"
              min="2021-01-01"
              max="2024-12-31"
              onChange={handleInputChange}
              value={formValues.date}
            />
          </Wrapper>
          <ButtonWrapper>
            <Button isSecondary onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Add new expense</Button>
          </ButtonWrapper>
        </>
      ) : (
        <Button onClick={() => setIsModalOpen(true)}>Add expense</Button>
      )}
    </StyledForm>
  );
};

export default Form;
