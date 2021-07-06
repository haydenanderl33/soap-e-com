import React from 'react'
import { HeaderContainer, HeaderWrapper, HeaderColumn1, HeaderColumn2, HeaderColumn3,
    HeaderMobileWrapper,MobileColumn1, MobileColumn2} from './header-elements'
import { Link } from 'react-router-dom';
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { VscMenu } from 'react-icons/vsc'

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
                    <Link style={{textDecoration: 'none', color: '#000', fontFamily:`'Cookie', cursive`}}>Sudz'n'Budz</Link></HeaderColumn2>
                    <HeaderColumn3>
                    <Link style={{textDecoration: 'none', color: '#000'}}>Subscription</Link>
                        <Link style={{textDecoration: 'none', color: '#000'}}>Sign In</Link>
                        <HiOutlineShoppingBag style={{ cursor: 'pointer'}}/>
                    </HeaderColumn3>
                </HeaderWrapper>
                <HeaderMobileWrapper>
                    <MobileColumn1> <Link style={{textDecoration: 'none', color: '#000', fontFamily:`'Cookie', cursive`}}>Sudz'n'Budz</Link></MobileColumn1>
                    <MobileColumn2><VscMenu/></MobileColumn2>

                </HeaderMobileWrapper>
            </HeaderContainer>
        </>
    )
}

export default Header
