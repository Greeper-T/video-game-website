import { Stack } from 'react-bootstrap';
import './App.css';
import VideogameSlider from './components/VideogameSlider';
import 'bootstrap/dist/css/bootstrap.min.css'
import SortMenu from './components/SortMenu';

function App() {
  return (
    <div>
      <SortMenu/>
      <VideogameSlider/>
    </div>
    
  );
}

export default App;
