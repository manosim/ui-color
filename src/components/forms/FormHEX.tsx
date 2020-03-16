import * as React from 'react';
import styled from 'styled-components';
import Color from 'color';
import { Box, Button, Flex, Link } from 'rebass/styled-components';

import { Input } from './Input';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

export interface IProps {
  value?: Color;
  onColorChange: any;
}

export const FormHEX: React.FC<IProps> = props => {
  const [inputValue, setInputValue] = React.useState<string>('');

  const parseColor = value => {
    setInputValue(value);
    try {
      const parsed = Color(value);
      return props.onColorChange(parsed);
    } catch (_) {}
  };

  return (
    <Container>
      <Input
        placeholder="eg. #ABC123"
        label="HEX"
        value={inputValue}
        onChange={parseColor}
      />
    </Container>
  );
};
