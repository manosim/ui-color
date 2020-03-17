import * as React from 'react';
import styled from 'styled-components';
import Color from 'color';
import { Flex } from 'rebass/styled-components';

import { ColorPicker } from '../ColorPicker';
import { Input } from './Input';

const Container = styled(Flex)``;

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
    <Container flexDirection={['column', 'column', 'row']}>
      <Input
        type="number"
        min="0"
        max="255"
        placeholder="eg. 12"
        label="Red"
        value={redValue || ''}
        onChange={inputValue => setRedValue(inputValue)}
      />

      <Input
        type="number"
        min="0"
        max="255"
        placeholder="eg. 34"
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
        placeholder="eg. 56"
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

      <ColorPicker
        onSelectColor={(color: Color) => {
          setRedValue(`${color.rgb().object().r}`);
          setGreenValue(`${color.rgb().object().g}`);
          setBlueValue(`${color.rgb().object().b}`);
        }}
      />
    </Container>
  );
};
