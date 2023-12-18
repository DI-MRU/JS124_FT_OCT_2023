export default function Actor(props) {
  console.log(props.famousPeople);
  return (
    <>
      {props.famousPeople.map((person) => (
        <p className="card">
          My name is {person.firstName} {person.lastName}. I look like this:{" "}
          <img src={person.image} alt="My picture" height="64px" width="64px" />
        </p>
      ))}
    </>
  );
}
