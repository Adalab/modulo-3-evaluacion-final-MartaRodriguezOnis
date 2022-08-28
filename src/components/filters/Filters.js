import FilterByHouse from './FilterByHouse';
import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';

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
      <FilterBySpecies />
    </form>
  );
};
export default Filters;
