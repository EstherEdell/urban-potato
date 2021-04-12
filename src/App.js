import './App.css';
// import PetList from './PetList.js';

function App() {

  const handleClick = () => {
    console.log('buttons are cool')
  }

  const secondClick = () => {
    console.log('clicked another!');
  }
  return (
    <div className="App">
      <h1>Adopt Some Pets!</h1>
      <p>We have the best animals!! They're so cute!!</p>

      <p>MORE TEXT WOW SUCH TYPING</p>
      <button onClick={handleClick}>Do you like buttons?</button>
      <button onClick={secondClick}>More things to click!</button>
      {/* <PetList /> */}
    </div>
  );
}

export default App;
