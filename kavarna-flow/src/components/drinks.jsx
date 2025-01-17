// eslint-disable-next-line react/prop-types
const Drinks = ({drink, price, misc}) => {
  return (
    <div>
    <div className="container-shop">
        <div className="container-shop-item-name">{drink}</div>
        <div className="container-shop-item-price">{price}</div>
    </div>
    <div className="other">{misc}</div>
    </div>
  )
}

export default Drinks