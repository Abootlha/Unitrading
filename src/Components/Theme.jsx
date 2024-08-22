import React from 'react';
import styled from 'styled-components';

const LargeHeading = styled.h1`
  font-size: 700px;
  font-weight: bold;
`;

const Theme = () => {
  return (
    <>
      <Container>
        <FlexContainer>
          <Content>
            <LargeHeading>Refund Policy</LargeHeading>
          </Content>
        </FlexContainer>
      </Container>
    </>
  );
};

export default Theme;
