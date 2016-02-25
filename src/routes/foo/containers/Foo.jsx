import React from 'react';

export default class Foo extends React.Component {
    render() {
        let name = this.props.params.name

        return (
            <div>
                I am Foo!{' '}
                {
                    name
                        ? <span>And you're <b>{name}</b></span>
                        : ''
                }
            </div>
        )
    }
}