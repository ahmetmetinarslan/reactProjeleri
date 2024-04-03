import './App.css';
import Lottery from './Lottery'

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="Kazandıran Sayılar" maxBalls={4} maxNum={40} />
      <Lottery title="Kazandıran Sayılar 2" maxBalls={2} maxNum={40} />
    </div> 
  );
}

export default App;
