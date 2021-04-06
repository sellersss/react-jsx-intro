const Person = (props) => {
  let voteMsg = props.age >= 18 ? "Please go vote!" : "You must be 18.";
  let hobbies = props.hobbies.map((h) => <li>{h}</li>);

  return (
    <div>
      <p>Learn some information about this person:</p>
      <ul>
        <li>Name: {props.name}</li>
        <li>Age: {props.age}</li>
      </ul>
      <p>Hobbies:</p>
      <ul>{hobbies}</ul>
      <h3>{voteMsg}</h3>
    </div>
  );
};
