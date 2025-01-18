import PropTypes from 'prop-types'
import Title from './title';
import Drink from './drink'

const Drinks = ({ selectedDrinks: {title, drinks, accessories} }) => {
  return (
    <div>
      <Title title={title}/>
      {drinks.map((drink, index) => (
        <Drink key={index} drink={drink.name} price={drink.price} misc={drink.ingredients}/>
      ))}

      {accessories.length > 0 && (
        <>
          <Title title="Dodatki"/>
          {accessories.map((drink, index) => (
            <Drink key={index} drink={drink.name} price={drink.price} misc={drink.ingredients}/>
          ))}
        </>
      )}
    </div>
  );
};

export default Drinks;

Drinks.propTypes = {
  selectedDrinks: PropTypes.shape({
    title: PropTypes.string,
    drinks: PropTypes.any,
    accessories: PropTypes.any
  })
}
