import React, {Component} from "react";
import './shoppingCart.modules.scss'

// const ShoppingCart = (props) => {
//         const {onClose, onRemove, cartItems} = props;
//         return (
//             <section className='shoppingcart'>
//                 <div className="shoppingcart__content">
//                     <div className="shoppingcart__header">
//                         <h2 className="shoppingcart__title">Корзина</h2>
//                         <button className="shoppingcart__cart-btn" onClick={onClose}>
//                             <img src="/img/svg/cart-btn-del.svg" alt="delete"/>
//                         </button>
//                     </div>

//                     {
//                         cartItems.length > 0 ? 
//                             <>
//                                 {cartItems.map((obj, index) => (
//                                     <div className="shoppingcart__cart-item" key={index}> 
//                                         <img className="shoppingcart__cart-icn" src={obj.imageUrl} alt="Nike Air Max 270" width={70} height={70}/>
//                                         <div className="shoppingcart__cart-text-wrapper">
//                                             <p className="shoppingcart__cart-text">{obj.title}</p>
//                                             <b className="shoppingcart__cart-price">{obj.price}руб.</b>
//                                         </div>
//                                         <button className="shoppingcart__cart-btn">
//                                             <img onClick={() => onRemove(obj.id)} src="/img/svg/cart-btn-del.svg" alt="delete"/>
//                                         </button>
//                                     </div>
//                         ))}
//                             </> :
//                                 <div className="shoppingcart__cart-wrapper">
//                                 <div className="empty-cart__wrapper">
//                                     <div className="empty-cart">
//                                         <img className="empty-cart__icn" src="/img/emptyCart.jpg" alt="empty cart" width={120} height={120}/>
//                                         <h3 className="empty-cart__title">Корзина пустая</h3>
//                                         <p className="empty-cart__text">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
//                                         <button onClick={onClose} className="empty-cart__btn">
//                                             <img src="/img/svg/btnEmptyCart.svg" width={14} height={12} alt="close"/> 
//                                             <p className="empty-cart__btn-text">Вернуться назад</p>
//                                         </button>
//                                     </div>
//                                 </div>
//                                 </div>
//                     }
//                 </div>
//             </section>
//         )
// };

// export default ShoppingCart;


export default class ShoppingCart extends Component {
    render() {
        const {onClose, onRemove, cartItems} = this.props
        return (
            <section className='shoppingcart'>
                <div className="shoppingcart__content">
                    <div className="shoppingcart__header">
                        <h2 className="shoppingcart__title">Корзина</h2>
                        <button className="shoppingcart__cart-btn" onClick={onClose}>
                            <img src="/img/svg/cart-btn-del.svg" alt="delete"/>
                        </button>
                    </div>

                    {
                        cartItems.length > 0 ? 
                            <>
                                {cartItems.map((obj, index) => (
                                    <div className="shoppingcart__cart-item" key={index}> 
                                        <img className="shoppingcart__cart-icn" src={obj.imageUrl} alt="Nike Air Max 270" width={70} height={70}/>
                                        <div className="shoppingcart__cart-text-wrapper">
                                            <p className="shoppingcart__cart-text">{obj.title}</p>
                                            <b className="shoppingcart__cart-price">{obj.price}руб.</b>
                                        </div>
                                        <button className="shoppingcart__cart-btn">
                                            <img onClick={() => onRemove(obj.id)} src="/img/svg/cart-btn-del.svg" alt="delete"/>
                                        </button>
                                    </div>
                        ))}
                            </> :
                                <div className="shoppingcart__cart-wrapper">
                                <div className="empty-cart__wrapper">
                                    <div className="empty-cart">
                                        <img className="empty-cart__icn" src="/img/emptyCart.jpg" alt="empty cart" width={120} height={120}/>
                                        <h3 className="empty-cart__title">Корзина пустая</h3>
                                        <p className="empty-cart__text">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                                        <button onClick={onClose} className="empty-cart__btn">
                                            <img src="/img/svg/btnEmptyCart.svg" width={14} height={12} alt="close"/> 
                                            <p className="empty-cart__btn-text">Вернуться назад</p>
                                        </button>
                                    </div>
                                </div>
                                </div>
                    }
                </div>
            </section>
        )
    }
}