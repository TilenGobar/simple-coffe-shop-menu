import PropTypes from 'prop-types'

const Title = ({ title, sup }) => {
  return (
    <div>
      <h1 className="green">{title}</h1>
      <p className="green sup">{sup}</p>
    </div>
  );
};

export default Title;

Title.propTypes = {
  title: PropTypes.string,
  sup: PropTypes.string
};
