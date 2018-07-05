import React from 'react';
import styled from 'styled-components';

const Text = styled.Text `
  font-size: 100;
`;

const Title = props => <Text>{props.children}</Text>;

export default Title;