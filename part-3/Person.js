const Person = (props) => {
  const voteText = props.age >= 18 ? "Please go vote" : "You must be 18";
  return (
    <div>
      <p>Learn some information about this person - {props.name.slice(0, 6)}</p>
      <h3>{voteText}</h3>
      <h5>Hobbies</h5>
      <ul>
        {props.hobbies.map((hobby, idx) => (
          <li key={idx}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};
