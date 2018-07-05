import React from 'react';
import styled from 'styled-components';

const Container = styled.View `
  height: 100px;
`;

const Text = styled.Text `
  font-size: 12;
`;

const ListItem = (props) => (
  <Container>
    <Text>{props.name}</Text>
    <Text>{props.symbol}</Text>
    <Text>{props.website_slug}</Text>
  </Container>
);
//
export default ListItem;
