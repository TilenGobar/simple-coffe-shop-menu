import PropTypes from "prop-types";

const Day = ({ day, time }) => {
  return (
    <div className="container">
      <div className="day">
        <span className="open">{day}</span>
        <span className="time">{time}</span>
      </div>
    </div>
  );
};

export default Day;

Day.propTypes = {
  day: PropTypes.string,
  time: PropTypes.string
}