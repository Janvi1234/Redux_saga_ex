
import Switches from './component/Switches';
import Buttons from './component/Buttons';
import { useSelector } from 'react-redux';

function App() {
  const color=useSelector(info=> info.color)
  return (
    <div style={{backgroundColor:`${color}`, height:'100vh'}}>
      <Buttons/>
      <Switches/>
     </div>
  );
}

export default App;
