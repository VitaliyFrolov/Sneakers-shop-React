import React from "react";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import './favorites.modules.scss';

const Favorites = (props) => {
    const {favorite, setFavorite} = props;
    const addToFavorite = (obj) => {
        setFavorite(obj)
      }
        return (
            <section className="favorites">
                <div className="favorites__header">
                    <Link to={'/'}>
                        <button className="favorites__btn">
                            <img src="/img/svg/favoritesBtnClose.svg" width={5} height={10} alt="back to home page..." />
                        </button>
                    </Link>
                    <h1 className="favorites__title">Мои закладки</h1>
                </div>
                <div className={favorite.length > 0 ? "favorites__content" : "favorites--empty"}>
                    {favorite.length > 0 ? (
                        favorite.map((obj, index) => (
                            <Card
                                title={obj.title}
                                price={obj.price}
                                imageUrl={obj.imageUrl}
                                key={index}
                                id={obj.id}
                                onFavorite={(obj) => addToFavorite(obj)}
                            />
                        ))) : (
                                <div className="favorites__content-message">
                                    <img className="favorites__content-icn" src="/img/favoritesNonIcn.jpg" width={70} height={70} alt="icn"/>
                                    <h2 className="favorites__content-title">Закладок нет</h2>
                                    <p className="favorites__content-text">Вы ничего не добавляли в закладки</p>
                                    <Link to={'/'} className="favorites__content-link">
                                        <button className="favorites__content-btn">
                                            <img src="/img/svg/btnEmptyCart.svg" width={14} height={12} alt="close"/>
                                            <p className="favorites__content-btn-text">Вернуться назад</p>
                                        </button>
                                    </Link>
                                </div> 
                              )
                    }
                </div>  
            </section>
        )
}

export default Favorites;
