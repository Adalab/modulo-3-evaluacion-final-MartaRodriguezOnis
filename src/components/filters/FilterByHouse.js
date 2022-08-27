const FilterByHouse = (props) => {
  const handleChange = (ev) => {
    props.handleFilterByHouse(ev.currentTarget.value);
  };
  return (
    <>
      <label className="form__house-label" htmlFor="house">
        Selecciona la casa:
      </label>
      <select
        className="form__house-select"
        name="house"
        id="house"
        value={props.filterHouse}
        onChange={handleChange}
        required
      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </>
  );
};
export default FilterByHouse;
