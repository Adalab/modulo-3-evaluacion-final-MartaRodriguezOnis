import FilterByName from './FilterByName';

const Filters = (props) => {
  return (
    <>
      <FilterByName
        filterName={props.filterName}
        handleFilterByName={props.handleFilterByName}
      />
    </>
  );
};
export default Filters;
