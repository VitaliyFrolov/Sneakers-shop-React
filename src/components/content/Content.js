import React from "react";
import Card from "../card/Card";
import './content.modules.scss';

const Content = (props) => {
  const { items, addCart, searchInput, searchValue, setFavorite, cartOpened, cardState, getCardState, cartItems, favorite, loading} = props;

  const addToCart = (obj) => {
    addCart(obj)
  };

  const addToFavorite = (obj) => {
    setFavorite(obj)
  };

  const onAddState = (obj) => {
    cardState(obj)
  };

  const getAddState = (event) => {
    getCardState(event)
  }
  
  return (
      <section className={cartOpened ? 'content content--fix' : 'content'}>
      <div className="content__header">
        <h1 className="content__title">{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h1>
          <form className="content__form">
            <button className="content__btn">
              <img className="content__img" src="/img/svg/search.svg" alt="Начать поиск" width={14.25} height={14.25}/>
            </button>
            <input onChange={searchInput} value={searchValue} className="content__search" type='text' placeholder='Поиск...'/>
          </form>
      </div>
      <div className="content__card-wrapper">
        {
          loading 
            ? [...Array(10)]
            : <>
                {items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
                  <Card
                    title={item.name}
                    price={item.price}
                    imageUrl={item.imageUrl}
                    key={item.id}
                    id={item.id}
                    onFavorite={(obj) => addToFavorite(obj)}
                    onAdd={(obj) => addToCart(obj)}
                    stateCard={(obj) => onAddState(obj)}
                    setStateCard={() => getAddState()}
                    added={cartItems.some(obj => obj.id === item.id)}
                    favorit={favorite.some(obj => obj.id === item.id)}
                    loadind={loading}
                  />
                ))}              
              </>
        }
        
      </div>
    </section>
  )
}

export default Content;