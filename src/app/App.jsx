import React from 'react'
import { Link, browserHistory } from 'react-router'

export default function App({ children }) {
    return (
        <div>
            <header>
                Links:
                {' '}
                <Link activeStyle={{color: 'red'}} onlyActiveOnIndex to='/'>Home</Link>
                {' '}
                <Link activeStyle={{color: 'red'}} to='/about'>About</Link>
                {' '}
                <Link activeStyle={{color: 'red'}} to='/blog'>Blog</Link>
            </header>
            <div>
                <button onClick={() => browserHistory.push('/blog/someone')}>Go to /blog/someone</button>
            </div>
            <div style={{ marginTop: '1.5em' }}>{children}</div>
        </div>
    )
}