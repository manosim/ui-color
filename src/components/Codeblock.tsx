import * as React from 'react';
import Color from 'color';
import copy from 'copy-to-clipboard';
import styled from 'styled-components';
import { Box, Button, Flex, Heading, Text } from 'rebass/styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const Container = styled(Box)`
  position: relative;
  border-radius: 5px;
  padding: 0.75rem 1.5rem;
`;

const Code = styled.div`
  padding: 0.75rem 0 0.25rem;
  font-family: ${props => props.theme.fonts.monospace};
  font-size: 15px;
  font-weight: bold;
`;

const Icon = styled(FontAwesomeIcon)`
  width: 0.75rem;
  height: 0.75rem;
`;

const CopyButton = styled(Button)`
  position: absolute;
  padding: 0.5rem 0.75rem;
  top: 0;
  right: 0;
  border: 0;
  border-radius: 0 5px 0;
`;

export interface IProps {
  colorString: string;
  language: string;
}

export const Codeblock: React.FC<IProps> = ({ colorString, language }) => {
  const onCopy = () => copy(colorString);

  return (
    <Container my={3} bg="grayLight">
      <Heading as="h3">{language}</Heading>
      <Code>{colorString}</Code>

      <CopyButton variant="transparent" onClick={onCopy}>
        <Icon icon={faCopy} />
      </CopyButton>
    </Container>
  );
};
