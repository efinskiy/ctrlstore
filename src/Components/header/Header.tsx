import React from 'react';
import Logo from "../svg/logo/Logo";
import LogoName from "../svg/logo-name/LogoName";
import SearchButton from "../svg/SearchButton";
import css from './header.module.css';
import {BasketButton} from "../svg/basket/BasketButton";
import {ProfileArrow} from "../svg/ProfileArrow";
const Header = () => {
    return (
        <header className={css.header}>
            <div className={css.logo}>
                <Logo className={css.logo__gamepad}/>
                <LogoName className={css.logo__name}/>
            </div>
            <div className={css.nav}>
                <a className={css.nav__button} href="#">Store</a>
                <a className={css.nav__button} href="#">Help</a>
                <a className={css.nav__button} href="#">Favorites</a>
                <a className={css.nav__button} href="#">Categories</a>
            </div>
            <div className={css.search}>
                <SearchButton className={css.search__button}/>
                <input className={css.search__input} type="text" placeholder="Search for games, developers, categories, etc."/>
            </div>
            <button className={css.basket}>
                <BasketButton className={css.basket__button}/>
            </button>
            <div className={css.profile}>
                <span className={css.profile__username}>
                    ReNegade
                </span>
                <ProfileArrow className={css.profile__arrow}/>
            </div>

        </header>
    )
}
export default Header;