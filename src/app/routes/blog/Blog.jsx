import React from 'react';

export default class Blog extends React.Component {
    render() {
        let name = this.props.params.name

        return (
            <div>
                I am Blog!{' '}
                {
                    name
                        ? <span>And you're <b>{name}</b></span>
                        : ''
                }
            </div>
        )
    }
}