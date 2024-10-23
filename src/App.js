import { Stack } from 'react-bootstrap';
import './App.css';
import VideogameSlider from './components/VideogameSlider';

function App() {
  return (
    <Stack direction='horizontal' gap={2} >
      <VideogameSlider/>
    </Stack>
  );
}

export default App;
