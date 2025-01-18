import PropTypes from 'prop-types'

const Drink = ({drink, price, misc}) => {
  return (
    <>
     <div className="container-shop">
        <div className="container-shop-item-name">{drink}</div>
        <div className="container-shop-item-price">{price}</div>
      </div>
      <div className="other">{misc}</div> 
    </>
  )
}

export default Drink

Drink.propTypes = {
    drink: PropTypes.string,
    price: PropTypes.string,
    misc: PropTypes.string
}