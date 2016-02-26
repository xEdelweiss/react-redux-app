import React from 'react';
import { Link } from 'react-router'

export default class Foo extends React.Component {
    render() {
        let name = this.props.params.name
        let {children} = this.props

        return (
            <div style={{opacity: 0.4}}>
                I am Foo <b>2</b>!{' '}
                {
                    name
                        ? <span>And you're <b>{name}</b></span>
                        : ''
                }
                <hr />
                <br />
                <header>
                    Links:
                    {' '}
                    <Link activeStyle={{color: 'red'}} onlyActiveOnIndex to='/bar/foo'>Bar:Foo:Home</Link>
                    {' '}
                    <Link activeStyle={{color: 'red'}} to='/bar/foo/bar'>Bar:Foo:Bar</Link>
                </header>
                <div>{children}</div>
            </div>
        )
    }
}