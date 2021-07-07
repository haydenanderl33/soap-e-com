import React from 'react'
import { HeaderContainer, HeaderWrapper, HeaderColumn1, HeaderColumn2, HeaderColumn3} from './header-elements'
import { Link } from 'react-router-dom';
import { HiOutlineShoppingBag } from 'react-icons/hi'

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <HeaderWrapper>
                    <HeaderColumn1>
                        <Link style={{textDecoration: 'none', color: '#000'}}>Shop</Link>
                        <Link style={{textDecoration: 'none', color: '#000'}}>About</Link>
                    </HeaderColumn1>
                    <HeaderColumn2>
                    <Link style={{textDecoration: 'none', color: '#000'}}>Soapers</Link></HeaderColumn2>
                    <HeaderColumn3>
                    <Link style={{textDecoration: 'none', color: '#000'}}>Subscription</Link>
                        <Link style={{textDecoration: 'none', color: '#000'}}>Sign In</Link>
                        <HiOutlineShoppingBag style={{ cursor: 'pointer'}}/>
                    </HeaderColumn3>
                </HeaderWrapper>
            </HeaderContainer>
        </>
    )
}

export default Header
