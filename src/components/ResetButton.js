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

export default ResetButton;
