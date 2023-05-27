import React, {Component} from "react"
// import { useDispatch } from "react-redux";
// import { addPreparedKey } from "../../redux/CartSlice";
import './card.modules.scss';

export default class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false,
      favorite: false
    };

    this.toggleState = this.toggleState.bind(this);
  };
  
  toggleState(stateName) {
    const {title, price, imageUrl, id, onAdd, onFavorite} = this.props;
  
    if (stateName === 'active') {
      onAdd({title, price, imageUrl, id});
    }
    
    if (stateName === 'favorite') {
      onFavorite({title, price, imageUrl, id}); 
    }
  
    this.setState(prevState => ({
      [stateName]: !prevState[stateName]
    }));
  };

  render() {
    const {title, price, imageUrl, added} = this.props;
    console.log(added)

    return (
      <div className="card">
        <button className={this.state.favorite ? 'card__btn card__btn-like--active' : 'card__btn card__btn-like'}  
                onClick={() => this.toggleState('favorite')}>
          <img src={this.state.favorite ? '/img/svg/Like--active.svg' : '/img/svg/Like.svg'} alt="add" width={11} height={11}/>
        </button>
        <img className="card__image" src={imageUrl} alt="sneakers" width={133} height={112} />
        <p className="card__text">{title}</p>
        <div className="card__bottom">
          <div className="card__price-container">
            <p className="card__price-text">Цена:</p>
            <b className="card__price-numb">{price}руб.</b>
          </div>
          <button className={this.state.active ? 'card__btn--active' : 'card__btn'} onClick={() => this.toggleState('active')}>
            <img src='./img/svg/card-button--active.svg' alt="add" width={11} height={11}/>
          </button>
        </div>
      </div> 
    )
  }
};



// const Card = (props) => {
//   const { title, price, imageUrl, id, onAdd, active, onFavorite } = props;
//   const dispatchCart = useDispatch(state => state.cart.preparedKeys);
//   const dispatch = useDispatch();
  

//   return (
//     <div className="card">
//       <button
//         className='card__btn card__btn-like'
//         onClick={() => console.log('соси хуй')}
//       >
//         <img
//           src='/img/svg/Like.svg'
//           alt="add"
//           width={11}
//           height={11}
//         />
//       </button>
//       <img
//         className="card__image"
//         src={imageUrl}
//         alt="sneakers"
//         width={133}
//         height={112}
//       />
//       <p className="card__text">{title}</p>
//       <div className="card__bottom">
//         <div className="card__price-container">
//           <p className="card__price-text">Цена:</p>
//           <b className="card__price-numb">{price}руб.</b>
//         </div>
//         <button
//           className={active ? 'card__btn--active' : 'card__btn'}
//           onClick={() => dispatch()}
//         >
//           <img
//             src="./img/svg/card-button--active.svg"
//             alt="add"
//             width={11}
//             height={11}
//           />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Card;