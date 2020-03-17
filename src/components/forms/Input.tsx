import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 0.5rem;
`;

const InputField = styled.input`
  flex: 1;
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  border: 0px;
  outline: none;
  box-shadow: inset 0 0 0 1px #ddd;
  border-radius: 4px;
  padding: 0.75rem;

  ::placeholder {
    color: #777;
    font-size: 14px;
    font-weight: normal;
  }
`;

const Label = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.75rem;
  margin: 0.75rem 1rem 0.25rem 0;
`;

interface IProps {
  type?: string;
  min?: string;
  max?: string;
  step?: string;
  maxLength?: string;
  value?: string;
  label: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export const Input: React.FC<IProps> = props => {
  return (
    <Container>
      <Label>{props.label}</Label>
      <InputField
        type={props.type}
        min={props.min && props.min}
        max={props.max && props.max}
        step={props.step && props.step}
        maxLength={props.maxLength && props.maxLength}
        value={props.value}
        onChange={({ target: { value } }) => props.onChange(value)}
        placeholder={props.placeholder}
        spellCheck="false"
      />
    </Container>
  );
};

Input.defaultProps = {
  type: 'text',
};
