import React from 'react';
import { Input } from '../../atoms/Input/Input';
import { Label } from '../../atoms/Label/Label';

const FormField = ({ label, name, type, id, ...props }) => {
  return (
    <div>
      <Label htmlFor={id} required>
        {label}
      </Label>
      <Input name={name} type={type} id={id} {...props} />
    </div>
  );
};

export default FormField;
