const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilterByName(ev.currentTarget.value);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="name" className="formName-label">
        Busca por personaje
      </label>
      <input
        className="formName-input"
        autoComplete="off"
        name="name"
        id="name"
        value={props.filterName}
        onChange={handleChange}
      ></input>
    </form>
  );
};
export default FilterByName;
