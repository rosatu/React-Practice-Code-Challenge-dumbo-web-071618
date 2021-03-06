import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate"
           onClick={props.handleClick}>
        {
          props.checkIfEaten(props.sushi.id)
          &&
          <img data-price={props.sushi.price} data-id={props.sushi.id} src={props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
