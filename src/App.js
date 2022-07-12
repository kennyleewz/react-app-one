import React from 'react'
import Header from './components/Header'

function App() {
    const title = 'My Blogpost'

    return (
        <>
            <Header />
            <div className='container'>
                <h1>{title.toUpperCase()}</h1>
            </div>
        </>
    )
}

export default App