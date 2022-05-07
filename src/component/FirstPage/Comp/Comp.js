import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteFromCart, pushInCart } from '../../../redux/cart/reducer'
import "./Comp.css"

function Comp(props) {

  const [value, setValue] = useState(true)

  const handleClick = () => {
    setValue(!value)
  }

  const unHandleClick = () => {
    handleClick()
    dispatch(deleteFromCart(props.id))
  }

  const functions = () => {
    dispatch(pushInCart(props))
    handleClick()
  }

  const dispatch = useDispatch()

  return (
    <div className="Item">
        <div>
            <img className="Item-image" src={props.image} alt="" />
        </div>
        <div className="discr-wrapper">
            <h3 className="title-item">{props.title}</h3>
            <p className="discr-item">{props.discr}</p>
        </div>
        <div className="item-price">
            <span className="price-item">{props.price} ₽</span>
        </div>
        { value ? <button onClick={functions} className='item-button'>В корзину</button> : <button onClick={unHandleClick} className='item-button-false'>Убрать</button> }
    </div>
  )
}

export default Comp;
