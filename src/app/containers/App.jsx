import React from 'react'
import { Link } from 'react-router'

export default class App extends React.Component {
    render() {
        return <div>
            <Link activeStyle={{color: 'red'}} to='/about'>About</Link> | <Link activeStyle={{color: 'red'}} to='/users'>Users</Link>
            <hr />
            <div>I'm an App!</div>
            <div>{this.props.children}</div>
        </div>
    }
}