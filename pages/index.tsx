import * as React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Box, Button, Flex, Heading, Text } from 'rebass/styled-components';
import { Label, Input } from '@rebass/forms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { MaterialPicker } from 'react-color';

import { Codeblock } from '../src/components/Codeblock';
import { ColorPicker } from '../src/components/ColorPicker';
import { Footer } from '../src/components/Footer';
import { getContrastingColor } from '../src/utils/helpers';
import { GitHubRibbon } from '../src/components/GitHubRibbon';
import { Logo } from '../src/components/Logo';

const DEFAULT_COLOR = '#4A5899';

const Container = styled.div`
  background-color: ${props => props.bgColor || '#FFF'};
`;

const Main = styled(Box)`
  padding: 3rem 1rem 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled(FontAwesomeIcon)`
  width: 1.25rem;
  height: 1.25rem;
  margin: 0.5rem 0.25rem;
`;

const Home = () => {
  const [color, setColor] = React.useState(DEFAULT_COLOR);
  const reversedColor = getContrastingColor(color);

  return (
    <Container bgColor={color}>
      <Head>
        <title>UI Color | Convert HEX & RGB colors to UIColor</title>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="UIColor.io is a website that helps you convert HEX & RGB colors to UIColor for Objective-C, Swift and Xamarin featuring a colorpicker and copy to clipboard functionality to make things easier."
        />
        <meta
          name="keywords"
          content="uicolor,ui,color,colour,convert,converter,hex,rgb,rgba,swift,objective-c,objective,c,apple,ios"
        />
        <meta property="og:title" content="UIcolor.io" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.uicolor.io/" />
        <meta
          property="og:image"
          content="https://www.uicolor.io/images/logo.png"
        />
        <meta
          property="og:description"
          content="UIColor.io is a website that helps you convert HEX & RGB colors to UIColor for Objective-C, Swift and Xamarin featuring a colorpicker and copy to clipboard functionality to make things easier."
        />

        <link
          href="https://fonts.googleapis.com/css?family=Sen&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Main>
        <GitHubRibbon color={color} />

        <Logo color={reversedColor} />

        <Heading as="h3">Convert HEX & RGB colors to UIColor</Heading>

        <Text maxWidth={475} my={2} textAlign="center">
          UIColor.io is a website that helps you convert HEX & RGB colors to
          UIColor for Objective-C, Swift and Xamarin featuring a colorpicker and
          copy to clipboard functionality to make things easier.
        </Text>

        <Box display="flex" justifyContent="center" width={[1, 1, 400]}>
          <ColorPicker
            color={color}
            onChangeComplete={thing => {
              setColor(thing);
            }}
          />
        </Box>

        {color && (
          <Flex flexDirection="column">
            <Codeblock
              hexColor={color}
              language="Swift"
              getUIColorString={(r, g, b) =>
                `UIColor(red:${r}, green:${g}, blue:${b}, alpha:1.0);`
              }
            />
            <Codeblock
              hexColor={color}
              language="Objective-C"
              getUIColorString={(r, g, b) =>
                `[UIColor colorWithRed:${r} green:${g} blue:${b} alpha:1.0];`
              }
            />
            <Codeblock
              hexColor={color}
              language="Xamarin (C#)"
              getUIColorString={(r, g, b) =>
                `new UIColor(red:${r}f, green:${g}f, blue:${b}f, alpha:1.0f)`
              }
            />
          </Flex>
        )}
      </Main>

      <Footer />
    </Container>
  );
};

export default Home;
