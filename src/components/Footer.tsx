import * as React from 'react';
import styled from 'styled-components';
import { Box, Flex, Link } from 'rebass/styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const FooterWrapper = styled.div`
  display: flex;
  padding: 2rem;
  font-size: 0.8rem;

  text-align: center;

  margin-top: 3rem;
  padding: 1rem 3rem;
`;

const Icon = styled(FontAwesomeIcon)`
  width: 1.25rem;
  height: 1.25rem;
  margin: 0.5rem 0.25rem;
`;

export interface IProps {}

export const Footer: React.FC<IProps> = props => {
  return (
    <Box
      bg="grayLight"
      px={3}
      py={3}
      mt={3}
      textAlign="center"
      fontSize="0.8rem"
    >
      <Flex
        flexWrap="wrap"
        py={1}
        px={3}
        sx={{ maxWidth: 960, mx: 'auto' }}
        flexDirection="column"
        alignItems="center"
      >
        <Box>
          <Link
            variant="link"
            href="https://twitter.com/manosim_"
            aria-label="Twitter"
            mr={2}
          >
            <Icon icon={faTwitter} />
          </Link>

          <Link
            variant="link"
            href="https://github.com/manosim/uicolor/"
            aria-label="GitHub Repository"
          >
            <Icon icon={faGithub} />
          </Link>
        </Box>

        <Box my={[1, 0]}>
          Copyright ©{' '}
          <Link variant="link" href="https://www.uicolor.io/">
            UIColor.io
          </Link>{' '}
          {new Date().getFullYear()}.<br />
          Developed by{' '}
          <Link variant="link" href="https://www.manos.im/">
            Emmanouil Konstantinidis
          </Link>
          .
        </Box>
      </Flex>
    </Box>
  );
};
