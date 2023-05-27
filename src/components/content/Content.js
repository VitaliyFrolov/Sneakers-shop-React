import React from "react";
import Card from "../card/Card";
import './content.modules.scss';
import { useSelector } from "react-redux";

const Content = (props) => {
  const { items, addCart, searchInput, searchValue, setFavorite, cartOpened, cartItems} = props;
  const preparedKeys = useSelector((state) => state.cart.preparedKeys);

  const addToCart = (obj) => {
    addCart(obj)
  };

  const addToFavorite = (obj) => {
    setFavorite(obj)
  };
  
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
        {items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
          <Card
            title={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
            key={item.id}
            id={item.id}
            onFavorite={(obj) => addToFavorite(obj)}
            onAdd={(obj) => addToCart(obj)}
            added={cartItems.some(obj => obj.id === item.id)}
            active={preparedKeys.includes(item.id)}
          />
        ))}
      </div>
    </section>
  )
}

export default Content;

// export default class Content extends Component {
//     render() {
//       const { items, addCart, searchInput, searchValue, setFavorite, cartOpened, cartItems} = this.props;
      
//       const addToCart = (obj) => {
//         addCart(obj)
//       };

//       const addToFavorite = (obj) => {
//         setFavorite(obj)
//       };
    
//         return (
//             <section className={cartOpened ? 'content content--fix' : 'content'}>
//             <div className="content__header">
//               <h1 className="content__title">{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h1>
//                 <form className="content__form">
//                   <button className="content__btn">
//                     <img className="content__img" src="/img/svg/search.svg" alt="Начать поиск" width={14.25} height={14.25}/>
//                   </button>
//                   <input onChange={searchInput} value={searchValue} className="content__search" type='text' placeholder='Поиск...'/>
//                 </form>
//             </div>
//             <div className="content__card-wrapper">
//               {items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
//                 <Card
//                   title={item.name}
//                   price={item.price}
//                   imageUrl={item.imageUrl}
//                   key={item.id}
//                   id={item.id}
//                   onFavorite={(obj) => addToFavorite(obj)}
//                   onAdd={(obj) => addToCart(obj)}
//                   added={cartItems.some(obj => obj.id === item.id)}
//                 />
//               ))}
//             </div>
//           </section>
//         )
//     }
// }
