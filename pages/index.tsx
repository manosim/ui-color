import * as React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Box, Flex, Heading, Text } from 'rebass/styled-components';
import { Toggle } from 'react-toggle-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

import { Codeblock } from '../src/components/Codeblock';
import { Footer } from '../src/components/Footer';
import { FormHEX } from '../src/components/forms/FormHEX';
import { FormRGB } from '../src/components/forms/FormRGB';
import { GitHubRibbon } from '../src/components/GitHubRibbon';
import { Logo } from '../src/components/Logo';
import Color from 'color';
import { DEFAULT_COLOR } from './_app';

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

const FormsWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.grayLight};
  border-radius: 5px;
  padding: 0.75rem;
  margin: 1rem 0;
`;

const Icon = styled(FontAwesomeIcon)`
  width: 1.25rem;
  height: 1.25rem;
  margin: 0.5rem 0.25rem;
`;

const Home = () => {
  const [color, setColor] = React.useState<Color | null>(null);
  const [showHexForm, setShowHexForm] = React.useState<boolean>(true);
  const Form = showHexForm ? FormHEX : FormRGB;

  const renderCodeBlocks = () => {
    if (!color) {
      return null;
    }
    const rgbColor = color.rgb().object();
    const r = (rgbColor.r / 255).toFixed(2);
    const g = (rgbColor.g / 255).toFixed(2);
    const b = (rgbColor.b / 255).toFixed(2);
    const alpha = color.alpha().toFixed(2);

    return (
      <Flex flexDirection="column">
        <Codeblock
          language="Swift"
          colorString={`UIColor(red:${r}, green:${g}, blue:${b}, alpha:${alpha});`}
        />
        <Codeblock
          language="Objective-C"
          colorString={`[UIColor colorWithRed:${r} green:${g} blue:${b} alpha:${alpha}];`}
        />
        <Codeblock
          language="Xamarin (C#)"
          colorString={`new UIColor(red:${r}f, green:${g}f, blue:${b}f, alpha:${alpha}f)`}
        />
      </Flex>
    );
  };

  return (
    <Container bgColor={color && color.string()}>
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
        <GitHubRibbon color={color && color.hex()} />

        <Logo color={color && color.negate().hex()} />

        <Heading as="h3" textAlign="center">
          Convert HEX & RGB colors to UIColor
        </Heading>

        <Text maxWidth={475} my={2} textAlign="center">
          UIColor.io is a website that helps you convert HEX & RGB colors to
          UIColor for Objective-C, Swift and Xamarin featuring a colorpicker and
          copy to clipboard functionality to make things easier.
        </Text>

        <Box display="flex" flexDirection="row" alignItems="center" my={3}>
          <Heading as="h3" mx={3}>
            HEX
          </Heading>

          <Toggle
            name="toggle-1a"
            leftBackgroundColor="#F5F7F5"
            rightBackgroundColor="#F5F7F5"
            borderColor={DEFAULT_COLOR}
            knobColor={DEFAULT_COLOR}
            radius="3px"
            radiusBackground="2px"
            knobRadius="2px"
            width="5rem"
            knobWidth="1.5rem"
            checked={!showHexForm}
            onToggle={() => {
              setShowHexForm(!showHexForm);
              setColor(null);
            }}
          />

          <Heading as="h3" mx={3}>
            RGB
          </Heading>
        </Box>

        <FormsWrapper width={[1, 1, 400]}>
          <Form value={color} onColorChange={setColor} />
        </FormsWrapper>

        {renderCodeBlocks()}
      </Main>

      <Footer />
    </Container>
  );
};

export default Home;
