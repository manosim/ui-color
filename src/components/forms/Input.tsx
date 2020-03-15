import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const InputField = styled.input`
  flex: 1;
  width: 100%;
  font-size: 20px;
  color: #777;
  border: 0px;
  outline: none;
  box-shadow: inset 0 0 0 1px #ddd;
  border-radius: 4px;
  padding: 7px;
`;

const Label = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.75rem;
  margin-right: 1rem;
`;

interface IProps {
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
        value={props.value}
        onChange={({ target: { value } }) => props.onChange(value)}
        placeholder={props.placeholder}
        spellCheck="false"
      />
    </Container>
  );
};
