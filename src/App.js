import './App.css';
import NameField from './NameField'
import CardComponent from './CardComponent';

function App() {
  return (
    <div className="App">
      <CardComponent>
        <NameField name="Joseph Gonzales" />
      </CardComponent>
    </div>
  );
}

export default App;
