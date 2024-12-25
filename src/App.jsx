import {useRoutes} from 'react-router-dom';
import Layout from './pages/Layout';

const App=()=>{
  const elements=useRoutes([{path:'/',element:<Layout />
  }]);
  return elements;

};
export default App; 