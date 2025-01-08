const PricesCoffe = ({coffe, price}) => {
  return (
    <div className="container-shop">
      <div className='div-menu'>
        <span className='first'>{coffe}</span>
        <span className='second'>{price}</span>
      </div>
  </div>
  )
}

export default PricesCoffe