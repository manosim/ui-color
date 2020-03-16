import * as React from 'react';
import Color from 'color';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeDropper } from '@fortawesome/free-solid-svg-icons';
import { GithubPicker } from 'react-color';

import { CustomPicker } from 'react-color';

const Container = styled.div`
  margin-left: 1rem;
  align-self: flex-end;
`;

const PickerButton = styled.button`
  border: 0;
  outline: none;
  padding: 0.5rem;
  background: transparent;
`;

const Icon = styled(FontAwesomeIcon)`
  width: 1.25rem;
  height: 1.25rem;
  color: ${props => props.theme.colors.primary};
`;

const Popover = styled.div`
  position: relative;
  z-index: 2;
`;

const Cover = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const PickerWrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 0;
`;

export interface IProps {
  onSelectColor: (color: Color) => void;
}

export const Picker: React.FC<IProps> = props => {
  const [showPicker, setShowPicker] = React.useState<boolean>(false);

  const handleClick = () => {
    setShowPicker(!showPicker);
  };

  const handleClose = () => {
    setShowPicker(false);
  };

  return (
    <Container>
      <PickerButton onClick={handleClick}>
        <Icon icon={faEyeDropper} />
      </PickerButton>

      {showPicker ? (
        <Popover>
          <Cover onClick={handleClose} />

          <PickerWrapper>
            <GithubPicker
              triangle="top-right"
              width={'212px'}
              onChangeComplete={({ hex }) => {
                const color: Color = Color(hex);
                props.onSelectColor(color);
              }}
            />
          </PickerWrapper>
        </Popover>
      ) : null}
    </Container>
  );
};

export const ColorPicker = CustomPicker(Picker);
