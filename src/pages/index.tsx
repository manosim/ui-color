import * as React from 'react';
import Color from 'color';
import styled from 'styled-components';
import { Box, Flex, Heading, Text } from 'rebass/styled-components';
import { Toggle } from 'react-toggle-component';

import { Codeblock } from '../components/Codeblock';
import { DEFAULT_COLOR } from '../components/Layout';
import { Footer } from '../components/Footer';
import { FormHEX } from '../components/forms/FormHEX';
import { FormRGB } from '../components/forms/FormRGB';
import { GitHubRibbon } from '../components/GitHubRibbon';
import { Layout } from '../components/Layout';
import { Logo } from '../components/Logo';
import { SEO } from '../components/Seo';

const Container: any = styled.div`
  background-color: ${(props: any) => props.bgColor || '#FFF'};
  transition: background-color 500ms ease;
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
  padding: 1.25rem 0.75rem;
  margin: 1rem 0;
`;

const Home = () => {
  const [color, setColor] = React.useState<Color | null>(null);
  const [showHexForm, setShowHexForm] = React.useState<boolean>(true);
  const hasDarkBg = color && color.isDark();
  const textColor = hasDarkBg ? 'white' : 'inherit';
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
    <Layout>
      <SEO title="Convert HEX & RGB colors to UIColor" />

      <Container bgColor={color && color.string()}>
        <Main>
          <GitHubRibbon color={color && color.hex()} />

          <Logo color={color && color.negate().hex()} />

          <Heading as="h3" textAlign="center" color={textColor}>
            Convert HEX & RGB colors to UIColor
          </Heading>

          <Text maxWidth={485} my={2} textAlign="center" color={textColor}>
            UIColor.io is a website that helps you convert HEX & RGB colors to
            UIColor for Objective-C, Swift and Xamarin featuring a colorpicker
            and copy to clipboard functionality to make things easier.
          </Text>

          <Box display="flex" flexDirection="row" alignItems="center" my={3}>
            <Heading as="h3" mx={3} color={textColor}>
              HEX
            </Heading>

            <Toggle
              name="toggle-1a"
              leftBackgroundColor={color ? color.string() : 'white'}
              rightBackgroundColor={color ? color.string() : 'white'}
              borderColor={color ? color.negate().hex() : DEFAULT_COLOR}
              knobColor={color ? color.negate().hex() : DEFAULT_COLOR}
              radius="3px"
              radiusBackground="2px"
              knobRadius="2px"
              width="4rem"
              knobWidth="1.5rem"
              checked={!showHexForm}
              onToggle={() => {
                setShowHexForm(!showHexForm);
                setColor(null);
              }}
            />

            <Heading as="h3" mx={3} color={textColor}>
              RGB
            </Heading>
          </Box>

          <FormsWrapper width={[1, 1, 450]}>
            <Form value={color} onColorChange={setColor} />
          </FormsWrapper>

          {renderCodeBlocks()}
        </Main>

        <Footer />
      </Container>
    </Layout>
  );
};

export default Home;
