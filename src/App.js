import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import './index.css';

function App() {
  return (
    <div className="App">
      <div className="flex flex-col md:flex-row md:justify-center items-center gap-4 md:items-start mt-10">
        <Quotes />
        <Calculator />
      </div>
    </div>
  );
}

export default App;
