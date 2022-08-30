import PropTypes from 'prop-types';
const ResetButton = (props) => {
  const handleReset = (ev) => {
    ev.preventDefault();
    props.handleFilterByName('');
    props.handleFilterByHouse('Gryffindor');
    props.handleDetailURL('');
    props.handleFilterByGender('All');
  };
  return (
    <button className="form__reset_btn" onClick={handleReset}>
      AVADA KEDAVRA!
    </button>
  );
};

ResetButton.propTypes = {
  handleFilterByName: PropTypes.func,
  handleFilterByHouse: PropTypes.func,
  handleFilterByGender: PropTypes.func,
};
export default ResetButton;
