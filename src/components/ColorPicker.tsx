import * as React from 'react';
import styled from 'styled-components';
import { Box, Button, Flex, Link } from 'rebass/styled-components';

import { CustomPicker } from 'react-color';
import { BlockSwatches } from 'react-color/lib/components/block/BlockSwatches';

import { PickerInput } from './PickerInput';

const Container = styled.div`
  background: ${props => props.theme.colors.grayLight};
  box-shadow: 0 0.25rem rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  margin: 0.75rem 0;
  padding: 0.75rem;
  max-width: 35rem;

  display: flex;
  flex-direction: column;
`;

const RGBWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;

  margin-right: 1rem;

  :last-child {
    margin-right: 0;
  }
`;

export interface IProps {}

export const Picker: React.FC<any> = props => {
  console.log(props);

  return (
    <Container>
      <BlockSwatches colors={props.colors} onClick={props.onChangeComplete} />
    </Container>
  );
};

Picker.defaultProps = {
  colors: [
    '#D9E3F0',
    '#F47373',
    '#697689',
    '#37D67A',
    '#2CCCE4',
    '#555555',
    '#dce775',
    '#ff8a65',
    '#ba68c8',
  ],
};

export const ColorPicker = CustomPicker(Picker);
