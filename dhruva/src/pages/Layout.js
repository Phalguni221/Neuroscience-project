import React from 'react'
import { Link } from 'gatsby'

const Layout = ({children}) => {
    return (
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/app'>App</Link>
                <Link to='/marketing'>Marketing</Link>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout