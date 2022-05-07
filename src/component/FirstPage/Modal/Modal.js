import React from 'react'
import "./Modal.css"
import { useSelector, useDispatch } from 'react-redux'
import { deleteFromCart } from '../../../redux/cart/reducer'


function Modal({setValue}) {

    const items = useSelector(state => state.cart.itemsInCart)
    const dispatch = useDispatch()
    const totalPrice = items.reduce((a, b) => a + b.price, 0)

  return (
    <div className='Modal'>
        <div className='modalContainer'>
                <div className='modalInfo'>
                    <div>
                        <p className='infoInfo'>{items.length} товар на {totalPrice}  ₽</p>
                    </div>
                    <button onClick={() => setValue(false)} className='buttonClose'>x</button>
                </div>
                <div className='modalCard'>
                    {items.map((obj) => (
                        <div key={obj.id}>
                            <div className='cardWrapper'>
                                <img className='cardImg' src={obj.image} alt="" />
                                <div className='cardWrapperInfo'>
                                    <p className='cardWrapperInfoTitle'>{obj.title}</p>
                                    <p className='cardWrapperInfoDiscr'>{obj.discr}</p>
                                </div>
                            </div>
                            <div className='cardLine'></div>
                            <div className='CardCard'>
                                <div className='cardPrice'>{obj.price} ₽</div>
                                <div>
                                    <button onClick={() => dispatch(deleteFromCart(obj.id))} className='CardButtonItem'>Удалить</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='modalOrder'>
                    <div className='orderInfo'>
                        <p className='orderOrder'>{items.length} товара</p>
                        <span className='orderPrice'>{totalPrice} ₽</span>
                    </div>
                    <div className='modalSum'>
                        <p className='sumOrder'>Сумма заказа</p>
                        <span className='sumOrder'>{totalPrice} ₽</span>
                    </div>
                    <button className='modalButton'>К оформлению заказа</button>
                </div>
           </div>
    </div>
  )
}

export default Modal