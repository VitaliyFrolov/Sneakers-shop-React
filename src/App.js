import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import AppHeader from "./components/appHeader"
import Content from './components/content';
import ShoppingCart from "./components/shoppingСart/ShoppingCart";
import Favorites from "./components/favorites/Favorites";
import Purchases from "./components/purchases";



function App() {
  const [cartOpened, setCartOpen] = useState(false);
  const [favorite, setFavorite] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoadind] = useState(true)

  useEffect(() => {
    fetch('https://6463991f127ad0b8f88c506a.mockapi.io/items')
      .then((res) => res.json())
      .then((json) => setItems(json));
    setLoadind(false)
    axios.get('http://localhost:3001/posts')
      .then((res) => setFavorite(res.data));
    axios.get('http://localhost:3001/comments')
      .then((res) => setCartItems(res.data));
  }, []);

  const cardState = (obj) => {
    console.log(obj.cardState)
  };

  const getCardState = () => {
    return getCardState; //
  }

  const addCart = async (obj) => {
    try {
      if (cartItems.find((addObj) => Number(addObj.id) === Number(obj.id))) {
        removeCart(obj.id);
      } else {
        await axios.post('http://localhost:3001/comments', obj);
        setCartItems((prey) => [...prey, obj])
      }
    } catch (error) {
        alert('Не удалось добавить в корзину.')
      }
  };
  
  const removeCart = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/comments/${id}`);
      setCartItems((prey) => prey.filter(item => item.id !== id));
    } catch (error) {
        alert('Не удалось удалить товар из корзины.')
    }
  };

  const OnAddFavorite  = async (obj) => {
    try {
      if (favorite.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`http://localhost:3001/posts/${obj.id}`);
        setFavorite((prey => prey.filter(item => item.id !== obj.id)))
      } else {
        await axios.post('http://localhost:3001/posts', obj);
        setFavorite((prey) => [...prey, obj]);
      }
    } catch (error) {
        alert('Не удалось добивить товар в избранное.')
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  
  return (
    <div className="wrapper">
      <AppHeader
        setCartOpen = {() => setCartOpen(true)}
      />
      <Routes>
        <Route
          path='/'
          element={
            <Content
              items={items}
              addCart={addCart}
              searchInput={onChangeSearchInput}
              searchValue={searchValue}
              setFavorite={OnAddFavorite}
              favorite={favorite}
              cartOpened={cartOpened}
              cardState={cardState}
              getCardState={getCardState}
              cartItems={cartItems}
              loading={loading}
            />
          }
        />
        <Route
          path='/favorites'
          element={
            <Favorites
              favorite={favorite}
              setFavorite={OnAddFavorite}
              cardState={cardState}
              setCartItems={setCartItems}
              addToCart={addCart}
              favoriteState={(obj) => cardState(obj)}
            />
          }
        />
        <Route
          path='/purchases'
          element={
            <Purchases/>
          }
        />  
      </Routes>
      {cartOpened && (
        <ShoppingCart
          onClose={() => setCartOpen(false)}
          cartItems={cartItems}
          onRemove={removeCart}
        />
      )}
    </div>
  );
}

export default App;