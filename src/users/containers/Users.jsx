import React from 'react'
import { Link } from 'react-router'

export default class Users extends React.Component {
    render() {
        return <div>
            <Link activeStyle={{color: 'red'}} to='/user/Mi'>Mi</Link> | <Link activeStyle={{color: 'red'}} to='/user/Ma'>Ma</Link>
            <hr />
            <div>I'm an Users!</div>
            <div>{this.props.children}</div>
        </div>
    }
}