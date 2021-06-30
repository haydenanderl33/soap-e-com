import React from 'react'
import {LandingContainer1, LandingWrapper1, LandingImageBackground1} from './landing-elements'

const Landing = () => {
    return (
        <>
            <LandingContainer1>
                <LandingWrapper1>
                    <LandingImageBackground1 src={process.env.PUBLIC_URL + '/images/LandingPageSoapBackground.jpg'}/>

                </LandingWrapper1>
            </LandingContainer1>
        </>
    )
}

export default Landing
