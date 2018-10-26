
import styled, { css } from 'styled-components';
import { Gradient, Shadow, Transition, hexa } from '../globalStyle';

const baseButton = css`
  display: flex;
  flex: none;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.dim.btnBorderRadius};
  font-weight: 600;
  white-space: nowrap;
  word-break: keep-all;
  transition: ${Transition.hover.off};
  cursor: pointer;
  font-size: ${props => (props.large ? '18px' : '14px')};
  line-height: 1;
  position: relative;
  text-align: center;
  padding: ${props =>
    props.icon
      ? props.large ? '8px 12px' : '4px 8px'
      : props.large ? '16px 32px' : '12px 16px'};

  &:hover {
    transition: ${Transition.hover.on};
    box-shadow: ${props =>
      props.disabled
        ? 'none'
        : `${Shadow.high} ${hexa(props.theme.bg.reverse, 0.15)}`};
    opacity: ${props => (props.disabled ? '0.5' : '1')};
  }

  /* if an icon and label are both present, add space around the label*/
  div + span,
  span + span {
    margin: 0 8px;
  }
`;

export const StyledSolidButton = styled.button`
  ${baseButton} background-color: ${props =>
  props.disabled
    ? props.theme.bg.inactive
    : eval(`props.theme.${props.color ? props.color : `brand.alt`}`)};
  background-image: ${props =>
    props.disabled || props.gradientTheme === 'none'
      ? 'none'
      : props.gradientTheme
        ? Gradient(
            eval(`props.theme.${props.gradientTheme}.alt`),
            eval(`props.theme.${props.gradientTheme}.default`)
          )
        : Gradient(props.theme.brand.alt, props.theme.brand.default)};
  color: ${props => props.theme.text.reverse};

  &:active {
    box-shadow: ${props =>
      props.disabled
        ? 'none'
        : `${Shadow.low} ${hexa(props.theme.bg.reverse, 0.15)}`};
    outline: none;  
  }
`;

export const StyledTextButton = styled(StyledSolidButton)`
  background: transparent;
  background-image: none;
  font-weight: 600;
  color: ${props =>
    props.disabled
      ? props.theme.bg.inactive
      : eval(`props.theme.${props.color ? props.color : 'text.alt'}`)};
  transition: color 0.1s ease-out, box-shadow 0.2s ease-out 0.1s, border-radius 0.2s ease-out, padding: 0.2s ease-out;
  ${props =>
    props.loading
      ? css`
          justify-content: center;
        `
      : css`
          justify-content: flex-start;
        `}
`;