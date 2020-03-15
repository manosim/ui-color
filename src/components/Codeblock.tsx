import * as React from 'react';
import copy from 'copy-to-clipboard';
import styled from 'styled-components';
import { Box, Button, Flex, Heading, Text } from 'rebass/styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const Container = styled(Box)`
  position: relative;
  border-radius: 5px;
  padding: 0.75rem;
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
  padding: 0.25rem 0.5rem;
  top: 0;
  right: 0;
  border: 0;
  border-radius: 0 5px 0;
`;

export interface IProps {
  language: string;
  hexColor: string;
  getUIColorString: (r, g, b) => string;
}

export const Codeblock: React.FC<IProps> = ({
  hexColor,
  language,
  getUIColorString,
}) => {
  const r = (
    parseInt(hexColor.replace('#', '').substring(0, 2), 16) / 255
  ).toFixed(2);
  const g = (
    parseInt(hexColor.replace('#', '').substring(2, 4), 16) / 255
  ).toFixed(2);
  const b = (
    parseInt(hexColor.replace('#', '').substring(4, 6), 16) / 255
  ).toFixed(2);

  const uiColorString = getUIColorString(r, g, b);

  const onCopy = () => copy(uiColorString);

  return (
    <Container my={3} bg="grayLight">
      <Heading as="h3">{language}</Heading>
      <Code>{uiColorString}</Code>

      <CopyButton variant="transparent" onClick={onCopy}>
        <Icon icon={faCopy} />
      </CopyButton>
    </Container>
  );
};
