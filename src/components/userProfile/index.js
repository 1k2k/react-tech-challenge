import React from 'react';
import { Container, Row, Column, Name, Username, Img, ElectedTitle, DistrictTitle } from './style';
export const ElectedProfile = ({ user }: any) => {
    return (
      <Container selected={user.elected_office === 'MP'}>
        <Row>
        <Img size={100} src={`${user.photo_url}`}/>
          <Column>
            <Name>{`${user.name}`}</Name>
            <ElectedTitle>{`${user.elected_office}`}</ElectedTitle>
            <DistrictTitle>{`${user.district_name}`}</DistrictTitle>
          </Column>
        </Row>
      </Container>)
}
