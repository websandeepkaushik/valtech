import React from 'react';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';

/**
 * This the InputControl component
 */
const InputControl = ({type, value, label, onChange}) => {
  return (<Form.Group>
              <Form.Label>{label}</Form.Label>
              <Form.Control
                as={type || 'input'}
                type='text'
                defaultValue={value}
                onChange={onChange}
              />
            </Form.Group>
  );
};

export default InputControl;

export const ItemContainer = styled.div`
  padding: 0;
  max-width: 400px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h1`
  margin: 0;
  font-size: 20px;
  span{
    color: #777;
  }
`;