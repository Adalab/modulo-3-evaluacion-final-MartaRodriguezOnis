const FilterByGender = (props) => {
  const handleChange = (ev) => {
    props.handleFilterByGender(ev.target.value);
  };
  return (
    <>
      <label className="form__gender-label" htmlFor="gender">
        Género:
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
export default FilterByGender;
