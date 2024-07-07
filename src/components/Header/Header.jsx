import React from 'react'
import Login from './Login/Login'

export default class Header extends React.Component {
    render() {
        return (
            <nav className='navbar navbar-dark bg-primary'>
                <div className='container'>
                    <ul className='navbar-nav'>
                        <li className='nav-item-active'>
                            <p className='nav-link'>Movie-app</p>
                        </li>
                    </ul>
                    <Login/>
                </div>
            </nav>
        )
    }
}
