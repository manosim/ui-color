import * as React from 'react';
import styled from 'styled-components';
import Color from 'color';
import { Box, Button, Flex, Link } from 'rebass/styled-components';

import { CustomPicker } from 'react-color';
import { BlockSwatches } from 'react-color/lib/components/block/BlockSwatches';

import { Input } from './Input';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-top: 0.75rem;
`;

export interface IProps {
  value?: Color;
  onChange: any;
}

export const FormHEX: React.FC<IProps> = props => {
  const parseColor = value => {
    try {
      const parsed = Color(value);
      return props.onChange(parsed);
    } catch (_) {}
  };

  return (
    <Container>
      <Input
        placeholder="eg. #ABC123"
        label="HEX"
        value={props.value && props.value.hex()}
        onChange={parseColor}
      />
    </Container>
  );
};
