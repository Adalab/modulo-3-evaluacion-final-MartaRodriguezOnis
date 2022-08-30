import PropTypes from 'prop-types';

const FilterByGender = (props) => {
  const handleChange = (ev) => {
    props.handleFilterByGender(ev.target.value);
  };
  return (
    <>
      <label className="form__gender-label" htmlFor="gender">
        O también filtra por género:
      </label>
      <select
        className="form__gender-select"
        name="gender"
        id="gender"
        value={props.filterGender}
        onChange={handleChange}
      >
        <option value="All">Todos</option>
        <option value="female">Mujer</option>
        <option value="male">Hombre </option>
      </select>
    </>
  );
};
FilterByGender.defaultProps = {
  filterGender: 'All',
};

FilterByGender.propTypes = {
  handleFilterByGender: PropTypes.func,
  filterGender: PropTypes.string.isRequired,
};
export default FilterByGender;
