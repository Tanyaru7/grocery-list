import './App.css';
import { GroceryList } from './GroceryList';
import image from './photoone.jpeg';
import imageTwo from './phototwo.jpeg'

function App() {
  return (
    <div className='App'>
      <img src = { image } width="200px" alt="PhotoOne"/>
      <div className="container">
      <h1>Grocery List</h1>
      </div>
      { <GroceryList /> }
      <div className="container">
      <img src = { imageTwo } width="200px" alt="PhotoTwo"/>
      </div>
    </div>
  );
}

export default App;
