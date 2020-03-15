import * as React from 'react';
import styled from 'styled-components';
import Color from 'color';
import { Box, Button, Flex, Link } from 'rebass/styled-components';

import { CustomPicker } from 'react-color';
import { BlockSwatches } from 'react-color/lib/components/block/BlockSwatches';

import { Input } from './Input';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.75rem;

  > div {
    margin-right: 1rem;

    :last-child {
      margin-right: 0;
    }
  }
`;

export interface IProps {
  value: any;
  onColorChange: any;
}

export const FormRGB: React.FC<IProps> = props => {
  const [redValue, setRedValue] = React.useState<string | null>(null);
  const [greenValue, setGreenValue] = React.useState<string | null>(null);
  const [blueValue, setBlueValue] = React.useState<string | null>(null);
  const [alphaValue, setAlphaValue] = React.useState<string | null>(`1.00`);

  const parseColor = () => {
    try {
      if (!redValue || !greenValue || !blueValue || !alphaValue) {
        throw new Error('Incomplete RBG Color.');
      }
      const newColor = {
        r: redValue,
        g: greenValue,
        b: blueValue,
      };
      const alpha = parseFloat(alphaValue);
      const parsed = Color(newColor).alpha(alpha);
      return props.onColorChange(parsed);
    } catch (err) {
      console.log('ERR:', err);
    }
  };

  const parseAlphaValue = () => {
    try {
      if (!props.value) {
        throw new Error('No color to set Alpha.');
      }
      const alpha = parseFloat(alphaValue);
      const parsed = props.value.alpha(alpha);
      return props.onColorChange(parsed);
    } catch (err) {
      console.log('ERR:', err);
    }
  };

  React.useEffect(parseColor, [redValue, greenValue, blueValue, alphaValue]);

  return (
    <Container>
      <Input
        type="number"
        min="0"
        max="255"
        placeholder="eg. 123"
        label="Red"
        value={redValue || ''}
        onChange={inputValue => setRedValue(inputValue)}
      />

      <Input
        type="number"
        min="0"
        max="255"
        placeholder="eg. 123"
        label="Green"
        value={greenValue || ''}
        onChange={inputValue => {
          setGreenValue(`${inputValue}`);
        }}
      />

      <Input
        type="number"
        min="0"
        max="255"
        placeholder="eg. 123"
        label="Blue"
        value={blueValue || ''}
        onChange={inputValue => {
          setBlueValue(inputValue);
        }}
      />

      <Input
        type="number"
        min="0"
        max="1"
        step="0.01"
        placeholder="eg. 123"
        label="Alpha"
        value={alphaValue || ''}
        onChange={inputValue => {
          setAlphaValue(`${inputValue}`);
        }}
      />
    </Container>
  );
};
