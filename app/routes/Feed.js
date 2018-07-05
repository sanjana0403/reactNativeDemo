import React, {Component} from 'react';
import styled from 'styled-components';

import {getFeed} from '../network/api';
import Loader from '../components/Loader';
import ListItem from '../components/ListItem';

const Container = styled.ScrollView `
  flex: 1;
`;

const Text = styled.Text `
  font-size: 100;
`;

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: []
    };
  }

  componentDidMount() {
    return getFeed().then((feed) => {
      this.setState({isLoading: false, data: feed})
    });
  }

  render() {
    if (this.state.isLoading) {
      return <Loader/>;
    }
    return (
      <Container>
        {this
          .state
          .data
          .map((item, key) => <ListItem
            name={item.name}
            symbol={item.symbol}
            website_slug={item.website_slug}
            key={key}/>)
}
      </Container>
    )
  }

}

export default Feed;