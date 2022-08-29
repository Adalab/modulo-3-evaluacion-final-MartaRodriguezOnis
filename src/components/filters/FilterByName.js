const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilterByName(ev.currentTarget.value);
  };

  return (
    <>
      <label htmlFor="name" className="form__name-label">
        Busca por nombre o apellido:
      </label>
      <input
        type="text"
        className="form__name-input"
        autoComplete="off"
        name="name"
        id="name"
        value={props.filterName}
        onChange={handleChange}
        placeholder=" Ej: Lucius Malfoy"
      ></input>
    </>
  );
};
export default FilterByName;
