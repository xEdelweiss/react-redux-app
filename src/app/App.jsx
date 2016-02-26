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
                <Link activeStyle={{color: 'red'}} to='/foo'>Foo</Link>
                {' '}
                <Link activeStyle={{color: 'red'}} to='/bar'>Bar</Link>
            </header>
            <div>
                <button onClick={() => browserHistory.push('/foo/someone')}>Go to /foo/someone</button>
            </div>
            <div style={{ marginTop: '1.5em' }}>{children}</div>
        </div>
    )
}