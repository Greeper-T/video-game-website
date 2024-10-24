import { Stack } from 'react-bootstrap';
import './App.css';
import VideogameSlider from './components/VideogameSlider';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Stack direction='horizontal' gap={2} >
      <VideogameSlider/>
      <VideogameSlider/>
      <VideogameSlider/>
    </Stack>
  );
}

export default App;
