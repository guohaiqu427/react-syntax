import Pet from "./components/pet";

function App() {
  return (
    <div className="App">
      <Pet name="joe" type="white" animal="dog" />
      <Pet name="doe" type="black" animal="cat" />
      <Pet name="yoy" type="grey" animal="mouse" />
      <Pet name="li" type="yellow" animal="gg" />
    </div>
  );
}

export default App;
