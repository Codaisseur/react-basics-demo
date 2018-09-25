import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
    This component expects a name prop and an id prop.
*/
export default class extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired
    }

    render() {
        return <div>{this.props.name} "{this.props.title}" {this.props.score}</div>
    }
}