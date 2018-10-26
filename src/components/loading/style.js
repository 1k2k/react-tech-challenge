// @flow
// $FlowFixMe
import styled, { keyframes } from 'styled-components';
import { hexa, zIndex } from '../globalStyle';

const placeHolderShimmer = keyframes`
  0%{
    transform: translateX(-100%) translateY(0%);
    background-size: 100%;
    opacity: 1;
  }
  100%{
    transform: translateX(200%) translateY(0%);
    background-size: 500%;
    opacity: 0;
  }
`;

export const ShimmerBase = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: ${zIndex.loading};
  background: ${({ theme }) => theme.bg.wash};
  overflow: hidden;
`;

export const ShimmerLine = styled.span`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: ${zIndex.loading + 1};
    animation-duration: 2.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    background: linear-gradient(
    to right,
    ${({ theme }) => theme.bg.wash} 10%,
    ${({ theme }) => hexa(theme.generic.default, 0.65)} 20%,
    ${({ theme }) => theme.bg.wash} 30%
    );
    ${/* background-size: 100%; */ ''} animation-name: ${placeHolderShimmer};
`;

export const Cover = styled.span`
    position: absolute;
    background: ${({ theme }) => theme.bg.default};
    z-index: ${zIndex.loading + 2};
`;


export const ShimmerUserBox = styled.div`
  background: ${props => props.theme.bg.default};
  padding: 16px;
  border-bottom: 1px solid ${props => props.theme.bg.border};

  section {
    min-height: 96px;
  }

  &:last-of-type {
    border-bottom: 0;
  }
`;

export const ShimmerDark = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: ${zIndex.loading};
  background: ${({ theme }) => theme.bg.hairline};
  overflow: hidden;
`;