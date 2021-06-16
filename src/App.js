import './styles/index.scss';
import { Button, Input } from './components';

const App = () => {
  return (
    <div className="App">
      <Button color="blue">Save</Button>
      <Input label="Tool name" placeholder="Please insert tool name" />
    </div>
  );
};

export default App;
