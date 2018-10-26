// @flow
import React from 'react';
import { ShimmerUserBox, ShimmerBase,ShimmerDark, ShimmerLine, Cover } from './style';

export const LoadingUserBox = () => (
    <ShimmerUserBox>
      <ShimmerDark>
        <ShimmerLine />
        <Cover
          style={{
            top: '0',
            left: '0',
            height: '4px',
            width: '100%',
          }}
        />
        <Cover
          style={{
            top: '16px',
            left: '0',
            height: '16px',
            width: '100%',
          }}
        />
        <Cover
          style={{
            top: '4px',
            left: '120px',
            height: '12px',
            width: '100%',
          }}
        />
        <Cover
          style={{
            top: '24px',
            left: '0',
            height: '8px',
            width: '100%',
          }}
        />
        <Cover
          style={{
            top: '60px',
            left: '0',
            height: '12px',
            width: '100%',
          }}
        />
        <Cover
          style={{
            top: '72px',
            left: '24px',
            height: '24px',
            width: '4px',
          }}
        />
        <Cover
          style={{
            top: '72px',
            left: '52px',
            height: '24px',
            width: '4px',
          }}
        />
        <Cover
          style={{
            top: '72px',
            left: '80px',
            height: '24px',
            width: '4px',
          }}
        />
        <Cover
          style={{
            top: '72px',
            left: '108px',
            height: '24px',
            width: '4px',
          }}
        />
        <Cover
          style={{
            top: '72px',
            left: '136px',
            height: '24px',
            width: '100%',
          }}
        />
      </ShimmerDark>
    </ShimmerUserBox>
  );
  