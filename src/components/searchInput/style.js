import React from 'react';
import styled from 'styled-components';
import { Card } from '../card';
import { zIndex, FlexRow, hexa, Transition, Shadow } from '../globalStyle';

export const SearchContainer = styled(Card)`
  position: relative;
  z-index: ${zIndex.search};
  width: 70%;
  margin: 4%;
  display: block;
  min-height: 44px;
  transition: ${Transition.hover.off};

  &:hover {
    transition: none;
  }

  @media (max-width: 768px) {
    margin: 1%;
    width: 60%;
    border-radius: 0;
    pointer-events: all;
    margin-bottom: 0;
  }
`;

export const SearchInput = styled.input`
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  color: ${props => props.theme.text.default};
  font-size: 20px;
  font-weight: 800;
  margin-left: 8px;
  width: 97%;
  border-radius: 25px;
  border: 2px solid ${props => props.theme.brand.default};
  &:focus {
    outline: none;
  }
`;