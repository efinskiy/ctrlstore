import React from 'react';
import Logo from "./Brand/Logo/Logo";
import LogoName from "./Brand/LogoName/LogoName";
import SearchButton from "./SearchButton";
import './header.css';
const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Logo className="logo__gamepad"/>
                <LogoName className="logo__name"/>
            </div>
            <div className="nav">
                <a className="nav__button" href="#">Store</a>
                <a className="nav__button" href="#">Help</a>
                <a className="nav__button" href="#">Favorites</a>
                <a className="nav__button" href="#">Categories</a>
            </div>
            <div className="search">
                <SearchButton className="search__button"/>
                <input className="search__input" type="text" placeholder="Search for games, developers, categories, etc."/>
            </div>
        </header>
    )
}
export default Header;