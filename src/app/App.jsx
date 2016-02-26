import React from 'react'
import { Link, browserHistory } from 'react-router'

import { Button } from 'react-bootstrap'

export default function App({ children }) {
    return (
        <div>
            <nav className='navbar navbar-fixed-top navbar-dark bg-inverse'>
                <div className='container'>
                    <a className='navbar-brand' href='#'>Project name</a>
                    <ul className='nav navbar-nav'>
                        <li className='nav-item'>
                            <Link className='nav-link' activeClassName='active' onlyActiveOnIndex to='/'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' activeClassName='active' to='/about'>About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='container'><div>
                <Button bsStyle='primary' onClick={() => browserHistory.push('/foo/someone')}>Go to /foo/someone</Button>
                <div style={{ marginTop: '1.5em' }}>{children}</div>
            </div>
            </div>
        </div>
    )
}