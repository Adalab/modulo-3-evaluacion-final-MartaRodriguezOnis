const ResetButton = (props) => {
  const handleReset = () => {
    props.handleFilterByName('');
    props.handleFilterByHouse('Gryffindor');
    props.handleDetailURL('');
    props.handleFilterByGender('All');
  };
  return (
    <button className="reset_btn" onClick={handleReset}>
      Reset
    </button>
  );
};

export default ResetButton;
