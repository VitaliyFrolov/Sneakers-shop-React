import React, { useState } from "react"
import './card.modules.scss';
import ContentLoader from "react-content-loader";

const Card = (props) => {
  const {title, price, imageUrl, id, onAdd, onFavorite, stateCard, setStateCard, added, favorit, loadind} = props;
  const [cardState, setCardState] = useState({
    active: false,
    favorits: false
  });

    const handleClick = (count) => {
      if (count === 'active') {
        onAdd({title, price, imageUrl, id});
        stateCard({cardState});
        setStateCard({setCardState})
        setCardState({
          active: true,
        });

        if (cardState.active === true) {
          setCardState({
            active: false,
          });
        }

        // if((obj) => favoriteState(obj.favorite) === false) {
        //   setCardState({
        //     active: false,
        //   });
        // } else {
        //   setCardState({
        //     active: true,
        //   });
        // }
      } 

      if (count === 'favorits') {
        onFavorite({title, price, imageUrl, id});
        stateCard({cardState});
        setCardState({
          favorits: true,
        });

        if (cardState.favorits === true) {
          setCardState({
            favorits: true,
          });
        }

        // if((obj) => favoriteState(obj.favorite) === true) {
        //   setCardState({
        //     favorits: true,
        //   });
        // } else {
        //   setCardState({
        //     favorits: false,
        //   });
        // }
      }
    }

    return (
      <div className="card">
        {
          loadind ? <ContentLoader
          width={180}
          height={240}
          viewBox="0 0 450 400"
          backgroundColor="#f0f0f0"
          foregroundColor="#dedede"
          {...props}
        >
          <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
          <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
          <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
        </ContentLoader> :
          <>
            <button className={favorit ? 'card__btn card__btn-like--active' : 'card__btn card__btn-like'} onClick={() => handleClick('favorits')}>
              <img src={favorit ? '/img/svg/Like--active.svg' : '/img/svg/Like.svg'} alt="add" width={11} height={11}/>
            </button>
            <img className="card__image" src={imageUrl} alt="sneakers" width={133} height={112} />
            <p className="card__text">{title}</p>
            <div className="card__bottom">
              <div className="card__price-container">
                <p className="card__price-text">Цена:</p>
                <b className="card__price-numb">{price}руб.</b>
              </div>
              <button className={added ? 'card__btn--active' : 'card__btn'} onClick={() => handleClick('active')}>
                <img src={added ? './img/svg/card-button--active.svg' : './img/svg/cardButton.svg'} alt="add" width={11} height={11}/>
              </button>
            </div>          
          </>
        }
      </div> 
    )
};

export default Card;