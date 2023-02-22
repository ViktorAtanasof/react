import './App.css';
import Info from './components/Info';
import LearnMore from './components/LearnMore';
import Logo from './components/Logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Info />
        <LearnMore />
      </header>
    </div>
  );
}

export default App;
