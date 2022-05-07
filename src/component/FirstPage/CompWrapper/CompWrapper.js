import React, { useEffect, useState } from 'react'
import Comp from '../Comp/Comp'
import "./CompWrapper.css"

function CompWrapper() {

    const [items, setItems] = useState([])

    useEffect(() => {
      fetch('https://626fe0b1c508beec488b64db.mockapi.io/items')
      .then(res => {
          return res.json();
      }).then(json => {
          setItems(json)
      })
  }, [])
  
  

  return (
    <div className='wrapper-items_ha'>
      <div className='wrapper-items'>
        {items.map((val) => <Comp 
          title={val.title} 
          price={val.price} 
          discr={val.discr}
          image={val.image}
        />)}
      </div>
    </div>
  )
}

export default CompWrapper