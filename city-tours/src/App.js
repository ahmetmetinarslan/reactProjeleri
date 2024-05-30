import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList';

function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <TourList /> 
      </main>
    </div>
  );
}

export default App;
