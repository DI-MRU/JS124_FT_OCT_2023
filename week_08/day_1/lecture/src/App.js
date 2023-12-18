import logo from "./logo.svg";
import "./App.css";
import Dog from "./Dog";
import Cat from "./Cat";
import { Lion } from "./Lion";
import Actor from "./Actor";

const characters = {
  people: [
    {
      id: "1",
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
    },
    {
      id: "2",
      name: "C-3PO",
      height: "167",
      mass: "75",
      hair_color: "n/a",
    },
    {
      id: "3",
      name: "R2-D2",
      height: "96",
      mass: "32",
      hair_color: "n/a",
    },
    {
      id: "4",
      name: "Leia",
      height: "165",
      mass: "50",
      hair_color: "brunnette",
    },
  ],
};

// {} for JSX
// () for HTML

const famousPeople = [
  {
    firstName: "Pierre",
    lastName: "Jean",
    image: "",
  },
  {
    firstName: "Chandler",
    lastName: "Scott",
    image: "",
  },
  {
    firstName: "Sophia",
    lastName: "Testarossa",
    image: "",
  },
];

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Dog limbs={4} />
      <Cat limbs={3} color="brown" eyes={10} />
      <Lion />
      {characters.people.map((person) => (
        <div key={person.id}>
          <h3>Name: {person.name}</h3>
          <h4>Mass: {person.mass}</h4>
        </div>
      ))} */}
      <Actor famousPeople={famousPeople} />
    </div>
  );
}

export default App;
