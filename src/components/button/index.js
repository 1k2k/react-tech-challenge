import React from 'react';
import styled from 'styled-components';
import { Gradient, Shadow, Transition, hexa, Spinner, Label, zIndex  } from '../globalStyle';

import { StyledSolidButton, StyledTextButton } from './style';

export const Button = (props) => (
    <StyledTextButton disabled={props.loading} data-cy={props.dataCy} {...props}>
      {props.loading && (
          <Spinner color="text.reverse" size={props.large ? '18' : '14'} />
        )}
      <Label loading={props.loading}>
        {props.children}
      </Label>
    </StyledTextButton>
  );


export const PrimaryBtn = styled(Button)`
  font-weight: 700;
  font-size: 16px;
  border-radius: ${props => props.theme.dim.btnBorderRadius};
  background-color: ${props => props.theme.brand.alt};
  color: ${props => props.theme.bg.default};
  transition: ${Transition.hover.off};
  z-index: ${zIndex.card};

  &:hover {
    box-shadow: ${Shadow.high} ${props => hexa(props.theme.bg.reverse, 0.5)};
    transition: ${Transition.hover.on};
  }
`;

export const SecondaryBtn = styled(PrimaryBtn)`
  color: ${props => props.theme.text.reverse};
  background-color: transparent;
  border: 2px solid transparent;

  &:hover {
    color: ${props => props.theme.text.reverse};
    background-color: transparent;
    border-color: ${props => props.theme.bg.default};
    box-shadow: 0 0 8px 4px ${props => hexa(props.theme.bg.default, 0.5)};
  }
`;


export const DefaultButton = styled(PrimaryBtn)`
font-size: 16px;
border: 2px solid ${props => props.theme.text.reverse};

@media (max-width: 768px) {
  position: absolute;
  right: 6%;
}
`;