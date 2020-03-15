import * as React from 'react';
import styled from 'styled-components';
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
  onChange: any;
}

export const FormRGB: React.FC<IProps> = props => {
  console.log(props);

  return (
    <Container>
      <Input
        placeholder="eg. 123"
        label="Red"
        value={null}
        onChange={asd => {
          console.log(asd);
          props.onChange(null);
        }}
      />

      <Input
        placeholder="eg. 123"
        label="Green"
        value={null}
        onChange={asd => {
          console.log(asd);
          props.onChange(null);
        }}
      />

      <Input
        placeholder="eg. 123"
        label="Blue"
        value={null}
        onChange={asd => {
          console.log(asd);
          props.onChange(null);
        }}
      />

      <Input
        placeholder="eg. 123"
        label="Alpha"
        value={null}
        onChange={asd => {
          console.log(asd);
          props.onChange(null);
        }}
      />
    </Container>
  );
};
