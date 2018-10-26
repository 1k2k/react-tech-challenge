/* eslint no-eval: 0 */
import styled, { css, keyframes } from 'styled-components';

export const Gradient = (g1, g2) =>
  css`radial-gradient(ellipse farthest-corner at top left, ${g1} 0%, ${g2} 100%)`;

export const Truncate = width => css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  min-width: 0;
`;

export const hexa = (hex, alpha) => {
    var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);
  
    if (alpha >= 0) {
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    } else {
      return `rgb(${r}, ${g}, ${b})`;
    }
  };


export const Shadow = {
  low: '0 2px 8px',
  mid: '0 4px 12px',
  high: '0 8px 16px',
};

export const Transition = {
  hover: {
    on: 'all 0.2s ease-in',
    off: 'all 0.2s ease-out',
  },
  reaction: {
    on: 'all 0.15s ease-in',
    off: 'all 0.1s ease-out',
  },
  dropdown: {
    off: 'all 0.35s ease-out',
  },
};

  export const zIndex = new function() {
    // Define at a component level here, then use math to handle order at a local level.
    // (e.g. const ModalInput = styled.input`z-index: zIndex.modal + 1`;)
    // This uses constructor syntax because that allows self-referential math
  
    this.base = 1; // z-index: auto content will go here or inherit z-index from a parent
  
    this.background = this.base - 1; // content that should always be behind other things (e.g. textures/illos)
    this.hidden = this.base - 2; // this content should be hidden completely (USE ADD'L MEANS OF HIDING)
  
    this.card = this.base + 1; // all cards should default to one layer above the base content
    this.loading = this.card + 1; // loading elements should never appear behind cards
  }();  


export const Body = styled.body`
  margin: 0;
  padding: 0;
  font-family: sans-serif;
`;

export const AppContainer = styled.div`
   text-align: center;
`;


export const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;


export const Container = styled.div`
    margin auto;
    width: 50%;
    height: 100%;

    @media (max-width: 768px) {
      margin: 2%;
      width: 100%;
    }
`;

const spin = keyframes`
  to {transform: rotate(360deg);}
`;

export const Spinner = styled.span`
  width: ${props => (props.size ? `${props.size}px` : '32px')};
  height: ${props => (props.size ? `${props.size}px` : '32px')};

  &:before {
    content: '';
    box-sizing: border-box;
    display: inline-block;
    position: ${props => (props.inline ? 'relative' : 'absolute')};
    top: ${props => (props.inline ? '0' : '50%')};
    left: ${props => (props.inline ? '0' : '50%')};
    width: ${props => (props.size !== undefined ? `${props.size}px` : '16px')};
    height: ${props => (props.size !== undefined ? `${props.size}px` : '16px')};
    margin-top: ${props =>
      props.size !== undefined ? `-${props.size / 2}px` : '-8px'};
    margin-left: ${props =>
      props.size !== undefined ? `-${props.size / 2}px` : '-8px'};
    border-radius: 50%;
    border: ${props => '2px'} solid
      ${props =>
        props.color
          ? eval(`props.theme.${props.color}`)
          : props.theme.brand.alt};
    border-top-color: transparent;
    border-right-color: ${props =>
      props.color ? eval(`props.theme.${props.color}`) : props.theme.brand.alt};
    border-bottom-color: transparent;
    animation: ${spin} 2s linear infinite;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  font-weight: 500;
  color: ${props => props.loading? 'transparent': props.theme.text.reverse};

  &:not(:first-of-type) {
    margin-top: 1.5rem;
  }

  a {
    text-decoration: underline;
  }
`;


