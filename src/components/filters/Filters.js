import FilterByHouse from './FilterByHouse';
import FilterByName from './FilterByName';
import FilterByGender from './FilterByGender';
import ResetButton from '../ResetButton';
import '../../styles/Filters.scss';
import PropTypes from 'prop-types';

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <FilterByName
        filterName={props.filterName}
        handleFilterByName={props.handleFilterByName}
      />
      <FilterByHouse
        filterHouse={props.filterHouse}
        handleFilterByHouse={props.handleFilterByHouse}
      />
      <FilterByGender
        filterGender={props.filterGender}
        handleFilterByGender={props.handleFilterByGender}
      />
      <ResetButton
        handleFilterByName={props.handleFilterByName}
        handleFilterByHouse={props.handleFilterByHouse}
        handleFilterByGender={props.handleFilterByGender}
        handleDetailURL={props.handleDetailURL}
      />
    </form>
  );
};
Filters.propTypes = {
  handleFilterByName: PropTypes.func,
  filterName: PropTypes.string.isRequired,
  handleFilterByHouse: PropTypes.func,
  filterHouse: PropTypes.string.isRequired,
  handleFilterByGender: PropTypes.func,
  filterGender: PropTypes.string.isRequired,
};
export default Filters;
