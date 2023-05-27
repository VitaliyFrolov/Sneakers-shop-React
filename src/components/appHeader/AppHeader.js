import React from "react";
import { Link } from "react-router-dom";
import './appHeaders.modules.scss'

const AppHeader = (props) => {
  const {setCartOpen} = props;
    return (
      <header className="header">
        <div className="header__left-wrapper">
          <Link to={'./'}>
            <img className="header__logo" src="/img/logo.png" alt="logo" width={40} height={40} />
          </Link>
          <div className="header-info">
            <h3 className="header-info__title">Sneakers Shop</h3>
            <p className="header-info__text">Магазин лучших кроссовок</p>
          </div>
        </div>
        <div className="header__right-wrapper">
          <ul className="header__list">
            <li className="header__list-item">
              <img src="/img/svg/Card.svg" alt="card" width={20} height={20}/>
              <span className="header__list-price" onClick={setCartOpen}>1205 руб.</span>
            </li>
            <li className="header__list-item">
              <Link to={'/favorites'}>
                <img src="/img/svg/Like.svg" alt="like" width={20} height={20} />
              </Link>
            </li>
            <li>
              <img src="/img/svg/Union.svg" alt="union" width={20} height={20} />
            </li>
          </ul>
        </div>  
      </header>
    )
   }

export default AppHeader;