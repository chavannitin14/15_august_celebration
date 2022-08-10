import "./App.css";
import WavingFlag from "@garvae/react-waving-flag";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WavingFlag
          flag="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
          height={260}
          width={300}
          boxShadowColor='#FFFFFF'
          curvature = {6}
          isShadow = {false}
          fromLeft = {true}
        />
      </header>
    </div>
  );
}

export default App;
