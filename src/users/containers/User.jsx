import React from 'react';

export default class User extends React.Component {
    render() {
        const {userId} = this.props.params

        return (
            <div>I'm an User! And you're {userId}!</div>
        )
    }
}