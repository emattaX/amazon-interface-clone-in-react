import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''/>

            <div className='header__search'>
                <input className='header__searchInput' type='text'/>
            </div>

            <div className='header__nav'>
                <div className='header__option'>
                    <span className='option__lineOne'>Hello Guest</span>
                    <span className='option__lineTwo'>SignIn</span>
                </div>
                <div className='header__option'>
                    <span className='option__lineOne'>Returns</span>
                    <span className='option__lineTwo'>Orders</span>
                </div>
                <div className='header__option'>
                    <span className='option__lineOne'>Your</span>
                    <span className='option__lineTwo'>Prime</span>
                </div>
            </div>
        </div>
    )
}

export default Header
