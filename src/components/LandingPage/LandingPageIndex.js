import React from 'react'
import Landing from '../Landing/landing-index'
import Header from '../Header/header-index'
import data from '../../zData';

const LandingPage = () => {
    return (
        <>
        <Header data={data}/>
        <Landing/>
        </>
    )
}

export default LandingPage
