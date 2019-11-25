import React, { Component } from 'react';
import axios from 'axios';

export default class ResourceList extends Component {
  state = { resources: [] };

  loadResource = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    );

    this.setState({ resources: response.data });
  };

  componentDidMount() {
    this.loadResource();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.resource !== this.props.resource) this.loadResource();
  }

  render() {
    return (
      <div>
        {this.props.resource} ({this.state.resources.length})
      </div>
    );
  }
}
