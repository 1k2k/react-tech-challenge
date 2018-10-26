
import styled, { css } from 'styled-components';
import { zIndex } from '../globalStyle';

export const Img = styled.img`
  display: inline-block;
  width: ${props => (props.size ? `${props.size}px` : '32px')};
  height: ${props => (props.size ? `${props.size}px` : '32px')};
  border-radius: ${props => (props.community ? `${props.size / 8}px` : '100%')};
  object-fit: cover;

  ${props =>
    props.mobileSize &&
    css`
      @media (max-width: 768px) {
        width: ${props => `${props.mobileSize}px`};
        height: ${props => `${props.mobileSize}px`};
      }
    `};
`;

export const ImgPlaceholder = styled.div`
  display: inline-block;
  background-color: ${props => props.theme.bg.border};
  width: ${props => (props.size ? `${props.size}px` : '32px')};
  height: ${props => (props.size ? `${props.size}px` : '32px')};
  border-radius: ${props => (props.community ? `${props.size / 8}px` : '100%')};
  object-fit: cover;

  ${props =>
    props.mobileSize &&
    css`
      @media (max-width: 768px) {
        width: ${props => `${props.mobileSize}px`};
        height: ${props => `${props.mobileSize}px`};
      }
    `};
`;



export const Container = styled.div`
  display: flex;
  background:  ${props => props.selected? '#ececec' : props.theme.bg.default};
  border-bottom: 2px solid ${props => props.theme.bg.border};
  padding: 16px;
  position: relative;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 auto;
`;

export const Row = styled.div`
  display: flex;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 16px;
`;

export const Name = styled.h2`
  font-weight: 800;
  color: ${props => props.theme.text.default};
  font-size: 20px;
  margin-top: 1%;
  margin-bottom: 1%;
`;

export const ElectedTitle = styled.h3`
  font-weight: 700;
  color: ${props => props.theme.text.default};
  font-size: 16px;
  margin-top: 1%;
  margin-bottom: 1%;
`;

export const DistrictTitle = styled.h3`
  font-weight: 500;
  color: ${props => props.theme.text.default};
  font-size: 15px;
  margin-top: 1%;
  margin-bottom: 1%;
`;

export const Username = styled.h3`
  font-weight: 500;
  color: ${props => props.theme.text.alt};
  font-size: 15px;
  line-height: 1.2;
`;
