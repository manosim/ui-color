import * as React from 'react';
import styled from 'styled-components';

const DEFAULT_ARROW_OFFSET = 1;

const UP_KEY_CODE = 38;
const DOWN_KEY_CODE = 40;
const VALID_KEY_CODES = [UP_KEY_CODE, DOWN_KEY_CODE];
const isValidKeyCode = keyCode => VALID_KEY_CODES.indexOf(keyCode) > -1;

const getFormattedPercentage = number => `${number}%`;
const getNumberValue = value => Number(String(value).replace(/%/g, ''));
const getIsPercentage = value => String(value).indexOf('%') > -1;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  width: 100%;
  font-size: 20px;
  color: #777;
  border: 0px;
  outline: none;
  box-shadow: inset 0 0 0 1px #ddd;
  border-radius: 4px;
  padding: 7px;
`;

const Label = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-right: 1rem;
`;

interface IProps {
  label: any;
  onChange: any;
  value: any;
  placeholder: any;
}

interface IState {
  value: any;
  blurValue: any;
}

export class PickerInput extends React.Component<IProps, IState> {
  input: any;

  constructor(props) {
    super(props);

    this.state = {
      value: String(props.value).toUpperCase(),
      blurValue: String(props.value).toUpperCase(),
    };
  }

  componentDidUpdate(prevProps: IProps, prevState: IState) {
    if (
      this.props.value !== this.state.value &&
      (prevProps.value !== this.props.value ||
        prevState.value !== this.state.value)
    ) {
      if (this.input === document.activeElement) {
        this.setState({ blurValue: String(this.props.value).toUpperCase() });
      } else {
        this.setState({
          value: String(this.props.value).toUpperCase(),
          blurValue:
            !this.state.blurValue && String(this.props.value).toUpperCase(),
        });
      }
    }
  }

  getValueObjectWithLabel(value) {
    return {
      [this.props.label]: value,
    };
  }

  handleBlur = () => {
    if (this.state.blurValue) {
      this.setState({ value: this.state.blurValue, blurValue: null });
    }
  };

  handleChange = e => {
    this.setUpdatedValue(e.target.value, e);
  };

  getArrowOffset() {
    return DEFAULT_ARROW_OFFSET;
  }

  handleKeyDown = e => {
    // In case `e.target.value` is a percentage remove the `%` character
    // and update accordingly with a percentage
    // https://github.com/casesandberg/react-color/issues/383
    const value = getNumberValue(e.target.value);
    if (!isNaN(value) && isValidKeyCode(e.keyCode)) {
      const offset = this.getArrowOffset();
      const updatedValue =
        e.keyCode === UP_KEY_CODE ? value + offset : value - offset;

      this.setUpdatedValue(updatedValue, e);
    }
  };

  setUpdatedValue(value, e) {
    const onChangeValue = this.props.label
      ? this.getValueObjectWithLabel(value)
      : value;
    this.props.onChange && this.props.onChange(onChangeValue, e);

    const isPercentage = getIsPercentage(e.target.value);
    this.setState({
      value: isPercentage ? getFormattedPercentage(value) : value,
    });
  }

  render() {
    return (
      <Container>
        <Label>{this.props.label}</Label>
        <Input
          ref={input => (this.input = input)}
          value={this.state.value}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          placeholder={this.props.placeholder}
          spellCheck="false"
        />
      </Container>
    );
  }
}
